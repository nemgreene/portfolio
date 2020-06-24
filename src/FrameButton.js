import React from "react";
import tab from "./radialMenuTab.png";

function FrameButtons(props) {
  const letters = Array.from("abcdefghijklmnopqrstuvwx");

  const localRotate = () => {
    let ret = letters.indexOf(props.name);
    return window.innerWidth > 419 ? ret * 4 - 45 : ret * 4.3 - 52;
  };
  const longer = Array.from("aflrx");

  return (
    <div>
      <div
        style={{
          transform: `rotate(${localRotate()}deg)`,
          transformOrigin: `0% 0%`,
          width: `${longer.indexOf(props.name) !== -1 ? "1.5vh" : "1vh"}`,
        }}
        className="radialMenuTabs"
      >
        <div
          className="hoverContainer"
          onMouseEnter={props.onChange}
          onMouseLeave={props.onExit}
          name={props.name}
        >
          <div
            name={props.name}
            className="radialMenuImg"
            style={{
              backgroundImage: `url(${tab})`,
              width: `${longer.indexOf(props.name) !== -1 ? "3.5vh" : "2.5vh"}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FrameButtons;
