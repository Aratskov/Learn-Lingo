import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1312px;
  width: 100%;
  padding: 40px 0;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
  margin: 0 auto 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 499px) {
    max-width: 250px;
  }
  @media screen and (max-width: 999px) and (min-width: 500px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1000px) {
    gap: 50px;
  }

  @media screen and (min-width: 1200px) {
    gap: 100px;
  }
`;

export const Items = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const NumberStatistic = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.7);

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.28px;

  ${({ variant }) => {
    return `max-width:${variant ? "94px" : "74px"}`;
  }}
`;
