"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

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
    let animationFrameId: number;
    let cleanup: (() => void) | undefined;

    const init = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const width = container.clientWidth || 360;
      const height = container.clientHeight || 360;

      // 1. Scene & Camera Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0, 4.2);

      // 2. WebGL Renderer with High Performance & Alpha
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // 3. Studio Lighting Rig
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffe4e8, 3.2);
      keyLight.position.set(3.5, 4.5, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x9e5c6a, 2.6);
      fillLight.position.set(-4, -2, 3);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xc27a8a, 2.4);
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // Interactive Dynamic Point Light (follows cursor slightly)
      const dynamicPointLight = new THREE.PointLight(0xf3b0be, 3.0, 10, 1.2);
      dynamicPointLight.position.set(0, 1.5, 2.5);
      scene.add(dynamicPointLight);

      // 4. Model Group Pivot
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // 5. Build High-End 3D Luxury Parpell Emblem
      const textureLoader = new THREE.TextureLoader();
      const logoTexture = textureLoader.load(
        "/logo-parpell-transparent.png",
        () => {
          if (!cancelled) {
            setIsLoaded(true);
            onProgress?.(100);
            onLoaded?.();
          }
        },
        undefined,
        () => {
          if (!cancelled) {
            setIsLoaded(true);
            onProgress?.(100);
            onLoaded?.();
          }
        }
      );
      logoTexture.colorSpace = THREE.SRGBColorSpace;
      logoTexture.generateMipmaps = true;
      logoTexture.minFilter = THREE.LinearMipmapLinearFilter;
      logoTexture.magFilter = THREE.LinearFilter;

      // 3D Outer Beveled Chamfer Ring (Rose Gold & Dark Wine Metal)
      const ringGeometry = new THREE.TorusGeometry(1.22, 0.048, 24, 64);
      const ringMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xc27a8a,
        emissive: 0x2d0c1b,
        emissiveIntensity: 0.25,
        metalness: 0.92,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        reflectivity: 0.95,
      });
      const outerRing = new THREE.Mesh(ringGeometry, ringMaterial);
      modelGroup.add(outerRing);

      // Inner Floating Thin Accent Halo
      const innerRingGeo = new THREE.TorusGeometry(1.08, 0.016, 16, 64);
      const innerRingMat = new THREE.MeshStandardMaterial({
        color: 0xffd1dc,
        metalness: 0.95,
        roughness: 0.2,
      });
      const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
      modelGroup.add(innerRing);

      // Central Floating 3D Coin/Pill Sculpture with Dual-Faced Emblem
      const cylinderGeometry = new THREE.CylinderGeometry(1.12, 1.12, 0.14, 64, 1, false);

      // Front & Back Decal Materials with Parpell Logo
      const logoFaceMaterial = new THREE.MeshPhysicalMaterial({
        map: logoTexture,
        transparent: true,
        alphaTest: 0.02,
        metalness: 0.75,
        roughness: 0.18,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        reflectivity: 0.9,
        side: THREE.FrontSide,
        depthWrite: true,
      });

      // Side Chamfer Metal Edge (Deep Obsidian Velvet Burgundy)
      const edgeMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x220718,
        emissive: 0x14030e,
        metalness: 0.88,
        roughness: 0.22,
        clearcoat: 0.8,
        reflectivity: 0.8,
      });

      // Back Face Material
      const backFaceMaterial = logoFaceMaterial.clone();

      const materials = [edgeMaterial, logoFaceMaterial, backFaceMaterial];
      const coinMesh = new THREE.Mesh(cylinderGeometry, materials);
      coinMesh.rotation.x = Math.PI / 2;
      modelGroup.add(coinMesh);

      // Double-sided Floating 3D Logo Plate for extreme sharpness
      const planeGeo = new THREE.PlaneGeometry(1.68, 1.68);
      const frontPlateMat = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
      });
      const frontPlate = new THREE.Mesh(planeGeo, frontPlateMat);
      frontPlate.position.z = 0.082;
      modelGroup.add(frontPlate);

      const backPlate = new THREE.Mesh(planeGeo, frontPlateMat.clone());
      backPlate.position.z = -0.082;
      backPlate.rotation.y = Math.PI;
      modelGroup.add(backPlate);

      // 6. Physics, Motion & Inertia State
      let targetRotationY = 0;
      let targetRotationX = 0;
      let currentRotationY = 0;
      let currentRotationX = 0;
      let isInteracting = false;
      let previousMousePosition = { x: 0, y: 0 };
      let dragVelocity = { x: 0, y: 0 };
      let mouseNormalized = { x: 0, y: 0 };

      // 7. Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        if (cancelled) return;
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        if (!isInteracting) {
          // Autonomous continuous floating & gentle 3D sway
          const autoSpin = elapsedTime * 0.45;
          const tiltX = Math.cos(elapsedTime * 0.9) * 0.12 + mouseNormalized.y * 0.28;
          const tiltY = Math.sin(autoSpin) * 0.35 + mouseNormalized.x * 0.45;

          targetRotationY = tiltY;
          targetRotationX = tiltX;

          // Harmonic floating breathing on Y axis
          modelGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.08;

          // Inner ring subtle counter-rotation for depth
          innerRing.rotation.z = -elapsedTime * 0.3;
          outerRing.rotation.z = elapsedTime * 0.15;
        } else {
          // Drag velocity with inertia damping
          targetRotationY += dragVelocity.x;
          targetRotationX += dragVelocity.y;
          dragVelocity.x *= 0.92;
          dragVelocity.y *= 0.92;
        }

        // Smooth physics lerping
        currentRotationY += (targetRotationY - currentRotationY) * 0.08;
        currentRotationX += (targetRotationX - currentRotationX) * 0.08;

        modelGroup.rotation.y = currentRotationY;
        modelGroup.rotation.x = currentRotationX;

        // Dynamic light follows tilt for gleaming specular highlights
        dynamicPointLight.position.x = Math.sin(currentRotationY) * 2.2;
        dynamicPointLight.position.y = 1.4 + Math.sin(elapsedTime * 2.0) * 0.4;

        renderer.render(scene, camera);
      };
      animate();

      // 8. Mouse & Touch Interaction Handlers
      const onPointerDown = (clientX: number, clientY: number) => {
        isInteracting = true;
        setIsDragging(true);
        previousMousePosition = { x: clientX, y: clientY };
        dragVelocity = { x: 0, y: 0 };
      };

      const onPointerMove = (clientX: number, clientY: number) => {
        const rect = container.getBoundingClientRect();
        mouseNormalized = {
          x: ((clientX - rect.left) / rect.width - 0.5) * 2,
          y: -((clientY - rect.top) / rect.height - 0.5) * 2,
        };

        if (!isInteracting) return;

        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        dragVelocity = {
          x: deltaX * 0.008,
          y: deltaY * 0.008,
        };

        targetRotationY += dragVelocity.x;
        targetRotationX += dragVelocity.y;
        previousMousePosition = { x: clientX, y: clientY };
      };

      const onPointerUp = () => {
        isInteracting = false;
        setIsDragging(false);
      };

      // Mouse events
      const handleMouseDown = (e: MouseEvent) => {
        onPointerDown(e.clientX, e.clientY);
      };
      const handleMouseMove = (e: MouseEvent) => {
        onPointerMove(e.clientX, e.clientY);
      };
      const handleMouseUp = () => {
        onPointerUp();
      };
      const handleMouseLeave = () => {
        onPointerUp();
        mouseNormalized = { x: 0, y: 0 };
      };

      // Touch events (Mobile support)
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      };
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };
      const handleTouchEnd = () => {
        onPointerUp();
      };

      // Resize Observer
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth || 360;
        const newHeight = container.clientHeight || 360;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);

      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseLeave);

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });

      cleanup = () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseLeave);

        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);

        // Memory cleanup
        ringGeometry.dispose();
        ringMaterial.dispose();
        innerRingGeo.dispose();
        innerRingMat.dispose();
        cylinderGeometry.dispose();
        planeGeo.dispose();
        logoFaceMaterial.dispose();
        edgeMaterial.dispose();
        backFaceMaterial.dispose();
        frontPlateMat.dispose();
        logoTexture.dispose();
        renderer.dispose();
      };
    };

    init();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [onLoaded, onProgress]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none -mb-2 sm:mb-2">
      {/* Ambient Pulsing Halo behind the 3D Sculpture */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 sm:w-[440px] h-72 sm:h-[440px] rounded-full bg-gradient-to-tr from-[#9E5C6A]/35 via-[#C27A8A]/20 to-purple-600/15 blur-3xl -z-10 pointer-events-none"
      />

      {/* 3D Interactive Canvas Box with Touch Pan Support */}
      <div
        ref={containerRef}
        className={`relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center cursor-grab touch-pan-y ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        title="Gira el logo 3D interactivo de Parpell"
      >
        <canvas ref={canvasRef} className="w-full h-full block pointer-events-auto" />
      </div>
    </div>
  );
}
