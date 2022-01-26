import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const NumberedList: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <NumberedListItem>
        <Text>{block[block.type].text}</Text>
      </NumberedListItem>
    </Wrapper>
  );
};

export default NumberedList;

const Wrapper = styled.ol`
  list-style: none;
  padding-left: 28px;
  margin-top: ${({ theme }) =>
    theme.typography.text.bulletlistitem.margintop.single};
  position: relative;

  // Don't know why :not(ol) + & not working
  h1 + &,
  h2 + &,
  h3 + &,
  p + &,
  ul + & {
    counter-reset: start 0;
  }

  li:before {
    content: counter(start) ". ";
    counter-increment: start;
    position: absolute;
    top: 0;
    left: 6px;
  }

  h1 + &,
  h2 + &,
  h3 + &,
  ul + & {
    margin-top: ${({ theme }) =>
      theme.typography.text.bulletlistitem.margintop.multiple};
  }
`;

const NumberedListItem = styled.li`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.text.bulletlistitem.fontsize};
  font-weight: ${({ theme }) =>
    theme.typography.text.bulletlistitem.fontweight};
  line-height: ${({ theme }) =>
    theme.typography.text.bulletlistitem.lineheight};
  margin-bottom: ${({ theme }) =>
    theme.typography.text.bulletlistitem.marginbottom};
`;
