import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  flex-direction: column;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ProjectContainer = styled.div`
  height: 370px;
  display: flex;
  background-color: ${props => props.theme.tabs};
  box-shadow: 48px 16px 48px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 6px;
  @media (max-width: 1024px) {
    padding-right: 2rem;
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 546px;
    padding-right: 0 !important;
  }
  transition: all 0.4s ease-out;
`;
export const ProjectContainerMore = styled.div`
  height: 75px;
  display: flex;
  background-color: ${props => props.theme.tabs};
  box-shadow: 48px 16px 48px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 6px;
  @media (max-width: 1024px) {
    padding-right: 2rem;
  }
  @media (max-width: 640px) {
    // flex-direction: column-reverse;
    height: 75px;
    padding-right: 0 !important;
  }
  transition: all 0.4s ease-out;
`;
