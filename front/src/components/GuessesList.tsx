import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const GuessesList: React.SFC<{}> = () => (
  <Query
    query={gql`
      {
        guesses {
          id
          user {
            name
            email
          }
          sex
          birthDate
          weight
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return (<p>Loading...</p>)
      if (error) return <p>{error.message}</p>;

      return (
        <ul>{
          data.guesses.map((guess: any) => (
            <li key={guess.id}>
              {guess.user.name}
              <ul>
                <li>{guess.sex}</li>
                <li>{guess.birthDate}</li>
                <li>{guess.weight}</li>
              </ul>
            </li>
          )
          )
        }</ul>
      );
    }}
  </Query>
);

export default GuessesList;

