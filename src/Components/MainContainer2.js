/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import review from '../../public/review.svg';

const mainContainer2Style = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 200px;
  justify-content: flex-end;
  margin: 50px auto;
  padding: 0 100px;
`;

const headingStyle = css`
  font-family: 'Space Grotesk';
  font-size: 22px;
  font-weight: bolder;
`;

const reviewerContainerStyle = css`
  display: flex;
  margin-top: 20px;
`;

const reviewerNameStyle = css`
  font-weight: bolder;
`;

const reviewContainerStyle = css``;
function MainContainer2() {
  return (
    <div css={mainContainer2Style}>
      <h3 css={headingStyle}>Check out what our customers think</h3>
      <div css={reviewContainerStyle}>
        <p>
          Our first experience of getting insights from Narrative BI was very
          unusual: we were delighted to see how the tool went from knowing
          nothing to providing a valuable feedback almost immediately. Even on
          small datasets, the performance was remarkable, and Narrative BI
          generated valuable insights we previously missed.
        </p>
        <div css={reviewerContainerStyle}>
          <img src={review} alt="Reviewer" />
          <p>
            <span css={reviewerNameStyle}>Nik Sarkov</span> <br />
            CTO, Uscreen
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContainer2;
