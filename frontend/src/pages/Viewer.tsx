import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

function Model() {
  const gltf = useGLTF('scene.gltf');
  const group = useRef<Group>();

  // Adicione um estado para controlar a rotação
  const rotationSpeed = 0.004;

  useFrame(() => {
    if (group.current) {
      group.current.position.y = -50;
      group.current.position.x = -120;
    }
    // Atualize a rotação do grupo a cada quadro
    group.current.rotation.y += rotationSpeed;
  });

  return <primitive object={gltf.scene} ref={group} />;
}

function Viewer() {
  return (
    <div className='w-full h-full'>
      <Canvas>
        <ambientLight intensity={14} />
        <directionalLight position={[50, -5, 90]} intensity={-8} />
        <pointLight position={[30, -5, 90]} />
        <Model />
        <OrbitControls
          enableZoom={true} // Permitir zoom
          enablePan={false} // Permitir panorâmica
          enableRotate={false} // Permitir rotação
          minPolarAngle={Math.PI / 10} // Ângulo mínimo de rotação vertical
          maxPolarAngle={Math.PI / 1} // Ângulo máximo de rotação vertical
          minDistance={150} // Distância mínima da câmera
          maxDistance={150} // Distância máxima da câmera
          target={[0, 0, -20]} // Alvo da câmera (posição inicial)
        />
      </Canvas>
    </div>
  );
}

export default Viewer;
