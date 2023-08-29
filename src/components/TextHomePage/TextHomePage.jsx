import { Wrap, Title, Text } from "./TextHomePage.styled";
import { MarkupButton } from "../MarkupButton/MarkupButton";

export const TextHomePage = () => {
  return (
    <Wrap>
      <Title>
        Unlock your potential with the best <span>language</span> tutors
      </Title>
      <Text>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </Text>
      <MarkupButton width="267px" title="Get Start" />
    </Wrap>
  );
};
