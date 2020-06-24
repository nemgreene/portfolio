import React from "react";
import { useSpring, animated } from "react-spring";

const Contact = () => {
  const props = useSpring({
    config: { mass: 200 },
    number: 24,
    from: { number: 0 },
  });

  const dict1 = Array.from("(%C?CCC/(CC%()(cC");
  const dict2 = Array.from("o0/G6@$O0UO");
  const dict3 = Array.from("N}nZ$NN$N");
  const dict4 = Array.from("Ttt%TtT");
  const dict5 = Array.from("Aaa^AA");
  const dict6 = Array.from("@C%(C");
  const dict7 = Array.from("TtT");
  return (
    <div class="contactContainer">
      <animated.span>
        {props.number.interpolate((y) => dict1[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict2[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict3[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict4[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict5[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict6[Math.floor(y)])}
      </animated.span>
      <animated.span>
        {props.number.interpolate((y) => dict7[Math.floor(y)])}
      </animated.span>
    </div>
  );
};

export default Contact;
