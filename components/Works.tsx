import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { StyledContainer } from "../styles/Container";
import { MEDIA_BREAK } from "../styles/GlobalStyle";
import Work from "./Work";

type Props = {
  works: any;
};

const Works: React.FC<Props> = ({ works }) => {
  return (
    <Wrapper>
      <StyledContainer>
        <Title>Works</Title>
        {works
          .reduce(function (
            accumulator: any,
            currentValue: any,
            currentIndex: any,
            array: any
          ) {
            if (currentIndex % 2 === 0) {
              accumulator.push(array.slice(currentIndex, currentIndex + 2));
            }
            return accumulator;
          },
          [])
          .map((pair: any) => {
            if (pair[1])
              return (
                <SectionBlock key={pair[0].id}>
                  <Work
                    link={
                      "/works/" +
                      pair[0].properties.Name.title[0]?.plain_text
                        .replace(/\s+/g, "")
                        .toLowerCase()
                    }
                    src={
                      pair[0].properties.Thumbnail.files[0]?.file?.url ||
                      pair[0].properties.Thumbnail.files[0]?.external?.url
                    }
                    wider={
                      pair[0].properties.Wider.rich_text[0]?.plain_text ===
                      "true"
                    }
                    title={pair[0].properties.Name.title[0]?.plain_text}
                    desc={pair[0].properties.Tag.rich_text[0]?.plain_text}
                  />
                  <Work
                    link={
                      "/works/" +
                      pair[1].properties.Name.title[0].plain_text
                        .replace(/\s+/g, "")
                        .toLowerCase()
                    }
                    src={
                      pair[1].properties.Thumbnail.files[0]?.file?.url ||
                      pair[1].properties.Thumbnail.files[0]?.external?.url
                    }
                    wider={
                      pair[1].properties.Wider.rich_text[0]?.plain_text ===
                      "true"
                    }
                    title={pair[1].properties.Name.title[0]?.plain_text}
                    desc={pair[1].properties.Tag.rich_text[0]?.plain_text}
                  />
                </SectionBlock>
              );
            else
              return (
                <SectionBlock key={pair[0].id}>
                  <Work
                    link={
                      "/works/" +
                      pair[0].properties.Name.title[0].plain_text
                        .replace(/\s+/g, "")
                        .toLowerCase()
                    }
                    src={
                      pair[0].properties.Thumbnail.files[0]?.file?.url ||
                      pair[0].properties.Thumbnail.files[0]?.external?.url
                    }
                    wider={
                      pair[0].properties.Wider.rich_text[0]?.plain_text ===
                      "true"
                    }
                    title={pair[0].properties.Name.title[0]?.plain_text}
                    desc={pair[0].properties.Tag.rich_text[0]?.plain_text}
                  />
                </SectionBlock>
              );
          })}
      </StyledContainer>
    </Wrapper>
  );
};

export default Works;

const Wrapper = styled.section``;

const Title = styled.h2`
  color: ${({ theme }) => theme.color.neutral.onBackground};
  position: absolute;
  top: 35px;
  left: 0;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    left: 30px;
  }
`;

const SectionBlock = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.surface};
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
