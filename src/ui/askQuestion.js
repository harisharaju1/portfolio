import styled from "styled-components";

export const Cta = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -32px;
    left: calc(50% - 720px);
    height: 263px;
    width: 1440px;
    background-image: url(${props => props.theme.images.ctaIllustration});
  }
  transition: all 0.4s ease-out;

  @media (max-width: 600px) {
    &:before {
      display: none;
    }
`;
