import React, { useState } from "react";
import { AddBlock, AddIcon } from "./styles";
import { Link } from "react-router-dom";

const AddNote = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Link to="/createNote">
      <AddBlock onClick={handleClick}>
        <AddIcon />
      </AddBlock>
    </Link>
  );
};

export default AddNote;
