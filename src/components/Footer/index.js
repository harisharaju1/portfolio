import React from "react";
// import logo from "../../images/logo.png";
import { Container } from "../../ui";
import { ProjectPara } from "../../ui/fontColor";
import { FooterUi } from "../../ui/layout";

export default function Footer() {
  return (
    <FooterUi>
      <Container>
        <div className="site-footer-inner">
          <div className="footer-brand">
            {/* <a href="/">
              <img src={logo} alt="Logo" className="logo-img-footer" />
            </a> */}

            <ProjectPara>© 2021 Portfolio - Built using React JS</ProjectPara>
          </div>
        </div>
      </Container>
    </FooterUi>
  );
}
