
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Basket3D = () => {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useLoader(TextureLoader, '/lovable-uploads/3b322311-3a2f-49ba-aeb8-7c97e3d74d9e.png');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef}>
        {/* Main basket body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1, 1.5, 16]} />
          <meshStandardMaterial 
            map={texture} 
            roughness={0.7} 
            metalness={0.1}
          />
        </mesh>
        
        {/* Basket rim */}
        <mesh position={[0, 0.75, 0]}>
          <torusGeometry args={[1.2, 0.1, 8, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        
        {/* Decorative stars floating around */}
        <mesh position={[2, 1, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
        
        <mesh position={[-2, 0.5, 1]}>
          <boxGeometry args={[0.2, 0.2, 0.05]} />
          <meshStandardMaterial color="#FF6B35" />
        </mesh>
        
        <mesh position={[1, -0.5, -2]}>
          <boxGeometry args={[0.25, 0.25, 0.05]} />
          <meshStandardMaterial color="#DC143C" />
        </mesh>
      </group>
    </Float>
  );
};

const TraditionalBasket3D = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#FF6B35" />
        
        <Basket3D />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          autoRotate={false}
          maxDistance={10}
          minDistance={3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 6}
        />
        
        {/* Ground plane */}
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#F5F5DC" transparent opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default TraditionalBasket3D;
