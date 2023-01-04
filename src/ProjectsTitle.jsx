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

    return <Text
        onClick={projectsCameraAngle} 
        ref={title}
        font="/fonts/Painterz.ttf"
        scale={ .6 }
        maxWidth={ 20 }
        lineHeight={ 0.75 }
        textAlign="right"
        position={ [ -2.8, 1.8, -2.7 ] }
        // rotation-y={ -  Math.PI * .5}
        color={"deeppink"}
        onPointerEnter={ (event) => { 
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