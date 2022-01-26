import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Quote: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <Text>{block[block.type].text}</Text>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.q`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  padding-left: 18px;
  background: #fafafa;
  box-shadow: -3px 0px 0px
    ${({ theme }) => theme.color.neutral.onBackgroundVariant};
  color: ${({ theme }) => theme.color.neutral.onSurface};
  font-size: ${({ theme }) => theme.typography.text.paragraph.fontsize};
  font-weight: ${({ theme }) => theme.typography.text.paragraph.fontweight};
  line-height: ${({ theme }) => theme.typography.text.paragraph.lineheight};
  margin-top: 16px;
  margin-bottom: 16px;
`;
