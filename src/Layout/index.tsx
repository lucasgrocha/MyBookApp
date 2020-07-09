import React from "react";
import classes from "./styles.module.css";
import styled from "styled-components";

const StyledTitle = styled.h3`
  border-bottom: 3px solid transparent;
  transition: 0.1s;
  margin-bottom: 10px;
  &:hover {
    border-bottom: 3px solid white;
  }
`;

const Layout = () => (
  <div className={classes.Grid}>
    <div className={classes.Books}>
      <StyledTitle>Books</StyledTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia
        placeat sit. Similique voluptatibus assumenda harum praesentium maxime
        blanditiis error asperiores eum debitis! Earum culpa placeat voluptas
        tempore. Saepe, nulla!
      </p>
    </div>
    <div className={classes.Notes}>
      <StyledTitle>Notes</StyledTitle>
    </div>
    <div className={classes.Tags}>
      <StyledTitle>Tags</StyledTitle>
    </div>
  </div>
);

export default Layout;
