import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Heading2;

const Wrapper = styled.h2`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading2.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading2.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading2.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading2.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading2.marginbottom};
`;
