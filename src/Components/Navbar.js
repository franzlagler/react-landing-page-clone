/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../../public/logo.svg';
import Button from './Button';

const navbarStyle = css`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  background-color: #f1f0f9;
`;

const logoStyle = css`
  height: 30px;
  &::before {
    content: '-';
  }
`;

const navbarLinksStyle = css`
  display: flex;
  margin-left: auto;
  list-style-type: none;
  grid-gap: 20px;
  &:last-of-type {
    margin-right: 20px;
  }
`;

function Navbar() {
  return (
    <nav css={navbarStyle}>
      <img css={logoStyle} src={logo} alt="Logo" />
      <ul css={navbarLinksStyle}>
        <li>Narrative BI for GA</li>
        <li>Solutions</li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>
      <Button>Login</Button>
    </nav>
  );
}

export default Navbar;
