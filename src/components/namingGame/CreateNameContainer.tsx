import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Modal from '../Modal';
import { css } from 'emotion';
import Button from '../Button';
import { Link } from 'react-router-dom';
import CreateName from './CreateName';
import { IUser } from '../../typeDefs';

interface ICreateNameContainerState {
  user: IUser,
}


const CREATE_NAME = gql`
  mutation createName($name: String!, $userName: String) {
    createName(name: $name, creatorName: $userName) {
      name
    } 
  }
`;

export default class CreateNameContainer extends React.Component<{}, ICreateNameContainerState> {
  constructor(props) {
    super(props);
    // check local storage for user
    const localUserName = localStorage.getItem('userName');
    if (localUserName) this.state = ({
      user: {
        id: '', email: '',
        name: localUserName,
      }
    });
    else this.state = { user: { email: '', id: '', name: '' } };

    this.setUser = this.setUser.bind(this);
  }

  public setUser(userName?: string) {
    if (userName || userName === '') {
      localStorage.setItem('userName', userName);
      this.setState({
        user: {
          ...this.state.user,
          userName,
        }
      })
    }
  }

  public render() {

    return (
      <Modal>
        <Mutation mutation={CREATE_NAME}>
          {(createName, { data, error, loading }) => {
            if (data) return (
              <div className={css`
              display: flex;
              flex-flow: column;
              align-items: center;
            `}>
                <h2>{data.createName.name} werd toegevoegd aan de lijst</h2>
                <p>Bedankt voor uw input</p>
                <Link to={'/the-naming-game/redirect'}>
                  Nog een naam toevoegen
                </Link>
                <Link to={'/'} className={css`align-self: center;`}>
                  <Button text="Sluit" />
                </Link>
              </div>
            );
            return (
              <CreateName
                createName={createName}
                error={error}
                loading={loading}
                setUser={this.setUser}
                user={this.state.user}
              />
            )
          }}
        </Mutation>
      </Modal>
    )
  }
}

