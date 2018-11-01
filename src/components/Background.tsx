import * as React from 'react';
import { css } from 'react-emotion';

interface IBackgroundState {
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
  transform: translate(${x / 25}px, -${y / 10}px);
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
  transform: translate(-${x / 15}px, ${y / 10}px);
  transition: transform 1s ease-out;
  `;

class Background extends React.Component<{}, IBackgroundState> {
  constructor(props) {
    super(props);
    this.state = { x: 350, y: 350 };
    this.changeMousePosition = this.changeMousePosition.bind(this);
    document.addEventListener('mousemove', this.changeMousePosition);
  }

  public changeMousePosition(e) {
    if (Math.abs(e.screenX - this.state.x) > 50 || Math.abs(e.screenY - this.state.y) > 50) this.setState({ x: e.screenX, y: e.screenY });
  }

  public render() {
    const { x, y } = this.state;
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
