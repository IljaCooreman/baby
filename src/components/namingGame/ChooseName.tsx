import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { IName } from '../../typeDefs';
import NameButton from './NameButton';
import { pickContestants } from './utils';
import styled from 'react-emotion';
interface IChooseNameProps {
  names: IName[]
};

interface IState {
  loserIds: string[],
  contestants: IName[],
}

const Background = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;


const PICK_NAME = gql`
mutation pickName($winnerId: ID!, $loserIds: [ID!], $weight: Float) {
    pickName(winnerId: $winnerId, loserIds: $loserIds, weight: $weight) {
        id
        name
        score
        duels
        votes
        stability
    }
  }
`;

export default class ChooseName extends React.Component<IChooseNameProps, IState> {
  constructor(props: IChooseNameProps) {
    super(props);
    this.state = { loserIds: [], contestants: pickContestants(this.props.names) }
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  public handleNameClick(loserIds: string[]) {
    this.setState({ loserIds });
    setTimeout(() => {
      this.setState({ contestants: pickContestants(this.props.names), loserIds: [] })
    }, 800)
    console.log('clicked', loserIds)
  }

  public render() {
    return (
      <Mutation mutation={PICK_NAME}>
        {(pickName, { data, }) => {
          return (
            <Background>
              {
                this.state.contestants.map((name, i, names) => {
                  const selection = names.slice();
                  selection.splice(i, 1);
                  const loose = this.state.loserIds.find(id => id === name.id) ? true : false;
                  return (
                    <NameButton
                      key={name.id} {...name}
                      pickName={pickName}
                      handleNameClick={this.handleNameClick}
                      contestants={selection}
                      loose={loose}
                    />
                  )
                })
              }
            </Background>
          )
        }}
      </Mutation>
    )
  }
}



