import { Text } from '@react-three/drei'
import useApp from './useApp'

export default function SkillstTitle() 
{
    const skillsCameraAngle = useApp((state) => state.skillsCameraAngle)

   return <Text 
    onClick={skillsCameraAngle}
    font="/fonts/Thunderstorm.otf"
    scale={ 7 }
    maxWidth={ 0.25 }
    lineHeight={ 0.75 }
    textAlign="right"
    position={ [ .4, 0, -2.6 ] }
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
    SKILLS
    <meshBasicMaterial  tonnedMap={false}/>
</Text>
}