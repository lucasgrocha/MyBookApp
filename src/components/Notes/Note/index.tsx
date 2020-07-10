import React from "react";
import { Title, Summary, NoteBox } from "./styles";
import Tags from "../../Tags";

interface NoteProps {
  id: number;
  read: string;
  summary: string;
  description: string;
  tags: number[];
}

const Note: React.FC<NoteProps> = (props) => {
  return (
    <NoteBox style={{ marginBottom: "10px" }}>
      <Title>{props.read}</Title>
      <Summary>
        <small>{props.summary}</small>
      </Summary>
    </NoteBox>
  );
};

export default Note;
