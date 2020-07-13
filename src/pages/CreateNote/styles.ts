import styled from "styled-components";

export const InputField = styled.input`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
  width: 10%;
  outline: none;
  margin: auto 5px;
`;

export const StyledForm = styled.form`
  background-color: white;
  padding: 50px 30px;
  width: 800px;
  margin: auto auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
`;

export const DescriptionInput = styled.textarea`
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  margin: 30px 5px;
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
  outline: none;
  height: 150px;
`;

export const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  font-weight: bolder;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid darkblue;
  outline: none;

  &:active {
    background-color: darkblue;
  }
`;

export const StyledHeader = styled.h2`
  color: black;
  margin-bottom: 20px;
`;
