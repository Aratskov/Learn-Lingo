import styled from "styled-components";

export const WrapName = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  /* flex-grow: 1; */

  @media screen and (max-width: 1244px) {
    position: absolute;
    top: 40px;
    left: 50%;
  }

  @media screen and (min-width: 1245px) {
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  & p {
    font-weight: 500;
    line-height: 1.5;
  }

  /* @media screen and (max-width: 444px) {
    position: absolute;
    top: 12px;
    right: 8px;
  }

  @media screen and (min-width: 445px) and (max-width: 1244px) {
    position: absolute;
    top: 24px;
    right: 24px;
  } */

  @media screen and (min-width: 1244px) {
    margin-right: 64px;
    margin-left: auto;
  }
`;

export const InfoText = styled.p`
  display: flex;
  gap: 8px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const Element = styled.span`
  color: rgba(18, 20, 23, 0.2);
  margin: 0 16px;
`;

export const ImageWrap = styled.div``;

export const Wrapper = styled.div`
  /* position: relative; */
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  padding: 9px;
  border: 3px solid #fbe9ba;
  border-radius: 100px;
`;

export const Image = styled.img`
  display: block;
  width: 96px;
  height: 96px;
  border-radius: 100px;
`;
export const Item = styled.li`
  display: flex;
`;

export const ContainerContent = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: flex-start;
  margin-bottom: 32px;

  @media screen and (min-width: 1244px) {
    width: 968px;
  }
`;

export const Heading = styled.p`
  color: #8a8a89;
  font-weight: 500;
  line-height: 1.5;
`;

export const Content = styled(Heading)`
  color: #121417;

  ${({ variant }) => {
    return `text-decoration-line: ${variant ? "underline" : "none"}`;
  }}
`;

export const ReadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 16px 0 32px;

  color: #121417;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  cursor: pointer;
`;

export const ButtonLike = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  @media screen and (max-width: 444px) {
    position: absolute;
    top: 12px;
    right: 8px;
  }

  @media screen and (min-width: 445px) and (max-width: 1244px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const Use = styled.use`
  ${({ variantos }) => {
    return `stroke: ${variantos ? "red" : "green"}`;
  }}
`;
