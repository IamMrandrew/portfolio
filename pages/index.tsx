import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledContainer } from "../styles/Container";
import Works from "../components/Works";
import { Client } from "@notionhq/client";
import { useEffect, useState } from "react";
import { MEDIA_BREAK } from "../styles/GlobalStyle";

type Props = {
  results: any;
};

export default function Home({ results }: Props) {
  useEffect(() => {
    console.log(results);
  }, []);

  const [text, setText] = useState("");

  const textsIn = {
    animate: {
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

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

  useEffect(() => {
    const texts = [
      "creating beautiful things",
      "solving problems with my own creation",
      "exploring interesting things",
    ];
    let index = 0;
    let letterIndex = 0;
    let currentText = "";

    const typing = () => {
      index %= texts.length;

      currentText = texts[index];

      setText(currentText.slice(0, ++letterIndex));

      if (currentText.slice(0, letterIndex).length === currentText.length) {
        index++;
        letterIndex = 0;
      }
    };

    const typewriter = setInterval(typing, 400);

    return () => {
      clearInterval(typewriter);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Andrew Li | Laporatory</title>
        <meta
          name="description"
          content="Computer Science student from The Chinese University of Hong Kong, Designing and developing."
        />
        <meta
          name="keywords"
          content="andrew li, li yan lap, computer science, cuhk, todobubu, loopa, danxup, hau tak church"
        />
      </Head>
      <Hero>
        <StyledContainer>
          <TextWrapper
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={textsIn}
          >
            <OverflowWrapper>
              <Title variants={textIn}>
                Hello, I am andrew <br></br> a{" "}
                <Highlighting>
                  Computer&nbsp;
                  <Highlighter></Highlighter>
                </Highlighting>
                <Highlighting>
                  Science&nbsp;
                  <Highlighter></Highlighter>
                </Highlighting>
                <Highlighting>
                  student
                  <Highlighter></Highlighter>
                </Highlighting>
              </Title>
            </OverflowWrapper>
            <OverflowWrapper>
              <Subtitle variants={textIn}>I love {text}</Subtitle>
            </OverflowWrapper>
          </TextWrapper>
        </StyledContainer>
      </Hero>
      <Works works={results} />
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = "1d8991e599c34471a4378d3da5a27225";
  const response = await notion.databases.query({
    database_id: databaseID,
  });

  return {
    props: {
      results: response.results.sort(
        (a: any, b: any) =>
          a.properties.Index.number - b.properties.Index.number
      ),
    },
    revalidate: 10,
  };
}

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

const OverflowWrapper = styled.div`
  overflow: hidden;
`;

const TextWrapper = styled(motion.div)`
  width: 100%;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.text.primary};

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 30px;
  }
`;

const Highlighting = styled.span`
  position: relative;
  display: inline-block;
`;

const Highlighter = styled.div`
  position: absolute;
  z-index: -1;
  top: 40px;
  left: 15px;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.bg.highlighted};
  opacity: 0.9;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    top: 20px;
    left: 8px;
    width: 100%;
    height: 18px;
    background-color: $highlighted;
    opacity: 0.9;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.tinted};
  letter-spacing: 1px;
  line-height: 1.3;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 18px;
  }
  &::after {
    content: "";
    width: 5px;
    height: 4px;
    border-right: 3px solid ${({ theme }) => theme.text.tinted};
    margin: 8px;
    animation: blink 0.5s step-end infinite;

    @media screen and (max-width: ${MEDIA_BREAK.md}) {
      border-right: 2px solid ${({ theme }) => theme.text.tinted};
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
