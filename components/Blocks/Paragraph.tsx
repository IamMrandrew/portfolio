import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Paragraph;

const Wrapper = styled.p`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.text.paragraph.fontsize};
  font-weight: ${({ theme }) => theme.typography.text.paragraph.fontweight};
  line-height: ${({ theme }) => theme.typography.text.paragraph.lineheight};
  margin-top: ${({ theme }) =>
    theme.typography.text.paragraph.margintop.single};
  margin-bottom: ${({ theme }) => theme.typography.text.paragraph.marginbottom};

  p + & {
    margin-top: ${({ theme }) =>
      theme.typography.text.paragraph.margintop.multiple};
  }
`;
