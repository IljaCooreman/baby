import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { css } from 'react-emotion';
import { IName } from 'src/typeDefs';
// import dummyNames from '../../dummyNames';


const Name = styled('div')`
display: block;
font-size: 14px;
font-weight: 400;
color: black;
border-radius: 20px;
text-align: right;
padding: 4px 8px;
transition: background .3s ease;
border-right: 1px solid black;
cursor: pointer;
&&:hover {
  background: black;
  color: white;
}
`;

const Container = styled('div')`
  position: relative;
  display: flex;
  margin-top: 40px;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 10px 0;
  flex-grow: 1;
  color: black;
  overflow-y: scroll;
`;

const OrderNumber = styled('div')`
  color: rgba(0,0,0,.6);
  padding: 4px;
`;

const Note = styled('span')`
  color: rgba(255,255,255,.2);
  font-size: 12px;
`;

const NameWrapper = styled('div')`
  display: flex;
  min-height: 24px;
  margin: 6px;
  max-width: 120px;
`;


const LeaderboardContainer: React.SFC<{}> = () => (
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
      if (loading) return (<div className={css`display: flex; padding-top: 50px; justify-content: center; align-content: center;`}>...</div>)
      if (error) return null;
      console.log(data.names)
      // const sortedData = data.names.forEach(name => console.log(name.score))
      // const sortedData = data.names.sort((prev, next) => {
      //   console.log(next.score, prev.score);
      //   return next.score - prev.score;
      // });
      return (
        <Container>
          {
            data.names.map((name: IName, i) => (
              <NameWrapper>
                <OrderNumber>#{i + 1}</OrderNumber>
                <Name key={name.id}>{name.name}</Name>
              </NameWrapper>
            ))
          }
          <Note>{data.names.length} namen in de lijst</Note>
        </Container>
      );
    }}
  </Query>
)

export default LeaderboardContainer;
