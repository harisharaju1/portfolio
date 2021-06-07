import React from "react";
import { Container, PortfolioWrapper } from "../../../ui";
import { HeroPara, PortfolioTitle } from "../../../ui/fontColor";
import Projects from "./Projects";

function Portfolio({ projectRef }) {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container>
        <PortfolioWrapper>
          <div style={{ textAlign: "center" }}>
            <PortfolioTitle>Personal Projects</PortfolioTitle>
            <HeroPara
              className="portfolio-para"
              style={{ "text-align": "center" }}
            >
              Self-driven side projects on various stacks and frameworks.
            </HeroPara>
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
        </PortfolioWrapper>
      </Container>
    </section>
  );
}

export default Portfolio;
