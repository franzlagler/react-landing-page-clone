/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Button';

const inputContainerStyle = css`
  max-width: 500px;
  display: flex;
  margin: 70px auto;
  justify-content: space-between;
  padding: 0 7px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px 1px #e9ecef;
`;

const inputFieldStyle = css`
  width: 280px;
  border: 0;
  font-size: 16px;
`;

function InputField() {
  return (
    <div css={inputContainerStyle}>
      <input css={inputFieldStyle} placeholder="Enter your email" />
      <Button>Join the waitlist</Button>
    </div>
  );
}

export default InputField;
