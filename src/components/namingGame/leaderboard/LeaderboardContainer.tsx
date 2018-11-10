import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { css } from 'react-emotion';
import { IName } from 'src/typeDefs';
import Detail from './Detail';

interface IState {
  hoverIndex: number | null;
}

const Container = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  margin-top: 40px;
  margin: 10px 0;
  color: black;
`;


const ListGrid = styled('div')`

  display: grid;
  grid-template-columns: 10fr 30px minmax(min-content, 1fr) 1px; 
  grid-auto-rows: 30px;
  grid-column-gap: 14px;
  grid-auto-flow: column;
  position: relative;
  overflow-y: scroll;
`;

const Name = styled('div')`
grid-column-start: 3;
  grid-column-end: span 1;
  justify-self: end;
font-size: 14px;
font-weight: 400;
color: black;
border-radius: 20px;
justify-self: left;
padding: 4px 8px;
margin: 4px;
cursor: pointer;
&&:hover {
  background: black;
  color: white;
}
`;


const OrderNumber = styled('div')`
  color: rgba(0,0,0,.6);
  grid-column-start: 2;
  grid-column-end: span 1;
  justify-content: right;
  place-self: center;
`;

const Line = styled('div')`
  grid-column: 4 / span 1;
  background: rgba(0,0,0,.1);
`;

const Note = styled('span')`
  color: rgba(0,0,0,.2);
  font-size: 12px;
`;


export default class LeaderBoardContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { hoverIndex: null }

  }
  public render() {
    const { hoverIndex } = this.state;
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

              <ListGrid>

                {
                  data.names.map((name: IName, i) => (
                    [<OrderNumber key={i}>#{i + 1}</OrderNumber>,
                    <Name
                      key={`${i}-name`}
                      onMouseEnter={() => this.setState({ hoverIndex: i })}
                      onMouseLeave={() => this.setState({ hoverIndex: null })}
                    >
                      {name.name}
                    </Name>,
                    <Line key={`${i}-line`} />
                    ]
                  ))
                }
              </ListGrid>
              <Detail name={hoverIndex ? data.names[hoverIndex] : null} index={hoverIndex} />
              <Note>{data.names.length} namen in de lijst</Note>
            </Container>
          );
        }}
      </Query>
    )
  }
}

