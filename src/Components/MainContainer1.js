/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import sampleMessages from '../../public/sampleMessages.svg';
import InputField from './InputField';

const mainContainer1Style = css`
  margin: 0 auto;
  padding: 30px 0;
  background-color: #f1f0f9;
`;

const signUpContainerStyle = css`
  margin: 0 auto;
  width: 50vw;
  text-align: center;
`;

const headingStyle = css`
  margin-bottom: 25px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 40px;
`;

const paraStyle = css`
  font-size: 18px;
`;

const sampleMessageImageStyle = css`
  display: block;
  margin: 50px;
  max-width: 2000px;
`;

function MainContainer1() {
  return (
    <div css={mainContainer1Style}>
      <div css={signUpContainerStyle}>
        <h2 css={headingStyle}>Turn your data into meaningful narratives</h2>
        <p css={paraStyle}>
          Receive valuable insights from your marketing and product data
          automatically. Connect all your data sources in one place. Zero
          coding.
        </p>
        <InputField />
      </div>
      <img
        src={sampleMessages}
        alt="Sample Messages"
        css={sampleMessageImageStyle}
      />
    </div>
  );
}

export default MainContainer1;
