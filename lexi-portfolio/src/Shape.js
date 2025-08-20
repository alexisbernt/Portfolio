import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Shape = ({ type = 'box' }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  let geometry;
  switch (type) {
    case 'sphere':
      geometry = <sphereGeometry args={[0.6, 32, 32]} />;
      break;
    case 'cone':
      geometry = <coneGeometry args={[0.5, 1, 32]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[0.4, 0.15, 16, 100]} />;
      break;
    case 'icosahedron':
      geometry = <icosahedronGeometry args={[0.5, 0]} />;
      break;
    default: // box
      geometry = <boxGeometry args={[0.8, 0.8, 0.8]} />;
      break;
  }

  return (
    <mesh ref={meshRef}>
      {geometry}
      <meshStandardMaterial color="#ffdd57" />
    </mesh>
  );
};

export default Shape;
