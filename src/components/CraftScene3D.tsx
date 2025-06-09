
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Composant pour un objet de poterie 3D
const PotteryObject = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.8, 0.6, 1.5, 8]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
    </Float>
  );
};

// Composant pour un tapis berbère 3D
const CarpetObject = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.8}
          normalScale={new THREE.Vector2(0.5, 0.5)}
        />
      </mesh>
    </Float>
  );
};

// Composant pour des bijoux 3D
const JewelryObject = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  );
};

// Scène 3D principale
const Scene3D = () => {
  return (
    <>
      {/* Éclairage */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff7f50" />

      {/* Objets artisanaux */}
      <PotteryObject position={[-2, 0, 0]} color="#D2691E" />
      <PotteryObject position={[2, -0.5, -1]} color="#A0522D" />
      <CarpetObject position={[0, -1, 1]} />
      <JewelryObject position={[0, 2, 0]} />
      <JewelryObject position={[-3, 1, 2]} />

      {/* Texte 3D */}
      <Center position={[0, 3, 0]}>
        <Text3D
          font="/fonts/cairo-regular.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          الحرف الجزائرية
          <meshStandardMaterial color="#8B4513" />
        </Text3D>
      </Center>

      {/* Contrôles de la caméra */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
      />

      {/* Environnement */}
      <Environment preset="sunset" />
    </>
  );
};

const CraftScene3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-sand-beige to-warm-beige">
      {/* Indicateur de chargement */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-warm-beige">
          <div className="text-heritage-brown font-arabic text-lg">جاري التحميل...</div>
        </div>
      )}
      
      {/* Canvas 3D */}
      <Canvas
        camera={{ position: [5, 5, 8], fov: 50 }}
        onCreated={() => setIsLoaded(true)}
        style={{ background: 'transparent' }}
      >
        <Scene3D />
      </Canvas>
      
      {/* Overlay d'information */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-heritage-brown font-arabic text-sm bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
          اسحب للتفاعل مع المشهد ثلاثي الأبعاد
        </p>
      </div>
    </div>
  );
};

export default CraftScene3D;
