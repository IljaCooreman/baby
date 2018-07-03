import * as React from 'react'
import Modal from './Modal';
import CreateUser from './CreateUser';
import { Route } from 'react-router-dom';

interface IMatchObject {
  isExact: boolean,
  parameters: object,
  path: string,
  url: string,
}

export default class NewGuess extends React.Component<{ match: IMatchObject }, any> {
  public render() {
    return (
      <Modal>
        <Route path={`${this.props.match.path}/register`} component={CreateUser} />

      </Modal>
    )
  }
}
