import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Heading3: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Heading3;

const Wrapper = styled.h3`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading3.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading3.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading3.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading3.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading3.marginbottom};
`;
