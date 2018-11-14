import { IName } from '../../typeDefs';

interface INameRatio extends IName {
  ratio: number
}

interface ISplittedNames {
  ranked: INameRatio[],
  new: INameRatio[],
}

export function pickContestants(names: IName[]): IName[] {
  return pickRandom(names.slice(), 3);
}

// function sortNames(names: [IName]) {
//   const newArray = names.slice();
//   return newArray.sort((prev, next) => next.score - prev.score);
// }

function pickRandom(arr: IName[], count: number = 1, selection: IName[] = []): IName[] {
  if (selection.length === count) return selection;
  const index = Math.floor(Math.random() * arr.length);
  selection.push(arr[index]);
  arr.splice(index, 1);
  return pickRandom(arr, count, selection);
}

export function calcWeight(winnerScore: number, losers: IName[]): number {
  const bestLoserScore = losers.reduce((a, b) => Math.max(a, b.score), 0);
  const delta = bestLoserScore - winnerScore;
  const weight = Math.round(delta > 0 ? 1 + delta / winnerScore : 1);
  console.log('best loser score', bestLoserScore, 'winnerScore', winnerScore, 'weight', weight);
  // prevent extreme high weights
  return weight < 5 ? weight : 5;
}

export function winRatio(name: IName): number {
  if (name.duels === 0) return 0.333;
  return name.votes / name.duels;
}

export function addRatios(names: IName[]): INameRatio[] {
  return names.map((name: IName) => ({
    ...name,
    ratio: winRatio(name),
  }
  ))
}

export function splitNewNames(names: INameRatio[]): ISplittedNames {
  const accum: ISplittedNames = { ranked: [], new: [] };
  const splitted = names.reduce((acc, name: INameRatio) => {
    name.duels < 10 ? acc.new.push(name) : acc.ranked.push(name);
    return acc;
  }, accum);
  return {
    ranked: splitted.ranked.sort((prev, next) => next.ratio - prev.ratio),
    new: splitted.new.sort((prev, next) => prev.duels - next.duels),
  }
}