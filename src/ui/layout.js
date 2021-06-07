import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.behindScreen};
  transition: all 0.4s ease-out;
`;

export const Layout = styled.div`
  background: ${props => props.theme.background};
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: box-shadow 0.4s ease;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 481px) {
    margin-left: 2rem;
    padding: 0;
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    max-width: 835px;
  }
`;

export const HeaderUi = styled.header`
  height: 70px;
  position: relative;

  @media (max-width: 640px) {
    &:before {
      content: "";
      position: absolute;
      top: -140px;
      right: -100px;
      width: 1440px;
      height: 324px;
      background-image: url(${props => props.theme.images.headerIllustration});
      -webkit-animation: fadeIn 2s both cubic-bezier(0.3, 0, 0.2, 1);
      animation: fadeIn 2s both cubic-bezier(0.3, 0, 0.2, 1);
      will-change: transform;
      opacity: 1;
    }
  }
`;

export const FooterUi = styled.footer`
  height: 9rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 32px;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: ${props => props.theme.tabs};
  }
`;

export const DividerUi = styled.div`
  &:before {
    content: "";
    position: absolute;
    bottom: -120px;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;

    background: ${props => props.theme.tabs};
  }
`;
