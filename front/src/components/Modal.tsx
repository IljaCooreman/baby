import * as React from 'react';
import styled from 'react-emotion';
import CloseButton from './CloseButton';


const Container = styled('div')`
  position: relative;
  display: flex;
  flex-flow: column;
  opacity: 0.93;
  background: #FFFFFF;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.11);
  border-radius: 39px;
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