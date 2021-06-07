import styled from "styled-components";

export const TimeLineContainerUL = styled.ul`
  margin: 0;
  margin-top: 35px;
  list-style: none;
  position: relative;
  padding: 1px 100px;
  font-size: 13px;
  color: ${(props) => props.theme.timeLine};
  transition: all 0.4s ease-out;

  &:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    border-left: 2px dashed ${(props) => props.theme.primary1};
  }

  @media (max-width: 640px) {
    padding: 1px 45px;
  }
  @media (max-width: 425px) {
    padding: 1px 28px;
  }
`;

export const TimeLineContainerLi = styled.li`
  display: flex;
  position: relative;
  margin-left: 30px;
  background-color: ${(props) => props.theme.tabs};
  padding: 14px;
  border-radius: 6px;
  box-shadow: 48px 16px 48px rgba(0, 0, 0, 0.2);

  &:not(:first-child) {
    margin-top: 60px;
  }

  & > span {
    width: 2px;
    height: 100%;
    background: ${(props) => props.theme.primary1};
    left: -30px;
    top: 0;
    position: absolute;
  }

  & > span:before,
  & > span:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.primary1};
    position: absolute;
    background: #2196f3;
    left: -5px;
    top: 0;
  }

  span:after {
    top: 100%;
  }

  & > div {
    margin-left: 18px;
  }

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const TimeLineImg = styled.img`
  height: 60px;
  border-radius: 10px;

  border: 3px solid #8a8a8a;

  @media (max-width: 530px) {
    margin-left: 18px;
    margin-bottom: 5px;
    width: 60px;
  }
`;

export const TimeLineTags = styled.span`
  border-radius: 21.29px;
  padding: 5px 8px;
  background-color: ${(props) => props.theme.background};
  font-size: 12px;
  display: inline-block;
  font-weight: 700;
  margin: 0 3px 4px 3px;
`;
