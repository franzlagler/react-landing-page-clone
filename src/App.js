/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import MainContainer1 from './Components/MainContainer1';
import MainContainer2 from './Components/MainContainer2';
import Navbar from './Components/Navbar';

const globaleStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.5;
  }

  body {
    width: 100%;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globaleStyle} />
      <Navbar />
      <MainContainer1 />
      <MainContainer2 />
    </div>
  );
}

export default App;
