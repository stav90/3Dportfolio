/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 OfficeChair.glb --transform -k
*/
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function OfficeChair(props) {
  const { nodes, materials } = useGLTF('/models/OfficeChair-transformed.glb')

  const chair = useRef()

  const chairAnimation = () => {
    gsap.from(chair.current.scale, { x: 0, y: 0, z: 0,duration:1,delay: .6, ease: 'power3.out'})
    gsap.from(chair.current.rotation, { y: Math.PI,duration:1,delay: .6, ease: 'power3.out'})
  }
  useEffect(() => {
    chairAnimation()
  },[])

  return (
    <group {...props} dispose={null}>
      <group ref={chair} name="Chair" position={[-2.82, -2, -0.32]} rotation={[0, 0.38, 0]} scale={1.17}>
        <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={materials['dark purple']} />
        <mesh name="Plane017_1" geometry={nodes.Plane017_1.geometry} material={materials.Yellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/OfficeChair-transformed.glb')
