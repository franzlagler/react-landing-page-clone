/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const btn = css`
  position: absolute;
  height: 35px;
  top: 8px;
  right: 10px;
  padding: 5px 15px;
  background-color: #f2f2f2;
  border: 3px solid #f2f2f2;
  border-radius: 10px;
  font-weight: bolder;
`;

const footerContainerStyle = css`
  display: flex;
  grid-column-gap: 120px;
  padding: 50px 270px;
  background-color: #1f1f1f;
  color: hsla(0, 0%, 94.9%, 0.5);
`;

const linkList = css`
  list-style-type: none;
`;

const listItems = css`
  margin-bottom: 10px;
`;

const lastLink = css`
  margin-top: 20px;
`;

const signUpContainer = css`
  width: 400px;
`;

const signUpHeading = css`
  color: #f0f0f0;
  font-size: 20px;
  margin-bottom: 10px;
`;

const inputContainer = css`
  position: relative;
  height: 50px;
  margin-top: 40px;
`;

const inputField = css`
  display: inline;
  flex: 4;
  width: 100%;
  height: 50px;
  padding: 20px 50px 20px 20px;
  background-color: hsla(0, 0%, 94.9%, 0.05);
  border: 0;
  border-radius: 15px;
  font-size: 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px grey;
    border-radius: 15px;
  }
`;
// Mistake is to be found in the ul
function Footer() {
  return (
    <div css={footerContainerStyle}>
      <ul css={linkList}>
        <li css={listItems}>Features</li>
        <li css={listItems}>Download</li>
        <li css={listItems}>Buy</li>
        <li css={listItems}>GitHub</li>
        <li css={listItems}>Support</li>
        <li css={lastLink}>
          Made with
          <span role="img" aria-label="heart">
            &nbsp;❤️&nbsp;
          </span>
          by überdosis
        </li>
      </ul>
      <ul css={linkList}>
        <li css={listItems}>Press Kit</li>
        <li css={listItems}>Privacy Policy</li>
        <li css={listItems}>Impressum</li>
      </ul>
      <div css={signUpContainer}>
        <h3 css={signUpHeading}>Be the first to know</h3>
        <p>We’ll inform you about new apps and updates. No spam—we promise.</p>
        <form css={inputContainer}>
          <input css={inputField} placeholder="Your email address" />
          <button css={btn}>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
