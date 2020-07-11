import React from "react";

import { StyledBackdrop } from "./styles";

interface Props {
  clicked?: () => void;
}

const Backdrop: React.FC<Props> = (props) => {
  return <StyledBackdrop onClick={props.clicked} />;
};

export default Backdrop;
