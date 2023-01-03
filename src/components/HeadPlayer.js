import React, { useEffect, useState } from "react";
import FrameA from "../img/1.png";
import FrameB from "../img/2.png";
import FrameC from "../img/3.png";
import FrameD from "../img/4.png";
import FrameE from "../img/5.png";
import FrameF from "../img/6.png";
import FrameG from "../img/7.png";
import FrameH from "../img/8.png";
import FrameI from "../img/9.png";
import FrameJ from "../img/10.png";
import FrameK from "../img/11.png";
import FrameL from "../img/12.png";
import FrameM from "../img/13.png";
import FrameN from "../img/14.png";
import FrameO from "../img/15.png";
import FrameP from "../img/16.png";
import FrameQ from "../img/17.png";
import FrameR from "../img/18.png";
import FrameS from "../img/19.png";
import FrameT from "../img/20.png";
import FrameU from "../img/21.png";
import FrameV from "../img/22.png";
import FrameW from "../img/23.png";
import FrameX from "../img/24.png";
import bgRings from "../img/bgHome.png";

import { useSpringRef, animated, useTransition } from "@react-spring/web";
import FrameButtonArr from "./FrameButtonArr";

let galleryArr = [
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

export default function HeadPlayer() {
  const [GalleryArr, cahngeGalleryArr] = useState(galleryArr);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImg, changeActiveImg] = useState(GalleryArr[activeIndex]);
  const [reverse, changeReverse] = useState(0);
  const [pause, changePause] = useState(false);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: {
      zIndex: -1,
    },
    enter: {
      zIndex: 1,
    },
    leave: {
      zIndex: -1,
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item && !pause) {
        console.log(activeIndex, pause);
        if (activeIndex === GalleryArr.length - 2) {
          changeReverse(true);
        }
        if (activeIndex === 1) {
          changeReverse(false);
        }
        if (reverse || activeIndex === GalleryArr.length - 1) {
          setActiveIndex(
            activeIndex === 0 ? GalleryArr.length - 1 : activeIndex - 1
          );
        } else {
          setActiveIndex(
            activeIndex === GalleryArr.length - 1 ? 0 : activeIndex + 1
          );
        }
      }
    },
    // exitBeforeEnter: true,
    config: {
      duration: 100,
    },

    delay: 0,
    ref: springApi,
  });

  const exitHandler = (index) => {
    setActiveIndex(reverse ? index - 1 : index + 1);
    console.log("exit", index);
    changePause(false);
    springApi.stop();
  };
  const hoverHandler = (index) => {
    setActiveIndex(reverse ? index - 1 : index + 1);
    console.log("Hover handler", index, pause);
    changePause(true);
    changeActiveImg(galleryArr[index]);
  };

  useEffect(() => {
    console.log("activeIndex useEffect", pause);
    if (!pause) {
      springApi.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
  useEffect(() => {
    console.log("pause useEffect", pause);
    if (!pause) {
      springApi.start();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pause]);

  return (
    <div className="headPlayerContainer">
      <div className="frameButtonContainer">
        <FrameButtonArr
          handleHover={(index) => hoverHandler(index)}
          handleExit={(index) => exitHandler(index)}
        />
      </div>
      <div className="headPlayerBg">
        <div
          className="headPlayerBGRing"
          style={{
            backgroundImage: `url(${bgRings})`,
          }}
        />
      </div>
      {pause ? (
        <div className="headPlayer">
          <div className="headPlayerFrame">
            <img alt="head" className="headPlayerFrameImg" src={activeImg} />
          </div>
        </div>
      ) : (
        <div className="headPlayer">
          {transitions((springs, item) => (
            <animated.div className="headPlayerFrame" style={{ ...springs }}>
              <img
                alt="head"
                className="headPlayerFrameImg"
                src={GalleryArr[item]}
              />
            </animated.div>
          ))}
        </div>
      )}
    </div>
  );
}
