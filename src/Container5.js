/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mouselessBanner from '../public/mouseless-banner.png';

const btn = css`
  height: 50px;
  padding: 5px 15px;
  margin-right: 20px;
  background-color: #f2f2f2;
  border: 3px solid #f2f2f2;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 20px;
`;

const Container5Style = css`
  padding: 50px 270px;
  background-color: #1f1f1f;
  color: #f0f0f0;
`;

const qaContainer = css`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px 60px;
  margin-top: 30px;
`;

const qaContainerMainheading = css`
  font-size: 40px;
`;

const singleqQAContainer = css`
  flex-basis: 500px;
`;

const qaQuestionHeading = css`
  font-size: 20px;
`;

const accordionTextStyle = css`
  display: none;
  margin-top: 10px;
  font-size: 20px;
  line-height: 1.5;
`;

const handleAccordionClick = ({ currentTarget }) => {
  let paraDisplayValue = currentTarget.children[1].style.display;
  console.log(paraDisplayValue);
  if (paraDisplayValue === 'none') {
    currentTarget.children[1].style.display = 'block';
  } else {
    currentTarget.children[1].style.display = 'none';
  }
};

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

function Container5() {
  return (
    <div css={Container5Style}>
      <h2 css={qaContainerMainheading}>FAQ</h2>
      <div css={qaContainer}>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>Do you offer a trial?</h3>
          <p css={accordionTextStyle}>
            We didn’t implement a trial, but feel free to purchase the app. If
            you’re not happy send a short message. We’ll refund your order, no
            questions asked.
          </p>
        </div>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>
            Does Glyphfinder have all unicode characters in the world?
          </h3>
          <p css={accordionTextStyle}>
            To be honest, not at all. Currently, there are 130.000+ characters
            in the Unicode set. We focus on a subset of those and filter out
            everything that can not be rendered on your system. In the end we
            have 34,306 characters, all of them manually tagged. That should be
            enough for your daily work. Let us know if you think anything
            important is missing!
          </p>
        </div>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>How can I copy a character?</h3>
          <p css={accordionTextStyle}>
            You can double-click on, press Enter or press ⌘C on macOS to copy
            the selected character. Open the preferences ⌘, to chose whether you
            want Glyphfinder to disappear after copying a character.
          </p>
        </div>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>
            Something’s wrong. How do I get in touch?
          </h3>
          <p css={accordionTextStyle}>
            Sorry to hear something is off. Send us an email, we are happy to
            help.
          </p>
        </div>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>
            I have a great idea, whom should I send an email?
          </h3>
          <p css={accordionTextStyle}>
            Good news for you: We have a public feedback board. Use this board
            to promote your ideas not only to us but to other users as well. We
            will consider and reply to every suggestion.
          </p>
        </div>
        <div css={singleqQAContainer} onClick={handleAccordionClick}>
          <h3 css={qaQuestionHeading}>Do you collect my personal data?</h3>
          <p css={accordionTextStyle}>
            The app needs the internet connection to check your license once,
            everything else is working offline. We don’t track anything at all,
            except the number of sales and the number of pageviews on this
            website. To learn more, check out our Privacy Policy . And the whole
            Glyphfinder app is open source. Feel free to have a look at the
            code.
          </p>
        </div>
      </div>
      <div css={downloadContainer}>
        <h2 css={downloadContainerHeading}>Download</h2>
        <button css={btn}>Download for macOS</button>
        <button css={btn}>Download for Windows</button>
        <button css={btn}>Available on Setapp</button>
      </div>
      <div css={mouselessLinkContainer}>
        <h3 css={mouselessHeading}>Have you seen Mouseless?</h3>
        <p css={mouselessPara}>Unleash your keyboard's superpower -></p>
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
