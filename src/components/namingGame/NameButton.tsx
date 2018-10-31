import * as React from 'react';
import styled from 'react-emotion';
import { IName } from '../../typeDefs';
import { calcWeight } from './utils';


const Container = styled('div')`
  font-size: 22px;
  font-weight: 700;
  padding: 30px;
  margin: 5px;
  cursor: pointer;
  background: rgba(255,255,255,.3);
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
      {name}: {score}
    </Container>
  )
};

export default NameButton;
