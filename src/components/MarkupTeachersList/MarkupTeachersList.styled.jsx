import styled from "styled-components";

export const MainContainer = styled.section`
  /* padding: 32px 0; */
  /* overflow-y: auto;
  max-height: 90vh; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  width: 100%;
  
  @media screen and (min-width: 1245px) {
    width: 1184px;
  }
`;

export const Item = styled.li`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  
  background: #fff;
  border-radius: 24px;
  
 @media screen and (max-width: 444px) {
    padding: 8px;
  } 
  @media screen and (min-width: 450px) {
    padding: 16px
  }

  @media screen and (min-width: 1244px) {
    padding: 24px;
    flex-direction: row;
    gap: 48px;
  }
`;
