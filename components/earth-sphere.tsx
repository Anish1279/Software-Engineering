'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

function EarthModel() {
  const earthRef = useRef<THREE.Mesh>(null)
  const ribbonGroupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0003
    }
    if (ribbonGroupRef.current) {
      ribbonGroupRef.current.rotation.z += 0.001
    }
  })

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial 
          color="#1a1a2e" 
          emissive="#0f3460"
          shininess={5}
        />
      </mesh>

      {/* Earth Glow */}
      <mesh>
        <sphereGeometry args={[2.55, 64, 64]} />
        <meshBasicMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.1}
        />
      </mesh>

      {/* Ribbons */}
      <group ref={ribbonGroupRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={`ribbon-${i}`} rotation={[Math.PI / 5 * i, 0, 0]}>
            <torusGeometry args={[2.6, 0.15, 16, 128]} />
            <meshStandardMaterial
              color={`hsl(${200 + i * 20}, 70%, 60%)`}
              emissive={`hsl(${200 + i * 20}, 70%, 40%)`}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Stars around Earth */}
      <Stars 
        radius={100} 
        depth={50} 
        count={500} 
        factor={4} 
        saturation={0}
        fade 
      />

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#6366f1" />
      <ambientLight intensity={0.4} />
    </group>
  )
}

export default function EarthSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 75 }}>
      <EarthModel />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={2}
      />
    </Canvas>
  )
}
