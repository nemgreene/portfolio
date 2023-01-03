import React from "react";
import tab from "../img/radialMenuTab.png";

function FrameButtons(props) {
  const letters = Array.from("abcdefghijklmnopqrstuvwx");

  const localRotate = () => {
    let ret = letters.indexOf(props.name);
    return window.innerWidth > 419 ? ret * 4 - 45 : ret * 4.3 - 52;
  };
  const longer = Array.from("aflrx");

  return (
    <div className="frameButtonImgContainer">
      <div
        className="radialMenuTabs"
        style={{
          transform: `rotate(${localRotate()}deg)`,
          transformOrigin: `0% 0%`,
          width: `${longer.indexOf(props.name) !== -1 ? "1.5vh" : "1vh"}`,
        }}
      >
        <div
          className="hoverContainer"
          onMouseEnter={() => props.handleHover(props.index)}
          onMouseLeave={() => props.handleExit(props.index)}
          name={props.name}
        >
          <div
            name={props.name}
            className="radialMenuImg"
            style={{
              backgroundImage: `url(${tab})`,
              height: "2vh",
              width: `${longer.indexOf(props.name) !== -1 ? "3.5vh" : "2.5vh"}`,
            }}
          />
        </div>
      </div>
    </div>
    // <div className="frameButtonImgContainer">
    //   <div
    //     style={
    //       {
    //         // transform: `rotate(${localRotate()}deg)`,
    //         // transformOrigin: `0% 0%`,
    //         // width: `${longer.indexOf(props.name) !== -1 ? "1.5vh" : "1vh"}`,
    //         // width: `${longer.indexOf(props.name) !== -1 ? "1vh" : "1vh"}`,
    //       }
    //     }
    //     className="radialMenuTabs"
    //   >
    //     <div
    //       className="hoverContainer"
    //       onMouseEnter={props.handleHover}
    //       onMouseLeave={props.handleExit}
    //       name={props.name}
    //     >
    //       <div
    //         name={props.name}
    //         className="radialMenuImg"
    //         style={{
    //           backgroundImage: `url(${tab})`,
    //           width: `${longer.indexOf(props.name) !== -1 ? "3.5vh" : "2.5vh"}`,
    //           width: ``,
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default FrameButtons;
