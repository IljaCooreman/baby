import * as React from 'react'
import Modal from './Modal';
import CreateUser from './CreateUser';





export default class NewGuess extends React.Component<{}, any> {
  public render() {
    return (
      <Modal>
        <CreateUser />
      </Modal>
    )
  }
}
