import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CreateGuess from './CreateGuess';
import Modal from '../Modal';
import { IFormValues } from './CreateGuess';
import CreateUserForm from './CreateUserForm';
// import Button from './Button';

interface ICreateuserState {
  stage: number,
  values?: IFormValues,
}

const CREATE_GUESS = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;


export default class CreateGuessContainer extends React.Component<{}, ICreateuserState> {
  constructor(props) {
    super(props);
    this.state = ({
      stage: 1,
    })
    this.goToRegister = this.goToRegister.bind(this);
  }

  public goToRegister(values) {
    this.setState({
      stage: 2,
      values,
    })
  }
  public render() {
    if (this.state.stage === 1)
      return (
        <Modal>
          <CreateGuess key="component" handleSubmitClick={this.goToRegister} />
        </Modal>
      )


    return (
      <Modal>
        <Mutation mutation={CREATE_GUESS}>
          {(createUser, { data, error, loading }) => {
            if (data) return <h2>merci voor de input. Wij registreren deze dinges: {JSON.stringify(data)}</h2>

            // return ([
            //   <CreateGuess key="component" handleSubmitClick={createGuess} error={error} loading={loading} />
            // ]);
            return (
              <CreateUserForm createUser={createUser} error={error} loading={loading} />
            )
          }}
        </Mutation>
      </Modal>
    )
  }
}

