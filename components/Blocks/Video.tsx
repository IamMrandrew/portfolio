import React from "react";
import styled from "styled-components";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Video: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper controls>
      <source src={block[block.type].file.url} />
    </Wrapper>
  );
};

export default Video;

const Wrapper = styled.video`
  margin-top: 64px;
  margin-bottom: 64px;
  width: 100%;
  max-height: 500px;
`;
