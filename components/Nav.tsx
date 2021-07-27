import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { MEDIA_BREAK } from "../styles/GlobalStyle";
import { StyledContainer } from "../styles/Container";

type Props = {};

const Nav: React.FC<Props> = () => {
  const [burger, setBurger] = useState(false);

  const burgerHandler = () => {
    setBurger(!burger);
  };

  const delayBurgerHandler = () => {
    setTimeout(() => {
      burgerHandler();
    }, 350);
  };

  useEffect(() => {
    if (burger) {
      document.querySelector("body")!.classList.add("scroll-lock");
    } else {
      document.querySelector("body")!.classList.remove("scroll-lock");
    }
  }, [burger]);

  return (
    <>
      <Wrapper>
        <CustomContainer>
          <Link href="/" passHref>
            <Anchor>
              <Brand>andrew li</Brand>
            </Anchor>
          </Link>
          <List active={burger}>
            <Item variant="title">Explore More</Item>
            <Item variant="link">
              <Link
                href="/"
                passHref
                // onClick={burger ? delayBurgerHandler : null}
              >
                <Anchor>Works</Anchor>
              </Link>
            </Item>
            <Item variant="link">
              <Link
                href="/profile"
                passHref
                // onClick={burger ? delayBurgerHandler : null}
              >
                <Anchor>Profile</Anchor>
              </Link>
            </Item>
          </List>

          <Burger onClick={burgerHandler}>
            <Bar active={burger} variant="top"></Bar>
            <Bar active={burger} variant="middle"></Bar>
            <Bar active={burger} variant="bottom"></Bar>
          </Burger>
        </CustomContainer>
      </Wrapper>
      <Pusher active={burger}></Pusher>
      <Faded active={burger}></Faded>
    </>
  );
};

export default Nav;

const Wrapper = styled.div`
  height: 80px;
`;

const CustomContainer = styled(StyledContainer)`
  padding-top: 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

const Brand = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-family: "Montserrat";
  font-weight: 600;
  transition: opacity 0.2s ease-in-out, color 0.3s ease-in-out;
  position: relative;

  font-size: 28px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    font-size: 21px;
  }
`;

const List = styled.ul`
  display: flex;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    pointer-events: none;
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 450px;
    width: 100%;
    background-color: ${({ theme }) => theme.bg.oldLace};
    clip-path: circle(0px at 90% 45px);
    transition: all 0.7s cubic-bezier(0.87, 0, 0.11, 1.2);

    ${(props: { active: boolean }) =>
      props.active &&
      css`
        clip-path: circle(480px at 90% -10%);
        pointer-events: all;

        ${Item} {
          opacity: 1;
          padding: 15px 0px;
          margin-right: 30px;
          transform: scale(1) translate(0, 0);
          /* font-size: 27px; */
          /* font-weight: 600; */
        }
      `}
  }
`;

const Item = styled.li`
  color: ${({ theme }) => theme.text.primary};
  font-family: "Montserrat";
  font-weight: 600;
  transition: opacity 0.2s ease-in-out, color 0.3s ease-in-out;
  position: relative;

  font-size: 20px;
  margin-left: 20px;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    position: relative;
    top: -25px;
    padding: 0px;
    opacity: 0;
    font-size: 27px;
    font-weight: 600;
    transform: scale(0.5) translate(0, -250px);
    transition: transform 0.7s cubic-bezier(0.87, 0, 0.11, 1.2),
      opacity 0.7s cubic-bezier(0.87, 0, 0.11, 1.2),
      padding 0.7s cubic-bezier(0.87, 0, 0.11, 1.2),
      margin 0.7s cubic-bezier(0.87, 0, 0.11, 1.2),
      font 0.7s cubic-bezier(0.87, 0, 0.11, 1.2);
  }

  // style for title item
  ${(props: { variant: string }) =>
    props.variant === "title" &&
    css`
      display: none;

      @media screen and (max-width: ${MEDIA_BREAK.md}) {
        display: block;
        font-weight: 700;
        font-size: 36px;
        transform: scale(0.5) translate(50px, -250px);
      }
    `}

  // style for link item
  ${(props: { variant: string }) =>
    props.variant === "link" &&
    css`
      &::after {
        content: "";
        width: 100%;
        height: 0px;
        background-color: ${({ theme }) => theme.bg.highlighted};
        position: absolute;
        bottom: -4px;
        left: 4px;
        z-index: -1;
        transition: height 0.3s ease-in-out;
      }

      &:focus::after,
      &:hover::after {
        height: 15px;
      }

      @media screen and (max-width: ${MEDIA_BREAK.md}) {
        font-size: 27px;
        font-weight: 600;

        &::after {
          content: "";
          width: 100%;
          height: 0px;
          background-color: ${({ theme }) => theme.bg.highlighted};
          position: absolute;
          bottom: 10px;
          left: 6px;
          z-index: -1;
          transition: height 0.3s ease-in-out;
        }

        &:focus::after,
        &:hover::after {
          height: 18px;
        }
      }
    `}
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    display: block;
    position: relative;
    z-index: 2000;
  }
`;

const Bar = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  width: 20px;
  height: 3px;
  margin-left: auto;
  margin-bottom: 4px;
  border-radius: 5px;
  transition: opacity 0.6s ease-out,
    transform 0.7s cubic-bezier(0.87, 0, 0.11, 1.5);

  ${(props: { active: boolean; variant: string }) =>
    props.variant === "top" &&
    css`
      transform: ${props.active
        ? "rotate(-45deg) translate(-5px, 5px)"
        : "rotate(0) translate(0)"};
    `}

  ${(props: { active: boolean; variant: string }) =>
    props.variant === "middle" &&
    css`
      width: 17px;
      opacity: ${props.active ? "0" : "1"};
    `}


    ${(props: { active: boolean; variant: string }) =>
    props.variant === "bottom" &&
    css`
      transform: ${props.active
        ? "rotate(45deg) translate(-5px, -5px)"
        : "rotate(0) translate(0)"};
    `}
`;

const Pusher = styled.div`
  height: ${(props: { active: boolean }) =>
    props.active ? "calc(450px - 80px)" : "0px"};
  transition: 0.7s cubic-bezier(0.87, 0, 0.11, 1.2);
`;

const Faded = styled.div`
  position: absolute;
  z-index: 200;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: ${(props: { active: boolean }) => (props.active ? 1 : 0)};
  pointer-events: none;
  transition: 0.7s cubic-bezier(0.87, 0, 0.11, 1.2);
`;
