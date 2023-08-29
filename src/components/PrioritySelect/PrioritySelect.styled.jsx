import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  gap: 18px;
  /* justify-content: center; */
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 1184px;
  margin: 0 auto 32px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const SelectContainer = styled.div`
  margin-bottom: 20px;
`;

export const SelectWrap = styled.div`
  background-color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 14px;
  outline: none;
  max-height: 275px;
  width: 225px;
`;

export const Option = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const SelectSecondWrap = styled.div`
  background-color: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 14px;
  outline: none;
  max-height: 275px;
  width: 125px;
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 48px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;

  background-color: #f7f7fb;
  color: #121417;

  border: none;
  outline: transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;

  &:placeholder-shown {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputSecond = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;
  background-color: #f7f7fb;
  color: #121417;

  border: none;
  border-radius: 0 14px 14px 0;
  outline: transparent;

  &:placeholder-shown {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;
