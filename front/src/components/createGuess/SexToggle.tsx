import * as React from 'react';
import styled, { css } from 'react-emotion';
import { FieldProps } from 'formik';
import male from 'src/assets/icons/male.svg';
import female from 'src/assets/icons/female.svg';

const containerStyles = css`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 240px;
  width: 400px;
  left: calc(50% - 220px);
`;
const Circle = styled('div')(`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  mix-blend-mode: multiply;
  transition: all .3s cubic-bezier(0.51,-0.41, 0.47, 2.15);
  cursor: pointer;
  overflow-x: hidden;
`, ({ active }: { active: boolean }) => ({
    boxShadow: active ? '0 0 10px 0 rgba(0, 0, 0, 0.18)' : 'none',
    height: active ? '200px' : '160px',
    opacity: active ? 1 : .5,
    width: active ? '200px' : '160px',
  }));

const pinkCircle = css`
  background: #F160AD;
  transform: scale(1.2);
`
const blueCircle = css`
  background: #64CBDC;
  position: relative;
  transform: scale(1.2);
`

class SexToggle extends React.Component<FieldProps<any>, {}> {

  public render() {
    const { values, setFieldValue } = this.props.form;
    const { name } = this.props.field;
    return (
      <div className={containerStyles}>
        <Circle active={values[name] === "f"} className={blueCircle} onClick={() => setFieldValue(name, 'f')}>
          <img width="76px" src={male} />
        </Circle>
        <Circle active={values[name] === "m"} className={pinkCircle} onClick={() => setFieldValue(name, 'm')}>
          <img width="70px" src={female} />
        </Circle>
      </div>
    )
  }
};

export default SexToggle;
