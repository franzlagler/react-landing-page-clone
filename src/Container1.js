/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Components/Button';

const container1Style = css`
  padding: 100px 320px;
  background-color: #ff624d;
  color: #1f1f1f;
`;

const contentContainerStyle = css`
  padding: 0 80px;
`;

const headingStyle = css`
  margin-bottom: 30px;
  font-size: 90px;
  font-weight: 900;
`;

const paraStyle = css`
  font-size: 30px;
  line-height: 1.5;
`;

const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  height: 20px;
  margin: 30px 0 50px 0;
  grid-gap: 10px;
`;

const appleLogoStyle = css`
  display: inline-block;
  height: inherit;
  margin: auto 0;
  font-size: 30px;
`;
function Container1() {
  return (
    <div css={container1Style}>
      <div css={contentContainerStyle}>
        <h1 css={headingStyle}>Every fricking character at your fingertips</h1>
        <p css={paraStyle}>
          Glyphfinder is the missing character search for designers, developers
          and writers.
        </p>
        <div css={buttonContainerStyle}>
          <Button>Get it now</Button>
          <span css={appleLogoStyle}></span>
        </div>
        <p>30-Day Money-Back-Guarantee</p>
      </div>
    </div>
  );
}

export default Container1;
