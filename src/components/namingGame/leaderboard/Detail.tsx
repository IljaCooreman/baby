import * as React from 'react';
import { INameRatio } from '../../../typeDefs';
import styled, { css } from 'react-emotion';

const PlaceHolder = styled('div')`
  grid-area: 1 / 2 / last-line / span 1;
  flex-grow: 5;
  flex-basis: 50%;
  place-self: center left;
  display: flex;
  flex-flow: column;
  margin: 20px;
`;

const Rank = styled('div')`
  color: rgba(0,0,0,.2);
  margin-right: 6px;
  font-size: 36px;
`;

const Name = styled('div')`
font-family: Rubik;
font-size: 40px;
line-height: 32px;
color: #0B0B0B;
text-transform: capitalize;
overflow-wrap: break-word;
`;


interface IDetailProps {
  name: INameRatio,
  index: number,
  newNames: boolean,
}

const Detail: React.SFC<IDetailProps> = ({ name, index, newNames }) => {
  if (!name) return <PlaceHolder />
  return (
    <PlaceHolder>
      <Name><Rank>{newNames ? 'Nieuw' : `#${index ? index + 1 : 1}`}</Rank>{name.name}</Name>
      <div className={css`
      display: block;
        margin: 12px 0;
      `}>
        <span className={css`
          color: rgba(0,0,0,.4);
        `}>Toegevoegd door </span>
        {name.creator ? name.creator.name : 'een onbekende'}
      </div>
      <div className={css`
        font-family: Rubik;
        font-size: 14px;
      `}>
        {
          newNames ? `nog ${6 - name.duels} keer stemmen` :
            `${(name.ratio * 100).toFixed(0)}% winratio`
        }
      </div>
      <div className={css`
          color: rgba(0,0,0,.4);
        `}>{name.votes} wins, {name.duels} duels</div>
    </PlaceHolder>
  )
};

export default Detail;