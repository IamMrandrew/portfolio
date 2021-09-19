import styled from "styled-components";
import { TRANSITION_TIME } from "./GlobalStyle";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: auto;
  margin-left: auto;
  transition: ${TRANSITION_TIME};

  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0;
  }

  @media (min-width: 992px) {
    max-width: 980px;
  }
`;
