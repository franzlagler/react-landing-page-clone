/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../public/logo.png';

const navbarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 270px;
  background-color: #ff624d;
`;

const logoStyle = css`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  font-weight: bold;
  font-size: 20px;
`;
const logoImageStyle = css`
  height: 40px;
`;

const menuItemsStyle = css`
  display: flex;
  list-style-type: none;
  grid-gap: 40px;
  font-size: 20px;
  font-weight: 500;
`;

function Navbar() {
  return (
    <nav css={navbarStyle}>
      <div css={logoStyle}>
        <img css={logoImageStyle} src={logo} alt="logo" />
        <span>Glyphfinder</span>
      </div>
      <ul css={menuItemsStyle}>
        <li>Features</li>
        <li>Download</li>
        <li>Buy</li>
      </ul>
    </nav>
  );
}

export default Navbar;
