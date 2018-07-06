import * as React from 'react'
import CreateGuessContainer from '../createGuess/CreateGuessContainer';
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
    ])
  }
}
