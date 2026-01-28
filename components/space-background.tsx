'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function SpaceScene() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001
      starsRef.current.rotation.x += 0.00005
    }
  })

  return (
    <>
      <color attach="background" args={['#050510']} />
      <Stars
        ref={starsRef}
        radius={300}
        depth={100}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      <Stars
        radius={150}
        depth={50}
        count={1500}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />
      <ambientLight intensity={0.1} />
    </>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <SpaceScene />
      </Canvas>
    </div>
  )
}
