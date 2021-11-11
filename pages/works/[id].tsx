import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { StyledContainer } from "../../styles/Container";
import { Client } from "@notionhq/client";
import { MEDIA_BREAK } from "../../styles/GlobalStyle";
import Button from "../../components/Button";
import { github, atomOneLight, CodeBlock } from "react-code-blocks";

type Props = {
  page: any;
  pageBlocks: any;
};

type Block = {
  type: string;
  heading_1?: any;
  heading_2?: any;
  heading_3?: any;
  paragraph?: any;
  bulleted_list_item?: any;
  image?: any;
  code?: any;
};

const WorkPage: React.FC<Props> = ({ page, pageBlocks }) => {
  let entry = 0;

  useEffect(() => {
    console.log(page);
    console.log(pageBlocks);
  }, []);

  const textIn = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const getDesc = (): Array<Block> => {
    let descBlocks: Array<Block> = [];

    for (let [index, block] of pageBlocks.entries()) {
      if (block.type === "paragraph") {
        descBlocks.push(
          <Para>
            <Text>{block.paragraph.text}</Text>
          </Para>
        );
      } else {
        entry = index;
        break;
      }
    }

    return descBlocks;
  };

  const Text: React.FC<{ children: any }> = ({ children }) => {
    const text = children;

    if (!text) {
      return null;
    }
    return text.map((value: any) => {
      // { bold, code, color, italic, strikethrough, underline }
      const { annotations: annotations, text } = value;

      return (
        <TextBlock annotations={annotations}>
          {text.link ? (
            <a href={text.link.url}>{text.content}</a>
          ) : (
            text.content
          )}
        </TextBlock>
      );
    });
  };

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

  const getBlocks = (): Array<Block> => {
    return pageBlocks
      .map((block: Block) => {
        switch (block.type) {
          case "heading_1":
            return (
              <Heading1>
                <Text>{block[block.type].text}</Text>
              </Heading1>
            );
          case "heading_2":
            return (
              <Heading2>
                <Text>{block[block.type].text}</Text>
              </Heading2>
            );
          case "heading_3":
            return (
              <Heading3>
                <Text>{block[block.type].text}</Text>
              </Heading3>
            );
          case "paragraph":
            return (
              <Para>
                <Text>{block[block.type].text}</Text>
              </Para>
            );
          case "bulleted_list_item":
            return (
              <BulletedList>
                <BulletedListItem>
                  <Text>{block[block.type].text}</Text>
                </BulletedListItem>
              </BulletedList>
            );
          case "image":
            return (
              <Image
                src={
                  block[block.type].file.url || block[block.type].external.url
                }
                alt={block[block.type].caption}
                width="980"
                height="512"
                objectFit="contain"
                layout="responsive"
              ></Image>
            );
          case "code":
            return (
              <CodeBlockWrapper>
                <CodeBlock
                  text={block[block.type].text[0].plain_text}
                  language={block[block.type].language}
                  showLineNumbers={false}
                  theme={atomOneLight}
                  codeBlock
                />
              </CodeBlockWrapper>
            );
        }
      })
      .slice(entry);
  };
  return (
    <Wrapper initial={"initial"} animate={"animate"} exit={"exit"}>
      <StyledContainer>
        <FeatureImage variants={textIn}>
          <Image
            src={
              page.properties.Feature.files[0]?.file?.url ||
              page.properties.Feature.files[0]?.external?.url
            }
            alt="feature-todobubu"
            width="980"
            height="512"
            objectFit="contain"
            layout="responsive"
          />
        </FeatureImage>
        <Content>
          <Title variants={textIn}>
            {page.properties.Name.title[0]?.plain_text}
          </Title>
          <SectionBlock variants={textIn}>
            <Date>{page.properties.Date.rich_text[0]?.plain_text}</Date>
            {getDesc()}
            {page.properties.WorkURL.rich_text[0]?.plain_text && (
              <Anchor
                href={page.properties.WorkURL.rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
                aria-label="work link"
              >
                <Button text="View work" />
              </Anchor>
            )}
            {page.properties.GitHubURL.rich_text[0]?.plain_text && (
              <Anchor
                href={page.properties.GitHubURL.rich_text[0]?.plain_text}
                target="_blank"
                rel="noreferrer"
                aria-label="work link"
              >
                <Button text="View GitHub" />
              </Anchor>
            )}
          </SectionBlock>
          {getBlocks()}
        </Content>
      </StyledContainer>
    </Wrapper>
  );
};

export default WorkPage;

export const getStaticPaths = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = "1d8991e599c34471a4378d3da5a27225";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  const paths = response.results.map((page: any) => {
    return {
      // Temporary using id as path
      params: {
        id: page.properties.Name.title[0].plain_text
          .replace(/\s+/g, "")
          .toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: any) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = "1d8991e599c34471a4378d3da5a27225";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  const id =
    response.results.find(
      (page: any) =>
        page.properties.Name.title[0].plain_text
          .replace(/\s+/g, "")
          .toLowerCase() == context.params.id
    )?.id || "";

  // const id = context.params.id;
  const pageRes = await notion.pages.retrieve({
    page_id: id,
  });
  const pageBlocksRes = await notion.blocks.children.list({
    block_id: id,
  });

  return {
    props: {
      page: pageRes,
      pageBlocks: pageBlocksRes.results,
    },
    revalidate: 10,
  };
};

const Wrapper = styled(motion.div)``;

const FeatureImage = styled(motion.div)`
  margin-top: 30px;
  margin-bottom: 40px;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.text.primary};
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 18px;
  display: block;
`;

const SectionBlock = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg.main};
  width: calc(100% - 40px);
  margin-left: auto;
  margin-bottom: 35px;
  padding: 40px;
  padding-top: 100px;

  // CSS for Description Buttons
  button {
    min-width: 165px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    width: calc(100% - 15px);
    padding: 20px;
    padding-top: 60px;
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const Heading1 = styled.h2`
  margin-top: 46px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text.primary};
`;

const Heading2 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 36px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text.primary};
`;

const Heading3 = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-top: 26px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text.primary};
`;

const Para = styled.p`
  line-height: 1.5;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 18px;
`;

const BulletedList = styled.ul`
  list-style: disc;
  padding-left: 28px;
`;

const BulletedListItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 10px;
`;

const CodeBlockWrapper = styled.div`
  font-weight: 500;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 20px;
`;
