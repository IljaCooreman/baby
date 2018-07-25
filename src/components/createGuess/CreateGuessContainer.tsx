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
  variables?: IFormValues,
}

const CREATE_USER_AND_GUESS = gql`
  mutation createUserAndGuess($name: String!, $email: String!, $birthDate: String!, $weight: Int, $sex: String!) {
    createUserAndGuess(name: $name, email: $email, sex: $sex, birthDate: $birthDate, weight: $weight) {
      id
      user {
        name
        email
      }
      weight
      birthDate
      sex
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

  public goToRegister({ variables }) {
    this.setState({
      stage: 2,
      variables,
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
        <Mutation
          mutation={CREATE_USER_AND_GUESS}
        // update={(cache, { data: { addTodo } }) => {
        //   const data = cache.readQuery({query: CREATE_USER_AND_GUESS});
        //   cache.writeQuery({
        //     data: { todos: [...data.guesses, ... },
        //     query: CREATE_USER_AND_GUESS,
        //   });
        // }}
        >
          {(createUserAndGuess, { data, error, loading }) => {
            if (data) return <div><h2>merci voor de input.</h2> <p>Wij registreerden het volgende:</p> <p>{JSON.stringify(data)}</p><p>Ziet er dus goed uit!</p></div>
            const handleSubmit = (userValues) => {
              console.log({ variables: { ...userValues, ...this.state.variables } })
              createUserAndGuess({ variables: { ...userValues, ...this.state.variables } })
            }

            return (
              <CreateUserForm handleSubmit={handleSubmit} error={error} loading={loading} />
            )
          }}
        </Mutation>
      </Modal>
    )
  }
}

