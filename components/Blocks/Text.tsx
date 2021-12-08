import React from "react";
import styled, { css } from "styled-components";

const Text: React.FC<{ children: any }> = ({ children }) => {
  const text = children;

  if (!text) {
    return null;
  }
  return text.map((value: any, index: number) => {
    // { bold, code, color, italic, strikethrough, underline }
    const { annotations: annotations, text } = value;

    return (
      <TextBlock key={index} annotations={annotations}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </TextBlock>
    );
  });
};

export default Text;

const TextBlock = styled.span`
  // css for inline-code
  ${(props: { annotations: any }) =>
    props.annotations.code &&
    css`
      font-family: "Roboto Mono", monospace;
      font-weight: 500;
      font-size: 16px;
      color: #eb5757;
      background-color: rgb(242, 242, 242);
      padding: 2px 4px;
      border-radius: 2px;

      @media (prefers-color-scheme: dark) {
        background-color: rgb(15, 8, 28);
      }
    `}

  ${(props: { annotations: any }) =>
    props.annotations.bold &&
    css`
      font-weight: 700;
    `}
`;
