import React, { useContext } from "react";
import { Title, Summary, StyledLink } from "./styles";
import Tags from "../../Tags";
import { TextDocumentInverted as TextIcon } from "@styled-icons/entypo";
import dataLoaderContext from "../../../context/dataLoaderContext";

interface NoteProps {
  id: string;
  read: string;
  summary: string;
  description: string;
  book_id: number;
  tags: string[];
}

const Note: React.FC<NoteProps> = (props) => {
  const dataContext = useContext(dataLoaderContext);

  return (
    <StyledLink to={{ pathname: "editNote" }} state={{ ...props }}>
      <div>
        <Title>{props.read}</Title>
        <Summary>
          <TextIcon style={{ width: "10px", fill: "yellow" }} />
          <small>{props.summary}</small>
        </Summary>
        {props.tags && <Tags data={dataContext.tags} ids={props.tags} />}
      </div>
    </StyledLink>
  );
};

export default Note;
