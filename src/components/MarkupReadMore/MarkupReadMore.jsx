import { nanoid } from "nanoid";
import { MarkupComment } from "../MarkupComment/MarkupComment";
import { MarkupButton } from "../MarkupButton/MarkupButton";
import { WrapperReadMore,Text, WrapComment } from "./MarkupReadMore.styled";

export const MarkupReadMore = ({ experience, reviews }) => {
  return (
    <WrapperReadMore>
      <Text>{experience}</Text>
      <WrapComment>
        {reviews.map((comment) => (
          <li key={nanoid()}>
            <MarkupComment comment={comment} />
          </li>
        ))}
          </WrapComment>
          <MarkupButton width="232px" title="Book trial lesson"/>
    </WrapperReadMore>
  );
};
