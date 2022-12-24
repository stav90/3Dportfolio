import gsap from 'gsap'
import { useThree } from '@react-three/fiber'
import useApp from './useApp'
import { useEffect } from 'react'

export default function BackButton() {
    // resetCameraAngle = () => {
    //     const timeline = gsap.timeline()

    // }
    const reset = useApp((state) => state.resetCameraAngle)
    return <div className="interface">
       
            <button className="back-button" onClick={reset}>
                 <img  style={{width: '100%'}} src="/images/backbtn.png" />
            </button>
        </div>
}

