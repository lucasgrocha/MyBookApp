import React, { FormEvent, useState } from "react";
import {
  InputField,
  StyledForm,
  Field,
  DescriptionInput,
  SubmitButton,
  StyledHeader,
} from "./styles";

const CreateNote = () => {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState("");
  const [formData, setFormData] = useState({
    read: "",
    summary: "",
    description: "",
  });

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeader>About what you read</StyledHeader>
      <Field>
        <InputField type="text" placeholder="Read" />
        <InputField type="text" placeholder="Summary" />
      </Field>
      <DescriptionInput placeholder="Description" />
      <br />
      <SubmitButton type="submit">Save</SubmitButton>
    </StyledForm>
  );
};

export default CreateNote;
