"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// ─── 1. Los Anillos de Boda (Oro Puro) ──────────────────────────────────
function GoldenRings(props) {
    // Material de oro hiperrealista
    const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: '#ffdd44',
        metalness: 1,
        roughness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
    });

    return (
        <group {...props}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Anillo 1 */}
                <mesh material={goldMaterial} rotation={[Math.PI / 4, 0, 0]} position={[-0.4, 0, 0]} castShadow>
                    <torusGeometry args={[0.5, 0.08, 32, 64]} />
                </mesh>
                {/* Anillo 2 (Entrelazado) */}
                <mesh material={goldMaterial} rotation={[-Math.PI / 4, Math.PI / 2, 0]} position={[0.4, 0, 0]} castShadow>
                    <torusGeometry args={[0.5, 0.08, 32, 64]} />
                </mesh>
            </Float>
        </group>
    );
}

// ─── 2. La Varita Vintage (Madera Oscura y Latón) ────────────────────────
function VintageWand(props) {
    const woodMaterial = new THREE.MeshPhysicalMaterial({
        color: '#2a1a10', // Ébano oscuro
        roughness: 0.8,
        clearcoat: 0.2,
    });
    
    const brassMaterial = new THREE.MeshPhysicalMaterial({
        color: '#b5a642', // Latón envejecido
        metalness: 0.9,
        roughness: 0.3,
    });
    
    const whiteTipMaterial = new THREE.MeshPhysicalMaterial({
        color: '#f0f0f0', // Marfil/Blanco
        roughness: 0.2,
        clearcoat: 1,
    });

    return (
        <group {...props}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Cuerpo principal de madera */}
                <mesh material={woodMaterial} rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.06, 0.08, 3, 32]} />
                </mesh>
                
                {/* Punta Blanca (Derecha) */}
                <mesh material={whiteTipMaterial} position={[1.75, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.05, 0.06, 0.5, 32]} />
                </mesh>
                
                {/* Anillo de Latón (Derecha) */}
                <mesh material={brassMaterial} position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.065, 0.065, 0.1, 32]} />
                </mesh>
                
                {/* Extremo de Latón (Izquierda - Pomo) */}
                <mesh material={brassMaterial} position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.1, 0.08, 0.2, 32]} />
                </mesh>
                <mesh material={brassMaterial} position={[-1.7, 0, 0]} castShadow>
                    <sphereGeometry args={[0.1]} />
                </mesh>
            </Float>
        </group>
    );
}

// ─── 3. La Carta (Show) ──────────────────────────────────────────────────
function MagicCard(props) {
    // Geometría: una caja muy fina para darle grosor de cartulina
    const cardGeo = new THREE.BoxGeometry(1.4, 2, 0.01);
    
    // Materiales: Borde blanco, Dorso oscuro, Frontal claro
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
    const backMaterial = new THREE.MeshStandardMaterial({ color: '#1a1a1a', roughness: 0.4 });
    const frontMaterial = new THREE.MeshStandardMaterial({ color: '#f0f0f0', roughness: 0.4 });
    
    // El BoxGeometry toma un array de 6 materiales (derecha, izquierda, arriba, abajo, frontal, trasero)
    const materials = [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, backMaterial];

    return (
        <group {...props}>
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
                <mesh geometry={cardGeo} material={materials} castShadow>
                    {/* Dibujo simplificado de la carta (As de Picas) */}
                    <mesh position={[0, 0, 0.006]}>
                        <planeGeometry args={[1.2, 1.8]} />
                        <meshBasicMaterial color="#ffffff" />
                        {/* Pica central negra */}
                        <mesh position={[0, 0, 0.001]} rotation={[0, 0, Math.PI]}>
                            <coneGeometry args={[0.2, 0.4, 3]} />
                            <meshBasicMaterial color="#000000" />
                        </mesh>
                        <mesh position={[0, -0.1, 0.001]}>
                            <circleGeometry args={[0.15, 32]} />
                            <meshBasicMaterial color="#000000" />
                        </mesh>
                        <mesh position={[-0.1, -0.1, 0.001]}>
                            <circleGeometry args={[0.15, 32]} />
                            <meshBasicMaterial color="#000000" />
                        </mesh>
                        <mesh position={[0.1, -0.1, 0.001]}>
                            <circleGeometry args={[0.15, 32]} />
                            <meshBasicMaterial color="#000000" />
                        </mesh>
                    </mesh>
                </mesh>
            </Float>
        </group>
    );
}

// ─── Escena Principal ────────────────────────────────────────────────────
export default function GabineteCuriosidades() {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas shadows camera={{ position: [0, 4, 8], fov: 45 }}>
                {/* Entorno de reflejos (imprescindible para el oro y los metales) */}
                <Environment preset="city" />
                
                {/* Iluminación dramática */}
                <ambientLight intensity={0.2} />
                <spotLight 
                    position={[0, 10, 0]} 
                    angle={0.4} 
                    penumbra={1} 
                    intensity={2} 
                    castShadow 
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color="#d4a853" />

                {/* Los Objetos distribuidos en el espacio */}
                <group position={[0, 1, 0]}>
                    <GoldenRings position={[3, 0, 0]} />
                    <VintageWand position={[0, 0, 0]} rotation={[0, -Math.PI / 6, 0]} />
                    <MagicCard position={[-3, 0, 0]} rotation={[-Math.PI / 8, Math.PI / 6, 0]} />
                </group>

                {/* Sombras de contacto suaves en el "suelo" (Mesa) */}
                <ContactShadows 
                    position={[0, -1.5, 0]} 
                    opacity={0.8} 
                    scale={15} 
                    blur={2} 
                    far={5} 
                    color="#000000" 
                />

                {/* Controles de cámara para interactuar */}
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.2} // No permite mirar desde debajo de la mesa
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
            
            {/* Overlay UI */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-slate-400 text-sm tracking-widest uppercase mb-2">Interactúa</p>
                <div className="flex gap-2 justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#d4a853] animate-pulse"></span>
                    <span className="w-1 h-1 rounded-full bg-[#d4a853] animate-pulse delay-75"></span>
                    <span className="w-1 h-1 rounded-full bg-[#d4a853] animate-pulse delay-150"></span>
                </div>
            </div>
        </div>
    );
}
