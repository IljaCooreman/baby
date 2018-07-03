import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CreateUserForm from './CreateUserForm';
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
  public render() {
    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data, error, loading }) => (
          <CreateUserForm createUser={createUser} error={error} data={data} loading={loading} />
        )}
      </Mutation>
    )
  }
}

