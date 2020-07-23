import React, { FormEvent, useState, useEffect } from "react";
import NotesService from "../../services/NotesService";
import { useNavigate } from "react-router-dom";
import { FormBox, StyledForm } from "./styles";
import TagsSelector from "./TagsSelector";
import TagsService from "../../services/TagsService";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Spinner from "../../components/UI/Spinner";
import firebaseSerializer from "../../helper/firebaseSerializer";
import Loading from "../../components/UI/Loading";

interface FormData {
  read: string;
  summary: string;
  description: string;
  book_id: number;
  tags: string[];
}

interface Tag {
  id: string;
  name: string;
  color: string;
}

const EditNote = () => {
  const navigate = useNavigate();

  const [passedProps] = useState(window.history.state.usr);
  const { id } = passedProps;
  const [bookId] = useState(passedProps.book_id);
  const [summary, setSummary] = useState(passedProps.summary);
  const [description, setDescription] = useState(passedProps.description);
  const [read, setRead] = useState(passedProps.read);
  const [tags, setTags] = useState<Tag[]>();
  const [selectedTags, setSelectedTags] = useState<string[]>(passedProps.tags || []);
  const [formData, setFormData] = useState<FormData>({
    read: "",
    summary: "",
    description: "",
    book_id: Number(bookId),
    tags: [],
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    TagsService.index().then((response) => {
      setTags(firebaseSerializer(response.data));
    });
  }, []);

  const handleSelectedTag = (tagId: string) => {
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
    // console.clear();
    console.table(formData);
  }, [read, summary, description, selectedTags]);

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (invalidData()) {
      return;
    }

    setSubmitted(true)

    function redirectToRoot() {
        navigate("/", { replace: true });
    }

    const response = await NotesService.update(formData, id);

    if (response.status === 200) {
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

  console.log(tags)

  if (!tags) {
    return <Spinner />;
  }

  return (
    <>
    <FormBox>
      <StyledForm onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col md={6} xl={6}>
              <Form.Group>
                <Form.Label>Read</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write about what you read"
                  value={read}
                  onChange={handleReadInput}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6} xl={6}>
              <Form.Group>
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write some summary"
                  value={summary}
                  onChange={handleSummaryInput}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>Write the description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={description}
                  onChange={handleDescriptionInput}
                  rows={5}
                  placeholder="It was an amazing chapter..."
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        {!!tags ? (
          <TagsSelector
            tags={tags}
            selectedTags={selectedTags}
            clicked={handleSelectedTag}
          />
        ) : null}
        <Button type="submit">Save</Button>
      </StyledForm>
    </FormBox>
    { submitted && <Loading />}
    </>
  );
};

export default EditNote;
