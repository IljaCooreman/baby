import styled from 'react-emotion';
import * as React from 'react';
import ChooseNameContainer from './ChooseNameContainer';
import CloseButtonBlack from '../CloseButtonBlack';
import LeaderboardContainer from './leaderboard/LeaderboardContainer';

interface INamingGameContainerState {
  showLeaderboard: boolean,
}
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
  display: flex;
  margin: 14px;
`;

const LeaderboardToggle = styled('div')`
  color: black;
  margin: 40px;
  text-align: center;
  cursor: pointer;
  transition: color .3s ease;
  &&:hover {
    color: #6AD6DC;
  }
`;

class NamingGameContainer extends React.Component<{}, INamingGameContainerState> {
  constructor(props) {
    super(props);
    this.state = { showLeaderboard: false };
  }


  public render() {
    const { showLeaderboard } = this.state;
    return (
      <Container>
        <Header>
          <CloseButtonBlack closeUrl={'/'} />
          <TextWrapper>
            <Title>THE NAMING GAME</Title>
            <P>Welke van onderstaande namen vind jij het beste passen voor de dochter van Roxanne en Ilja?</P>
          </TextWrapper>
        </Header>
        {
          showLeaderboard ? <LeaderboardContainer /> : <ChooseNameContainer />
        }
        <LeaderboardToggle onClick={() => this.setState({ showLeaderboard: !this.state.showLeaderboard })}>
          {
            showLeaderboard ? 'stem op namen' : 'toon namenlijst'
          }
        </LeaderboardToggle>
      </Container>
    )
  }
}


export default NamingGameContainer;