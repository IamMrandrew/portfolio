import { createGlobalStyle } from "styled-components";

export const TRANSITION_TIME = "0.3s";

export const MEDIA_BREAK = {
  sm: "575.99px",
  md: "767.99px",
  lg: "991.99px",
  xl: "1199.99px",
};

export const COLOR = {
  text: {
    primary: "#202020",
    secondary: "#4B4B4B",
    tinted: "#747474",
    contrast: "#ffffff",
  },
  bg: {
    main: "#fafafa",
    primary: "#202020",
    highlighted: " #f5dab1",
    orange: "#fa824c",
    oldLace: "#f9f4eb",
  },
  placeholder: {
    main: "#dedede",
  },
  border: {},
  divider: {},
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;    
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  a[href^="tel"] {
    text-decoration: inherit;
    color: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {    
    font-family: "Barlow", "Montserrat", sans-serif;
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-hightlight-color: rgba(0, 0, 0, 0);
  }

  // scroll-lock (temporary)
  body.scroll-lock {
    overflow: hidden;
  }

  // typography
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat";
    font-weight: 600;
    line-height: 1.34;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${MEDIA_BREAK.md}) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 26px;
    }

    h3 {
      font-size: 21px;
    }
  }
`;

export const ResetStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 100%;
    font: inherit; */
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    -webkit-appearance: none;
  }

  a[href^="tel"] {
    text-decoration: inherit;
    color: inherit;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-hightlight-color: rgba(0, 0, 0, 0);
  }
`;
