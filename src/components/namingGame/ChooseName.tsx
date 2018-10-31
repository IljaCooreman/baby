import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { IName } from '../../typeDefs';
import NameButton from './NameButton';
import { pickContestants } from './utils';

interface IChooseNameProps {
  names: [IName]
};

interface IState {
  names: [IName]
}


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
    super(props)
  }

  public handleNameClick() {
    console.log('clicked')
  }

  public render() {
    return (
      <Mutation mutation={PICK_NAME}>
        {(pickName, { data, loading }) => {
          if (loading) return (
            <div>keuze opslaan</div>
          );
          return (
            <div>
              {
                pickContestants(this.props.names).map((name, i, names) => {
                  const selection = names.slice();
                  selection.splice(i, 1);
                  return (
                    <NameButton key={name.id} {...name} pickName={pickName} handleNameClick={this.handleNameClick} contestants={selection} />
                  )
                })
              }
            </div>
          )
        }}
      </Mutation>
    )
  }
}



