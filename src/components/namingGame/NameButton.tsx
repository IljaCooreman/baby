import * as React from 'react';
import styled from 'react-emotion';
import { IName } from '../../typeDefs';
import { calcWeight } from './utils';


const Container = styled('div')`
  font-family: Rubik-Bold;
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
  padding: 22px 50px;
  margin: 10px;
  background: #000000;
  border-radius: 60px;
  cursor: pointer;
  transition: all .2s ease;
  &&:hover {
    background: #F663AD;
    padding: 22px 54px;
  }
`;


interface INameButton extends IName {
  pickName: ({ }) => void,
  handleNameClick: () => void,
  contestants: IName[],
};




const NameButton: React.SFC<INameButton> = ({ name, id, pickName, handleNameClick, score, contestants }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    pickName({ variables: { winnerId: id, loserIds: contestants.map(contestant => contestant.id), weight: calcWeight(score, contestants) } });
    handleNameClick();
  }

  return (
    <Container onClick={handleClick}>
      {name}
    </Container>
  )
};

export default NameButton;
