import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={0}>
        <Avatar />
      </group>
      <ambientLight intensity={3} />
    </>
  );
};
