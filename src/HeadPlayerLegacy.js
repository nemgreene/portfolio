import FrameA from "./img/1.png";
import FrameB from "./img/2.png";
import FrameC from "./img/3.png";
import FrameD from "./img/4.png";
import FrameE from "./img/5.png";
import FrameF from "./img/6.png";
import FrameG from "./img/7.png";
import FrameH from "./img/8.png";
import FrameI from "./img/9.png";
import FrameJ from "./img/10.png";
import FrameK from "./img/11.png";
import FrameL from "./img/12.png";
import FrameM from "./img/13.png";
import FrameN from "./img/14.png";
import FrameO from "./img/15.png";
import FrameP from "./img/16.png";
import FrameQ from "./img/17.png";
import FrameR from "./img/18.png";
import FrameS from "./img/19.png";
import FrameT from "./img/20.png";
import FrameU from "./img/21.png";
import FrameV from "./img/22.png";
import FrameW from "./img/23.png";
import FrameX from "./img/24.png";
import { useSprings, useTrail, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import FrameButtonArr from "./FrameButtonArr";

let GalleryArr = [
  FrameA,
  FrameB,
  FrameC,
  FrameD,
  FrameE,
  FrameF,
  FrameG,
  FrameH,
  FrameI,
  FrameJ,
  FrameK,
  FrameL,
  FrameM,
  FrameN,
  FrameO,
  FrameP,
  FrameQ,
  FrameR,
  FrameS,
  FrameT,
  FrameU,
  FrameV,
  FrameW,
  FrameX,
];

function HeadPlayer() {
  const [springs, springsApi] = useSprings(24, (index) => ({ zIndex: -1 }));
  const [trail, trailApi] = useTrail(24, () => ({ zIndex: -1 }));
  const [frames, changeFrames] = useState(trail);
  const [active, changeActive] = useState("loop");

  useEffect(() => {
    if (isNaN(active)) {
      console.log("looping");
      //   loop gif
      trailApi.start((index) => {
        console.log(index);
        return {
          zIndex: 1,
          loop: { reverse: true },
          config: { duration: 100 },
        };
      });
    } else {
      changeFrames(springs);
      springsApi.start((index) =>
        index === active
          ? { zIndex: 1, immediate: true }
          : { zIndex: -1, immediate: true }
      );
    }
  }, [active]);

  const handleHover = (index) => {
    changeActive(index);
  };
  const handleExit = (index) => {
    changeActive("loop");
  };

  return (
    <div className="headContainer">
      <div className="UIContainer">
        <FrameButtonArr handleHover={handleHover} handleExit={handleExit} />
      </div>
      <div className="headContainerBG" />
      {frames.map((style, index) => (
        <animated.img
          key={index}
          className="headImg"
          style={style}
          src={GalleryArr[index]}
        />
      ))}
    </div>
  );
}

export default HeadPlayer;
