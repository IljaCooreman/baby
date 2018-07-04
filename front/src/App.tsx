import * as React from 'react';
import './App.css';
// import { Query } from "react-apollo";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import styled from 'react-emotion';
// import gql from "graphql-tag";
import { config } from './config';
import UserList from './components/UserList';
import Background from './components/Background';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CreateGuessContainer from './components/createGuess/CreateGuessContainer';


const AppDiv = styled('div')`
`;

const client = new ApolloClient({
  uri: `${config.uri}:${config.port}/`
});
// // Fetch GraphQL data with plain JS
// client
//   .query({
//     query: gql`
//       {
//         users {
//           id
//           name
//           email
//         }
//       }
//     `
//   })
//   .then(({ data }) => console.log({ data }));



class App extends React.Component {

  public render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <AppDiv className="App">
            <Background />

            <Route exact={true} path="/" component={LandingPage} />
            <Route path="/userlist" component={UserList} />
            <Route path="/guess" component={CreateGuessContainer} />
          </AppDiv>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
