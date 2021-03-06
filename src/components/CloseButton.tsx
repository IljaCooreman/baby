import * as React from 'react';
import { css } from 'react-emotion';
import { Link } from 'react-router-dom';
// import icon from '/src/assets/icons/close.svg';

const linkStyles = css`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

export interface ICloseButtonProps {
  closeUrl: string,
  handleClick?: any,
}

const CloseButton: React.SFC<ICloseButtonProps> = ({ closeUrl, handleClick }) => {
  return (
    <Link to={closeUrl} onClick={handleClick} className={linkStyles}>
      <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 47.971 47.971" width="16" height="16" opacity={.4}>
        <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#FFFFFF" />
      </svg>
    </Link >
  )
};

export default CloseButton;
