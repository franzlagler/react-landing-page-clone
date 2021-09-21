/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Navbar from './Navbar';

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
    </>
  );
}

export default App;
