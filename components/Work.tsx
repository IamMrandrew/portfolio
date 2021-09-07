import React from "react";
import styled from "styled-components";
import { MEDIA_BREAK } from "../styles/GlobalStyle";
import Link from "next/link";
import Image from "next/image";

type Props = {
  link: string;
  src: string;
  wider: boolean;
  title: string;
  desc: string;
};

const Work: React.FC<Props> = ({ link, src, wider, title, desc }) => {
  return (
    <Wrapper>
      <Link href={link} passHref>
        <Anchor>
          <RatioWrapper>
            <ImgWrapper wider={wider}>
              <Image src={src} layout="fill" />
            </ImgWrapper>
          </RatioWrapper>
        </Anchor>
      </Link>
      <TextWrapper>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TextWrapper>
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: ${MEDIA_BREAK.lg}) {
    flex-basis: 48%;
  }

  @media screen and (max-width: ${MEDIA_BREAK.sm}) {
    flex-basis: 100%;
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const RatioWrapper = styled.div`
  margin-bottom: 6px;
  cursor: pointer;

  @media screen and (max-width: ${MEDIA_BREAK.lg}) {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  &:hover img {
    transform: scale(1.01) translateY(-5px);
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: ${(props: { wider: boolean }) => (props.wider ? "495px" : "335px")};
  height: 335px;
  overflow: hidden;

  @media screen and (max-width: ${MEDIA_BREAK.lg}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
    transition: transform 0.5s;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 500;
`;

const Desc = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 400;
  text-align: right;
`;

// &--wider .img-wrapper {
//   width: 495px;

//   @media screen and (max-width: $breakpoint-lg) {
//     width: 100%;
//     height: 100%;
//   }
// }
