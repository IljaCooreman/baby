import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CreateUserForm from './CreateUserForm';
import Modal from '../Modal';
// import Button from './Button';

interface ICreateUserState {
  step: number,
  gotData: boolean,
}

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;


export default class CreateUser extends React.Component<{}, ICreateUserState> {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      step: 1
    }
    this.changeStep = this.changeStep.bind(this)
  }

  public changeStep(step, gotData) {
    this.setState({
      gotData,
      step,
    })
  }

  public render() {
    return (
      <Modal>
        <Mutation mutation={CREATE_USER}>
          {(createUser, { data, error, loading }) => {
            if (data) return <h2>merci voor de input. Current step = {this.state.step}</h2>

            return ([
              <h2 key="title">Hoe is jouw naam?</h2>,
              <CreateUserForm key="component" createUser={createUser} error={error} loading={loading} />
            ]);
          }}
        </Mutation>
      </Modal>
    )
  }
}

