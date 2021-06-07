import React from "react";
import Apollo from "../../../../images/icons/apollo.svg";
import docker from "../../../../images/icons/docker.svg";
import expressjs from "../../../../images/icons/express-js.svg";
import graphql from "../../../../images/icons/graphql.svg";
import urql from "../../../../images/icons/urql.svg";
import typescript from "../../../../images/icons/typescript.svg";
import mongodb from "../../../../images/icons/mongodb.svg";
import netlify from "../../../../images/icons/netlify.svg";
import nodejs from "../../../../images/icons/nodejs.svg";
import reactrouter from "../../../../images/icons/react-router.svg";
import react from "../../../../images/icons/react.svg";
import chatapp from "../../../../images/project-img/Chatapp_home.png";
import postgresql from "../../../../images/icons/postgresql.svg";
import { ProjectContainer } from "../../../../ui";
import {
  HeroIconsLink,
  HeroLinkHelper,
  ProjectLinkHelper,
  ProjectPara,
  ProjectTitle,
} from "../../../../ui/fontColor";

function ChatApp() {
  return (
    <ProjectContainer>
      <div className="desc-project">
        <ProjectTitle>
          Scenius Blog App
          <a
            href="https://github.com/harisharaju1/restaurant-mern-app"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            style={{ float: "right", textDecoration: "none" }}
          >
            <ProjectLinkHelper className="off-diplay">
              Source Code:
            </ProjectLinkHelper>
            <HeroIconsLink
              className="fab fa-github"
              style={{ marginRight: "20px", fontWeight: "100" }}
            />
          </a>
        </ProjectTitle>
        <ProjectPara>
          A blog app in which you can create posts, vote on posts by other
          users...
        </ProjectPara>
        <HeroLinkHelper style={{ marginBottom: "13px" }}>
          Technologies used:
        </HeroLinkHelper>
        <div className="tech-icosns-holder">
          <div className="tooltip">
            <img src={nodejs} alt="nodejs-icn" className="icons-style " />
            <span className="tooltiptext">Nodejs</span>
          </div>
          <div className="tooltip">
            <img
              src={expressjs}
              alt="react-router-icn"
              className="icons-style"
            />

            <span className="tooltiptext">Express</span>
          </div>
          <div className="tooltip">
            <img src={graphql} alt="graphql-icn" className="icons-style" />
            <span className="tooltiptext">Graphql</span>
          </div>
          <div className="tooltip">
            <img src={postgresql} alt="mongodb-icn" className="icons-style" />
            <span className="tooltiptext">postgresql</span>
          </div>
          <div className="tooltip">
            <img src={typescript} alt="typesct-icn" className="icons-style" />
            <span className="tooltiptext">Typescript</span>
          </div>
          <div className="tooltip">
            <img src={Apollo} alt="apoloo-icn" className="icons-style" />
            <span className="tooltiptext">Apollo</span>
          </div>
          <div className="tooltip">
            <img src={react} alt="react-icn" className="icons-style" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img
              src={reactrouter}
              alt="react-router-icn"
              className="icons-style"
            />
            <span className="tooltiptext">React router</span>
          </div>
          <div className="tooltip">
            <img src={netlify} alt="netlify-icn" className="icons-style" />
            <span className="tooltiptext">netlify</span>
          </div>
          <div className="tooltip">
            <img src={urql} alt="netlify-icn" className="icons-style" />
            <span className="tooltiptext">URQL</span>
          </div>
          {/* <div className="tooltip">
            <img
              src={jest}
              alt="jest-icn"
              className="icons-style"
              style={{ width: "5%" }}
            />
            <span className="tooltiptext">Jest</span>
          </div> */}
          {/* <div className="tooltip">
            <img
              src={heroku}
              alt="heroku-icn"
              className="icons-style"
              style={{ width: "4%" }}
            />
            <span className="tooltiptext">heroku</span>
          </div> */}
          <div className="tooltip">
            <img
              src={docker}
              alt="docker-icn"
              className="icons-style"
              style={{ width: "8%" }}
            />
            <span className="tooltiptext">Docker</span>
          </div>
        </div>
      </div>
      {/* <img src={fileup} alt="fileup_home" className="fileup_home_img" /> */}
      <div
        className="content"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <a
          href="https://chat-app-graphql.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-overlay" />
          <img
            className="content-image fileup_home_img"
            alt="fileup_home"
            src={chatapp}
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Click for The Demo</h3>
          </div>
        </a>
      </div>
    </ProjectContainer>
  );
}

export default ChatApp;
