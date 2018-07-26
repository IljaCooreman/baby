import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const UserList = () => (
  <Query
    query={gql`
      {
        users {
          id
          name
          email
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return (<p>Laden.... </p>)
      if (error) return <p>{error.message}</p>;

      return (
        <ul>{
          data.users.map((user: any) => (
            <li key={user.email}>
              {user.name}
            </li>
          )
          )
        }</ul>
      );
    }}
  </Query>
);

export default UserList;