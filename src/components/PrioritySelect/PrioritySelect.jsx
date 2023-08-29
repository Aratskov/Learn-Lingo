import { useDispatch, useSelector } from "react-redux";
import { changeFilterLanguage } from "../../redux/teachers/teachersSlice";
import {
  selectFilter,
  selectUniqueLanguage,
} from "../../redux/teachers/teachersSelect";

import Select from "react-dropdown-select";

import { Text, Wrap, SelectWrap } from "./PrioritySelect.styled";

export const PrioritySelect = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const uniqueLanguage = useSelector(selectUniqueLanguage);

  const handleFilterChange = (selectedItems) => {
    console.log(selectedItems[0].value);
    if (selectedItems.length > 0) {
      const selectedMake = selectedItems[0].value;
      dispatch(changeFilterLanguage(selectedMake));
    }
  };

  const handleFilterChangeLevel = (item) => {
    console.log(item[0].value);
  };

  const options = uniqueLanguage.map((teacher) => ({
    label: teacher,
    value: teacher,
  }));
  const value = [{ label: filters, value: filters }];

  const level = [
    { label: "A1 Beginner", value: "A1 Beginner" },
    { label: "A2 Elementary", value: "A2 Elementary" },
    { label: "B1 Intermediate", value: "B1 Intermediate" },
    { label: "B2 Upper-Intermediate", value: "B2 Upper-Intermediate" },
    { label: "C1 Advanced", value: "C1 Advanced" },
    { label: "C2 Proficient", value: "C2 Proficient" },
  ];

  return (
    <Wrap>
      <div>
        <Text>Languages</Text>
        <SelectWrap>
          <Select
            options={options}
            values={value}
            color="#3470FF"
            style={{ border: "none", padding: "14px", borderRadius: "14px" }}
            onChange={(value) => handleFilterChange(value)}
          />
        </SelectWrap>
      </div>
      <div>
        <Text>Level of knowledge</Text>
        <SelectWrap>
          <Select
            options={level}
            values={level}
            color="#3470FF"
            style={{ border: "none", padding: "14px", borderRadius: "14px" }}
            onChange={(level) => handleFilterChangeLevel(level)}
          />
        </SelectWrap>
      </div>
    </Wrap>
  );
};
