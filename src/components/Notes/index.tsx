import React, { useState, useEffect } from "react";
import Note from "./Note";

interface Note {
  id: string;
  read: string;
  summary: string;
  description: string;
  tags: string[];
  book_id: number;
}

interface Props {
  data: {}[];
}

const Notes: React.FC<Props> = (props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const castedData = props.data as Note[];
    setNotes(castedData);
  }, [props.data]);

  return (
    <div style={{ height: "calc(100vh - 67px)", overflow: "auto" }}>
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
    </div>
  );
};

export default Notes;
