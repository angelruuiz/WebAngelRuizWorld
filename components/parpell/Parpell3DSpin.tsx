"use client";

import React, { useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import { motion } from "framer-motion";

interface Parpell3DSpinProps {
  onLoaded?: () => void;
  onProgress?: (progress: number) => void;
}

export function Parpell3DSpin({ onLoaded, onProgress }: Parpell3DSpinProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
    if (!canvasRef.current || !containerRef.current) return;

    const THREE = await import("three");
    const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
    const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");

    let animationFrameId: number;
    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.4);

    // WebGL Renderer with Alpha and Antialias
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Front Warm/Rose Key Light
    const keyLight = new THREE.DirectionalLight(0xffe4e8, 3.0);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    // Secondary Burgundy Accent Light
    const fillLight = new THREE.DirectionalLight(0x9e5c6a, 2.4);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    // Top Specular Light
    const topLight = new THREE.PointLight(0xffb3c6, 3.2, 20);
    topLight.position.set(0, 5, 2);
    scene.add(topLight);

    // Back Rim Light for 3D depth separation
    const rimLight = new THREE.DirectionalLight(0xc27a8a, 2.2);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // Model Container Pivot
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Physics & Interaction State
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;
    let isInteracting = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    // GLTF + DRACO Loader (Fast 10x Compressed Loading)
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/gltf/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/logo-3d.glb",
      (gltf) => {
        const root = gltf.scene;

        // Auto-center the model geometry around (0,0,0)
        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        root.position.x = -center.x;
        root.position.y = -center.y;
        root.position.z = -center.z;

        // Balanced proportional scale with plenty of canvas headroom so it never cuts off
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 2.45 / maxDim;
          root.scale.set(scale, scale, scale);
        }

        // Apply enhanced PBR material properties
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.envMapIntensity = 1.4;
              mat.needsUpdate = true;
            }
          }
        });

        modelGroup.add(root);
        setIsLoaded(true);
        onLoaded?.();
      },
      (xhr) => {
        if (xhr.total > 0) {
          const progress = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
          onProgress?.(progress);
        }
      },
      (error) => {
        console.error("Error loading 3D logo GLB:", error);
        setIsLoaded(true);
        onLoaded?.();
      }
    );

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Oscillates gracefully left and right (never turns backwards)
      if (!isInteracting) {
        targetRotationY = Math.sin(elapsedTime * 0.9) * 0.42;
        targetRotationX = Math.cos(elapsedTime * 0.7) * 0.12;
        modelGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.09;
      } else {
        // Inertia damping during drag
        targetRotationY += dragVelocity.x;
        targetRotationX += dragVelocity.y;
        dragVelocity.x *= 0.9;
        dragVelocity.y *= 0.9;
      }

      // Hard clamp so it NEVER turns its back to the user
      targetRotationY = Math.max(-0.65, Math.min(0.65, targetRotationY));
      targetRotationX = Math.max(-0.35, Math.min(0.35, targetRotationX));

      // Smooth Spring Interpolation
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;

      modelGroup.rotation.y = currentRotationY;
      modelGroup.rotation.x = currentRotationX;

      renderer.render(scene, camera);
    };
    animate();

    // Mouse & Drag Event Handlers
    const onMouseDown = (e: MouseEvent) => {
      isInteracting = true;
      setIsDragging(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
      dragVelocity = { x: 0, y: 0 };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isInteracting) {
        // Subtle Hover Parallax
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = normX * 0.5;
        targetRotationX = normY * 0.25;
        return;
      }

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      dragVelocity = {
        x: deltaX * 0.007,
        y: deltaY * 0.007,
      };

      targetRotationY += dragVelocity.x;
      targetRotationX += dragVelocity.y;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isInteracting = false;
      setIsDragging(false);
    };

    // Touch Event Handlers
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isInteracting = true;
        setIsDragging(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        dragVelocity = { x: 0, y: 0 };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isInteracting || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      dragVelocity = {
        x: deltaX * 0.007,
        y: deltaY * 0.007,
      };

      targetRotationY += dragVelocity.x;
      targetRotationX += dragVelocity.y;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isInteracting = false;
      setIsDragging(false);
    };

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m: THREE.Material) => m.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
    }; // end of init

    let cleanup: (() => void) | undefined;
    init().then((cleanupFn) => {
      if (!cancelled) cleanup = cleanupFn;
      else cleanupFn?.();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center select-none -mb-2 sm:mb-2">
      {/* Ambient Pulsing Halo behind the 3D Sculpture */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 sm:w-[480px] h-96 sm:h-[480px] rounded-full bg-gradient-to-tr from-[#9E5C6A]/35 via-[#C27A8A]/25 to-purple-600/15 blur-3xl -z-10 pointer-events-none"
      />

      {/* 3D Interactive Canvas Box */}
      <div
        ref={containerRef}
        className={`relative w-56 sm:w-72 md:w-88 lg:w-96 h-56 sm:h-72 md:h-88 lg:h-96 flex items-center justify-center cursor-grab touch-pan-y ${
          isDragging ? "cursor-grabbing" : ""
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
