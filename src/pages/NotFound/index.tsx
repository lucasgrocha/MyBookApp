import React from "react";
import classes from "./styles.module.css";
import { Link } from "react-router-dom";
import { QuestionCircle } from "@styled-icons/fa-regular";

const NotFound = () => {
  document.title = "Page not found";

  return (
    <div className={classes.Mainbox}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.Err}>4</div>
        <QuestionCircle className={classes.Far} />
        <div className={classes.Err2}>4</div>
      </div>
      <div className={classes.Msg}>
        <p>
          <strong>
            Maybe this page moved? Got deleted? Is hiding out in quarantine?
            Never existed in the first place?
          </strong>
        </p>
        <p>
          <strong>
            Let's go <Link to="/">Home</Link> and try from there.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
