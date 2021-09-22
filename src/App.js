/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Footer from './Footer';
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
  const [isActive, setIsActive] = useState([false, false, false, false, false]);

  const handleAccordionClick = ({ currentTarget }) => {
    const id = currentTarget.id;
    console.log(id);

    setIsActive((prev) => {
      const updatedArray = [...prev];
      updatedArray[id] = true;
      setIsActive(updatedArray);
    });
  };

  return (
    <>
      <Global styles={globalStyle} />
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5
        isActive={isActive}
        handleAccordionClick={handleAccordionClick}
      />
      <Footer />
    </>
  );
}

export default App;
