import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormBox = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--whitesmoke);

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;
