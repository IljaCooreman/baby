import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ChooseName from './ChooseName';
// import dummyNames from '../../dummyNames.js';


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
      return (
        <ChooseName names={data.names} />
        // <ChooseName names={data.names} />
      );
    }}
  </Query>
);

export default ChooseNameContainer;