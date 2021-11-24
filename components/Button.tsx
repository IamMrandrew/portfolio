import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  type?: string;
  variant?: string;
};

const Button: React.FC<Props> = ({ text, type, variant }) => {
  return (
    <StyledButton type={type ? "submit" : "button"} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 12px 30px;
  background-color: ${(props: { variant: string | undefined; theme: any }) => {
    switch (props.variant) {
      case "orange":
        return props.theme.color.accent.secondary;
      default:
        return props.theme.color.neutral.inverseBackground;
    }
  }};
  color: ${({ theme }) => theme.color.accent.onSecondary};
  font-size: 18px;
  font-weight: 700;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
