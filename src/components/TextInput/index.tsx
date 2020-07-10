import React, { useState } from "react";
import { Input, Button, SendIcon } from "./styles";

interface Props {
  submitAction?: (arg1?: any) => void;
}

const TextInput: React.FC<Props> = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(evt.target.value);
  };

  const handleUserSubmit = () => {
    if (userInput.length > 0) {
      setUserInput("");

      !!props.submitAction && props.submitAction(userInput);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        borderRadius: "5px",
        overflow: "hidden",
        width: "70px",
      }}
    >
      <Input
        type="text"
        value={userInput}
        onChange={(evt) => handleUserInput(evt)}
        onKeyPress={(evt) => evt.key === "Enter" && handleUserSubmit()}
      />
      <Button onClick={handleUserSubmit}>
        <SendIcon />
      </Button>
    </div>
  );
};

export default TextInput;
