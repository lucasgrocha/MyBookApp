import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Note from "./Note";
import firebaseSerializer from "../../helper/firebaseSerializer";

interface Note {
  id: string;
  read: string;
  summary: string;
  description: string;
  tags: number[];
  book_id: number;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    api.get("/notes.json").then((response) => {
      setNotes(firebaseSerializer(response.data));
    });
  }, []);

  return (
    <>
      {notes?.map((note) => (
        <Note
          read={note.read}
          tags={note.tags}
          id={note.id}
          summary={note.summary}
          description={note.description}
          key={note.id}
          book_id={note.book_id}
        />
      ))}
    </>
  );
};

export default Notes;
