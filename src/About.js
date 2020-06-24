import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="text1">
        <div className="hello">
          Hi, I'm Vincent. I'm a student and junior UI/UX designer located in
          Sheffield focused on the web.
        </div>
        <div className="bioContainer">
          <div className="bio">
            I'm from all over the place, and travel as much as I can.
            Transitioning from my background in Fine Art and 3D animation, I've
            moved into the world of tech and love the challenge. I wander the
            Internet following the heards of cyber buffalo.
          </div>
        </div>
      </div>
      <div className="text2Container">
        <div className="text2">
          <div className="li1">MERN</div>
          <div className="li2">Node.js</div>
          <div className="li3">Bootstrap</div>
          <div className="li4">Adobe Suite</div>
          <div className="li5">
            Toon Boom {window.innerWidth < 500 ? "" : "Harmony"}
          </div>
          <div className="li6">Maya</div>
          <div className="li6">Zbrush</div>
        </div>
      </div>
    </div>
  );
};

export default About;
