import React, { useState, useEffect } from "react";
import api from "../../service/api";
import Book from "./Book";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
}

const Books = () => {
  const [books, setBooks] = useState<Books[]>();

  useEffect(() => {
    api.get("/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      {books?.map((book) => (
        <Book
          id={book.id}
          title={book.title}
          author={book.author}
          key={book.id}
          image_url={book.image_url}
        />
      ))}
    </div>
  );
};

export default Books;
