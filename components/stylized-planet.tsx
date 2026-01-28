'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, memo, useMemo } from 'react'

const MODEL_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stylized_planet-0i4u8mdbnFAtOMXGwrdAoNW4GF3zpJ.glb'

// Preload the model
useGLTF.preload(MODEL_URL)

const StylizedPlanetModel = memo(function StylizedPlanetModel() {
  const { scene } = useGLTF(MODEL_URL)
  
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  return (
    <>
      <Environment preset="sunset" />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      <primitive object={clonedScene} scale={2.5} position={[0, 0, 0]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, 5, 10]} intensity={1} />
      <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={true} enablePan={true} />
    </>
  )
})

export default function StylizedPlanet() {
  return (
    <div className="w-full h-full">
      <Canvas 
        gl={{ 
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <StylizedPlanetModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
