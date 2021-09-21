/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import video1 from '../public/video1.mp4';
import video2 from '../public/video2.mp4';
import video3 from '../public/video3.mp4';
import video4 from '../public/video4.mp4';
import video5 from '../public/video5.mp4';
import video6 from '../public/video6.mp4';

const container2Style = css`
  padding: 50px 270px;
  background-color: #1f1f1f;
  color: #f0f0f0;
`;

const oneVideoContainerStyle = css`
  position: relative;
  top: -100px;
  display: flex;
  align-items: center;
  grid-gap: 150px;
`;

const textContainer = css`
  margin-bottom: 50px;
`;

const headingStyle = css`
  font-size: 50px;
  margin-bottom: 20px;
  color: #ff624d;
`;

const paraStyle = css`
  font-size: 20px;
  line-height: 1.5;
`;

const manyVideosContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 50px 70px;
`;

const videoStyle = css`
  border-radius: 10px;
`;

const individualManyVideosContainerStyle = css`
  width: 300px;
  font-size: 15px;
  line-height: 1.8;
`;

const blockHeading = css`
  margin: 20px 0;
  font-size: 25px;
  color: #ff624d;
`;

function Container2() {
  return (
    <div css={container2Style}>
      <div css={oneVideoContainerStyle}>
        <video height="600" autoPlay loop muted css={videoStyle}>
          <source src={video1} />
        </video>
        <div css={textContainer}>
          <h2 css={headingStyle}>Finds Everything</h2>
          <p css={paraStyle}>
            We made looking for the needle in the unicode haystack easy. Search
            for words, categories, look-alikes or colors – you can’t do it
            wrong.
          </p>
        </div>
      </div>
      <div css={manyVideosContainerStyle}>
        <div css={individualManyVideosContainerStyle}>
          <video width="300" autoPlay loop muted css={videoStyle}>
            <source src={video2} />
          </video>
          <h3 css={blockHeading}>Looks like …</h3>
          <p>
            It’s easier to visually remember a character, so we integrated
            look-alikes for you. Find characters, no need to know their name.
          </p>
        </div>
        <div css={individualManyVideosContainerStyle}>
          <video width="300" autoPlay loop muted css={videoStyle}>
            <source src={video3} />
          </video>
          <h3 css={blockHeading}>The Best Emoji Search</h3>
          <p>
            We have manually added and tagged every single emoji. That probably
            makes Glyphfinder the single best emoji search out there.
          </p>
        </div>
        <div css={individualManyVideosContainerStyle}>
          <video width="300" autoPlay loop muted css={videoStyle}>
            <source src={video4} />
          </video>
          <h3 css={blockHeading}>Learn More</h3>
          <p>
            In case you want to go mouseless, learn the keyboard shortcuts for
            all your favorite glyphs right away. Developers copy the entity.
          </p>
        </div>
        <div css={individualManyVideosContainerStyle}>
          <video width="300" autoPlay loop muted css={videoStyle}>
            <source src={video5} />
          </video>
          <h3 css={blockHeading}>By Your Side</h3>
          <p>
            By default, Glyphfinder lives in your menubar. One click and it’s
            open. Copy a character and it automagically disappears again.
          </p>
        </div>
        <div css={individualManyVideosContainerStyle}>
          <video width="300" autoPlay loop muted css={videoStyle}>
            <source src={video6} />
          </video>
          <h3 css={blockHeading}>Your New Shortcut</h3>
          <p>
            Don’t waste time moving your cursor to the menubar. Hit the keyboard
            shortcut ⌃⌘G to open Glyphfinder even faster.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container2;
