import React, { useState } from "react";
import { AddBlock, AddIcon } from "./styles";
import AddNoteModal from "./AddNoteModal";
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

      {clicked && (
        <>
          <AddNoteModal />
          <Backdrop clicked={handleClick} />
        </>
      )}
    </>
  );
};

export default AddNote;
