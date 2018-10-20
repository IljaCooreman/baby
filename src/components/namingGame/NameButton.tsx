import * as React from 'react';
import styled from 'react-emotion';
import { IName } from '../../typeDefs';


const Container = styled('div')`
  font-size: 22px;
  font-weight: 700;
  padding: 30px;
  margin: 5px;
  cursor: pointer;
  background: rgba(255,255,255,.3);
`;


interface INameButton extends IName {
  pickName: any,
  handleNameClick: () => void,
  contestantId: string,
};




const NameButton: React.SFC<INameButton> = ({ name, id, pickName, handleNameClick, score, contestantId }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    pickName({ variables: { winnerId: id, loserId: contestantId } });
    handleNameClick();
  }
  console.log('contestant', contestantId)

  return (
    <Container onClick={handleClick}>
      {name}: {score}
    </Container>
  )
};

export default NameButton;
