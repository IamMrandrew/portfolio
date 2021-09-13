import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/Container";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { MEDIA_BREAK } from "../styles/GlobalStyle";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <InnerWrapper>
          <Contact>
            <Links>
              <Anchor
                href="https://github.com/IamMrandrew"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <FaGithub aria-hidden={true} />
              </Anchor>
              <Anchor
                href="mailto:andrewliyanlap000824@gmail.com"
                aria-label="mail"
              >
                <FaEnvelope aria-hidden={true} />
              </Anchor>
            </Links>
            <Content>
              <TextWrapper>
                <Title>Contact Me</Title>
                <Desc>
                  I love designing, coding, and exploring. If you are interested
                  in my work, contact me.
                </Desc>
              </TextWrapper>
            </Content>
          </Contact>
          <Copyright>@2021 andrew li</Copyright>
        </InnerWrapper>
      </StyledContainer>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  padding-bottom: 50px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    padding: 0px 30px;
  }
`;

const InnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.contrast};
  padding: 50px;
  padding-bottom: 40px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    padding-top: 60px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    margin-bottom: 18px;
  }
`;

const Links = styled.div`
  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    width: 100%;
    order: 1;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  svg {
    font-size: 40px;
    margin-right: 20px;

    @media screen and (max-width: ${MEDIA_BREAK.md}) {
      font-size: 30px;
      margin-right: 12px;
    }
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    margin-bottom: 36px;
  }
`;

const TextWrapper = styled.div``;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 25px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Desc = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 0;
  line-height: 1.4;

  @media screen and (max-width: ${MEDIA_BREAK}) {
    font-size: 18px;
  }
`;

const Copyright = styled.p`
  font-size: 21px;
  font-weight: 600;

  @media screen and (max-width: ${MEDIA_BREAK}) {
    font-size: 16px;
  }
`;
