import styled from "styled-components";

export const HeroTag = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary1};
  transition: all 0.4s ease-out;
`;

export const HeroLinkHelper = styled.span`
  display: block;
  font-size: small;
  margin-bottom: 8px;
  color: ${(props) => props.theme.helperText};
  transition: all 0.4s ease-out;
`;

export const HeroIconsLink = styled.i`
  color: ${(props) => props.theme.primary1};
  transition: all 0.4s ease-out;
  font-size: 28px;
`;

export const HeroPara = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin-top: 1rem;
  margin-right: 5rem;
  color: ${(props) => props.theme.paragraph};
  transition: all 0.4s ease-out;
  text-align: justify;

  @media (max-width: 640px) {
    margin-right: 0;
  }
`;

export const ProjectPara = styled.p`
  font-size: 17px;
  line-height: 22px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.paragraph};
  transition: all 0.4s ease-out;
`;

export const ProjectTitle = styled.h1`
  font-size: xx-large;
  color: ${(props) => props.theme.header};
  transition: all 0.4s ease-out;
`;

export const PortfolioTitle = styled.h1`
  font-size: 3rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.header};
  transition: all 0.4s ease-out;
`;

export const ProjectLinkHelper = styled.span`
  font-size: small;
  color: ${(props) => props.theme.helperText};
  margin: 8px;
`;

export const SwitchHelperText = styled.span`
  margin-left: 1rem;
  margin-top: 8px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.paragraph};
  transition: all 0.4s ease-out;
`;
