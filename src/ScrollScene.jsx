import { Canvas, useThree } from "@react-three/fiber";
import { KeepStencilOp, Vector3 } from "three";
import {
  orchestrate,
  helpers,
  useRegister,
  useThreeCamera,
  Scroll
} from "jongleur";
import { KeyboardControls } from "@react-three/drei";

const clips = orchestrate(
  {
    // box: { position: new Vector3(0, 0, 0), visible: true }, // a normal three.js Object3D
    camera: { position: new Vector3( -11, 3, 12 ), lookAt: new Vector3(0, 0, 0) }, // a camera object (uses the lookAt field)
    div: { opacity: 0 } // HTML elements can be animated aswell
  },
  {
    // box: {
    //   0.5: { visible: helpers.state(true) },
    //   1: { position: helpers.state(new Vector3(0, 1, 0)) }
    // }, // box gets visible halfway through, and moves up as well
    camera: { 
        1: {position: helpers.state(new Vector3( -5, 2, 1.45,)), lookAt: helpers.state(new Vector3(2.7, 1, 1.45)) },
        2: {position: helpers.state(new Vector3( .2, 1, 6,)), lookAt: helpers.state(new Vector3( .2, 1,-2.6,)) },
        3: {position: helpers.state(new Vector3( -3, .8, 4)), lookAt: helpers.state(new Vector3( -3, .8,-2.7,)) } 
    }, 
    div: { 
        0.8: { opacity: helpers.inherit }, 
        1: { opacity: helpers.state(1) },
        1.1: { opacity: helpers.state(0)}
    }, // div stays invisible for 80% of the animation, then transitions to full opacity
    // camera: { 2: {position: new Vector3( .2, 0, -2.6,), lookAt:new Vector3( .2, .5,-2.6,) } }, 

    
  },
  { damping: 10, interpolation: "ease-in-out" }
);

const Scene = () => {
  const register = useRegister(clips);
  useThreeCamera(clips, "camera"); // camera is an object that is created by r3f
  const camera = useThree(({camera}) => {
    console.log(camera)
  })
  return null
//   (
//     <group>
//       <mesh ref={register("box")}>
//         {" "}
//         {/* This will be the box to be animated */}
//         <meshStandardMaterial color="#5B21B6" />
//         <boxGeometry />
//       </mesh>
//     </group>
//   );
};

export const ScrollScene = () => {
  const register = useRegister(clips);

  return (
    <Scroll.Controls clips={clips}>
      <Scene />
      {/* This will lock the browser to the start and the end via the CSS scroll-snap API */}
      <Scroll.Snaps points={[0.5, 1.5, 2.5, 3.5]} />
      <Scroll.Html fixed>
        <Scroll.At at={.5} align={"center"}>
          <div className="about-me-text" ref={register("div")}><p>As a creative web developer with a strong background in front-end, I am passionate about using my skills to create visually stunning and user-friendly websites. In addition to my technical skills, I am also a highly creative individual with a keen eye for design. This allows me to create websites that not only function well, but also have a unique and engaging visual style.</p></div>
        </Scroll.At>
      </Scroll.Html>
    </Scroll.Controls>
  );
};