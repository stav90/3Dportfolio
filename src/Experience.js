import { useFrame } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF, Text, Float, PresentationControls, ContactShadows, Stage, Environment } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import Effects from './Effects'
import Room from './Room'
import ProjectTitle from './ProjectsTitle'
import AboutMeTitle from './AboutMeTitle'
import SkillstTitle from './SkillsTitle'
import Name from './Name'
import Avatar from './Avatar'
import {ScrollScene} from './ScrollScene'
import Skateboards from './SkateBoards'

export default function Experience()
{    
    // const {directionalLightX, directionalLightY, directionalLightZ, intensity} = useControls({
    //     directionalLightX: {
    //         value: 1,
    //         min: 0,
    //         max: 10,
    //         step: 1,
    //     },
    //     directionalLightY: {
    //         value: 10,
    //         min: 0,
    //         max: 10,
    //         step: 1,
    //     },
    //     directionalLightZ: {
    //         value: 0,
    //         min: 0,
    //         max: 10,
    //         step: 1,
    //     },
    //     intensity: {
    //         value: 1,
    //         min: 0,
    //         max: 3,
    //         step: .1,
    //     },
    // })
    

    return <>
        <color args={ [ '#653981' ] } attach="background" />
        {/* <Perf position="top-left" /> */}
        {/* minPolarAngle={-Math.PI * .5} maxPolarAngle={Math.PI * .5} minAzimuthAngle={Math.PI * 5}*/}
        <OrbitControls makeDefault  minPolarAngle={Math.PI * .3} maxPolarAngle={Math.PI * .5} enableZoom={false} minAzimuthAngle={-Math.PI * .60} maxAzimuthAngle={-Math.PI * -.10}/>
        {/* <ScrollScene /> */}
        <directionalLight position={ [ 1, 10, 0] }  intensity={ 1} shadowBias={-.0000001}/>
        <ambientLight intensity={ 0.5 } />
        <Environment preset="city"></Environment>
        <Name />
        <ProjectTitle />
        <SkillstTitle />
        <AboutMeTitle />
        <Room />
        <Skateboards/>
        <Avatar />
        <ContactShadows 
            position-y={ -1.99 } 
            opacity={ 0.4 }
            scale={ 20 }
            blur={ 2.4 }
        />
        {/* <Effects /> */}
    </>
}

