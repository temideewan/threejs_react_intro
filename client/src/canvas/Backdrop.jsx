import { easing } from "maath"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0,0,-0.14]}
      temporal
      frames={60}
      alphaTest={0.45}
      scale={10}
      rotation={[Math.PI / 2, 0,0]}
    >
      <RandomizedLight 
        amount={4}
        radius={10}
        intensity={0.65}
        ambient={0.45}
        position={[5,5,-10]}
      />
      <RandomizedLight 
        amount={4}
        radius={19}
        intensity={0.65}
        ambient={0.25}
        position={[-5,5, -9]}
      />
      {/* <RandomizedLight /> */}
    </AccumulativeShadows>
  )
}

export default Backdrop
