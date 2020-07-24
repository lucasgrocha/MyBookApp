import React, { useState, useEffect } from "react";
import Book from "./Book";
import firebaseSerializer from "../../helper/firebaseSerializer";
import firebase from "../../firebase";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
}

const Books = () => {
  const [books, setBooks] = useState<Books[]>();

  useEffect(() => {
    const booksRef = firebase.database().ref("books");
    booksRef.on("value", (snap) => {
      const serialized = firebaseSerializer(snap.val());
      setBooks(serialized);
    });
  }, []);

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
