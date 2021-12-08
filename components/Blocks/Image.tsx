import React from "react";
import styled from "styled-components";
import NextImage from "next/image";
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
      ></NextImage>
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 16px;
`;
