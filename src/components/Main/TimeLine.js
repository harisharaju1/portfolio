/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Infosys from "../../images/infosys.png";
// import Tc from "../../images/team-computers.png";
import Institute from "../../images/school.jpg";
import { Container } from "../../ui";
import { PortfolioTitle } from "../../ui/fontColor";
import {
  TimeLineContainerLi,
  TimeLineContainerUL,
  TimeLineImg,
  TimeLineTags,
} from "../../ui/TimeLineUi";

export default function TimeLine() {
  const now = new Date();
  const current =
    now.toLocaleString("default", { month: "short" }) +
    "'" +
    now.getFullYear().toString().substr(2);

  return (
    <section className="container" style={{ marginTop: "7rem" }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <PortfolioTitle>My TimeLine</PortfolioTitle>
        </div>
        <TimeLineContainerUL>
          <TimeLineContainerLi>
            <TimeLineImg src={Institute} alt="institute" />
            <span />
            <div>
              <div className="title">BE - Electronics & Communication</div>
              <div className="info">Dr. Ambedkar Institute of Technology</div>
              <div className="helpinfo">Bengaluru</div>
            </div>
            <span className="number">
              <span>Jul'13</span> <span>Aug'17</span>
            </span>
          </TimeLineContainerLi>
          <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">Senior System Engineer</div>
              <div className="helpinfo"></div>
              <div className="work_desc">
                <div className="work_desc">
                  • Infosys training program on Python, <b>SQL </b>, ASP .NET
                  MVC
                  <br /> • Maintained and worked on the components of{" "}
                  <b>.NET MVC </b>
                  applications
                  <br /> • Developed <b>.NET Core </b> Microservices with
                  Swagger API
                  <br /> • Architected ETL solutions using{" "}
                  <b>SQL Server Integration Services</b>
                  <br /> • Worked with <b>PostgreSQL </b> as a destination for
                  SSIS
                  <br /> • Interacted with clients for understanding
                  requirements and user acceptance
                </div>
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> SQL </TimeLineTags>
                <TimeLineTags> ASP .NET MVC </TimeLineTags>
                <TimeLineTags> SSIS </TimeLineTags>
                <TimeLineTags> PostgreSQL </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Apr'18</span> <span>Jun'21</span>
            </span>
          </TimeLineContainerLi>
          {/* <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">Full stack web developer (MERN)</div>
              <div className="helpinfo">Mysore</div>

              <div className="work_desc">
                • Mentor junior members of the team, overseeing development work
                efforts and quality. <br />
                • Designed Node.js application components through Express.js.
                <br />
                • Develop and execute unit, testing of developed software
                components or API’s.
                <br />
                • Work in a high-speed, agile environment to ship features in
                the shortest time possible.
                <br />
                • Calling multiple third-party API’s in Asynchronous fashion.
                <br />
                • Strong knowledge in unit testing with jest & Super-test.
                <br />
                • Have experience with using Node.js to interact with MongoDB
                (mongoose).
                <br />
                • MERN Stack development experience (Mongo dB, Express, Node,
                React).
                <br />
                • Implemented Git + Gitlab for version control.
                <br />
                • Deployed multiple Nodejs application in IDP (Infosys
                deployment platform) through Docker.
                <br />
                • Have good understanding in the Authentication of user using
                JWT.
                <br />
                • Have strong knowledge in writing Dockerfile and docker-compose
                files.
                <br />
                • Deployed multiple application in Heroku and Netlify.
                <br />
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> React JS</TimeLineTags>
                <TimeLineTags> Mongo DB </TimeLineTags>
                <TimeLineTags> Node JS </TimeLineTags>
                <TimeLineTags> Express </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Nov'18</span> <span>Jan'20</span>
            </span>
          </TimeLineContainerLi> */}
          {/* 
          <TimeLineContainerLi>
            <TimeLineImg src={Tc} alt="institute" />
            <div>
              <span />
              <div className="title">Team Computers</div>
              <div className="info">Node js Backend Developer</div>
              <div className="helpinfo">Bangalore</div>

              <div className="work_desc">
                • Deployed to one of their client Location and worked on Chat
                bots and Email Bot. <br />
                • Created a complex algorithm to manipulate data and feed it to
                train ML models.
                <br />
                • Develop and execute unit, testing of developed software
                components or API’s.
                <br />
                • Worked on creating customs chats bots and chat cards to meet
                the client requirements.
                <br />
                • Have a knowledge on Logging events and creating PostgreSQL
                queries to show in Dashboard.
                <br />
                • Worked on external API’s/clients API’s and integrated with our
                system to meet client requirements.
                <br />
                • Have a knowledge on optimizing queries and creating best index
                for better performance.
                <br />
                • Have a knowledge on writing efficient Dockerfile with
                multi-stage and passing ENV's.
                <br />• Have a knowledge on fixing security issues in npm
                modules.
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> Node JS </TimeLineTags>
                <TimeLineTags> Express </TimeLineTags>
                <TimeLineTags> Koa </TimeLineTags>
                <TimeLineTags> Postgres </TimeLineTags>
                <TimeLineTags> Mongo DB </TimeLineTags>
                <TimeLineTags> Docker </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Feb'20</span> <span>{current}</span>
            </span>
          </TimeLineContainerLi> */}

          {/* <TimeLineContainerLi>
            <TimeLineImg src={Infosys} alt="institute" />
            <div>
              <span />
              <div className="title">Infosys</div>
              <div className="info">System Engineer </div>
              <div className="helpinfo">Mysore</div>

              <div className="work_desc">
                Moving Towards Open Source Technology which is Migrating from
                .Net/C# to Spring boot Microservices. My Responisblity is to
                design,create and deploy service created in Spring boot and also
                managing a small team and assigning a work for the Team.
              </div>
              <div className="worked_on">
                WORKED ON :<TimeLineTags> Java </TimeLineTags>
                <TimeLineTags> Spring Boot </TimeLineTags>
                <TimeLineTags> Docker </TimeLineTags>
                <TimeLineTags> Microservices </TimeLineTags>
              </div>
            </div>
            <span className="number">
              <span>Mar'19</span> <span>{current}</span>
            </span>
          </TimeLineContainerLi> */}
        </TimeLineContainerUL>
      </Container>
    </section>
  );
}
