import React, { useState, useEffect } from "react";
import Book from "./Book";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
}

interface Props {
  data: {}[];
}

const Books: React.FC<Props> = (props) => {
  const [books, setBooks] = useState<Books[]>();

  useEffect(() => {
    const castedData = props.data as Books[];
    setBooks(castedData);
  }, [props.data]);

  return (
    <>
      {books?.map((book) => (
        <Book
          id={book.id}
          title={book.title}
          author={book.author}
          key={book.id}
          image_url={book.image_url}
        />
      ))}
    </>
  );
};

export default Books;
