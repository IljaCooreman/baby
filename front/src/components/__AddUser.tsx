import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

interface IAddUserState {
  name: `String`,
  email: `String`
  handleChangeName: any
}

const ADD_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;


export default class AddUser extends React.Component<{}, IAddUserState> {
  public handleChangeName = (e: any) => {
    this.setState({
      name: e.currentTarget.value,
    })
  }
  public handleChangeEmail = (e: any) => {
    this.setState({
      email: e.currentTarget.value,
    })
  }

  public handleSubmit = (e, addUser) => {
    e.preventDefault();
    addUser({ variables: { name: this.state.name, email: this.state.email } })
  }
  public render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { data }) => (
          <form>
            <input type='text' onChange={this.handleChangeName} />
            <input type='text' onChange={this.handleChangeEmail} />
            {/* tslint:disable */}
            <button onClick={e => this.handleSubmit(e, addUser)}>submit</button>
            {/* tslint:enable */}
          </form>
        )}
      </Mutation>
    )
  }
}
