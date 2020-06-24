import React from "react";
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

const HeadImg = (props) => {
  console.log(props.imageSet);

  return (
    <div className="headContainer">
      <img
        className="headImg"
        src={props.imageSet}
        alt="head"
        key="gif"
        style={{ opacity: `${isNaN(props.imageSet) ? 1 : 0}` }}
      ></img>
      {GalleryArr.map((img) => {
        return (
          <img
            className="headImg"
            src={img}
            alt="head"
            key={img}
            style={{ opacity: img === GalleryArr[props.imageSet] ? 1 : 0 }}
          ></img>
        );
      })}
    </div>
  );
};

export default HeadImg;
