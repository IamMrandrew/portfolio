import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import Button from "../components/Button";
import { StyledContainer } from "../styles/Container";
import { MEDIA_BREAK } from "../styles/GlobalStyle";
import Image from "next/image";

type Props = {};

const Profile: React.FC<Props> = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <AboutSection>
          <TextWrapper variant="about">
            <OverflowWrapper>
              <Title>Know more about me?</Title>
            </OverflowWrapper>
            <OverflowWrapper>
              <Desc>
                I am a year 3 student in the Chinese University of Hong Kong
                majoring in Computer Science.
              </Desc>
            </OverflowWrapper>
            <OverflowWrapper>
              <Desc>
                I love designing and coding. Working on frontend web development
                and UI/ UX design recently.
              </Desc>
            </OverflowWrapper>
            <OverflowWrapper>
              <Desc>I am eager to learn more and I can learn quickly</Desc>
            </OverflowWrapper>
            <OverflowWrapper>
              <Link href={"/resume.pdf"} passHref>
                <Anchor>
                  <Button text={"Resume"} variant="orange" />
                </Anchor>
              </Link>
            </OverflowWrapper>
          </TextWrapper>
          <ImgWrapper>
            <Image
              src={"/memoji.png"}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="memoji"
            />
          </ImgWrapper>
        </AboutSection>
        <SkillSection>
          <SkillTitle>Skills</SkillTitle>
          <SectionBlock>
            <SkillsWrapper>
              <TextWrapper variant="skill">
                <SkillsSubtitle>Coding</SkillsSubtitle>
                <SkillsItem>HTML</SkillsItem>
                <SkillsItem>CSS, SCSS</SkillsItem>
                <SkillsItem>Javascript</SkillsItem>
                <SkillsItem>Typescript</SkillsItem>
                <SkillsItem>Python</SkillsItem>
                <SkillsItem>PHP</SkillsItem>
              </TextWrapper>
            </SkillsWrapper>
            <SkillsWrapper>
              <TextWrapper variant="skill">
                <SkillsSubtitle>Environment</SkillsSubtitle>
                <SkillsItem>React, Next.js</SkillsItem>
                <SkillsItem>MERN</SkillsItem>
                <SkillsItem>Bootstrap</SkillsItem>
                <SkillsItem>Wordpress</SkillsItem>
                <SkillsItem>Firebase</SkillsItem>
                <SkillsItem>Flutter</SkillsItem>
                <SkillsItem>Git, GitHub</SkillsItem>
              </TextWrapper>
            </SkillsWrapper>
            <SkillsWrapper>
              <TextWrapper variant="skill">
                <SkillsSubtitle>UX/UI</SkillsSubtitle>
                <SkillsItem>Figma</SkillsItem>
                <SkillsItem>Framer</SkillsItem>
                <SkillsItem>UX Research</SkillsItem>
                <SkillsItem>Prototyping</SkillsItem>
                <SkillsItem>Usability Testing</SkillsItem>
              </TextWrapper>
            </SkillsWrapper>
          </SectionBlock>
        </SkillSection>
      </StyledContainer>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div``;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 600px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    height: 500px;
  }
`;

const OverflowWrapper = styled.div`
  overflow: hidden;
`;

const TextWrapper = styled.div`
  ${(props: { variant?: string }) =>
    props.variant === "skill" &&
    css`
      width: 170px;

      @media screen and (max-width: ${MEDIA_BREAK.md}) {
        width: 150px;
      }
    `}

  ${(props: { variant?: string }) =>
    props.variant === "about" &&
    css`
      flex-basis: 60%;

      @media screen and (max-width: ${MEDIA_BREAK.md}) {
        flex-basis: 100%;
      }
    `}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text.tinted};

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 18px;
  }
`;

const ImgWrapper = styled.div`
  flex-basis: 40%;
  padding: 30px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const SkillSection = styled.section`
  position: relative;
`;

const SkillTitle = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  position: absolute;
  top: 35px;
  left: 0;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    left: 30px;
  }
`;

const SectionBlock = styled.div`
  padding: 40px;
  padding-top: 100px;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.bg.oldLace};
  width: calc(100% - 40px);
  margin-left: auto;
  margin-bottom: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    width: calc(100% - 15px);
    padding: 20px;
    padding-top: 90px;
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex: 0 0 33%;
    max-width: 33%;
  }
`;

const SkillsSubtitle = styled.h3`
  color: ${({ theme }) => theme.text.darkBrown};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 21px;
  }
`;

const SkillsItem = styled.p`
  color: ${({ theme }) => theme.text.darkBrown};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 18px;
  }
`;
