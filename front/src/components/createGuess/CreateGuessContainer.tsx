import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CreateGuess from './CreateGuess';
import Modal from '../Modal';
// import Button from './Button';


const CREATE_GUESS = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;


export default class CreateUser extends React.Component<{}, {}> {


  public render() {
    return (
      <Modal>
        <Mutation mutation={CREATE_GUESS}>
          {(createGuess, { data, error, loading }) => {
            if (data) return <h2>merci voor de input. Wij registreren deze dinges: {JSON.stringify(data)}</h2>

            return ([
              <CreateGuess key="component" createGuess={createGuess} error={error} loading={loading} />
            ]);
          }}
        </Mutation>
      </Modal>
    )
  }
}

