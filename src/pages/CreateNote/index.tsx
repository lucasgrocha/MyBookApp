import React, { FormEvent, useState, useEffect } from "react";
import NotesService from "../../services/NotesService";
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

  useEffect(() => {
    setFormData({ read: read, description: description, summary: summary });
  }, [read, description, summary]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    NotesService.create(formData);
  };

  const handleReadInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRead(evt.target.value);
  };

  const handleSummaryInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(evt.target.value);
  };

  const handleDescriptionInput = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(evt.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeader>About what you read</StyledHeader>
      <Field>
        <InputField type="text" placeholder="Read" onChange={handleReadInput} />
        <InputField
          type="text"
          placeholder="Summary"
          onChange={handleSummaryInput}
        />
      </Field>
      <DescriptionInput
        placeholder="Description"
        onChange={handleDescriptionInput}
      />
      <SubmitButton type="submit">Save</SubmitButton>
    </StyledForm>
  );
};

export default CreateNote;
