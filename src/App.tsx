import * as React from 'react';
import './App.css';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import styled from 'react-emotion';
import { config } from './config';
import UserList from './components/UserList';
import Background from './components/Background';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import CreateGuessContainer from './components/createGuess/CreateGuessContainer';
import GuessesList from './components/GuessesList';
// import ChooseNameContainer from './components/namingGame/ChooseNameContainer';
import CreateNameContainer from './components/namingGame/CreateNameContainer';
import NamingGameContainer from './components/namingGame/NamingGameContainer';


interface IAppState {
  x: number,
  y: number
}

const AppDiv = styled('div')`
`;

const client = new ApolloClient({
  uri: `${config.uri}`
});



class App extends React.Component<{}, IAppState> {

  public render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <AppDiv className="App">
            <Background />

            <Route exact={true} path="/" component={LandingPage} />
            <Route path="/userlist" component={UserList} />
            <Route path="/guess/form" component={CreateGuessContainer} />
            <Route path="/guess/results" component={GuessesList} />
            <Route path="/the-naming-game" component={NamingGameContainer} />
            {/* <Route path="/the-naming-game/vote" component={NamingGameContainer} /> */}
            <Route path="/create-name" component={CreateNameContainer} />
            <Route path="/the-naming-game/redirect" render={() => <Redirect to="/create-name" />} />
          </AppDiv>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
