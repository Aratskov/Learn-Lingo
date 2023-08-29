import { MarkupTeachersList } from "./MarkupTeachersList/MarkupTeachersList";
import { PrioritySelect } from "./PrioritySelect/PrioritySelect";
import { Main } from "./TeacherPage.styled";

export const TeacherPage = () => {
  return (
    <Main>
      <PrioritySelect />
      <MarkupTeachersList />
    </Main>
  );
};
