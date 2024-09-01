import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  return (
    <div className="w-full h-screen ">
      <div className="navbar absolute line top-0 left-1/2 -translate-x-1/2 flex gap-10 pt-10 pb-3 capitalize">
        {[
          "iphone",
          "ipad",
          "services",
          "mac",
          "products",
          "ipod",
          "iphone",
          "ipad",
          "services",
          "mac",
          "products",
          "ipod",
        ].map((elem) => (
          <a className="text-xl/2  text-white font-[400]">{elem}</a>
        ))}
      </div>

      <div className=" text-white flex flex-col items-center absolute top-36 left-1/2 -translate-x-1/2 ">
        <h3 className=" masked text-8xl font-[700] tracking-tighter">
          Macbook Pro
        </h3>
        <h5 className="font-[500]">Oh so pro</h5>
        <p className="text-center w-3/4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          inventore at repudiandae!
        </p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -5, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
