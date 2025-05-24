// src/components/My3DScene.jsx
import React, { useRef } from 'react'; // useRef tidak lagi dibutuhkan jika FloatingGlowSphere dihapus total
import { Canvas, useFrame } from '@react-three/fiber'; // useFrame juga tidak dibutuhkan jika tidak ada animasi kustom
import { Stars, Cloud, Clouds, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Komponen FloatingGlowSphere bisa Anda hapus seluruhnya jika tidak ingin digunakan lagi
/*
function FloatingGlowSphere() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        color="#00fff0"
        emissive="#00e0d0"
        emissiveIntensity={1.2}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}
*/

export default function My3DScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Ambient & Directional Light */}
        <color attach="background" args={['#1a1a1a']} />
        <fog attach="fog" args={['#1a1a1a', 10, 30]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 5, 5]} intensity={1} color="#88faff" />

        {/* Stars Background */}
        <Stars
          radius={100}
          depth={80}
          count={10000}
          factor={5}
          fade
          saturation={0}
          speed={0.2}
        />

        {/* Sinematik Clouds (Nebula) */}
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            bounds={[10, 10, 10]}
            color="#00ffff"
            speed={0.2}
            opacity={0.15}
            scale={1.5}
            segments={40}
          />
          <Cloud
            bounds={[10, 10, 10]}
            color="#ff00cc"
            speed={0.1}
            opacity={0.12}
            scale={1.2}
            segments={30}
            position={[2, -1, -2]}
          />
        </Clouds>

        {/* Sparkles: bintang berkilau */}
        <Sparkles
          count={150}
          scale={20}
          size={1}
          speed={0.4}
          color="#ffffff"
          noise={2}
        />

        {/* FloatingGlowSphere sudah dihapus dari sini */}
        {/* <FloatingGlowSphere /> */}
      </Canvas>
    </div>
  );
}