import * as React from 'react';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';

const linkStyles = css`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export interface ICloseButtonProps {
  closeUrl: string,
  handleClick?: any,
}

const CloseButton: React.SFC<ICloseButtonProps> = ({ closeUrl, handleClick }) => {
  return (
    <Link to={closeUrl} onClick={handleClick} className={linkStyles}>
      close
    </Link>
  )
};

export default CloseButton;
