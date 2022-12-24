import { Html, OrbitControls, useGLTF, Text, Float, PresentationControls, ContactShadows } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect } from 'react'
import useApp from './useApp'
import RoomModel from './RoomModel'

export default function Room()
{    
    const camera = useThree((state) => state.camera)
    const controls = useThree((state) => state.controls)
    const model = useGLTF('./models/portfolioDraco.gltf')

    useFrame(() => {

    }) 
    useEffect(() => {
        const unsubscribeReset = useApp.subscribe(
            (state) => state.currentCameraAngle,
            (value) => {
                console.log('current angle' , value)
                if(value === 'default'){
                    resetCameraAngle()
                }
                if(value === 'about me angle'){
                    aboutMeAngle()
                }
                if(value === 'projects angle'){
                    projectsAngle()
                }
                if(value === 'skills angle'){
                    skillsAngle()
                }
            }
        )
        return () => {
            unsubscribeReset()
        }
    })
    const resetCameraAngle = () => {
        controls.enabled = true
        const timeline = gsap.timeline()
        timeline.to('.htmlScreen', {opacity: 0}) 
        timeline.to(camera.position, { x:-11, y:3, z:12, duration: 2, ease: 'Power1.easeInOut' },0)
        timeline.to(controls.target, { x:0, y:0, z:0, duration: 2, ease: 'Power1.easeInOut' },0) 
         
    }

    const aboutMeAngle = () => {
        controls.enabled = true
        const timeline = gsap.timeline()
        timeline.to(camera.position, { x: -7, y: 1.5, z: 1.4,  ease: 'Power1.easeInOut', duration: 2 }, 0)
        timeline.to(controls.target, { x:2.7, y:1.5, z:1.4, ease: 'Power1.easeInOut', duration: 2,
        
        onComplete: () => {
            controls.enabled = false
        }
        }, 0)
        timeline.to('.htmlScreen', {opacity: 1})
    }

    const projectsAngle = () => {
        controls.enabled = true
        const timeline = gsap.timeline()
        timeline.to(camera.position, { x: -5, y: .8, z: 3,  ease: 'Power1.easeInOut', duration: 2 }, 0)
        timeline.to(controls.target, { x: -3, y: .8,z: -2.7, ease: 'Power1.easeInOut', duration: 2,
        }, 0)
    }
    const skillsAngle = () => {
        controls.enabled = true
        const timeline = gsap.timeline()
        timeline.to(camera.position, { x: 2, y: 1,z: 4.5, ease: 'Power1.easeInOut', duration: 2 }, 0)
        timeline.to(controls.target, { x: -.2, y: 1,z: -2.6, ease: 'Power1.easeInOut', duration: 2,}, 0)
       
    }

    return  <>
        <RoomModel />
        <Html 
            // occlude
            transform 
            wrapperClass="htmlScreen"
            distanceFactor={ 3 }
            position={ [ 3, 1, 1.6 ] }
            rotation-y = { -  Math.PI * .5}
        >
            <p >As a creative web developer with a strong background in front-end, I am passionate about using my skills to create visually stunning and user-friendly websites. In addition to my technical skills, I am also a highly creative individual with a keen eye for design. This allows me to create websites that not only function well, but also have a unique and engaging visual style.  </p>
            {/* As a creative web developer, I have a passion for crafting beautiful and intuitive digital experiences. I am skilled in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and React. I am a problem-solver at heart and enjoy the challenge of creating solutions that are both functional and aesthetically pleasing. With a keen eye for design and a commitment to creating user-friendly interfaces, I strive to develop websites that are both effective and engaging. I am constantly learning and experimenting with new technologies to stay at the forefront of the industry and provide my clients with the best possible solutions for their needs. */}
         </Html>
    </>
         
      
}
{/* <primitive object={model.scene} position={ [ 0, -2, 0 ] } > */}
        {/* <Html 
            // occlude
            transform 
            wrapperClass="htmlScreen"
            distanceFactor={ 3 }
            position={ [ 3, 2.8, 1.6 ] }
            rotation-y = { -  Math.PI * .5}
        > */}
            {/* <p >As a creative web developer with a strong background in front-end, I am passionate about using my skills to create visually stunning and user-friendly websites. In addition to my technical skills, I am also a highly creative individual with a keen eye for design. This allows me to create websites that not only function well, but also have a unique and engaging visual style.  </p> */}
            {/* As a creative web developer, I have a passion for crafting beautiful and intuitive digital experiences. I am skilled in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and React. I am a problem-solver at heart and enjoy the challenge of creating solutions that are both functional and aesthetically pleasing. With a keen eye for design and a commitment to creating user-friendly interfaces, I strive to develop websites that are both effective and engaging. I am constantly learning and experimenting with new technologies to stay at the forefront of the industry and provide my clients with the best possible solutions for their needs. */}
        // </Html>
        {/* dummy cube for occlude effect */}
    //     <mesh position={ [ -4, 2.8, 4 ] } scale={2} visible={false}> 
    //         <boxGeometry />
    //         <meshBasicMaterial />
    //     </mesh>
    // </primitive>