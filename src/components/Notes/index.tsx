import React, { useState, useEffect } from "react";
import Note from "./Note";
import firebaseSerializer from "../../helper/firebaseSerializer";
import firebase from "../../firebase";

interface Note {
  id: string;
  read: string;
  summary: string;
  description: string;
  tags: string[];
  book_id: number;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    const notesRef = firebase.database().ref("notes");
    notesRef.on("value", (snap) => {
      const serialized = firebaseSerializer(snap.val());
      setNotes(serialized);
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
