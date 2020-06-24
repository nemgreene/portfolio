import React from "react";
import FrameButton from "./FrameButton";

const dict = Array.from("abcdefghijklmnopqrstuvwx");

class FrameButtonArr extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="frameButtonArr">
        {dict.map((l) => {
          return (
            <FrameButton
              key={l}
              name={l}
              onChange={this.props.handleHover}
              onExit={this.props.handleExit}
            />
          );
        })}
      </div>
    );
  }
}

export default FrameButtonArr;
