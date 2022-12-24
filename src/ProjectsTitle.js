import { Text,  } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import useApp from './useApp'

export default function ProjectTitle()
{
    const title = useRef()
    const camera = useThree((state) => state.camera)
    const controls = useThree((state) => state.controls)

    const projectsCameraAngle = useApp((state) => state.projectsCameraAngle)
    // const eventHandler = () => {  
    //     const timeline = gsap.timeline()
    //     timeline.to(camera.position, { x: -3, y: .8, z: 0,  ease: 'Power1.easeInOut', duration: 2}, 0)
    //     timeline.to(controls.target, { x: -3, y: .8,z: -2.7, ease: 'Power1.easeInOut', duration: 2}, 0) 
    // }

    return <Text
        onClick={projectsCameraAngle} 
        ref={title}
        font="/fonts/Thunderstorm.otf"
        scale={ 7 }
        maxWidth={ 0.25 }
        lineHeight={ 0.75 }
        textAlign="right"
        position={ [ -3, 1.8, -2.7 ] }
        // rotation-y={ -  Math.PI * .5}
        color={"deeppink"}
        onPointerEnter={ (event) => { 
            console.log(event.object)
            event.object.color = 'yellow'
            document.body.style.cursor = 'pointer' 
        } }
        onPointerLeave={ (event) => { 
            event.object.color = 'deeppink'
            document.body.style.cursor = 'default'
         } }
    >   
        PROJECTS
        <meshBasicMaterial  tonnedMap={false}/>
    </Text>
}