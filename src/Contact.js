import React from "react";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contactTextContainer">
        <div className="text1">
          <div className="hello">
            Reach out, lets make something cool together.
          </div>
          <div className="bioContainer">
            <div className="contactBio">
              I'm alwyas looking for my next project. Always ready for the next
              bolt of inspiration. Let's see how we can realize your next dream
            </div>
          </div>
        </div>
        <div className="logoContainer">
          <div className="findMe">Let's talk.</div>
          <a href="mailto:vincent.r.greene@gmail.com" rel="noopener noreferrer">
            <img className="logoImg" src={props.gmail} alt="gmail" />
          </a>
          <a
            href="https://github.com/nemgreene"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logoImg" src={props.git} alt="git" />
          </a>
          <a
            href="https://nemgreene.artstation.com/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logoImg" src={props.art} alt="artstation" />
          </a>
        </div>
      </div>
      <img src={props.hand} className="contactImg" alt="hand"></img>
    </div>
  );
};

export default Contact;
