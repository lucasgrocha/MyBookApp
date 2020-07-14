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
import TagsSelector from "./TagsSelector";
import TagsService from "../../services/TagsService";

interface FormData {
  read: string;
  summary: string;
  description: string;
  book_id: number;
  tags: number[];
}

const CreateNote = () => {
  const navigate = useNavigate();

  const { bookId } = useParams();
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    read: "",
    summary: "",
    description: "",
    book_id: Number(bookId),
    tags: [],
  });

  useEffect(() => {
    TagsService.index().then((response) => {
      setTags(response.data);
    });
  }, []);

  const handleSelectedTag = (tagId: number) => {
    if (!selectedTags?.includes(tagId)) {
      setSelectedTags((prevState) => [...prevState, tagId]);
    } else {
      const newArr = [...selectedTags].filter((tag_id) => tag_id !== tagId);
      setSelectedTags(newArr);
    }
  };

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, read }));
  }, [read]);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, tags: selectedTags }));
  }, [selectedTags]);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, summary }));
  }, [summary]);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, description }));
  }, [description]);

  useEffect(() => {
    console.clear();
    console.table(formData);
  }, [read, summary, description, selectedTags]);

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
        <TagsSelector
          tags={tags}
          selectedTags={selectedTags}
          clicked={handleSelectedTag}
        />
      <SubmitButton type="submit">Save</SubmitButton>
    </StyledForm>
  );
};

export default CreateNote;
