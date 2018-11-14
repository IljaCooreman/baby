import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { css } from 'react-emotion';
import { IName } from 'src/typeDefs';
import Detail from './Detail';
import { Link } from 'react-router-dom';
import { addRatios, splitNewNames } from '../utils';

interface IState {
  hoverIndex: number;
  newNames: boolean,
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
text-transform: capitalize;
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

const LeaderboardToggle = styled('div')`
  color: black;
  margin: 40px;
  text-align: center;
  cursor: pointer;
  transition: color .3s ease;
  &&:hover {
    color: #6AD6DC;
  }
`;

const ListTitles = styled('h3')`
  grid-column: 2 / span 2;
  grid-row-end: span 2;
  color: black;
  margin: 10px 0;
  place-self: end flex-start;
  font-family: Rubik;
  font-size: 14px;
`;

/* tslint:disable */
export default class LeaderBoardContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { hoverIndex: 0, newNames: false }
  }
  public render() {

    const { hoverIndex, newNames } = this.state;
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
          if (error) return <div>Namen laden...</div>;
          const splitData = splitNewNames(addRatios(data.names));
          return ([
            <Container key={1}>
              <ListGrid>
                <ListTitles>Gerankschikte namen</ListTitles>
                {
                  splitData.ranked.map((name: IName, i) => (
                    [<OrderNumber key={i}>#{i + 1}</OrderNumber>,

                    <Name
                      className={i === hoverIndex && !newNames ? css`background: black; color: white;` : ''}
                      key={`${i}-name`}
                      onMouseEnter={() => this.setState({ hoverIndex: i, newNames: false })}
                    // onMouseLeave={() => this.setState({ hoverIndex: null })}
                    >
                      {name.name}
                    </Name>,
                    <Line key={`${i}-line`} />
                    ]
                  ))
                }
                <ListTitles>Nieuwe namen</ListTitles>
                {
                  splitData.new.map((name: IName, i) => (
                    [
                      <Name
                        className={i === hoverIndex && newNames ? css`background: black; color: white;` : ''}
                        key={`${i}-name`}
                        onMouseEnter={() => this.setState({ hoverIndex: i, newNames: true })}
                      >
                        {name.name}
                      </Name>,
                      <Line key={`${i}-line`} />
                    ]
                  ))
                }
              </ListGrid>
              <Detail name={splitData[newNames ? 'new' : 'ranked'][hoverIndex]} index={hoverIndex} newNames={newNames} />
              <Note>{splitData.new.length + splitData.ranked.length} namen, waarvan {splitData.ranked.length} gerangschikt en {splitData.new.length} nieuw.</Note>
            </Container>,
            <LeaderboardToggle key={22}>
              <Link to={'/the-naming-game/vote'}>
                stem op namen
              </Link>
            </LeaderboardToggle>
          ]
          );
        }}
      </Query>
    )
  }
}
/* tslint:enable */

