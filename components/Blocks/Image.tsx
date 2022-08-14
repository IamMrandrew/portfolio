import React from "react";
import styled from "styled-components";
import NextImage from "next/image";
import Text from "../Blocks/Text";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Image: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <NextImage
        src={block[block.type].file?.url || block[block.type].external?.url}
        alt={block[block.type].caption}
        width="980"
        height="512"
        objectFit="contain"
        layout="responsive"
        priority
      ></NextImage>
      <Caption>
        <Text>{block[block.type].caption}</Text>
      </Caption>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;

const Caption = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.neutral.onSurface};
  font-size: ${({ theme }) => theme.typography.text.caption.fontsize};
  font-weight: ${({ theme }) => theme.typography.text.caption.fontweight};
  line-height: ${({ theme }) => theme.typography.text.caption.lineheight};
  margin-top: ${({ theme }) => theme.typography.text.caption.margintop};
  margin-bottom: ${({ theme }) => theme.typography.text.caption.marginbottom};
`;
