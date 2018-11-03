import styled from 'react-emotion';
import * as React from 'react';
import ChooseNameContainer from './ChooseNameContainer';
import CloseButtonBlack from '../CloseButtonBlack';

const Container = styled('div')`
position: fixed;
display: flex;
height: 100%;
width: 100%;
background: #FAF9FF;
`;

const Title = styled('h2')`
  color: black;
    font-size: 18px;
    font-family: 'Rubik-Bold';
    text-align: left;
    margin: 0;
`;

const P = styled('p')`
    color: rgba(0,0,0,.6);
    font-size: 13px;
    max-width: 280px;
    margin-top: 3px;
`;

const TextWrapper = styled('div')`
  margin: 14px 14px 14px 0;
`;

const NamingGameContainer = () => (


  <Container>
    <CloseButtonBlack closeUrl={'/'} />
    <TextWrapper>
      <Title>THE NAMING GAME</Title>
      <P>Welke van onderstaande namen vind jij het beste passen voor de dochter van Roxanne en Ilja?</P>
    </TextWrapper>
    <ChooseNameContainer />
  </Container>
);

export default NamingGameContainer;