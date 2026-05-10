"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface LiquidShapeProps {
  type: "pentapod" | "quadpod" | "hexapod";
  isHovered: boolean;
}

function ShapeGeometry({ type, isHovered }: LiquidShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animate rotation & floating manually (faster than using <Float> component)
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smoothly adjust rotation speed based on hover state (slow & elegant)
      const currentSpeed = isHovered ? 1.0 : 0.4;
      meshRef.current.rotation.y += delta * currentSpeed;
      meshRef.current.rotation.z += delta * (currentSpeed * 0.5);
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      
      // Hover Animation: GENTLE LEVITATION (Moves UP slowly instead of bouncing)
      const targetY = isHovered ? 0.3 : 0; // Move up by 0.3 units on hover
      meshRef.current.userData.baseY = meshRef.current.userData.baseY || 0;
      meshRef.current.userData.baseY += (targetY - meshRef.current.userData.baseY) * 0.05; // Smooth transition
      
      // Combine the levitation with the continuous floating wave
      const floatWave = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.position.y = meshRef.current.userData.baseY + floatWave;
      
      // Force scale to remain 1 (Removes the small/big bouncing effect)
      meshRef.current.scale.set(1, 1, 1);
    }
  });

  const geometry = useMemo(() => {
    let points = 5;
    let outer = 1.1;
    let inner = 0.5;
    
    if (type === "quadpod") { points = 4; outer = 1.2; inner = 0.45; }
    if (type === "hexapod") { points = 6; outer = 1.1; inner = 0.7; }
    
    const shape = new THREE.Shape();
    const offset = Math.PI / 2; 
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - offset;
      const r = i % 2 === 0 ? outer : inner;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    
    // Performance: Reduced segments massively (from 12 to 4/8) to save polygon count
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.3,
      bevelSegments: 4, 
      curveSegments: 8
    });
    geo.center(); 
    return geo;
  }, [type]);

  let shapeColor = "#0066FF"; 
  if (type === "quadpod") shapeColor = "#00F0FF"; 
  if (type === "hexapod") shapeColor = "#A200FF"; 

  return (
    <mesh ref={meshRef} castShadow receiveShadow geometry={geometry}>
      <meshPhysicalMaterial
        color={shapeColor}
        transmission={0.4}
        opacity={1}
        transparent={true}
        roughness={0}
        metalness={0.2}
        ior={1.5}
        thickness={0.5}
        envMapIntensity={5} // Reduced from 8 to save reflection calculations
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
      />
    </mesh>
  );
}

export default function LiquidShape({ type, isHovered }: LiquidShapeProps) {
  return (
    <div 
      className="w-40 h-40 md:w-48 md:h-48 relative z-20 pointer-events-none" 
      style={{ marginLeft: "-1rem" }}
    >
      {/* Performance: dpr limit added, powerPreference set to high-performance */}
      <Canvas 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 5], fov: 45 }} 
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={5} color="#ffffff" />
        <directionalLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, 10, -10]} intensity={3} color="#ffffff" />
        
        {/* Performance: Lowered environment map resolution to 128 */}
        <Environment preset="studio" resolution={128} />
        
        <ShapeGeometry type={type} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
