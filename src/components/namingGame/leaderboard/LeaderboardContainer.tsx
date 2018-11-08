import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { css } from 'react-emotion';
import { IName } from 'src/typeDefs';

interface IState {
  hoverIndex: number | null;
}


const Container = styled('div')`
  position: relative;
  display: flex;
  margin-top: 40px;
  flex-flow: column wrap;
  align-items: center;
  margin: 10px 0;
  flex-grow: 1;
  color: black;
  overflow-y: scroll;
`;

const Name = styled('div')`
display: block;
font-size: 14px;
font-weight: 400;
color: black;
border-radius: 20px;
text-align: right;
padding: 4px 8px;
transition: background .3s ease;
cursor: pointer;
&&:hover {
  background: black;
  color: white;
}
`;


const OrderNumber = styled('div')`
  color: rgba(0,0,0,.6);
  padding: 4px;
`;

const Note = styled('span')`
  color: rgba(0,0,0,.2);
  font-size: 12px;
`;

const NameWrapper = styled('div')`
position: relative;
  display: flex;
  min-height: 24px;
  margin: 6px;
  max-width: 120px;
`;

const Line = styled('div')`
  width: 1px;
  background: rgba(0,0,0,.2);
`;

export default class LeaderBoardContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { hoverIndex: null }

  }
  public render() {
    return (

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
          creator {
            name
          }
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
                  <NameWrapper key={name.id}>
                    <OrderNumber>#{i + 1}</OrderNumber>
                    <Name
                      onMouseEnter={() => this.setState({ hoverIndex: i })}
                      onMouseLeave={() => this.setState({ hoverIndex: null })}
                    >
                      {name.name}
                    </Name>
                    <Line />
                  </NameWrapper>
                ))
              }
              {
                this.state.hoverIndex && <div>{data.names[this.state.hoverIndex].score}{console.log(data.names[this.state.hoverIndex].creator)}</div>
              }
              <Note>{data.names.length} namen in de lijst</Note>
            </Container>
          );
        }}
      </Query>
    )
  }
}

