import styled from "styled-components";

interface AuthorProps {
  authorName: string;
}

interface TitleProps {
  title: string;
}

export const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 5px;
  position: relative;

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

