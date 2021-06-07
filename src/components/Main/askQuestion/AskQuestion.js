import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { Container, Cta } from "../../../ui";
import { PortfolioTitle, ProjectPara } from "../../../ui/fontColor";
import Form from "./Form";

function AskQuestion() {
  const [open, setOpen] = useState(false);
  function onOpenModal() {
    setOpen(true);
  }

  function onCloseModal() {
    setOpen(false);
  }

  return (
    <Cta style={{ marginTop: "12rem" }} className="section">
      <Container>
        <div style={{ textAlign: "center" }}>
          <PortfolioTitle>Ask A Question?</PortfolioTitle>
          <ProjectPara>
            Do you Have Any Queries? Or just a Random Question? Feel free to
            Ask.
          </ProjectPara>
          <div className="cta-cta">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <button className="button button-primary" onClick={onOpenModal}>
              Ask a Question
            </button>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
            >
              <Form />
            </Modal>
          </div>
        </div>
      </Container>
    </Cta>
  );
}

export default AskQuestion;
