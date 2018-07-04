import * as React from 'react';
import styled from 'react-emotion';
import CloseButton from './CloseButton';


const Container = styled('div')`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 0;
  background: rgba(250,250,255,.96);
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.11);
  border-radius: 39px;
  padding: 26px;
  max-width: 500px;
  overflow-x: hidden;
`;

export interface IModalProps {
  children: any
}

export default class Modal extends React.Component<IModalProps> {

  public render() {
    return (
      <Container>
        <CloseButton closeUrl="/" />
        {
          this.props.children
        }
      </Container>
    )
  }
}