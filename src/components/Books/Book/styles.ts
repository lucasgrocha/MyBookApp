import styled from "styled-components";

interface AuthorProps {
  authorName: string;
}

interface TitleProps {
  title: string;
}

export const Info = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  position: relative;

  > div {
    margin-left: 10px;
  }
`

export const Cover = styled.img`
  width: 50px;
  height: 80px;
  border: 1px solid white;
`

export const Title = styled.h4<TitleProps>`

`

export const Author = styled.small<AuthorProps>`

`

