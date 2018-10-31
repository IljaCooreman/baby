import * as React from 'react';
import { css } from 'react-emotion';
// import { Link } from 'react-router-dom';

export interface IButtonProps {
  url?: string,
  text: string,
  handleClick?: any,
  icon?: string,
  big?: boolean,
  submit?: boolean,
  loading?: boolean,
  disabled?: boolean,
}

const Button: React.SFC<IButtonProps> = ({ url, handleClick, text, icon, big, submit, loading, disabled }) => {
  return (
    <button type={submit ? 'submit' : ''}
      disabled={disabled}
      className={css`
      background: #67D0DC;
      min-width: 140px;
      border-radius: 48px;
      border: none;
      font-weight: 700;
      font-size: 25px;
      padding: ${big ? 14 : 5}px 20px;
      margin: 4px;
      color: #FAF9FF;
      align-self: center;
      text-align: center;
      text-transform: none;
      cursor: ${disabled ? 'default' : 'pointer'};
      opacity: ${disabled ? .2 : 1};
    `}>

      {/* <Link
        to={url}
      onClick={handleClick} */}
      {/* > */}

      {loading ? 'laden...' : text} {icon}
      {/* </Link> */}
    </button>
  )
};

export default Button;