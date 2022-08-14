import React from "react";
import styled from "styled-components";
import { atomOneLight, CodeBlock } from "react-code-blocks";
import { Block } from "../../types/Block";

type Props = {
  block: Block;
};

const Code: React.FC<Props> = ({ block }) => {
  return (
    <Wrapper>
      <CodeBlock
        text={block[block.type].text[0].plain_text}
        language={block[block.type].language}
        showLineNumbers={false}
        theme={atomOneLight}
        codeBlock
      />
    </Wrapper>
  );
};

export default Code;

const Wrapper = styled.div`
  font-weight: 500;
  font-family: "Roboto Mono", monospace;
  margin-top: 24px;
  margin-bottom: 24px;
`;
