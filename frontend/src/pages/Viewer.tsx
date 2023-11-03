import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

function Model() {
  const gltf = useGLTF('scene.gltf');
  const group = useRef<Group>();

  return <primitive object={gltf.scene} ref={group} />;
}

function Viewer() {
  return (
    <div className='w-full h-full'>
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={30}/>
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
    </div>
  );
}

export default Viewer;
