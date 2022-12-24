

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useControls } from 'leva'

export default function RoomModel(props) {
    const textureProps = useTexture({
        // map: '/textures/bricks/Stylized_Bricks_001_basecolor.jpg',
        // displacementMap: '/textures/bricks/Stylized_Bricks_001_height.png',
        normalMap: '/textures/bricks/Stylized_Bricks_001_normal.jpg',
        roughnessMap: '/textures/bricks/Stylized_Bricks_001_roughness.jpg',
        aoMap: '/textures/bricks/Stylized_Bricks_001_ambientOcclusion.jpg',
    })

    // textureProps.map.repeat.set(2, 2);
    textureProps.normalMap.repeat.set(2, 2);
    textureProps.roughnessMap.repeat.set(2, 2);
    textureProps.aoMap.repeat.set(2, 2);
    // textureProps.map.wrapS = textureProps.map.wrapT = THREE.RepeatWrapping;
    textureProps.normalMap.wrapS = textureProps.normalMap.wrapT = THREE.RepeatWrapping;
    textureProps.roughnessMap.wrapS = textureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
    textureProps.aoMap.wrapS = textureProps.aoMap.wrapT = THREE.RepeatWrapping;

  const { nodes, materials } = useGLTF("/models/portfolio2.glb");
  return (
    <group {...props} dispose={null} position={[0, -2, 0]}>
    <mesh
      name="plant2"
      geometry={nodes.plant2.geometry}
      material={materials.Aqua}
      position={[-4.73, 5.42, -2.24]}
      rotation={[0, 0.7, 0]}
      scale={0.15}
    >
        <meshStandardMaterial color={ [ 48/266, 1, 200/266 ] } toneMapped={ false } />
    </mesh>
    <mesh
      name="plant2001"
      geometry={nodes.plant2001.geometry}
      material={materials.Yellow}
      position={[-4.73, 5.42, -2.24]}
      rotation={[0, 0.7, 0]}
      scale={0.15}
    />
    <mesh
      name="plant2002"
      geometry={nodes.plant2002.geometry}
      material={materials.Aqua}
      position={[2.75, 1.21, -0.08]}
      rotation={[0, 0.7, 0]}
      scale={0.15}
      >
        <meshStandardMaterial color={ [ 48/266, 1, 200/266 ] } toneMapped={ false } />
      </mesh>
    <mesh
      name="plant2003"
      geometry={nodes.plant2003.geometry}
      material={materials.Yellow}
      position={[2.75, 1.39, -0.08]}
      rotation={[0, 0.7, 0]}
      scale={0.15}
    />
    <group
      name="Chair"
      position={[-2.82, 0, 0.01]}
      rotation={[0, 0.38, 0]}
      scale={1.17}
    >
      <mesh
        name="Plane017"
        geometry={nodes.Plane017.geometry}
        material={materials["dark purple"]}
      />
      <mesh
        name="Plane017_1"
        geometry={nodes.Plane017_1.geometry}
        material={materials.Yellow}
      />
      <mesh
        name="Chair_Cushion"
        geometry={nodes.Chair_Cushion.geometry}
        material={materials.Yellow}
      />
    </group>
    <group name="room" position={[2, 0, -2]} scale={[1, 1.33, 1]}>
      <mesh
        name="Vert002"
        geometry={nodes.Vert002.geometry}
        material={materials["dark purple"]}
      />
      <mesh
        name="Vert002_1"
        geometry={nodes.Vert002_1.geometry}
        material={materials["darkest purple"]}
      />
      <mesh
        name="Vert002_2"
        geometry={nodes.Vert002_2.geometry}
        material={materials["light purple"]}
      />
      <mesh
        name="Cube003"
        geometry={nodes.Cube003.geometry}
        material={materials.Aqua}
        position={[-0.13, 0.38, 4.27]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1, 0.75, 1]}
      />
      <mesh
        name="Cube006"
        geometry={nodes.Cube006.geometry}
        material={materials.Yellow}
        position={[-0.13, 0.35, 4.27]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1, 0.75, 1]}
      />
      <group
        name="Cube007"
        position={[-0.13, 0.38, 4.27]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1, 0.75, 1]}
      >
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials["dark purple"]}
        />
        <mesh
          name="Cube011_1"
          geometry={nodes.Cube011_1.geometry}
          material={materials.Yellow}
        />
        <mesh
          name="Cube011_2"
          geometry={nodes.Cube011_2.geometry}
          material={materials.Aqua}
        />
      </group>
      <mesh
        name="Display"
        geometry={nodes.Display.geometry}
        material={materials["Black.002"]}
        position={[-4.99, 1.49, -0.14]}
        scale={[1.28, 0.96, 1.28]}
      />
      <mesh
        name="Keyboard"
        geometry={nodes.Keyboard.geometry}
        material={materials["darkest purple"]}
        position={[-4.99, 1.44, 0.6]}
        rotation={[0, 0.01, 0]}
        scale={[1.21, 0.91, 1.21]}
      />
      <mesh
        name="Monitor"
        geometry={nodes.Monitor.geometry}
        material={materials["dark purple"]}
        position={[-4.99, 1.49, -0.14]}
        scale={[1.28, 0.96, 1.28]}
      />
      <mesh
        name="Monitor_Stand"
        geometry={nodes.Monitor_Stand.geometry}
        material={materials["dark purple"]}
        position={[-4.99, 1.49, -0.14]}
        scale={[1.28, 0.96, 1.28]}
      />
      <mesh
        name="Monitor001"
        geometry={nodes.Monitor001.geometry}
        material={materials["dark purple"]}
        position={[-4.99, 1.49, -0.14]}
        scale={[1.28, 0.96, 1.28]}
      />
      <mesh
        name="Mouse"
        geometry={nodes.Mouse.geometry}
        material={materials["darkest purple"]}
        position={[-4.27, 1.44, 0.54]}
        rotation={[0, -0.37, 0]}
        scale={[1.22, 0.92, 1.22]}
      />
      <mesh
        name="Plane043"
        geometry={nodes.Plane043.geometry}
        material={materials.Black}
        position={[-4.99, 1.44, 0.6]}
        rotation={[0, 0.01, 0]}
        scale={[1.21, 0.91, 1.21]}
      />
      <group
        name="Frames"
        position={[-2.78, 2.63, -0.72]}
        rotation={[Math.PI / 2, 0, 0.02]}
        scale={[1, 1, 0.75]}
      >
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["dark purple"]}
        />
        <mesh
          name="Plane_1"
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          name="Plane_2"
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="Plane_3"
          geometry={nodes.Plane_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          name="Plane_4"
          geometry={nodes.Plane_4.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          name="Plane_5"
          geometry={nodes.Plane_5.geometry}
          material={materials["Material.009"]}
        />
      </group>
    </group>
    <mesh
      name="featureWall"
      geometry={nodes.featureWall.geometry}
      material={materials["darkest purple"]}
      position={[2, 0, -2]}
      scale={[1, 1.33, 1]}
    >
        <meshStandardMaterial {...textureProps} color={'#412E95'}/>
    </mesh>
    <group name="room002" position={[2, 0, -2]} scale={[1, 1.33, 1]}>
      <mesh
        name="Vert007"
        geometry={nodes.Vert007.geometry}
        material={materials["dark purple"]}
      />
      <mesh
        name="Vert007_1"
        geometry={nodes.Vert007_1.geometry}
        material={materials.Yellow}
      />
      <mesh
        name="Vert007_2"
        geometry={nodes.Vert007_2.geometry}
        material={materials.Aqua}
      />
    </group>
    <mesh
      name="room003"
      geometry={nodes.room003.geometry}
      material={materials.Aqua}
      position={[2, 0, -2]}
      scale={[1, 1.33, 1]}
    />
    <group name="room001" position={[2, 0, -2]} scale={[1, 1.33, 1]}>
      <mesh
        name="Vert004"
        geometry={nodes.Vert004.geometry}
        material={materials["dark purple"]}
      />
      <mesh
        name="Vert004_1"
        geometry={nodes.Vert004_1.geometry}
        material={materials.Yellow}
      />
    </group>
    <group name="NikeLogo" position={[2.41, 4.47, 4.94]}>
      <mesh
        name="NikeLogo_1"
        geometry={nodes.NikeLogo_1.geometry}
        material={materials["nikeLogo.002"]}
      />
      <mesh
        name="NikeLogo_2"
        geometry={nodes.NikeLogo_2.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo_3"
        geometry={nodes.NikeLogo_3.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="NikeLogo_4"
        geometry={nodes.NikeLogo_4.geometry}
        material={materials["Material.017"]}
      />
      <mesh
        name="NikeLogo_5"
        geometry={nodes.NikeLogo_5.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo_6"
        geometry={nodes.NikeLogo_6.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo_7"
        geometry={nodes.NikeLogo_7.geometry}
        material={materials["medialQuarter.002"]}
      />
      <mesh
        name="NikeLogo_8"
        geometry={nodes.NikeLogo_8.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo_9"
        geometry={nodes.NikeLogo_9.geometry}
        material={materials["tongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo_10"
        geometry={nodes.NikeLogo_10.geometry}
        material={materials["topTongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo_11"
        geometry={nodes.NikeLogo_11.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo_12"
        geometry={nodes.NikeLogo_12.geometry}
        material={materials.Aqua}
      />
    </group>
    <group name="NikeLogo001" position={[2.41, 3.4, 4.94]}>
      <mesh
        name="NikeLogo001_1"
        geometry={nodes.NikeLogo001_1.geometry}
        material={materials["nikeLogo.002"]}
      />
      <mesh
        name="NikeLogo001_2"
        geometry={nodes.NikeLogo001_2.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo001_3"
        geometry={nodes.NikeLogo001_3.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="NikeLogo001_4"
        geometry={nodes.NikeLogo001_4.geometry}
        material={materials["Material.017"]}
      />
      <mesh
        name="NikeLogo001_5"
        geometry={nodes.NikeLogo001_5.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo001_6"
        geometry={nodes.NikeLogo001_6.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo001_7"
        geometry={nodes.NikeLogo001_7.geometry}
        material={materials["medialQuarter.002"]}
      />
      <mesh
        name="NikeLogo001_8"
        geometry={nodes.NikeLogo001_8.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo001_9"
        geometry={nodes.NikeLogo001_9.geometry}
        material={materials["tongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo001_10"
        geometry={nodes.NikeLogo001_10.geometry}
        material={materials["topTongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo001_11"
        geometry={nodes.NikeLogo001_11.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo001_12"
        geometry={nodes.NikeLogo001_12.geometry}
        material={materials.Aqua}
      />
    </group>
    <group name="NikeLogo002" position={[2.41, 2.49, 4.94]}>
      <mesh
        name="NikeLogo002_1"
        geometry={nodes.NikeLogo002_1.geometry}
        material={materials["nikeLogo.002"]}
      />
      <mesh
        name="NikeLogo002_2"
        geometry={nodes.NikeLogo002_2.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo002_3"
        geometry={nodes.NikeLogo002_3.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="NikeLogo002_4"
        geometry={nodes.NikeLogo002_4.geometry}
        material={materials["Material.017"]}
      />
      <mesh
        name="NikeLogo002_5"
        geometry={nodes.NikeLogo002_5.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo002_6"
        geometry={nodes.NikeLogo002_6.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo002_7"
        geometry={nodes.NikeLogo002_7.geometry}
        material={materials["medialQuarter.002"]}
      />
      <mesh
        name="NikeLogo002_8"
        geometry={nodes.NikeLogo002_8.geometry}
        material={materials["Material.014"]}
      />
      <mesh
        name="NikeLogo002_9"
        geometry={nodes.NikeLogo002_9.geometry}
        material={materials["tongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo002_10"
        geometry={nodes.NikeLogo002_10.geometry}
        material={materials["topTongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo002_11"
        geometry={nodes.NikeLogo002_11.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo002_12"
        geometry={nodes.NikeLogo002_12.geometry}
        material={materials["Material.014"]}
      />
    </group>
    <group name="NikeLogo003" position={[2.41, 1.58, 4.94]}>
      <mesh
        name="NikeLogo003_1"
        geometry={nodes.NikeLogo003_1.geometry}
        material={materials["nikeLogo.002"]}
      />
      <mesh
        name="NikeLogo003_2"
        geometry={nodes.NikeLogo003_2.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo003_3"
        geometry={nodes.NikeLogo003_3.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="NikeLogo003_4"
        geometry={nodes.NikeLogo003_4.geometry}
        material={materials["Material.017"]}
      />
      <mesh
        name="NikeLogo003_5"
        geometry={nodes.NikeLogo003_5.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo003_6"
        geometry={nodes.NikeLogo003_6.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo003_7"
        geometry={nodes.NikeLogo003_7.geometry}
        material={materials["medialQuarter.002"]}
      />
      <mesh
        name="NikeLogo003_8"
        geometry={nodes.NikeLogo003_8.geometry}
        material={materials["Material.014"]}
      />
      <mesh
        name="NikeLogo003_9"
        geometry={nodes.NikeLogo003_9.geometry}
        material={materials["tongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo003_10"
        geometry={nodes.NikeLogo003_10.geometry}
        material={materials["topTongueMaterial.002"]}
      />
      <mesh
        name="NikeLogo003_11"
        geometry={nodes.NikeLogo003_11.geometry}
        material={materials.Aqua}
      />
      <mesh
        name="NikeLogo003_12"
        geometry={nodes.NikeLogo003_12.geometry}
        material={materials["Material.014"]}
      />
      
    </group>
  </group>
  );
}

useGLTF.preload("/models/portfolio.glb");
