import { Bloom, SSR, EffectComposer } from '@react-three/postprocessing'
import { useControls } from 'leva'

export default function Effects() 
{
    const {bloomIntensity, bloomThreshold} = useControls(
        {
        bloomIntensity: {
            value: 1,
            min: 0,
            max: 10,
            step: 1,
        },
        bloomThreshold: {
            value: 1,
            min: 0,
            max: 10,
            step: 1,
        }})
    
    return <EffectComposer >
        {/* <SSR 
            intensity={ 0.45 }
            exponent={ 1 }
            distance={ 10 }
            fade={ 10 }
            roughnessFade={ 1 }
            thickness={ 10 }
            ior={ 0.45 }
            maxRoughness={ 1 }
            maxDepthDifference={ 10 }
            blend={ 0.95 }
            correction={ 1 }
            correctionRadius={ 1 }
            blur={ 0 }
            blurKernel={ 1 }
            blurSharpness={ 10 }
            jitter={ 0.75 }
            jitterRoughness={ 0.2 }
            steps={ 40 }
            refineSteps={ 5 }
            missedRays={ true }
            useNormalMap={ true }
            useRoughnessMap={ true }
            resolutionScale={ 1 }
            velocityResolutionScale={ 1 }
        /> */}
           <Bloom
                mipmapBlur
                intensity={ bloomIntensity }
                luminanceThreshold={ bloomThreshold }
                luminanceSmoothing={2} height={500}
            />
        
    </EffectComposer>
}