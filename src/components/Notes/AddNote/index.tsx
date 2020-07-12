import React, { useState } from "react";
import { AddBlock, AddIcon } from "./styles";
import Backdrop from "../../../components/Backdrop";

const AddNote = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <AddBlock onClick={handleClick}>
        <AddIcon />
      </AddBlock>
    </>
  );
};

export default AddNote;
