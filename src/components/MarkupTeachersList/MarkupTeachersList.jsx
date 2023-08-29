import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selectFilterTeachers,
} from "../../redux/teachers/teachersSelect";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { MarkupTeacherCard } from "../MarkupTeacherCard/MarkupTeacherCard";
import { MainContainer, Item, List } from "./MarkupTeachersList.styled";
import { MarkupButton } from "../MarkupButton/MarkupButton";
import { getFavorites } from "../../redux/teachers/teachersOperation";
import { selectLocalId } from "../../redux/auth/authSelect";

export const MarkupTeachersList = ({ isFavorits }) => {
  const dispatch = useDispatch();
  const teachersList = useSelector(
    isFavorits ? selectFavorites : selectFilterTeachers
  );
  const isLocalId = useSelector(selectLocalId);

  const [itemsToShow, setItemsToShow] = useState(4);

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 4);
  };

  useEffect(() => {
    isLocalId && dispatch(getFavorites());
  }, [dispatch, isLocalId]);

  return (
    <MainContainer>
      {teachersList.length>0 ? (<List>
        {teachersList?.slice(0, itemsToShow).map((teacher) => (
          <Item key={nanoid()}>
            <MarkupTeacherCard teacher={teacher} />
          </Item>
        ))}
      </List>) : <p>You haven't added any favorite teacher yet</p>}
      
      {itemsToShow < teachersList?.length && (
        <MarkupButton
          width="183px"
          title="Load more"
          onClick={handleLoadMore}
        />
      )}
    </MainContainer>
  );
};
