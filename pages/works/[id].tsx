import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledContainer } from "../../styles/Container";
import { Client } from "@notionhq/client";
import { MEDIA_BREAK } from "../../styles/GlobalStyle";
import { Block } from "../../types/Block";
import { Page } from "../../types/Page";
import Button from "../../components/Button";
import Render from "../../components/Render";
import Paragraph from "../../components/Blocks/Paragraph";

type Props = {
  page: Page;
  pageBlocks: Array<Block>;
};

const WorkPage: React.FC<Props> = ({ page, pageBlocks }) => {
  let offset = 0;

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

  const getDesc = (): Array<JSX.Element> => {
    let descBlocks: Array<JSX.Element> = [];

    for (let [index, block] of pageBlocks.entries()) {
      if (block.type === "paragraph") {
        descBlocks.push(<Paragraph key={block.id} block={block} />);
      } else {
        offset = index;
        break;
      }
    }

    return descBlocks;
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
          <Render blocks={pageBlocks.slice(offset)} />
        </Content>
      </StyledContainer>
    </Wrapper>
  );
};

export default WorkPage;

export const getStaticPaths = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = process.env.NOTION_DATABASE_ID || "";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  const paths = response.results.map((page: Page) => {
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
  const databaseID = process.env.NOTION_DATABASE_ID || "";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  const id =
    response.results.find(
      (page: Page) =>
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

const Spacer = styled.div`
  height: 18px;
`;
