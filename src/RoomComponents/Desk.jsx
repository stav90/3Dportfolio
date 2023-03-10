/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 Desk.glb --transform -k
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

export default function Desk(props) {
  const { nodes, materials } = useGLTF('/models/Desk-transformed.glb')

  const desk = useRef()

  const deskAnimation = () => {
    gsap.from(desk.current.position, { x: -13, duration:1, ease: 'back(1)'})
  }
  useEffect(() => {
    deskAnimation()
  },[])

  return (
    <group {...props} dispose={null}>
      <group ref={desk} name="room001" position={[-2.99, -1.94, -1.74]} scale={[1, 1.33, 1]}>
        <mesh name="Vert004" geometry={nodes.Vert004.geometry} material={materials['dark purple']} />
        <mesh name="Vert004_1" geometry={nodes.Vert004_1.geometry} material={materials.Yellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Desk-transformed.glb')
