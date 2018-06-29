import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import Button from './Button';

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
    }
  }
`;


export default class CreateUser extends React.Component<{}, { name: string, email: string }> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e, createUser) {
    e.preventDefault();
    createUser({ variables: { name: this.state.name, email: this.state.email } });
    this.setState({
      email: '',
      name: '',
    })
  }

  public handleChangeName(e) {
    this.setState({
      name: e.currentTarget.value,
    });
  }
  public handleChangeEmail(e) {
    this.setState({
      email: e.currentTarget.value,
    });
  }

  public render() {

    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data }) => (
          <form
            /* tslint:disable */
            onSubmit={e => this.handleSubmit(e, createUser)}
          /* tslint:enable */
          >
            <input type='input' value={this.state.name} onChange={this.handleChangeName} />
            <input type='input' value={this.state.email} onChange={this.handleChangeEmail} />
            {/* <Button text='volgende' url='/' big={true} submit={true} /> */}
            <button type="submit">volgende</button>
          </form>
        )
        }
      </Mutation>
    )
  }
}
