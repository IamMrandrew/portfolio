import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { StyledContainer } from "../../styles/Container";
import { Client } from "@notionhq/client";
import { MEDIA_BREAK } from "../../styles/GlobalStyle";
import Button from "../../components/Button";
import { atomOneLight, CodeBlock } from "react-code-blocks";

type Props = {
  page: any;
  pageBlocks: any;
};

type Block = {
  id?: string;
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
          <Paragraph key={block.id}>
            <Text>{block.paragraph.text}</Text>
          </Paragraph>
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
    return text.map((value: any, index: number) => {
      // { bold, code, color, italic, strikethrough, underline }
      const { annotations: annotations, text } = value;

      return (
        <TextBlock key={index} annotations={annotations}>
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
              <Heading1 key={block.id}>
                <Text>{block[block.type].text}</Text>
              </Heading1>
            );
          case "heading_2":
            return (
              <Heading2 key={block.id}>
                <Text>{block[block.type].text}</Text>
              </Heading2>
            );
          case "heading_3":
            return (
              <Heading3 key={block.id}>
                <Text>{block[block.type].text}</Text>
              </Heading3>
            );
          case "paragraph":
            return (
              <Paragraph key={block.id}>
                <Text>{block[block.type].text}</Text>
              </Paragraph>
            );
          case "bulleted_list_item":
            return (
              <BulletedList key={block.id}>
                <BulletedListItem>
                  <Text>{block[block.type].text}</Text>
                </BulletedListItem>
              </BulletedList>
            );
          case "image":
            return (
              <ImageWrapper key={block.id}>
                <Image
                  src={
                    block[block.type].file?.url ||
                    block[block.type].external?.url
                  }
                  alt={block[block.type].caption}
                  width="980"
                  height="512"
                  objectFit="contain"
                  layout="responsive"
                ></Image>
              </ImageWrapper>
            );
          case "code":
            return (
              <CodeBlockWrapper key={block.id}>
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
          <SectionBlock
            variants={textIn}
            title={page.properties.Name.title[0]?.plain_text}
          >
            <Date>{page.properties.Date.rich_text[0]?.plain_text}</Date>
            {getDesc()}
            <Spacer />
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

const Wrapper = styled(motion.div)`
  padding-bottom: 36px;
`;

const FeatureImage = styled(motion.div)`
  margin-top: 30px;
  margin-bottom: 40px;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.title.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.title.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.title.lineheight};
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0;

  @media screen and (max-width: ${MEDIA_BREAK.sm}) {
    font-size: 40px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 18px;
  display: block;
`;

const SectionBlock = styled(motion.div)`
  background-color: ${({ theme }) => theme.color.neutral.surface};
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

  @media screen and (max-width: ${MEDIA_BREAK.sm}) {
    width: calc(100% - 15px);
    padding: 20px;
    padding-top: ${(props: { title: string }) =>
      props.title.length < 10 ? "60px" : "120px"};
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const Heading1 = styled.h1`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading1.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading1.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading1.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading1.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading1.marginbottom};
`;

const Heading2 = styled.h2`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading2.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading2.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading2.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading2.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading2.marginbottom};
`;

const Heading3 = styled.h3`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  font-size: ${({ theme }) => theme.typography.heading.heading3.fontsize};
  font-weight: ${({ theme }) => theme.typography.heading.heading3.fontweight};
  line-height: ${({ theme }) => theme.typography.heading.heading3.lineheight};
  margin-top: ${({ theme }) => theme.typography.heading.heading3.margintop};
  margin-bottom: ${({ theme }) =>
    theme.typography.heading.heading3.marginbottom};
`;

const Paragraph = styled.p`
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

const BulletedList = styled.ul`
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

const ImageWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 16px;
`;

const CodeBlockWrapper = styled.div`
  font-weight: 500;
  font-family: "Roboto Mono", monospace;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Spacer = styled.div`
  height: 18px;
`;
