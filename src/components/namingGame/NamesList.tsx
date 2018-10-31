import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import * as moment from 'moment';
// import Modal from '../Modal';
import styled, { css } from 'react-emotion';
import dummyNames from '../../dummyNames';


const Name = styled('div')`
font-weight: 400;
font-size: 16px;
color: rgba(255,255,255,0.41);
background: rgba(255, 255, 255, .1);
border-radius: 4px;
padding: 3px 5px;
margin: 2px;
text-align: center;
text-transform: capitalize;
transition: background .3s ease;
cursor: default;
&&:hover {
  background: rgba(255,255,255,.2);
}
`;

const Container = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 10px 0;
`;

const SubTitle = styled('h3')`
  color: rgba(255,255,255,.5);
  font-size: 16px;
  margin-top: 40px;
`;

const Note = styled('span')`
  color: rgba(255,255,255,.2);
  font-size: 12px;
`;


const NamesList: React.SFC<{}> = () => (
  <Query
    query={gql`
      {
        names {
          duels
          id
          name
          score
          stability
          votes
        }
      }
    `}
    fetchPolicy={'cache-and-network'}
  >
    {({ loading, error, data }) => {
      if (loading) return (<div className={css`display: flex; padding-top: 50px; justify-content: center; align-content: center;`}>Lijst met namen opvragen...</div>)
      // if (error) return <p>{error.message}</p>;

      return (
        <div className={'fade-in'}>
          <SubTitle className={css`text-align: center;`}>Huidige namenlijst</SubTitle>
          <Container>
            {
              dummyNames.names.map((name: any) => (
                <Name key={name.id}>{name.name}</Name>
              ))
            }
          </Container>
          <Note>{dummyNames.names.length} namen in de lijst</Note>
        </div>
      );
    }}
  </Query>
);

export default NamesList;

