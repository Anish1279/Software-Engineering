'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

function GamingPCModel() {
  const { scene } = useGLTF('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gaming_desktop_pc.compressed-0bd7qk1YvoXVDUn89DTngLzxWJUpw5.glb')
  const groupRef = useRef(null)
  
  useEffect(() => {
    if (groupRef.current) {
      // Calculate bounding box to properly center the model
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      // Center the model
      scene.children.forEach(child => {
        child.position.sub(center)
      })
      
      // Scale model to fit nicely - increased for better initial view
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 6 / maxDim
      groupRef.current.scale.multiplyScalar(scale)
    }
  }, [scene])
  
  return (
    <>
      <Environment preset="sunset" />
      <PerspectiveCamera makeDefault position={[0, 0, 2.5]} fov={50} />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={4}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
      <ambientLight intensity={1.2} />
      <directionalLight position={[15, 15, 15]} intensity={1.8} castShadow />
      <pointLight position={[-10, 5, 10]} intensity={1} />
    </>
  )
}

export default function GamingPC() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <GamingPCModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
