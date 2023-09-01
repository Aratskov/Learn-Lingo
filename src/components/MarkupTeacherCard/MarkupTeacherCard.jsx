import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ImageWrap,
  Image,
  Wrapper,
  Item,
  Heading,
  Content,
  Name,
  WrapName,
  WrapInfo,
  Element,
  ReadMoreButton,
  Use,
  ButtonLike,
  ContainerContent,
  InfoText,
} from "./MarkupTeacherCard.styled";
import { StyleSheetManager } from "styled-components";
import Icons from "../../assets/icons/like.svg";
import Icon from "../../assets/icons/book.svg";
import Rating from "../../assets/icons/rating.svg";
import { MarkupReadMore } from "../MarkupReadMore/MarkupReadMore";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/teachers/teachersOperation";
import { selectFavorites } from "../../redux/teachers/teachersSelect";
import { isAuthSelect } from "../../redux/auth/authSelect";

export const MarkupTeacherCard = ({ teacher }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelect);
  const likedTeacher = useSelector(selectFavorites);

  const {
    avatar_url,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    lessons_done,
    rating,
    price_per_hour,
    experience,
    reviews,
    id,
  } = teacher;

  const isLiked = likedTeacher.some((teacher) => teacher.surname === surname);
  const isLikedId =
    likedTeacher.find((teacher) => teacher.surname === surname)?.id || null;

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(removeFavorites(id ? id : isLikedId));
    } else {
      isAuth ? dispatch(addFavorites(teacher)) : navigate('/login');
    }
  };

  return (
    <>
      <ImageWrap>
        <Wrapper>
          <Image src={avatar_url} alt={surname} />
        </Wrapper>
      </ImageWrap>
      {/* <div style={{ width: "968px", position: "relative" }}> */}
      <div>
        <ContainerContent>
          <WrapName>
            <Heading>Languages</Heading>
            <Name>
              {name} {surname}
            </Name>
          </WrapName>
          <WrapInfo>
            <InfoText>
              <span>
                <svg width="16" height="16">
                  <Use href={`${Icon}#icon-book`} />
                </svg>
              </span>
              Lessons online
            </InfoText>
            <Element>|</Element>
            <p>Lessons done: {lessons_done}</p>
            <Element>|</Element>
            <InfoText>
              <span>
                <svg width="16" height="16">
                  <Use href={`${Rating}#icon-rating`} />
                </svg>
              </span>
              Rating:{rating}
            </InfoText>
            <Element>|</Element>
            <p>
              Price / 1 hour:{" "}
              <span style={{ color: "#38CD3E" }}>{price_per_hour}$</span>
            </p>
          </WrapInfo>
          <ButtonLike onClick={handleLikeClick}>
            <svg width="26" height="22">
              <Use
                href={`${Icons}#icon-like`}
                style={{
                  stroke: isLiked ? "#F4C550" : "#121417",
                  fill: isLiked ? "#F4C550" : "transparent",
                }}
              />
            </svg>
          </ButtonLike>
        </ContainerContent>
        <StyleSheetManager
          shouldForwardProp={(prop) => prop !== "variant" || "variantos"}
        >
          <ul>
            <Item>
              <Heading>Speaks: </Heading>
              <Content variant="true">{languages.join(", ")}</Content>
            </Item>
            <Item>
              <Heading>Lesson Info: </Heading>
              <Content>{lesson_info}</Content>
            </Item>
            <Item>
              <Heading>Conditions: </Heading>
              <Content>{conditions.join(" ")}</Content>
            </Item>
          </ul>

          {isDescriptionOpen ? (
            <MarkupReadMore experience={experience} reviews={reviews} />
          ) : (
            <ReadMoreButton onClick={() => setIsDescriptionOpen(true)}>
              Read more
            </ReadMoreButton>
          )}
        </StyleSheetManager>
      </div>
    </>
  );
};
