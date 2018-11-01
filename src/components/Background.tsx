import * as React from 'react';
import { css } from 'react-emotion';

interface IBackgroundProps {
  x: number,
  y: number
}

const blueCircle = (x: number, y: number) => css`
  border-radius: 50%;
  position: fixed;
  top: -150px;
  right: -1100px;
  width: 1300px;
  height: 1300px;
  background: #64CBDC;
  mix-blend-mode: lighten;
  opacity: .2;
  transform: translate(${x / 25}px, ${y / 25}px);
  transition: transform 3s cubic-bezier(0.27, 0.01, 0.39, 1);
`;
const PinkCircle = (x: number, y: number) => css`
  position: fixed;
  top: 200px;
  right: -460px;
  border-radius: 50%;
  width: 700px;
  height: 700px;
  background: #F160AD;
  mix-blend-mode: lighten;
  opacity: .2;
  transform: translate(-${x / 15}px, ${y / 15}px);
  transition: transform 1s ease-out;
  `;

class Background extends React.Component<IBackgroundProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { x, y } = this.props;
    return (
      <div className={
        css`
      position: fixed;
      height: 100%;
      width: 100%;
      background: #236298;
      z-index: -1;
      `}>
        <div className={PinkCircle(x, y)} />
        {/* <PinkCircle x={x} y={y} /> */}
        <div className={blueCircle(x, y)} />
      </div>
    );
  };
};
export default Background;
