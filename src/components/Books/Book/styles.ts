import styled from "styled-components";
import { Link } from "react-router-dom";

interface AuthorProps {
  authorName: string;
}

interface TitleProps {
  title: string;
}

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  padding: 8px 5px;
  color: black;
  position: relative;
  background-color: rgb(126, 126, 126);
  border-radius: 5px;

  &:hover {
    text-decoration: none;
    color: black;
  }

  > div {
    margin-left: 10px;
  }

  @media screen and (max-width: 700px) {
    width: 60%;
    margin: auto auto;
  }
`

export const Cover = styled.img`
  width: 50px;
  height: 80px;
  box-shadow: 3px 3px 2px 1px rgba(0,0,0,0.63);
`

export const Title = styled.h4<TitleProps>`

`

export const Author = styled.small<AuthorProps>`

`

