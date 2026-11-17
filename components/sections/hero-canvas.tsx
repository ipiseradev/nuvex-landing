'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { pointer } = useThree()

  const positions = useMemo(() => {
    const count = 650
    const data = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const radius = 2.3 + Math.random() * 0.75
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      data[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      data[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62
      data[index * 3 + 2] = radius * Math.cos(phi)
    }
    return data
  }, [])

  useFrame((_, delta) => {
    const points = pointsRef.current
    if (!points) return
    points.rotation.y += delta * 0.045
    points.rotation.x += (pointer.y * 0.16 - points.rotation.x) * 0.035
    points.rotation.z += (pointer.x * 0.1 - points.rotation.z) * 0.035
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.024}
        color="#e6e6ea"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 5.4], fov: 45 }}
      style={{ pointerEvents: 'none' }}
    >
      <ParticleField />
    </Canvas>
  )
}
