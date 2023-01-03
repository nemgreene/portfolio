import React from "react";
import FrameButton from "./FrameButton";

const dict = Array.from("abcdefghijklmnopqrstuvwx");

function FrameButtonArr(props) {
  return (
    <div className="frameButtonArr">
      {dict.map((l, index) => {
        return (
          <FrameButton
            key={l}
            name={l}
            index={index}
            handleHover={(index) => props.handleHover(index)}
            handleExit={(index) => props.handleExit(index)}
          />
        );
      })}
    </div>
  );
}

export default FrameButtonArr;
