import { Main,Section } from "./HomePage.styled";
import { TextHomePage } from "../TextHomePage/TextHomePage";
import { ImageHomePage } from "../ImageHomePage/ImageHomePage";
import { Container } from "../Container/Container";
import { Statistics } from "../Statistics/Statistics";

export const HomePage = () => {
  return (
    <Main>
      <Container>
        <Section>
          <TextHomePage />
          <ImageHomePage />
        </Section>
        <Statistics />
      </Container>
    </Main>
  );
};
