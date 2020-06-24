import React, { useState } from "react";
import head from "./img/head.gif";
import FrameButtonArr from "./FrameButtonArr";
import { useSpring, animated } from "react-spring";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import animateScrollTo from "animated-scroll-to";

import bg from "./img/bgHome.png";
import HeadImg from "./headImg";
import scroll from "./img/downArrow.png";
import center from "./img/toast.jpg";
import thumb1 from "./img/thumb1.png";
import thumb2 from "./img/thumb2.png";
import thumb3 from "./img/thumb3.png";
import thumb4 from "./img/thumb4.png";
import hand from "./img/manito1.png";
import gmail from "./img/gm.png";
import art from "./img/as.png";
import git from "./img/gh.png";
import helloWorld from "./img/helloWorld.png";

import AboutUnderlay from "./About";
import ProjectsUnderlay from "./Projects";
import ContactUnderlay from "./Contact";
import Onload from "./onload";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
];
/* const imgGaller = [
  center,
  head,
  scroll,
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  hand,
  gmail,
  art,
  git,
  bg,
]; */

const Head = () => {
  const [image, cImage] = useState(head);
  const [translateCol, cTranslateCol] = useState(false);
  const [activeMenu, cActiveMenu] = useState(null);
  const [activeMenuOpen, cActiveMenuOpen] = useState(false);
  const [flipIt, cFlipIt] = useState(false);
  const [underlayObj, cUnderlayObj] = useState(<ContactUnderlay />);
  const [overlayActive, cOverlayActive] = useState(true);

  const loaded = () => {
    cOverlayActive(false);
  };

  useScrollPosition(({ prevPos, currPos }) => {
    let flipIndex = window.innerWidth <= 500 ? -350 : -500;
    currPos.y < flipIndex ? cFlipIt(true) : cFlipIt(false);
  });

  const handleHover = (e) => {
    let name = e.target.getAttribute("name");
    let index = letters.indexOf(name);
    console.log(name, index);
    cImage(index);
  };

  const handleExit = (event) => {
    cImage(head);
  };

  const handleClick = (targ) => {
    animateScrollTo(window.innerHeight);
    if (activeMenuOpen) {
      cActiveMenu(targ);
    }

    if (!activeMenuOpen && activeMenu !== targ) {
      cActiveMenu(targ);
      cActiveMenuOpen(true);
      cTranslateCol((t) => !t);
    }
    if (activeMenuOpen && activeMenu === targ) {
      cActiveMenu(null);
      cActiveMenuOpen(false);
      cTranslateCol((t) => !t);
    }
    if (targ === null) {
      cActiveMenu(null);
      cActiveMenuOpen(false);
      cTranslateCol(false);
    }
  };
  const { y } = useSpring({
    from: { y: 0 },
    y: translateCol ? 52 : 0,
  });
  const { flip } = useSpring({
    from: { flip: 0 },
    flip: flipIt ? 90 : 0,
  });

  const { opacity } = useSpring({
    opacity: activeMenuOpen ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <div className="container">
      <div className="stickyDiv">
        <Onload active={overlayActive} loaded={loaded} />
      </div>
      {/*       <div className="testContainer">
        {overlayActive
          ? imgGaller.map((pic) => {
              return (
                <div
                  className="img"
                  key={`${pic}`}
                  style={{
                    height: "5vw",
                    width: "5vw",
                    backgroundSize: "contain",
                    backgroundImage: `url(${pic})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              );
            })
          : null}
      </div> */}
      <div
        className="page1"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="UIContainer">
          <div className="UIContainer1">
            <div
              className="helloWorldImg"
              style={{ backgroundImage: `url(${helloWorld})` }}
            ></div>
            <HeadImg imageSet={image} />
          </div>
          <div className="UIContainer2">
            <FrameButtonArr handleHover={handleHover} handleExit={handleExit} />
          </div>
        </div>
      </div>
      <footer className="scrollPrompt">
        <animated.img
          className="scrollImg"
          src={scroll}
          style={{
            transform: flip.interpolate(
              (flip) =>
                `translateY(${flip / 11 + -5}vh) 
                ${
                  window.innerWidth < 500
                    ? `translateX(${flipIt ? flip / 4.5 : (flip / 90) * 15}vh)`
                    : ""
                }
                 rotate(${flip * 2}deg)`
            ),
            zIndex: 0,
            position: "absolute",
          }}
          onClick={() => {
            handleClick(null);
            animateScrollTo(flipIt ? 0 : window.innerHeight * 2);
          }}
          alt="down"
        />
      </footer>
      <div className="page2">
        <div className="page2Contaner">
          <animated.div
            className="centerpeice"
            style={{
              transform: y.interpolate((y) =>
                window.innerWidth <= 500
                  ? `translateX(-${y / 2}%)`
                  : window.innerWidth < 1025 && window.innerWidth > 500
                  ? `translateY(-${y / 3.5}vh)`
                  : `translateY(-${y}%)`
              ),
            }}
          >
            <div
              className="toastImg"
              style={{
                backgroundImage: `url(${center})`,
              }}
            />
            <animated.div
              style={{ opacity: y.interpolate((y) => y / 100) }}
              className="centerPeiceOverlay"
            />
            <div className="page2Row">
              <div
                className="pg2Col1"
                onClick={() => {
                  cUnderlayObj(AboutUnderlay);
                  handleClick(1);
                }}
              >
                <div className="colOverlay1"></div>
                <div className="pg2ColText">About.</div>
              </div>
              <div
                className="pg2Col2"
                onClick={() => {
                  cUnderlayObj(
                    ProjectsUnderlay({
                      thumb1: thumb1,
                      thumb2: thumb2,
                      thumb3: thumb3,
                      thumb4: thumb4,
                    })
                  );
                  handleClick(2);
                }}
              >
                <div className="colOverlay2"></div>
                <div className="pg2ColText">Projects.</div>
              </div>
              <div
                className="pg2Col3"
                onClick={() => {
                  cUnderlayObj(
                    ContactUnderlay({
                      hand: hand,
                      gmail: gmail,
                      art: art,
                      git: git,
                    })
                  );
                  handleClick(3);
                }}
              >
                <div className="colOverlay3"></div>
                <div className="pg2ColText">Contact.</div>
              </div>
            </div>
          </animated.div>
          <animated.div
            style={{
              transform: y.interpolate((y) =>
                window.innerWidth > 500
                  ? `translateY(${y}%)`
                  : `translateX(${y * 0.94}%)`
              ),
              opacity: opacity.interpolate((o) => o),
            }}
            className="page2Underlay"
          >
            <div className="underlayDiv">{underlayObj}</div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Head;
