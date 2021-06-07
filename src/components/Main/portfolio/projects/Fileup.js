import React from "react";
import docker from "../../../../images/icons/docker.svg";
import expressjs from "../../../../images/icons/express-js.svg";
import jest from "../../../../images/icons/jest.svg";
import nodejs from "../../../../images/icons/nodejs.svg";
import gpay from "../../../../images/icons/gpay.svg";
import reactrouter from "../../../../images/icons/react-router.svg";
import react from "../../../../images/icons/react.svg";
import heroku from "../../../../images/icons/heroku.svg";
import jwt from "../../../../images/icons/jwt.svg";
import redux from "../../../../images/icons/redux.svg";
import stripe from "../../../../images/icons/stripe.svg";
import axios from "../../../../images/icons/axios.svg";
import fileup from "../../../../images/project-img/fileup_home.png";
import mongo from "../../../../images/icons/mongodb.svg";
import { ProjectContainer } from "../../../../ui";
import {
  HeroIconsLink,
  HeroLinkHelper,
  ProjectLinkHelper,
  ProjectPara,
  ProjectTitle,
} from "../../../../ui/fontColor";

function Fileup() {
  return (
    <ProjectContainer>
      <div className="desc-project">
        <ProjectTitle>
          DiamondLane
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
          A jewelery store to buy jewelwery, which also includes an admin mode
          to manage orders and update item details.
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
            <img src={axios} alt="typesct-icn" className="icons-style" />
            <span className="tooltiptext">Axios</span>
          </div>
          <div className="tooltip">
            <img src={mongo} alt="postgresql-icn" className="icons-style" />
            <span className="tooltiptext">MongoDB</span>
          </div>
          <div className="tooltip">
            <img src={jwt} alt="react-icn" className="icons-style" />
            <span className="tooltiptext">JWT</span>
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
            <img
              src={heroku}
              alt="heroku-icn"
              className="icons-style"
              style={{ width: "4%" }}
            />
            <span className="tooltiptext">heroku</span>
          </div>
          <div className="tooltip">
            <img src={redux} alt="redux-icn" className="icons-style" />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img
              src={gpay}
              alt="jest-icn"
              className="icons-style"
              style={{ width: "5%" }}
            />
            <span className="tooltiptext">Gpay</span>
          </div>
          {/* <div className="tooltip">
            <img src={stripe} alt="stripe-icn" className="icons-style" />
            <span className="tooltiptext">Stripe</span>
          </div>
          <div className="tooltip">
            <img
              src={docker}
              alt="docker-icn"
              className="icons-style"
              style={{ width: "8%" }}
            />
            <span className="tooltiptext">Docker</span>
          </div> */}
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
          href="https://fast-coast-19533.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-overlay" />
          <img
            className="content-image fileup_home_img"
            alt="fileup_home"
            src={fileup}
          />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Click for The Demo</h3>
          </div>
        </a>
      </div>
    </ProjectContainer>
  );
}

export default Fileup;
