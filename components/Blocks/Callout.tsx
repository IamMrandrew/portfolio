import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Callout: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Callout;

const Wrapper = styled.p`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading1.fontsize};
  font-weight: ${({ theme }) => theme.typography.text.paragraph.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading1.lineheight};
  margin-top: 64px;
  margin-bottom: 64px;
`;
