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
  const [books, setBooks] = useState<any[]>();
  const [notes, setNotes] = useState<any[]>();
  const [tags, setTags] = useState<any[]>();

  const tagsRef = firebase.database().ref("tags");
  const notesRef = firebase.database().ref("notes");
  const booksRef = firebase.database().ref("books");

  useEffect(() => {
    notesRef.on("value", (snap) => {
      const serialized = firebaseSerializer(snap.val());
      setNotes(serialized);
    });
  }, []);

  useEffect(() => {
    booksRef.on("value", (snap) => {
      const serialized = firebaseSerializer(snap.val());
      setBooks(serialized);
    });
  }, []);

  useEffect(() => {
    tagsRef.on("value", (snap) => {
      const serialized = firebaseSerializer(snap.val());
      setTags(serialized);
    });
  }, []);

  if (!notes || !tags || !books) {
    return <Loading />;
  } else {
    booksRef.off("value");
    notesRef.off("value");
  }

  return (
    <BrowserRouter>
      <Routes>
        <DataLoaderContext.Provider
          value={{ notes: [...notes], tags: [...tags], books: [...books] }}
        >
          <Route path="/" element={<Home />} />
        </DataLoaderContext.Provider>
        <Route path="/createNote/:bookId" element={<CreateNote />} />
        <Route path="/editNote" element={<EditNote />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
