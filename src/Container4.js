/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const btn = css`
  height: 50px;
  padding: 5px 15px;
  margin-right: 20px;
  background-color: #f2f2f2;
  border: 3px solid #f2f2f2;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
`;

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
function Container4() {
  return (
    <div css={container1Style}>
      <div css={contentContainerStyle}>
        <h1 css={headingStyle}>Add Glyphfinder to Your Tool Belt</h1>
        <p css={paraStyle}>
          Glyphfinder is the missing character search for designers, developers
          and writers.
        </p>
        <div css={buttonContainerStyle}>
          <button css={btn}>Buy for $6,99</button>
          <p css={appleLogoStyle}></p>
        </div>
        <p>30-Day Money-Back-Guarantee</p>
      </div>
    </div>
  );
}

export default Container4;
