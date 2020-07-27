import React, { useEffect, useState } from "react";
import DataLoaderContext from "../context/dataLoaderContext";
import firebase from "../firebase";
import firebaseSerializer from "../helper/firebaseSerializer";
import Loading from "../components/UI/Loading";

const DataLoader: React.FC = (props) => {
  const [books, setBooks] = useState<any[]>(
    JSON.parse(sessionStorage.getItem("books") || "[]")
  );
  const [notes, setNotes] = useState<any[]>(
    JSON.parse(sessionStorage.getItem("notes") || "[]")
  );
  const [tags, setTags] = useState<any[]>(
    JSON.parse(sessionStorage.getItem("tags") || "[]")
  );
  const paths = {
    home: "/",
    createNote: "/createNote",
    editNote: "/editNote",
  };
  const currentPath = window.location.pathname;
  const validPath = Object.values(paths).includes(currentPath);

  useEffect(() => {
    if (validPath) {
      const notesRef = firebase.database().ref("notes");
      notesRef.on("value", (snap) => {
        const serialized = firebaseSerializer(snap.val());
        setNotes(serialized);
      });
    }
  }, [validPath]);

  useEffect(() => {
    if (validPath) {
      const booksRef = firebase.database().ref("books");
      booksRef.on("value", (snap) => {
        const serialized = firebaseSerializer(snap.val());
        setBooks(serialized);
      });
    }
  }, [validPath]);

  useEffect(() => {
    if (validPath) {
      const tagsRef = firebase.database().ref("tags");
      tagsRef.on("value", (snap) => {
        const serialized = firebaseSerializer(snap.val());
        setTags(serialized);
      });
    }
  }, [validPath]);

  if (notes.length + tags.length + books.length === 0 && validPath) {
    return <Loading />;
  } else {
    sessionStorage.setItem("notes", JSON.stringify(notes));
    sessionStorage.setItem("tags", JSON.stringify(tags));
    sessionStorage.setItem("books", JSON.stringify(books));
  }

  return (
    <DataLoaderContext.Provider
      value={{ notes: [...notes], tags: [...tags], books: [...books] }}
    >
      {props.children}
    </DataLoaderContext.Provider>
  );
};

export default DataLoader;
