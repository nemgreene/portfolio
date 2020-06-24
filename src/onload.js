import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

var converter = require("number-to-words");
const loading = Array(101).fill(" ");
let onloadLength = 4000;

const Onload = (props) => {
  const { number } = useSpring({
    config: { duration: onloadLength },
    number: 100,
    from: { number: 0 },
  });

  const { height } = useSpring({
    config: { duration: 400 },
    height: props.active ? 100 : 0,
    from: { height: 100 },
  });

  const { scroll } = useSpring({
    config: { duration: onloadLength },
    scroll: 2020,
    from: { scroll: 0 },
  });

  useEffect(() => {
    const endOverlay = () => {
      window.scrollTo(0, 0);
      props.loaded();
    };
    setTimeout(() => endOverlay(), onloadLength);
  }, []);

  return (
    <div className="sticky">
      <div className="onloadContainer">
        <animated.div className="offsetContainer">
          <animated.div
            className="onload"
            style={{
              display: height.interpolate((h) => (h < 1 ? "none" : "block")),
              height: height.interpolate((h) => `${h}vh`),
              transform: height.interpolate(
                (h) => `translateY(${100 - h / 2 - 50}vh)`
              ),
              opacity: height.interpolate((h) => (h < 1 ? 0 : 1)),
            }}
          >
            <animated.div
              className="uiContainer"
              style={{
                position: height.interpolate((h) =>
                  h < 1 ? "relative" : "absolute"
                ),
              }}
            >
              <animated.div
                scrollTop={scroll}
                className="loadingBar"
                style={{
                  opacity: height.interpolate((h) => {
                    return h / 100;
                  }),
                }}
              >
                {loading.map((l, i) => (
                  <div className="loadingItem" key={i}>
                    {converter.toWords(i).toUpperCase()}
                  </div>
                ))}
              </animated.div>
              <animated.div className="percentage">
                <animated.span
                  style={{
                    opacity: height.interpolate((h) => {
                      return h / 100;
                    }),
                    height: height.interpolate((h) => "0vh"),
                  }}
                >
                  {number.interpolate((n) => {
                    return Math.floor(n) + "%";
                  })}
                </animated.span>
              </animated.div>
            </animated.div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Onload;
