
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
export default function Avatar() 
{
    const model = useGLTF( 'models/avatarWithAnimations.glb')
    const animations = useAnimations(model.animations, model.scene)

    useEffect(() =>
    {
        const action = animations.actions.HandWave
        console.log(animations.actions)
        action.play()
    }, [])

    // useEffect(() => {
    //     actions[names[animationIndex]].reset().fadeIn(0.5).play();
    //     return () => {
    //       actions[names[animationIndex]].fadeOut(0.5);
    //     };
    //   }, [animationIndex]);

    return <primitive object={model.scene} scale={1} position={[0,-2,0]}  />
}