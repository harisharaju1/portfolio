import React from "react";
import { useTheme } from "../../themes/themeContext";
import { Container } from "../../ui";
import { PortfolioTitle } from "../../ui/fontColor";
import { DividerUi } from "../../ui/layout";
function Contacts({ contactsRef }) {
  const themeState = useTheme();

  return (
    <section style={{ marginTop: "3rem" }}>
      <Container>
        <div ref={contactsRef}>
          <div style={{ textAlign: "center" }}>
            <PortfolioTitle>Contact Me</PortfolioTitle>
            <DividerUi className="features-image">
              <img
                className="features-illustration"
                src={themeState.images.featuresIllustration}
                alt="Feature illustration"
              />
              <img
                className="features-box"
                src={themeState.images.featuresBox}
                alt="Feature box"
              />
              <img
                className="features-illustration"
                src={themeState.images.featuresIllustrationTop}
                alt="Feature illustration top"
              />
            </DividerUi>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
