import React from "react";
import Link from "next/link";
import styled from "styled-components";
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
          <TextWrapper>
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
                  <Button text={"Resume"} />
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
  flex-basis: 60%;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    flex-basis: 100%;
  }
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
