import styled from "styled-components";

export const Main = styled.main`
overflow-y: auto;
max-height: 90vh;

&::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 25px;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction:column;
  gap: 24px;
  margin: 0 auto 24px;
  @media screen and (min-width: 1070px) {
    flex-direction: row;
    max-width: 1312px;

}
`;
