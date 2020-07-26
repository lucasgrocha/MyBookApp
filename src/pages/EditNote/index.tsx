import React, { FormEvent, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormBox, StyledForm } from "./styles";
import TagsSelector from "./TagsSelector";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Spinner from "../../components/UI/Spinner";
import Loading from "../../components/UI/Loading";
import dataLoaderContext from "../../context/dataLoaderContext";
import firebase from "../../firebase";

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
  const dataContext = useContext(dataLoaderContext);

  const [passedProps] = useState(window.history.state.usr);
  const { id } = passedProps;
  const [bookId] = useState(passedProps.book_id);
  const [summary, setSummary] = useState(passedProps.summary);
  const [description, setDescription] = useState(passedProps.description);
  const [read, setRead] = useState(passedProps.read);
  const [tags] = useState<Tag[]>(dataContext.tags as Tag[]);
  const [selectedTags, setSelectedTags] = useState<string[]>(
    passedProps.tags || []
  );
  const [formData, setFormData] = useState<FormData>({
    read: "",
    summary: "",
    description: "",
    book_id: Number(bookId),
    tags: [],
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (invalidData()) {
      return;
    }

    setSubmitted(true);

    function redirectToRoot() {
      navigate("/", { replace: true });
    }

    cleanUpInputs();

    const notesRef = firebase.database().ref("notes");
    const child = notesRef.child(id);
    child.update({ ...formData }).then(() => {
      redirectToRoot();
    });
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
      {submitted && <Loading />}
    </>
  );
};

export default EditNote;
