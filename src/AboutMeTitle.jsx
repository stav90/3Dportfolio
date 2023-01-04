import { Text, Html  } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import useApp from './useApp'

export default function AboutMeTitle()
{
    const title = useRef()
    const camera = useThree((state) => state.camera)
    const controls = useThree((state) => state.controls)

    const aboutMeCameraAngle = useApp((state) => state.aboutMeCameraAngle)

    return <>
    <Text 
        font="/fonts/Painterz.ttf"
        scale={ .6 }
        maxWidth={ 20 }
        lineHeight={ 0.75 }
       
        position={ [ 2.7, 3.1, 1.4 ] }
        rotation-y={ -  Math.PI * .5}
        color={"deeppink"}
        onClick={aboutMeCameraAngle}
        ref={title} 
        onPointerEnter={ (event) => { 
            event.object.color = 'yellow'
            document.body.style.cursor = 'pointer' 
        } }
        onPointerLeave={ (event) => { 
            event.object.color = 'deeppink'
            document.body.style.cursor = 'default'
         } }
    >   
        ABOUT ME
        <meshBasicMaterial  tonnedMap={false}/>
    </Text>
     {/* <Html 
        scale={1}  
        position={ [ 2.7, 3.6, .3 ] }
        rotation-y={ -  Math.PI * .5} 
        transform 
    >
        <div className="circle">
        </div>
    </Html> */}
    </>
}