import React from "react";
import classes from "./styles.module.css";
import styled from "styled-components";
import Books from '../components/Books'
import Tags from '../components/Tags'

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia
        placeat sit. Similique voluptatibus assumenda harum praesentium maxime
        blanditiis error asperiores eum debitis! Earum culpa placeat voluptas
        tempore. Saepe, nulla!
      </p>
    </div>
    <div className={[classes.Tags, classes.Item].join(" ")}>
      <StyledTitle>Tags</StyledTitle>
      <Tags />
    </div>
  </div>
);

export default Layout;
