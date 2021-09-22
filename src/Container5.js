/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mouselessBanner from '../public/mouseless-banner.png';
import questionsAnswers from './Data/questionsAnswers.js';

// Error is onClick!

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

const container5Style = css`
  padding: 50px 270px;
  background-color: #1f1f1f;
  color: #f0f0f0;
`;

const questionContainer = css`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px 60px;
  margin-top: 30px;
`;

const questionContainerMainHeading = css`
  font-size: 40px;
`;

const singleQAContainer = css`
  width: 500px;
`;
const qaQuestionHeading = css`
  font-size: 30px;
  margin-bottom: 10px;
`;

const accordionTextStyle = css`
  line-height: 1.5;
`;

const downloadContainer = css`
  margin-top: 100px;
`;
const downloadContainerHeading = css`
  margin-bottom: 20px;
  font-size: 40px;
`;

const mouselessLinkContainer = css`
  position: relative;
  display: grid;
  align-content: center;
  grid-row-gap: 10px;
  margin-top: 100px;
  padding: 0 30px;
  height: 200px;
  background-color: #fdd231;
  overflow: hidden;
  border-radius: 15px;
  color: #1f1f1f;
`;
const mouselessHeading = css`
  font-size: 30px;
`;

const mouselessPara = css`
  font-size: 20px;
`;

const mouselessBannerImage = css`
  height: 300px;
  position: absolute;
  right: 0;
`;

function Container5(props) {
  return (
    <div css={container5Style}>
      <h2 css={questionContainerMainHeading}>FAQ</h2>
      <div css={questionContainer}>
        {questionsAnswers.map((el, index) => {
          return (
            <div key={el.heading.trim().toLowerCase()} css={questionContainer}>
              <div css={singleQAContainer}>
                <h3 css={qaQuestionHeading}>{el.heading}</h3>
                <p css={accordionTextStyle}>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div css={downloadContainer}>
        <h2 css={downloadContainerHeading}>Download</h2>
        <button css={btn}>Download for macOS</button>
        <button css={btn}>Download for Windows</button>
        <button css={btn}>Available on Setapp</button>
      </div>
      <div css={mouselessLinkContainer}>
        <h3 css={mouselessHeading}>Have you seen Mouseless?</h3>
        <p css={mouselessPara}>Unleash your keyboard's superpower</p>
        <img
          src={mouselessBanner}
          alt="Mouseless Banner"
          css={mouselessBannerImage}
        />
      </div>
    </div>
  );
}

export default Container5;
