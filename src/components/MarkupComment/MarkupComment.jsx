import { Wrap, Image, Name, Comment } from "./MarkupComment.styled";

export const MarkupComment = ({ comment }) => {
  const {
    avatar,
    reviewer_name: name,
    reviewer_rating: rating,
    comment: com,
  } = comment;
  return (
    <>
      <Wrap>
        <Image src={avatar} alt={name} />
        <div>
          <Name>{name}</Name>
          <p>{rating.toFixed(1)}</p>
        </div>
      </Wrap>
      <Comment>{com}</Comment>
    </>
  );
};
