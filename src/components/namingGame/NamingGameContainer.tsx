import styled from 'react-emotion';
import * as React from 'react';
import ChooseNameContainer from './ChooseNameContainer';

const Container = styled('div')`
position: fixed;
height: 100%;
width: 100%;
background: #FAF9FF;
`;

const Title = styled('h2')`
  color: black;
    font-size: 14px;
    font-family: 'Rubik-Bold';
    text-align: left;
    margin: 10px;
    margin-bottom: 0;
`;

const P = styled('p')`
      margin: 10px;
    color: rgba(0,0,0,.7);
    font-size: 13px;
    max-width: 280px;
    margin-top: 3px;
`;

const NamingGameContainer = () => (


  <Container>
    <Title>THE NAMING GAME</Title>
    <P>Welke van onderstaande namen vind jij het beste passen voor de dochter van Roxanne en Ilja?</P>
    <ChooseNameContainer />
  </Container>
);

export default NamingGameContainer;