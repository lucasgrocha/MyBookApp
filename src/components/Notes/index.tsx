import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Note from "./Note";

interface Note {
  id: number;
  read: string;
  summary: string;
  description: string;
  tags: number[];
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    api.get("/notes").then((response) => {
      setNotes(response.data);
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
        />
      ))}

    </>
  );
};

export default Notes;
