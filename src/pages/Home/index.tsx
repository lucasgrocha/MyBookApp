import React, { useContext } from "react";
import classes from "./styles.module.css";
import styled from "styled-components";
import Books from "../../components/Books";
import Tags from "../../components/Tags";
import Notes from "../../components/Notes";
import DataLoaderContext from "../../context/dataLoaderContext";

const StyledTitle = styled.h3`
  border-bottom: 3px solid transparent;
  transition: 0.2s;
  margin-bottom: 10px;
`;

const Home = () => {
  const dataContext = useContext(DataLoaderContext)

  return (
    <>
      <div className={classes.Grid}>
        <div className={[classes.Books, classes.Item].join(" ")}>
          <StyledTitle>Books</StyledTitle>
          <Books data={dataContext.books} />
        </div>
        <div className={[classes.Notes, classes.Item].join(" ")}>
          <StyledTitle>Notes</StyledTitle>
          <Notes data={dataContext.notes}/>
        </div>
        <div className={[classes.Tags, classes.Item].join(" ")}>
          <StyledTitle>Tags</StyledTitle>
          <Tags data={dataContext.tags} hasInput />
        </div>
      </div>
    </>
  );
};

export default Home;
