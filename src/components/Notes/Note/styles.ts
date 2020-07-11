import styled from "styled-components";
export const Title = styled.h4`
  
`

export const Summary = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  small {
    margin-left: 5px;
  }
`

export const NoteBox = styled.div`
  background-color: #474747;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 700px) {
    width: 80%;
    margin: auto auto;
  }
`