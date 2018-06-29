import * as React from 'react';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';

export interface IButtonProps {
  url: string,
  text: string,
  handleClick?: any,
  icon?: string,
  big?: boolean,
  submit?: boolean,
}

const CloseButton: React.SFC<IButtonProps> = ({ url, handleClick, text, icon, big, submit }) => {
  return (
    <button type={submit ? 'submit' : ''}>
      <Link
        to={url}
        onClick={handleClick}

        className={css`
      background: #67D0DC;
      border-radius: 48px;
      font-family: Roboto-Medium;
      font-size: 25px;
      padding: ${big ? 14 : 5}px;
      margin: 4px;
      color: #FAF9FF;
      text-align: center;
      text-transform: none;
    `}>
        {text} {icon}
      </Link>
    </button>
  )
};

export default CloseButton;