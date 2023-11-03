import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

function Model() {
  const gltf = useGLTF('scene.gltf');
  const group = useRef<Group>();

  // Adicione um estado para controlar a rotação
  const rotationSpeed = 0.005;

  useFrame(() => {
    // Atualize a rotação do grupo a cada quadro
    group.current.rotation.y += rotationSpeed;
  });

  return <primitive object={gltf.scene} ref={group} />;
}

function Viewer() {
  return (
    <div className='w-full h-full'>
      <Canvas>
        <ambientLight intensity={3} />
        <directionalLight position={[-200, 20, 5]} intensity={50} />
        <pointLight position={[-5, -10, 200]} />
        <Model />
        <OrbitControls
          enableZoom={true} // Permitir zoom
          enablePan={true} // Permitir panorâmica
          enableRotate={true} // Permitir rotação
          minPolarAngle={Math.PI / 8} // Ângulo mínimo de rotação vertical
          maxPolarAngle={Math.PI / 1} // Ângulo máximo de rotação vertical
          minDistance={10} // Distância mínima da câmera
          maxDistance={200} // Distância máxima da câmera
          target={[100, 40, 0]} // Alvo da câmera (posição inicial)
        />
      </Canvas>
    </div>
  );
}

export default Viewer;
