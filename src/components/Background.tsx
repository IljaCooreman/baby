import * as React from 'react';
import styled, { css } from 'react-emotion';

// interface IBackgroundProps {
// propName: any,
// }

const BlueCircle = styled('div')`
  border-radius: 50%;
  position: fixed;
  top: -150px;
  right: -1100px;
  width: 1300px;
  height: 1300px;
  background: #64CBDC;
  mix-blend-mode: lighten;
  opacity: .2;
`;
const PinkCircle = styled('div')`
  position: fixed;
  top: 200px;
  right: -460px;
  border-radius: 50%;
  width: 700px;
  height: 700px;
  background: #F160AD;
  mix-blend-mode: lighten;
  opacity: .2;
`;

const Background: React.SFC<{}> = () => {
  return (
    <div className={css`
      position: fixed;
      height: 100%;
      width: 100%;
      background: #236298;
      z-index: -1;
    `}>
      <PinkCircle />
      <BlueCircle />
    </div>
  )
};

export default Background;
