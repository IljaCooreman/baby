import * as React from 'react';
import './App.css';
// import { Query } from "react-apollo";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
import { config } from './config';
import UserList from './components/UserList';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import GuessFlow from './components/GuessFlow';
// import SexToggle from './components/SexToggle';

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
          <div className="App">
            {/* <SexToggle /> */}
            <Route exact={true} path="/" component={UserList} />
            <Route path="/userlist" component={UserList} />
            <Route path="/guess" component={GuessFlow} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
