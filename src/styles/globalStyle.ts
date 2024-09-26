import { css } from '@emotion/react'

// css reset 및 추후 color palette나 글자 규격 정해지면 아래에 추가
export default css`
  @import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap');
  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-Regular.woff2') format('woff2'),
      url('/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400; /* Regular */
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-Medium.woff2') format('woff2'),
      url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500; /* Medium */
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-Bold.woff2') format('woff2'),
      url('/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700; /* Bold */
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-Light.woff2') format('woff2'),
      url('/fonts/Pretendard-Light.woff') format('woff');
    font-weight: 300; /* Light */
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'),
      url('/fonts/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800; /* Extra Bold */
    font-style: normal;
  }

  :root {
    --dimmed-zindex: 10;
    --alert-zindex: 11;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
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
    font-size: 100%;
    font: inherit;
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
    font-family: 'Pretendard', sans-serif;
    letter-spacing: -0.4px !important;
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
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    box-shadow: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;

    color: inherit;
    font: inherit;
    line-height: normal;
  }
  * {
    box-sizing: border-box;
  }
`
