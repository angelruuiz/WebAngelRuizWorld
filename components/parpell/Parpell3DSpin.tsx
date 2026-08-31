"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as THREE from "three";

interface Parpell3DSpinProps {
  onLoaded?: () => void;
  onProgress?: (progress: number) => void;
}

export function Parpell3DSpin({ onLoaded, onProgress }: Parpell3DSpinProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useFallback, setUseFallback] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    let animationFrameId: number;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      try {
        const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
        const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");

        if (cancelled || !containerRef.current || !canvasRef.current) return;

        const isMobileScreen =
          typeof window !== "undefined" &&
          (window.innerWidth < 768 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ));

        const width = Math.max(container.clientWidth || 0, isMobileScreen ? 224 : 360);
        const height = Math.max(container.clientHeight || 0, isMobileScreen ? 224 : 360);

        // 1. Scene & Camera Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
        camera.position.set(0, 0, 4.0);

        // 2. WebGL Renderer
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(
          Math.min(
            typeof window !== "undefined" ? window.devicePixelRatio : 1,
            isMobileScreen ? 1.25 : 1.5
          )
        );
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.35;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        // 3. Studio Lighting Setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
        scene.add(ambientLight);

        // Key Light (Warm Rose)
        const keyLight = new THREE.DirectionalLight(0xffe4e8, 3.4);
        keyLight.position.set(3.5, 4.5, 5);
        scene.add(keyLight);

        // Fill Light (Deep Burgundy / Wine)
        const fillLight = new THREE.DirectionalLight(0x9e5c6a, 2.6);
        fillLight.position.set(-4, -2, 3);
        scene.add(fillLight);

        // Rim Light for 3D silhouette separation
        const rimLight = new THREE.DirectionalLight(0xc27a8a, 2.8);
        rimLight.position.set(0, 4, -4);
        scene.add(rimLight);

        // Interactive Point Light (follows mouse/touch)
        const dynamicPointLight = new THREE.PointLight(0xf3b0be, 3.2, 12, 1.2);
        dynamicPointLight.position.set(0, 1.5, 2.5);
        scene.add(dynamicPointLight);

        // 4. Model Pivot Group
        const modelGroup = new THREE.Group();
        scene.add(modelGroup);

        // 5. Load User's Exact 3D GLB Render with local DRACO decoder
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("/draco/gltf/");
        dracoLoader.preload();

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        let modelLoadFailsafe = setTimeout(() => {
          if (!cancelled) {
            console.warn("Mobile 3D GLB load exceeded timeout limit, activating high-res 2D fallback");
            setUseFallback(true);
            onProgress?.(100);
            onLoaded?.();
          }
        }, 5500);

        gltfLoader.load(
          "/logo-3d.glb",
          (gltf) => {
            clearTimeout(modelLoadFailsafe);
            if (cancelled) return;
            const root = gltf.scene;

            // Auto-center the 3D model geometry precisely around (0,0,0)
            const box = new THREE.Box3().setFromObject(root);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            root.position.x = -center.x;
            root.position.y = -center.y;
            root.position.z = -center.z;

            // Scale to fit viewport perfectly
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) {
              const scale = 2.45 / maxDim;
              root.scale.set(scale, scale, scale);
            }

            // Enhance double-sided materials and specular response
            root.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                if (mesh.material) {
                  if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((mat) => {
                      mat.side = THREE.DoubleSide;
                      if ("roughness" in mat) mat.roughness = 0.25;
                      if ("metalness" in mat) mat.metalness = 0.85;
                      mat.needsUpdate = true;
                    });
                  } else {
                    mesh.material.side = THREE.DoubleSide;
                    if ("roughness" in mesh.material) mesh.material.roughness = 0.25;
                    if ("metalness" in mesh.material) mesh.material.metalness = 0.85;
                    mesh.material.needsUpdate = true;
                  }
                }
              }
            });

            modelGroup.add(root);
            onProgress?.(100);
            onLoaded?.();
          },
          (xhr) => {
            if (xhr.total > 0) {
              const progress = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
              onProgress?.(progress);
            }
          },
          (error) => {
            clearTimeout(modelLoadFailsafe);
            console.warn("Could not load 3D GLB model, using 2D fallback:", error);
            setUseFallback(true);
            onProgress?.(100);
            onLoaded?.();
          }
        );

        // 6. Physics, Motion & Inertia State
        let targetRotationY = 0;
        let targetRotationX = 0;
        let currentRotationY = 0;
        let currentRotationX = 0;
        let isInteracting = false;
        let previousMousePosition = { x: 0, y: 0 };
        let dragVelocity = { x: 0, y: 0 };
        let mouseNormalized = { x: 0, y: 0 };

        // Visibility tracking — pause RAF when off-screen or tab hidden
        let isOnScreen = true;
        let isTabVisible = true;

        const visObserver = new IntersectionObserver(
          ([entry]) => {
            const wasOnScreen = isOnScreen;
            isOnScreen = entry.isIntersecting;
            if (isOnScreen && !wasOnScreen && !cancelled) {
              clock.getDelta(); // consume stale delta
              cancelAnimationFrame(animationFrameId);
              animate();
            }
          },
          { threshold: 0.0, rootMargin: "200px" }
        );
        visObserver.observe(container);

        const handleVisibility = () => {
          const wasTabVisible = isTabVisible;
          isTabVisible = document.visibilityState === "visible";
          if (isTabVisible && !wasTabVisible && isOnScreen && !cancelled) {
            clock.getDelta();
            cancelAnimationFrame(animationFrameId);
            animate();
          }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        // 7. Animation Loop — only runs when visible
        const clock = new THREE.Clock();

        const animate = () => {
          if (cancelled || !isOnScreen || !isTabVisible) return;
          animationFrameId = requestAnimationFrame(animate);

          const elapsedTime = clock.getElapsedTime();

          if (!isInteracting) {
            // Gentle continuous floating & sway with strictly clamped angles
            const autoSpin = elapsedTime * 0.45;
            const tiltX = Math.cos(elapsedTime * 0.85) * 0.12 + Math.max(-0.25, Math.min(0.25, mouseNormalized.y * 0.22));
            const tiltY = Math.sin(autoSpin) * 0.38 + Math.max(-0.35, Math.min(0.35, mouseNormalized.x * 0.35));

            targetRotationY = Math.max(-0.65, Math.min(0.65, tiltY));
            targetRotationX = Math.max(-0.35, Math.min(0.35, tiltX));

            // Harmonic floating breathing on Y axis
            modelGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

            // Smooth decay of mouseNormalized when idle
            mouseNormalized.x *= 0.95;
            mouseNormalized.y *= 0.95;
          } else {
            // Drag velocity with inertia damping
            targetRotationY += dragVelocity.x;
            targetRotationX += dragVelocity.y;
            dragVelocity.x *= 0.92;
            dragVelocity.y *= 0.92;

            targetRotationY = Math.max(-1.8, Math.min(1.8, targetRotationY));
            targetRotationX = Math.max(-0.6, Math.min(0.6, targetRotationX));
          }

          // Smooth physics lerping
          currentRotationY += (targetRotationY - currentRotationY) * 0.08;
          currentRotationX += (targetRotationX - currentRotationX) * 0.08;

          modelGroup.rotation.y = currentRotationY;
          modelGroup.rotation.x = currentRotationX;

          // Dynamic light follows tilt for gleaming highlights
          dynamicPointLight.position.x = Math.sin(currentRotationY) * 2.2;
          dynamicPointLight.position.y = 1.4 + Math.sin(elapsedTime * 2.0) * 0.4;

          renderer.render(scene, camera);
        };
        animate();

        // 8. Interaction Handlers (Mouse & Touch on Container Only)
        const onPointerDown = (clientX: number, clientY: number) => {
          isInteracting = true;
          container.style.cursor = "grabbing";
          previousMousePosition = { x: clientX, y: clientY };
          dragVelocity = { x: 0, y: 0 };
        };

        const onPointerMove = (clientX: number, clientY: number, isTouchEvent = false) => {
          if (!isOnScreen) return;

          const rect = container.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            const rawX = ((clientX - rect.left) / (rect.width || 1) - 0.5) * 2;
            const rawY = -((clientY - rect.top) / (rect.height || 1) - 0.5) * 2;
            mouseNormalized = {
              x: Math.max(-1, Math.min(1, rawX)),
              y: Math.max(-1, Math.min(1, rawY)),
            };
          }

          if (!isInteracting) return;

          const deltaX = clientX - previousMousePosition.x;
          const deltaY = clientY - previousMousePosition.y;

          // Mobile touch: calibrate sensitivity and dampen vertical tilt to preserve natural page scroll
          const sensX = isTouchEvent ? 0.0045 : 0.008;
          const sensY = isTouchEvent ? 0.002 : 0.008;

          dragVelocity = {
            x: deltaX * sensX,
            y: deltaY * sensY,
          };

          targetRotationY += dragVelocity.x;
          targetRotationX += dragVelocity.y;
          previousMousePosition = { x: clientX, y: clientY };
        };

        const onPointerUp = () => {
          isInteracting = false;
          container.style.cursor = "grab";
        };

        const handleMouseDown = (e: MouseEvent) => {
          onPointerDown(e.clientX, e.clientY);
        };
        const handleMouseMove = (e: MouseEvent) => {
          onPointerMove(e.clientX, e.clientY, false);
        };
        const handleMouseUp = () => {
          onPointerUp();
        };
        const handleMouseLeave = () => {
          onPointerUp();
          mouseNormalized = { x: 0, y: 0 };
        };

        const handleTouchStart = (e: TouchEvent) => {
          if (e.touches.length > 0) {
            onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
          }
        };
        const handleTouchMove = (e: TouchEvent) => {
          if (e.touches.length > 0 && isInteracting) {
            onPointerMove(e.touches[0].clientX, e.touches[0].clientY, true);
          }
        };
        const handleTouchEnd = () => {
          onPointerUp();
        };

        const handleResize = () => {
          if (!container || !renderer || !camera) return;
          const isMobile =
            typeof window !== "undefined" &&
            (window.innerWidth < 768 ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ));
          const newWidth = Math.max(container.clientWidth || 0, isMobile ? 224 : 360);
          const newHeight = Math.max(container.clientHeight || 0, isMobile ? 224 : 360);
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        };

        const handleContextLost = (e: Event) => {
          e.preventDefault();
          cancelAnimationFrame(animationFrameId);
          setUseFallback(true);
          onProgress?.(100);
          onLoaded?.();
        };

        canvas.addEventListener("webglcontextlost", handleContextLost, { passive: false });
        window.addEventListener("resize", handleResize, { passive: true });

        container.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mouseleave", handleMouseLeave);

        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchmove", handleTouchMove, { passive: true });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });

        cleanup = () => {
          cancelAnimationFrame(animationFrameId);
          visObserver.disconnect();
          document.removeEventListener("visibilitychange", handleVisibility);
          canvas.removeEventListener("webglcontextlost", handleContextLost);
          window.removeEventListener("resize", handleResize);
          container.removeEventListener("mousedown", handleMouseDown);
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseup", handleMouseUp);
          container.removeEventListener("mouseleave", handleMouseLeave);

          container.removeEventListener("touchstart", handleTouchStart);
          container.removeEventListener("touchmove", handleTouchMove);
          container.removeEventListener("touchend", handleTouchEnd);

          dracoLoader.dispose();
          scene.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
              const mesh = obj as THREE.Mesh;
              mesh.geometry?.dispose();
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((m) => m.dispose());
              } else if (mesh.material) {
                mesh.material.dispose();
              }
            }
          });
          renderer.dispose();
        };

        return cleanup;
      } catch (err) {
        console.warn("WebGL initialization failed, falling back to 2D logo:", err);
        setUseFallback(true);
        onLoaded?.();
        return undefined;
      }
    };

    init().then((cleanupFn) => {
      if (cleanupFn) {
        if (!cancelled) cleanup = cleanupFn;
        else cleanupFn();
      }
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [onLoaded, onProgress]);

  if (useFallback) {
    return (
      <div className="relative flex flex-col items-center justify-center select-none py-2 my-1">
        <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-[#9E5C6A]/30 via-[#C27A8A]/20 to-purple-600/10 blur-2xl -z-10 pointer-events-none" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-44 sm:w-56 h-44 sm:h-56 flex items-center justify-center"
        >
          <div className="relative w-36 sm:w-48 h-36 sm:h-48 rounded-3xl bg-gradient-to-br from-[#2D1220]/90 via-[#180812]/90 to-[#0C0308]/90 border border-[#C27A8A]/30 p-4 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(158,92,106,0.3)] flex items-center justify-center">
            <Image
              src="/logo-parpell-transparent.png"
              alt="Logo Parpell"
              width={180}
              height={180}
              className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(194,122,138,0.4)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    );
  }

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
        className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center cursor-grab touch-pan-y"
        style={{ touchAction: "pan-y" }}
        title="Gira el logo 3D interactivo de Parpell"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block pointer-events-auto"
          style={{ touchAction: "pan-y" }}
        />
      </div>
    </div>
  );
}
