import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Modal from '../Modal';
import { css } from 'emotion';
import Button from '../Button';
import { Link } from 'react-router-dom';
import CreateName from './CreateName';




const CREATE_NAME = gql`
  mutation createName($name: String!) {
    createName(name: $name) {
      name
    } 
  }
`;

export default class CreateNameContainer extends React.Component<{}> {

  public render() {

    return (
      <Modal>
        <Mutation mutation={CREATE_NAME}>
          {(createName, { data, error, loading }) => {
            console.log(error)
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
                <Link to={'/the-naming-game'} className={css`align-self: center;`}>
                  <Button text="Sluit" />
                </Link>
              </div>
            );
            return (
              <CreateName createName={createName} error={error} loading={loading} />
            )
          }}
        </Mutation>
      </Modal>
    )
  }
}

