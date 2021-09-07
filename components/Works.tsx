import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/Container";
import { MEDIA_BREAK } from "../styles/GlobalStyle";
import Work from "./Work";

type Props = {};

const Works: React.FC<Props> = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Title>Works</Title>
        <SectionBlock>
          <Work
            link="/todobubu"
            src={"/thumb-todobubu.jpg"}
            wider={false}
            title="Todobubu"
            desc="React"
          />
          <Work
            link="/loopa"
            src={"/thumb-loopa.jpg"}
            wider={true}
            title="Loopa"
            desc="Tone.js"
          />
        </SectionBlock>
        <SectionBlock>
          <Work
            link="/hautakchurch"
            src={"/thumb-hautakchurch.jpg"}
            wider={true}
            title="Hau Tak Church Web"
            desc="Wordpress"
          />
          <Work
            link="/danxup"
            src={"/thumb-danxup.jpg"}
            wider={false}
            title="danXup"
            desc="Pose Animator"
          />
        </SectionBlock>
      </StyledContainer>
    </Wrapper>
  );
};

export default Works;

const Wrapper = styled.section``;

const Title = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  position: absolute;
  top: 35px;
  left: 0;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    left: 30px;
  }
`;

const SectionBlock = styled.div`
  background-color: ${({ theme }) => theme.bg.main};
  width: calc(100% - 40px);
  margin-left: auto;
  margin-bottom: 35px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    width: calc(100% - 15px);
    padding: 20px;
  }

  &:nth-child(2) {
    padding-top: 113px;
  }
`;
