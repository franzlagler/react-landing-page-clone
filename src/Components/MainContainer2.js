/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import review from '../../public/review.svg';

const mainContainer2Style = css`
  margin: 50px auto;
  padding: 0 100px;
`;

const reviewerContainer = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 3f 1fr;
  grid-template-areas:
    'heading descr'
    '. descr'
    'hr hr';
  grid-gap: 30px 200px;
  justify-content: flex-end;
`;

const headingStyle = css`
  grid-area: heading;
  font-family: 'Space Grotesk';
  font-size: 22px;
  font-weight: bolder;
`;

const reviewerTextStyle = css`
  grid-area: descr;
  margin-top: 20px;
`;

const reviewerNameStyle = css`
  display: flex;
  align-items: center;
  grid-area: name;
  margin-top: 10px;
  font-weight: bolder;
`;

const horizontalRuler = css`
  grid-area: hr;
  width: 100%;
  border: 0.5px solid #e9ecef;
`;

const narrativeExplanation = css`
  display: grid;
  justify-content: center;
  margin: 20px auto;
`;

function MainContainer2() {
  return (
    <div css={mainContainer2Style}>
      <div css={reviewerContainer}>
        <h3 css={headingStyle}>Check out what our customers think</h3>
        <div css={reviewerTextStyle}>
          <p>
            Our first experience of getting insights from Narrative BI was very
            unusual: we were delighted to see how the tool went from knowing
            nothing to providing a valuable feedback almost immediately. Even on
            small datasets, the performance was remarkable, and Narrative BI
            generated valuable insights we previously missed.
          </p>
          <div css={reviewerNameStyle}>
            <img src={review} alt="Reviewer" />
            <p>
              <span css={reviewerNameStyle}>Nik Sarkov</span>
              CTO, Uscreen
            </p>
          </div>
        </div>
        <hr css={horizontalRuler} />
      </div>
      <div css={narrativeExplanation}>
        <h2>What is Narrative BI?</h2>
        <p>
          Narrative BI is a no-code analytics platform for growth teams that
          automatically generates actionable data insights.
        </p>
        <a href="https://www.narrative.bi/#features">Save Link Address</a>
      </div>
    </div>
  );
}

export default MainContainer2;
