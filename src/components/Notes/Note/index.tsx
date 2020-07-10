import React from "react";
import { Title, Summary, NoteBox } from "./styles";
import Tags from "../../Tags";
import { TextDocumentInverted as TextIcon } from '@styled-icons/entypo'

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
      <TextIcon style={{width: '10px', fill: 'yellow' }} />
        <small>{props.summary}</small>
      </Summary>
      <Tags ids={props.tags} />
    </NoteBox>
  );
};

export default Note;
