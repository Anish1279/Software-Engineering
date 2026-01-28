'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

function StylizedPlanetModel() {
  const { scene } = useGLTF('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stylized_planet-0i4u8mdbnFAtOMXGwrdAoNW4GF3zpJ.glb')
  
  const clonedScene = scene.clone()
  
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
}

export default function StylizedPlanet() {
  return (
    <div className="w-full h-full">
      <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <StylizedPlanetModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
