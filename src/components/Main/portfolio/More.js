import React from "react";
import { ProjectContainerMore } from "../../../ui";
import { HeroIconsLink, ProjectTitle } from "../../../ui/fontColor";

export default function More() {
  return (
    <ProjectContainerMore>
      <div>
        <ProjectTitle
          style={{
            paddingTop: "1.3rem",
            paddingLeft: "2rem",
          }}
        >
          <a
            href="https://github.com/harisharaju1"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            style={{
              textDecoration: "none",
              fontSize: "inherit",
              color: "inherit",
            }}
          >
            More In Github{" "}
            <HeroIconsLink
              className="fab fa-github"
              style={{ marginRight: "20px", fontWeight: "100" }}
            />
          </a>
        </ProjectTitle>
      </div>
    </ProjectContainerMore>
  );
}
