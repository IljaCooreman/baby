import * as React from 'react'
import CreateUser from './CreateUser';
import CreateGuessContainer from './createGuess/CreateGuessContainer';
import { Route } from 'react-router-dom';

interface IMatchObject {
  isExact: boolean,
  parameters: object,
  path: string,
  url: string,
}

export default class NewGuess extends React.Component<{ match: IMatchObject }, any> {
  public render() {
    return ([
      <Route key='1' exact={true} path={`${this.props.match.path}/`} component={CreateGuessContainer} />,
      <Route key='2' path={`${this.props.match.path}/register`} component={CreateUser} />
    ])
  }
}
