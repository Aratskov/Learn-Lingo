import { Wrap, List, Text, NumberStatistic, Items } from "./Statistics.styled";
import { StyleSheetManager } from "styled-components";

export const Statistics = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "variant"}>
      <Wrap>
        <List>
          <Items>
            <NumberStatistic>32,000 +</NumberStatistic>
            <Text variant="true">Experienced tutors</Text>
          </Items>
          <Items>
            <NumberStatistic>300,000 +</NumberStatistic>
            <Text variant="true">5-star tutor reviews</Text>
          </Items>
          <Items>
            <NumberStatistic>120 +</NumberStatistic>
            <Text>Subjects taught</Text>
          </Items>
          <Items>
            <NumberStatistic>200 +</NumberStatistic>
            <Text>Tutor nationalities</Text>
          </Items>
        </List>
      </Wrap>
    </StyleSheetManager>
  );
};
