import styled from "styled-components";

interface TagNameProps {
  bgColor: string;
}

export const TagName = styled.span<TagNameProps>`
  background-color: ${props => props.bgColor};
  padding: 1px;
  margin: 3px;
  border-radius: 5px;
`