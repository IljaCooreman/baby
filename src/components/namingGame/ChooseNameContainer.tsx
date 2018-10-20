import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ChooseName from './ChooseName';


const ChooseNameContainer = () => (
  <Query
    query={gql`
      {
        names {
          id
          name
          votes
          duels
          stability
          score
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return (<p>Namen Laden.... </p>)
      if (error) return <p>Oeps, foutje: {error.message}</p>;

      return (
        <ChooseName names={data.names} />
      );
    }}
  </Query>
);

export default ChooseNameContainer;