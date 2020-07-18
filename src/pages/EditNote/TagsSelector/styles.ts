import styled from "styled-components";

interface TagProps {
  color: string;
}

export const TagButton = styled.div<TagProps>`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bolder;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  margin: auto 5px;
  user-select: none;
`;
