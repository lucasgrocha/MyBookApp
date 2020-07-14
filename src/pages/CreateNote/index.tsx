import React, { FormEvent, useState, useEffect } from "react";
import NotesService from "../../services/NotesService";
import { useParams, useNavigate } from "react-router-dom";
import {
  InputField,
  StyledForm,
  Field,
  DescriptionInput,
  SubmitButton,
  StyledHeader,
} from "./styles";

const CreateNote = () => {
  const navigate = useNavigate();

  const { bookId } = useParams();
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState("");
  const [formData, setFormData] = useState({
    read: "",
    summary: "",
    description: "",
    book_id: bookId,
  });

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, read }));
  }, [read]);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, summary }));
  }, [summary]);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, description }));
  }, [description]);

  useEffect(() => {
    console.log(formData);
  }, [read, summary, description]);

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (invalidData()) {
      return;
    }

    function redirectToRoot() {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    }

    const response = await NotesService.create(formData);

    if (response.status === 201) {
      cleanUpInputs();
      redirectToRoot();
    }
  };

  const invalidData = () => Object.values(formData).includes("");

  const cleanUpInputs = () => {
    setDescription("");
    setRead("");
    setSummary("");
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
        <InputField
          type="text"
          placeholder="Read"
          value={read}
          onChange={handleReadInput}
        />
        <InputField
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={handleSummaryInput}
        />
      </Field>
      <DescriptionInput
        placeholder="Description"
        value={description}
        onChange={handleDescriptionInput}
      />
      <SubmitButton type="submit">Save</SubmitButton>
    </StyledForm>
  );
};

export default CreateNote;
