import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import CreateGuess from './CreateGuess';
import Modal from '../Modal';
import { IFormValues } from './CreateGuess';
import CreateUserForm from './CreateUserForm';
import { css } from 'emotion';
import Button from '../Button';
import { Link } from 'react-router-dom';
/* tslint:disable-next-line */
const gif = require('src/assets/noaKiest.gif');


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
            if (data) return <div className={css`
              display: flex;
              flex-flow: column;
            `}>
              <h2>Merci voor de input, {data && `${data.createUserAndGuess.user.name}!`}</h2>
              <p>Het volgende werd weggeschreven op onze private blockchain:</p> <p className={css`
              font-size: 12px;
              opacity: .7;
              font-family: monospace;
              overflow-wrap: break-word;
            `}>{JSON.stringify(data)}</p><p>Een straffe die het daarvan af krijgt!</p>
              <h3>Let's talk about sex, baby!</h3>
              <p>Wat wordt het? Noa wil het je graag vertellen! SMS de geheime code naar Roxanne of Ilja: <div className={css`font-family: monospace; font-weight: 700; color: white;`}>'Noa, verlos mij!'</div></p>
              <img className={css`
              border-radius: 16px;
              align-self: center;
              `} src={gif} />
              <p>**Voor wie winnen dan toch belangrijker is dan deelnemen: diegene die de beste gok waagt wint de placenta. Proficiat!</p>
              <Link to={'/'} className={css`align-self: center;`}>
                <Button text="Einde" />
              </Link>
            </div>
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

