'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef, memo } from 'react'
import * as THREE from 'three'

const SpaceScene = memo(function SpaceScene() {
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
        radius={200}
        depth={60}
        count={1500}
        factor={4}
        saturation={0}
        fade
        speed={0.3}
      />
      <Stars
        radius={100}
        depth={30}
        count={800}
        factor={2}
        saturation={0}
        fade
        speed={0.2}
      />
      <ambientLight intensity={0.1} />
    </>
  )
})

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={1}
        performance={{ min: 0.5 }}
        gl={{ 
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
      >
        <SpaceScene />
      </Canvas>
    </div>
  )
}
