import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import DataLoaderContext from "./context/dataLoaderContext";
import firebase from "./firebase";
import firebaseSerializer from "./helper/firebaseSerializer";
import Loading from "./components/UI/Loading";

const AppRoutes = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const paths = {
    home: "/",
    createNote: "/createNote/:bookId",
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
  }

  return (
    <BrowserRouter>
      <Routes>
        <DataLoaderContext.Provider
          value={{ notes: [...notes], tags: [...tags], books: [...books] }}
        >
          <Route path={paths.home} element={<Home />} />
        </DataLoaderContext.Provider>
        <DataLoaderContext.Provider
          value={{ notes: [...notes], tags: [...tags], books: [...books] }}
        >
          <Route path={paths.createNote} element={<CreateNote />} />
        </DataLoaderContext.Provider>
        <DataLoaderContext.Provider
          value={{ notes: [...notes], tags: [...tags], books: [...books] }}
        >
          <Route path={paths.editNote} element={<EditNote />} />
        </DataLoaderContext.Provider>

        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
