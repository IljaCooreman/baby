import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ChooseName from './ChooseName';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

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

const ChooseNameContainer = () => (
  <Query
    query={gql`
      {
        names {
          duels
          id
          name
          score
          stability
          votes
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return (<p>Namen Laden.... </p>)
      if (error) return <p>Oeps, foutje: {error.message}</p>;
      return ([
        <ChooseName names={data.names} key={1} />,
        <LeaderboardToggle key={2}>
          <Link to={'/the-naming-game/leaderboard'}>
            bekijk de scores
              </Link>
        </LeaderboardToggle>
      ]);
    }}
  </Query>
);

export default ChooseNameContainer;