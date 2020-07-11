import styled from "styled-components";
import { AddCircle } from "@styled-icons/ionicons-outline";

export const AddBlock = styled.div`
  border: 3px dashed black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AddIcon = styled(AddCircle)`
  width: 50px;
`;
