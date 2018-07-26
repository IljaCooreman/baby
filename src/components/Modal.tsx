import * as React from 'react';
import styled from 'react-emotion';
import CloseButton from './CloseButton';

const Fullscreen = styled('div')`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const Container = styled('div')`
  position: relative;
  display: flex;
  flex-flow: column;
  background: rgba(32,90,132,.35);
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.11);
  border-radius: 39px;
  padding: 10px;
  width: calc(100vw - 20px);
  overflow-x: hidden;
   @media (min-width: 500px) {
    padding: 26px;
    max-width: 500px;
    margin: 120px 0 40px 0;
   }
`;

export interface IModalProps {
  children: any
}

export default class Modal extends React.Component<IModalProps> {

  public render() {
    return (
      <Fullscreen>
        <Container>
          <CloseButton closeUrl="/" />
          {
            this.props.children
          }
        </Container>
      </Fullscreen>
    );
  }
}