import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy';

export default function Nodetoy() {

  return  <>
        <mesh>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <NodeToyMaterial url="https://draft.nodetoy.co/tPljOWRl8bHhJMi6" />
        </mesh>
        <NodeToyTick/>
    </>
}
