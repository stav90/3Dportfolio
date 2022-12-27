import { Html, OrbitControls, useGLTF, Text, Float, PresentationControls, ContactShadows } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useLayoutEffect } from 'react'
import useApp from './useApp'
import RoomModel from './RoomModel'

export default function Room()
{    
    const camera = useThree((state) => state.camera)
    const controls = useThree((state) => state.controls)
    const model = useGLTF('./models/portfolioDraco.gltf')
    let counter = 0
    useFrame(() => {

    }) 
    let tl;

    
    const prev = () => {
        if(tl.previousLabel() != "start"){
            tl.reverse()
        }
        
    }
    const next = () => {
        tl.play()
    }

    

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
                    if(tl == undefined){
                        tl = gsap.timeline({
                            defaults:{duration:0.3, opacity:0},
                           
                        })
                        tl.add("start")
                        .from(".slide1", {})
                        .addPause("+=0")
                        .to(".slide1", {opacity:0})
    
                        .from(".slide2", {}, "slide2")
                        .addPause("+=0")
                        .to(".slide2", {opacity:0})
    
                        .from(".slide3", {})
                        .addPause("+=0")
                        .to(".slide3", {opacity:0})
    
                        .from(".slide4", {})
                    }
                   
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
        timeline.to('.projects', {opacity:0})
        timeline.to('.navButtonWrapper', {opacity:0})
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
        timeline.to(camera.position, { x: -4.5, y: .8, z: 4,  ease: 'Power1.easeInOut', duration: 2 }, 0)
        timeline.to(controls.target, { x: -2.8, y: .8,z: -2.7, ease: 'Power1.easeInOut', duration: 2,}, 0)
        timeline.to('.projects', {opacity:1})
        timeline.to('.navButtonWrapper', {opacity:1, 
            onComplete: () => {
                controls.enabled = false
            }
        })
        
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
         <Html transform
            wrapperClass="projects"
            distanceFactor={ 1.17 }
            position={ [  -3, .75, -2.05  ] }
           
        >
            <div className="wrapper">
                <div className="slides">
                    <div className="slide slide1">
                        <img src="/images/itzy.png" />
                    
                    </div>
                    <div className="slide slide2">
                        <img src="/images/stranger-things.png" />
                    
                    </div>
                    <div className="slide slide3">
                        <img src="/images/hyundai.png" />
                    
                    </div>
                    <div className="slide slide4">
                        <img src="/images/tasmania.png" />
                    
                    </div>
                </div>
                <div className="navButtonWrapper">
                    <button id="prev_btn" className="prev btn" onClick={prev}>prev</button>
                    <button id="next_btn" className="next btn" onClick={next}>next</button>
                </div>
            </div>
            
        </Html>
        <rectAreaLight
            width={ .5 }
            height={ 1 }
            intensity={ 65 }
            color={ '#ff6900' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ -3, .75, -2.05  ] }
        />
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