import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Heading1: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Heading1;

const Wrapper = styled.h1`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading1.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading1.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading1.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading1.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading1.marginbottom};
`;
