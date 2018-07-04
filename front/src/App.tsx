import * as React from 'react';
import './App.css';
// import { Query } from "react-apollo";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import styled from 'react-emotion';
// import gql from "graphql-tag";
import { config } from './config';
import UserList from './components/UserList';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import GuessFlow from './components/GuessFlow';
// import SexToggle from './components/SexToggle';


const AppDiv = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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
            {/* <SexToggle /> */}
            <Route exact={true} path="/" component={UserList} />
            <Route path="/userlist" component={UserList} />
            <Route path="/guess" component={GuessFlow} />
          </AppDiv>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
