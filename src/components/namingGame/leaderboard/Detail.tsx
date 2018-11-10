import * as React from 'react';
import { IName } from '../../../typeDefs';
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
font-family: Rubik-Bold;
font-size: 40px;
line-height: 32px;
color: #0B0B0B;
text-transform: capitalize;
overflow-wrap: break-word;
`;


interface IDetailProps {
  name: IName,
  index: number | null,
}

const Detail: React.SFC<IDetailProps> = ({ name, index }) => {
  if (!name || !index) return <PlaceHolder />
  return (
    <PlaceHolder>
      <Name><Rank>#{index + 1}</Rank>{name.name}</Name>
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
        font-family: Rubik-Bold;
        font-size: 14px;
      `}>
        {name.score} punten
      </div>
    </PlaceHolder>
  )
};

export default Detail;