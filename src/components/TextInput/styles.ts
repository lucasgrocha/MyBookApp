import styled from "styled-components";
import { Send } from '@styled-icons/boxicons-solid'

export const SendIcon = styled(Send)`
  width: 10px;
`

export const Input = styled.input`
  background-color: white;
  color: black;
  outline: none;
  width: 50px;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  background-color: #339BFF;
  outline: none;
  text-align: center;

  &:active {
    background-color: #3335FF;
  }
`
