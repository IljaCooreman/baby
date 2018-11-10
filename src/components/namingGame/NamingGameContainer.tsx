import styled from 'react-emotion';
import * as React from 'react';
import ChooseNameContainer from './ChooseNameContainer';
import CloseButtonBlack from '../CloseButtonBlack';
import LeaderboardContainer from './leaderboard/LeaderboardContainer';
import { Route } from 'react-router-dom';


const Container = styled('div')`
position: absolute;
display: flex;
top: 0;
bottom: 0;
height: 100%;
width: 100%;
background: #FAF9FF;
display: flex;
flex-flow: column nowrap;
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
  margin-left: 14px;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
`;

const Header = styled('div')`
  position: relative;
  flex-basis: auto;
  display: flex;
  margin: 14px;
  flex-shrink: 0;
`;



class NamingGameContainer extends React.Component<{ location: { pathname: string } }> {


  public render() {
    const { pathname } = this.props.location;
    console.log(pathname)
    return (
      <Container>
        <Header>
          <CloseButtonBlack closeUrl={'/'} />
          <TextWrapper>
            <Title>THE NAMING GAME</Title>
            <P>Welke van onderstaande namen vind jij het beste passen voor de dochter van Roxanne en Ilja?</P>
          </TextWrapper>
        </Header>
        <Route path={'/the-naming-game/vote'} component={ChooseNameContainer} />
        <Route path={'/the-naming-game/leaderboard'} component={LeaderboardContainer} />

      </Container>
    )
  }
}


export default NamingGameContainer;