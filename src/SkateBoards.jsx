import { useGLTF } from "@react-three/drei"
export default function Skateboards(){
    const skateboards = useGLTF('/models/skateBoards.glb')
    return <primitive object={skateboards.scene} position={[0, -2, 0]}></primitive>
}