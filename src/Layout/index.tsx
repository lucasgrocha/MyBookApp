import React from "react";
import classes from "./styles.module.css";
import styled from "styled-components";
import Books from "../components/Books";
import Tags from "../components/Tags";
import Notes from "../components/Notes";
import AddNote from "../components/Notes/AddNote";

const StyledTitle = styled.h3`
  border-bottom: 3px solid transparent;
  transition: 0.2s;
  margin-bottom: 10px;
`;

const Layout = () => (
  <div className={classes.Grid}>
    <div className={[classes.Books, classes.Item].join(" ")}>
      <StyledTitle>Books</StyledTitle>
      <Books />
    </div>
    <div className={[classes.Notes, classes.Item].join(" ")}>
      <StyledTitle>Notes</StyledTitle>
      <Notes />
    </div>
    <div className={[classes.Tags, classes.Item].join(" ")}>
      <StyledTitle>Tags</StyledTitle>
      <Tags hasInput />
    </div>
  </div>
);

export default Layout;
