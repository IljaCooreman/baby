import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as moment from 'moment';
import Modal from './Modal';
import male from 'src/assets/icons/smallMale.svg';
import female from 'src/assets/icons/smallFemale.svg';
import styled, { css } from 'react-emotion';

const Li = styled('li')`
  list-style: none;
  margin: 14px;
  display: flex;
`;

const Name = styled('div')`
font-weight: 400;
font-size: 16px;
color: rgba(255,255,255,0.81);
/* min-width: 60px; */
margin-right: 12px;
text-align: right;
min-width: 100px;
text-transform: capitalize;
`;

const orderList = (list, filter) => {
  const sortedList = [...list];
  /* tslint:disable */
  return sortedList.sort((prev, next) => moment(prev[filter]).diff(next[filter]))
  /* tslint:enable */
}

const GuessesList: React.SFC<{}> = () => (
  <Query
    query={gql`
      {
        guesses {
          id
          user {
            name
            email
          }
          sex
          birthDate
          weight
        }
      }
    `}
    fetchPolicy={'cache-and-network'}
  >
    {({ loading, error, data }) => {
      if (loading) return (<p>Loading...</p>)
      if (error) return <p>{error.message}</p>;


      return (
        <Modal>
          <h2 className={css`text-align: center;`}>Voorspellingen</h2>
          <ul>{
            orderList(data.guesses, 'birthDate').map((guess: any) => (
              <Li key={guess.id}>
                <Name>{guess.user.name}</Name>
                <img className={css(`
                  margin: 0 4px;
                  height: ${guess.sex === 'm' ? 20 : 22}px;
                  min-width: 24px;
                `)}
                  src={guess.sex === 'm' ? male : female}
                />
                <span>{moment(guess.birthDate).local().format('DD MMM YYYY')}</span>
              </Li>
            )
            )
          }</ul>
        </Modal>
      );
    }}
  </Query>
);

export default GuessesList;

