import React from "react";
import { Author, Cover, StyledLink, Title } from "./styles";
import RatingPoint from "./RatingPoint";

interface Props {
  id: number;
  title: string;
  author: string;
  image_url: string;
}

const Book: React.FC<Props> = (props) => {
  return (
    <StyledLink to={'createNote'} state={{book_id: props.id}} style={{ marginBottom: "10px" }}>
      <Cover src={props.image_url} alt={props.title} />
      <div>
        <Title title={props.title}>{props.title}</Title>
        <Author authorName={props.author}>{props.author}</Author>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "10px",
          paddingBottom: "5px",
        }}
      >
        <RatingPoint bookId={props.id} />
      </div>
    </StyledLink>
  );
};

export default Book;
