import { IName } from '../../typeDefs';

export function pickContestants(names: IName[]) {
  return pickRandom(names.slice(), 3);
}

// function sortNames(names: [IName]) {
//   const newArray = names.slice();
//   return newArray.sort((prev, next) => next.score - prev.score);
// }

function pickRandom(arr: IName[], count: number = 1, selection: IName[] = []) {
  if (selection.length === count) return selection;
  const index = Math.floor(Math.random() * arr.length);
  selection.push(arr[index]);
  arr.splice(index, 1);
  return pickRandom(arr, count, selection);
}

export function calcWeight(winnerScore: number, losers: IName[]) {
  const bestLoserScore = losers.reduce((a, b) => Math.max(a, b.score), 0);
  const delta = bestLoserScore - winnerScore;
  const weight = Math.round(delta > 0 ? 1 + delta / winnerScore : 1);
  console.log('best loser score', bestLoserScore, 'winnerScore', winnerScore, 'weight', weight);
  // prevent extreme high weights
  return weight < 5 ? weight : 5;
}

// function winRatio(name: IName) {
//   if (name.duels === 0) return 0.5;
//   return name.votes / name.duels;
// }