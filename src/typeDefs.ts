export interface IUser {
  id: string,
  name: string,
  email?: string,
}

export interface IName {
  duels: number,
  id: string,
  name: string,
  score: number,
  stability: number,
  votes: number,
  creator: IUser,
}