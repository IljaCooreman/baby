import * as React from 'react';
import styled, { css } from 'react-emotion';
import { IName } from '../../typeDefs';
import { calcWeight } from './utils'


const Container = styled('div')`
  font-family: Rubik;
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  padding: 22px 50px;
  margin: 10px;
  background: #000000;
  border-radius: 60px;
  text-transform: capitalize;
  cursor: pointer;

  transition: all .3s ease-out;
  &&:hover {
    background: #F663AD;
    padding: 22px 54px;
  }
`;

const loser = css`
opacity: 0;
  /* color: rgba(0,0,0,.1); */
  transform: scale(.9);
`;


interface INameButton extends IName {
  pickName: ({ }) => void,
  handleNameClick: (loserIds: string[]) => void,
  contestants: IName[],
  loose: boolean,
};




const NameButton: React.SFC<INameButton> = ({ name, id, pickName, handleNameClick, score, contestants, loose }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const loserIds = contestants.map(contestant => contestant.id);
    handleNameClick(loserIds);
    setTimeout(() => {
      pickName({ variables: { winnerId: id, loserIds, weight: calcWeight(score, contestants) } });
    }, 800)
  }

  return (
    <Container className={loose ? loser : 'grow'} onClick={handleClick}>
      {name}
    </Container>
  )
};

export default NameButton;
