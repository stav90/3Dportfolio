
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useState } from 'react'
import useApp from './useApp'

export default function Avatar() 
{
    const model = useGLTF( 'models/avatarWithAnimations-transformed.glb')
    const {actions, names} = useAnimations(model.animations, model.scene)
    let [animationIndex, setAnimationIndex] = useState(1);
    
    const makeAvatarDance = () => {
        setAnimationIndex(0)
    }

    const makeAvatarWave = () => {
        setAnimationIndex(1)
    }

    useEffect(() =>
    {
        actions[names[animationIndex]].reset().fadeIn(0.5).play();
        return () => {
            actions[names[animationIndex]].fadeOut(0.5);
        };
    }, [animationIndex])

    useEffect(() => {
        const unsubscribeReset = useApp.subscribe(
            (state) => state.currentAnimation,
            (value) => {
                console.log('current animation' , value)
                if(value === 'dance'){
                    makeAvatarDance()
                }
                if(value === 'default'){
                    makeAvatarWave()
                }
            }
        )
        return () => {
            unsubscribeReset()
        }
    })
;

    return <primitive  object={model.scene} scale={1} position={[0,-2.1,0]} />
}