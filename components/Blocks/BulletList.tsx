import React from "react";
import styled from "styled-components";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const BulletedList: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <BulletedListItem>
        <Text>{block[block.type].text}</Text>
      </BulletedListItem>
    </Wrapper>
  );
};

export default BulletedList;

const Wrapper = styled.ul`
  list-style: disc;
  padding-left: 28px;
  margin-top: ${({ theme }) =>
    theme.typography.text.bulletlistitem.margintop.single};

  h1 + &,
  h2 + &,
  h3 + &,
  ul + & {
    margin-top: ${({ theme }) =>
      theme.typography.text.bulletlistitem.margintop.multiple};
  }
`;

const BulletedListItem = styled.li`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.text.bulletlistitem.fontsize};
  font-weight: ${({ theme }) =>
    theme.typography.text.bulletlistitem.fontweight};
  line-height: ${({ theme }) =>
    theme.typography.text.bulletlistitem.lineheight};
  margin-bottom: ${({ theme }) =>
    theme.typography.text.bulletlistitem.marginbottom};
`;
