/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 BoomBox.glb --transform -k
*/
import gsap from 'gsap'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useApp from '../useApp'

export default function BoomBox(props) {
  const { nodes, materials } = useGLTF('/models/BoomBox-transformed.glb')

  const danceAnimation = useApp((state) => state.danceAnimation)
 

  // const [isDancing, setIsDancing] = useState(false)

  // const dance = () => {
  //   setIsDancing(prevState => ({
  //     isDancing: !prevState.isDancing
  //   }));
  //   console.log(isDancing.isDancing)
  //   if(isDancing){
  //     waveAnimation()
      
  //   }else if(isDancing){
  //     danceAnimation()
  //   }
  // }

  const boombox = useRef()

  const boomBoxAnimation = () => {
    gsap.from(boombox.current.scale, { x: 0, y: 0, z: 0,duration:.5,delay: .9, ease: 'back(2)'})
  }

  useEffect(() => {
    boomBoxAnimation()
  }, [])

  return (
    <group {...props} dispose={null} >
      <group ref={boombox} name="Cube007" position={[1.87, -1.99, 2.27]} rotation={[0, -Math.PI / 4, 0]}
       onPointerEnter={ (event) => { 
            // danceAnimation()
            gsap.to(boombox.current.scale, { x: 1.1,y: 1.1,z: 1.1, duration:.2, ease: 'power3.out'})
            document.body.style.cursor = 'pointer' 
        } }
        onPointerLeave={ (event) => { 
            gsap.to(boombox.current.scale, { x: 1,y: 1, z: 1, duration:.2, ease: 'power3.out'})   
            // waveAnimation() 
            document.body.style.cursor = 'default'
        } }
        onClick={danceAnimation}
      >
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['dark purple']} />
        <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials.Yellow} />
        <mesh name="Cube011_2" geometry={nodes.Cube011_2.geometry} material={materials.Aqua} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/BoomBox-transformed.glb')