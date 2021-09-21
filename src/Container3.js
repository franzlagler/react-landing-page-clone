/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import fact1 from '../public/fact1.png';
import fact2 from '../public/fact2.png';
import fact3 from '../public/fact3.png';
import fact4 from '../public/fact4.png';
import fact5 from '../public/fact5.png';
import feedbackSlide from '../public/feedback-slide.png';

const container3Style = css`
  padding: 50px 270px;
  background-color: #000;
  color: #f0f0f0;
  cursor: pointer;
`;

const factsContainer = css`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 50px 70px;
`;

const individualFactStyle = css`
  width: 300px;
  color: hsla(0, 0%, 94.9%, 0.5);
  font-size: 15px;
  line-height: 1.8;
`;

const factImageStyle = css`
  width: 50px;
`;

const factHeadingStyle = css`
  color: #fff;
`;

const feedbackContainer = css`
  width: 600px;
  margin: 100px auto;
  text-align: center;
`;

const feedbackHeadingStyle = css`
  margin-bottom: 30px;
  color: #ff624d;
  font-size: 48px;
`;

const feedbackParaStyle = css`
  color: hsla(0, 0%, 94.9%, 0.5);
  font-size: 20px;
`;

const feedbackSliderImagStyle = css`
  position: relative;
  left: -300px;
  max-width: 1800px;
`;

function Container3() {
  return (
    <div css={container3Style}>
      <div css={factsContainer}>
        <div css={individualFactStyle}>
          <img src={fact1} alt="Illustration" css={factImageStyle} />
          <h3 css={factHeadingStyle}>34.306 Entities</h3>
          <p>
            With our enormous database you have more than 30.000 characters and
            emojis right at your fingertips, every single one manually tagged.
          </p>
        </div>
        <div css={individualFactStyle}>
          <img src={fact2} alt="Illustration" css={factImageStyle} />
          <h3 css={factHeadingStyle}>Quick Access</h3>
          <p>
            Don‘t feel ashamed looking up characters multiple times. Your most
            frequently used entities will be pinned to the top.
          </p>
        </div>
        <div css={individualFactStyle}>
          <img src={fact3} alt="Illustration" css={factImageStyle} />
          <h3 css={factHeadingStyle}>Offline Support</h3>
          <p>
            No Wi-fi – no problem. Glyphfinder runs just as smoothly in a rustic
            cabin as on a plane.
          </p>
        </div>
        <div css={individualFactStyle}>
          <img src={fact4} alt="Illustration" css={factImageStyle} />
          <h3 css={factHeadingStyle}>Really Fast Search</h3>
          <p>
            Search should feel instant, even when looking through hundred of
            thousands of tags, so that‘s what we made it.
          </p>
        </div>
        <div css={individualFactStyle}>
          <img src={fact5} alt="Illustration" css={factImageStyle} />
          <h3 css={factHeadingStyle}>Light & Dark Mode</h3>
          <p>
            No one wants a flash of bright light in their face when looking up a
            few entities. Glyphfinder respects your system setting.
          </p>
        </div>
      </div>
      <div css={feedbackContainer}>
        <h2 css={feedbackHeadingStyle}>Feedback</h2>
        <p css={feedbackParaStyle}>
          It’s not just us being hyped about it. See what all those lovely
          Glyphfinder users are saying:
        </p>
      </div>
      <img
        src={feedbackSlide}
        alt="Feedback Slide"
        css={feedbackSliderImagStyle}
      />
    </div>
  );
}

export default Container3;
