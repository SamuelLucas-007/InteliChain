// import React, { useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { directionalLight } from '@react-three/fiber';
// import { useGLTF, OrbitControls } from '@react-three/drei';

// function Model() {
//   const gltf = useGLTF('scene.gltf');
//   const group = useRef();

//   return <primitive object={gltf.scene} ref={group} />;
// }

// function Viewer() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1}/>
//       <pointLight position={[10, 10, 10]} />
//       <Model />
//       <OrbitControls />
//     </Canvas>
//   );
// }

// export default Viewer;