import React from "react";

const Display = (varObj) => {
  return (
    <div className="displayContainer">
      <div className="displayImgContainer">
        <a
          className="a"
          href={varObj.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="displayImg"
            style={{
              backgroundImage: `url(${varObj.img})`,
            }}
          ></div>
          <div className="diplayHeader">{varObj.header}</div>
          <div className="displayDesc">{varObj.desc}</div>
        </a>
      </div>
    </div>
  );
};

const Projects = (props) => {
  return (
    <div className="projectsContainer">
      <div className="displayGrid1">
        <div className="displayContainer1">
          {Display({
            header: "Otoko",
            desc:
              "Demo restaurant website. Static, Multi-Page website. React-Spring animation",
            img: props.thumb1,
            link: "https://aqueous-lowlands-29889.herokuapp.com/",
          })}
        </div>
        <div className="displayContainer2">
          {Display({
            header: `Plant ${window.innerWidth < 501 ? "" : "Watering"} App`,
            desc: `RESTful API, CRUD fullstack MERN app with Passport auth and secure login. ${
              window.innerWidth > 501 ? "Login with q@q : toor or signup" : ""
            }`,
            img: props.thumb2,
            link: "https://my-plant-app-v3.herokuapp.com/login",
          })}
        </div>
      </div>
      <div className="displayGrid2">
        <div className="displayContainer3">
          {Display({
            header: "Sudoku",
            desc: `Sudoku program. Recursive generation and solving, with regression to escape blind alleys. ${
              window.innerWidth < 501 ? "" : "React-Spring GUI in development"
            }`,
            img: props.thumb3,
            link: "https://sudoku-deploy7.herokuapp.com/",
          })}
        </div>{" "}
        <div className="displayContainer4">
          {Display({
            header: "Slackbot",
            desc: `User input parsing, interfacing with google sheets and Slack. ${
              window.innerWidth < 501 ? "" : "Text based user interface"
            }`,
            img: props.thumb4,
            link: "https://github.com/nemgreene/Dev-Academy-Slackbot",
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
