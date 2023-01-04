import { Text } from '@react-three/drei'

export default function Name() 
{
    return <Text 
        font="/fonts/bebas-neue-v9-latin-regular.woff"
        scale={ 1.5 }
        maxWidth={ 0.25 }
        lineHeight={ 0.75 }
        textAlign="right"
        position={ [ -1.3, -1.9, 4 ] }
        rotation-x={ -  Math.PI * .5}
        color={"black"}
    >   
        Daniel Stavrakis
        <meshBasicMaterial  tonnedMap={false}/>
    </Text>
}