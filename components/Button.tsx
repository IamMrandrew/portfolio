import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  type?: string;
};

const Button: React.FC<Props> = ({ text, type }) => {
  return <StyledButton type={type ? "submit" : "button"}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 12px 30px;
  background-color: ${({ theme }) => theme.bg.orange};
  color: ${({ theme }) => theme.text.contrast};
  font-size: 18px;
  font-weight: 700;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
