import styled from "styled-components";
import image from "../../assets/img/women.png";
import apple from "../../assets/icons/apple.svg";
import monitor from "../../assets/icons/monitor.svg";

export const Wrap = styled.div`
  display: block;
  width: 100%;
  height: 530px;

  background-color: #fbe9ba;
  background-image: url(${apple}), url(${monitor}), url(${image});
  background-repeat: no-repeat;
  background-position: bottom 65px center, bottom 0px center,
    bottom 111px center;

  border-radius: 30px;
  @media screen and (min-width: 1070px) {
    max-width: 568px;
    height: auto;
  }
`;
