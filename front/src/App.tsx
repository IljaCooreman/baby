import * as React from 'react';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
// import logo from './logo.svg';

const client = new ApolloClient({
  uri: `http://localhost:4000`
});

// Fetch GraphQL data with plain JS
client
  .query({
    query: gql`
      {
        drafts {
          id
          title
          text
        }
      }
    `
  })
  .then(({ data }) => console.log({ data }));

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          lalaland
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
