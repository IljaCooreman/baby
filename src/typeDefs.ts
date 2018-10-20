export interface IUser {
  id: string,
  name: string,
  email?: string,
}

export interface IName {
  id: string,
  name: string,
  votes: number,
  duels: number,
  stability: number,
  score: number,
  creator?: IUser,
}