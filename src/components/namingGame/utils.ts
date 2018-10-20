import { IName } from '../../typeDefs';

export function pickContestants(names: [IName]) {
  const sortedNames = sortNames(names);
  console.log(sortedNames)
  return [sortedNames[0], sortedNames[1]];
}

function sortNames(names: [IName]) {
  console.log(names)
  const newArray = names.slice();
  return newArray.sort((prev, next) => next.score - prev.score);
}