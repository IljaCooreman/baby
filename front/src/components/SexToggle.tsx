import * as React from 'react';
import styled, { css } from 'react-emotion';

const containerStyles = css`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 20px;
`;
const Circle = styled('div')`
  min-height: 200px;
  min-width: 200px;
  border-radius: 50%;
  mix-blend-mode: multiply;
  transition: all .3s cubic-bezier(0.69, -0.01, 0.74, 1.32);
`;

const pinkCircle = css`
  background: #F160AD;
  transform: scale(1.2);
`
const blueCircle = css`
  background: #64CBDC;
  position: relative;
  transform: scale(1.2);
`

const SexToggle = () => {
  return (
    <div className={containerStyles}>
      <Circle className={pinkCircle} />
      <Circle className={blueCircle} />
    </div>
  )
};

export default SexToggle;
