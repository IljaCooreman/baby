import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guesses: <T = Guess[]>(args: { where?: GuessWhereInput, orderBy?: GuessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    names: <T = Name[]>(args: { where?: NameWhereInput, orderBy?: NameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guess: <T = Guess | null>(args: { where: GuessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    name: <T = Name | null>(args: { where: NameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    guessesConnection: <T = GuessConnection>(args: { where?: GuessWhereInput, orderBy?: GuessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    namesConnection: <T = NameConnection>(args: { where?: NameWhereInput, orderBy?: NameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGuess: <T = Guess>(args: { data: GuessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createName: <T = Name>(args: { data: NameCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGuess: <T = Guess | null>(args: { data: GuessUpdateInput, where: GuessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateName: <T = Name | null>(args: { data: NameUpdateInput, where: NameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGuess: <T = Guess | null>(args: { where: GuessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteName: <T = Name | null>(args: { where: NameWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGuess: <T = Guess>(args: { where: GuessWhereUniqueInput, create: GuessCreateInput, update: GuessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertName: <T = Name>(args: { where: NameWhereUniqueInput, create: NameCreateInput, update: NameUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGuesses: <T = BatchPayload>(args: { data: GuessUpdateInput, where?: GuessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNames: <T = BatchPayload>(args: { data: NameUpdateInput, where?: NameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGuesses: <T = BatchPayload>(args: { where?: GuessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNames: <T = BatchPayload>(args: { where?: NameWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    guess: <T = GuessSubscriptionPayload | null>(args: { where?: GuessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    name: <T = NameSubscriptionPayload | null>(args: { where?: NameSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Post: (where?: PostWhereInput) => Promise<boolean>
  Guess: (where?: GuessWhereInput) => Promise<boolean>
  Name: (where?: NameWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateGuess {
  count: Int!
}

type AggregateName {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Guess implements Node {
  id: ID!
  createdAt: DateTime!
  birthDate: String!
  weight: Int
  sex: String!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type GuessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GuessEdge]!
  aggregate: AggregateGuess!
}

input GuessCreateInput {
  birthDate: String!
  weight: Int
  sex: String!
  user: UserCreateOneWithoutGuessInput!
}

input GuessCreateOneWithoutUserInput {
  create: GuessCreateWithoutUserInput
  connect: GuessWhereUniqueInput
}

input GuessCreateWithoutUserInput {
  birthDate: String!
  weight: Int
  sex: String!
}

"""An edge in a connection."""
type GuessEdge {
  """The item at the end of the edge."""
  node: Guess!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GuessOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  birthDate_ASC
  birthDate_DESC
  weight_ASC
  weight_DESC
  sex_ASC
  sex_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuessPreviousValues {
  id: ID!
  createdAt: DateTime!
  birthDate: String!
  weight: Int
  sex: String!
}

type GuessSubscriptionPayload {
  mutation: MutationType!
  node: Guess
  updatedFields: [String!]
  previousValues: GuessPreviousValues
}

input GuessSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GuessSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuessSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuessSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GuessWhereInput
}

input GuessUpdateInput {
  birthDate: String
  weight: Int
  sex: String
  user: UserUpdateOneWithoutGuessInput
}

input GuessUpdateOneWithoutUserInput {
  create: GuessCreateWithoutUserInput
  connect: GuessWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GuessUpdateWithoutUserDataInput
  upsert: GuessUpsertWithoutUserInput
}

input GuessUpdateWithoutUserDataInput {
  birthDate: String
  weight: Int
  sex: String
}

input GuessUpsertWithoutUserInput {
  update: GuessUpdateWithoutUserDataInput!
  create: GuessCreateWithoutUserInput!
}

input GuessWhereInput {
  """Logical AND on all given filters."""
  AND: [GuessWhereInput!]

  """Logical OR on all given filters."""
  OR: [GuessWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GuessWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  birthDate: String

  """All values that are not equal to given value."""
  birthDate_not: String

  """All values that are contained in given list."""
  birthDate_in: [String!]

  """All values that are not contained in given list."""
  birthDate_not_in: [String!]

  """All values less than the given value."""
  birthDate_lt: String

  """All values less than or equal the given value."""
  birthDate_lte: String

  """All values greater than the given value."""
  birthDate_gt: String

  """All values greater than or equal the given value."""
  birthDate_gte: String

  """All values containing the given string."""
  birthDate_contains: String

  """All values not containing the given string."""
  birthDate_not_contains: String

  """All values starting with the given string."""
  birthDate_starts_with: String

  """All values not starting with the given string."""
  birthDate_not_starts_with: String

  """All values ending with the given string."""
  birthDate_ends_with: String

  """All values not ending with the given string."""
  birthDate_not_ends_with: String
  weight: Int

  """All values that are not equal to given value."""
  weight_not: Int

  """All values that are contained in given list."""
  weight_in: [Int!]

  """All values that are not contained in given list."""
  weight_not_in: [Int!]

  """All values less than the given value."""
  weight_lt: Int

  """All values less than or equal the given value."""
  weight_lte: Int

  """All values greater than the given value."""
  weight_gt: Int

  """All values greater than or equal the given value."""
  weight_gte: Int
  sex: String

  """All values that are not equal to given value."""
  sex_not: String

  """All values that are contained in given list."""
  sex_in: [String!]

  """All values that are not contained in given list."""
  sex_not_in: [String!]

  """All values less than the given value."""
  sex_lt: String

  """All values less than or equal the given value."""
  sex_lte: String

  """All values greater than the given value."""
  sex_gt: String

  """All values greater than or equal the given value."""
  sex_gte: String

  """All values containing the given string."""
  sex_contains: String

  """All values not containing the given string."""
  sex_not_contains: String

  """All values starting with the given string."""
  sex_starts_with: String

  """All values not starting with the given string."""
  sex_not_starts_with: String

  """All values ending with the given string."""
  sex_ends_with: String

  """All values not ending with the given string."""
  sex_not_ends_with: String
  user: UserWhereInput
}

input GuessWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createGuess(data: GuessCreateInput!): Guess!
  createName(data: NameCreateInput!): Name!
  createUser(data: UserCreateInput!): User!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateGuess(data: GuessUpdateInput!, where: GuessWhereUniqueInput!): Guess
  updateName(data: NameUpdateInput!, where: NameWhereUniqueInput!): Name
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  deleteGuess(where: GuessWhereUniqueInput!): Guess
  deleteName(where: NameWhereUniqueInput!): Name
  deleteUser(where: UserWhereUniqueInput!): User
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertGuess(where: GuessWhereUniqueInput!, create: GuessCreateInput!, update: GuessUpdateInput!): Guess!
  upsertName(where: NameWhereUniqueInput!, create: NameCreateInput!, update: NameUpdateInput!): Name!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyGuesses(data: GuessUpdateInput!, where: GuessWhereInput): BatchPayload!
  updateManyNames(data: NameUpdateInput!, where: NameWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyGuesses(where: GuessWhereInput): BatchPayload!
  deleteManyNames(where: NameWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Name implements Node {
  id: ID!
  creator(where: UserWhereInput): User
  name: String!
  votes: Int
  duels: Int
  stability: Float
  score: Float
}

"""A connection to a list of items."""
type NameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NameEdge]!
  aggregate: AggregateName!
}

input NameCreateInput {
  name: String!
  votes: Int
  duels: Int
  stability: Float
  score: Float
  creator: UserCreateOneInput
}

"""An edge in a connection."""
type NameEdge {
  """The item at the end of the edge."""
  node: Name!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NameOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  votes_ASC
  votes_DESC
  duels_ASC
  duels_DESC
  stability_ASC
  stability_DESC
  score_ASC
  score_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NamePreviousValues {
  id: ID!
  name: String!
  votes: Int
  duels: Int
  stability: Float
  score: Float
}

type NameSubscriptionPayload {
  mutation: MutationType!
  node: Name
  updatedFields: [String!]
  previousValues: NamePreviousValues
}

input NameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NameSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NameWhereInput
}

input NameUpdateInput {
  name: String
  votes: Int
  duels: Int
  stability: Float
  score: Float
  creator: UserUpdateOneInput
}

input NameWhereInput {
  """Logical AND on all given filters."""
  AND: [NameWhereInput!]

  """Logical OR on all given filters."""
  OR: [NameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NameWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  votes: Int

  """All values that are not equal to given value."""
  votes_not: Int

  """All values that are contained in given list."""
  votes_in: [Int!]

  """All values that are not contained in given list."""
  votes_not_in: [Int!]

  """All values less than the given value."""
  votes_lt: Int

  """All values less than or equal the given value."""
  votes_lte: Int

  """All values greater than the given value."""
  votes_gt: Int

  """All values greater than or equal the given value."""
  votes_gte: Int
  duels: Int

  """All values that are not equal to given value."""
  duels_not: Int

  """All values that are contained in given list."""
  duels_in: [Int!]

  """All values that are not contained in given list."""
  duels_not_in: [Int!]

  """All values less than the given value."""
  duels_lt: Int

  """All values less than or equal the given value."""
  duels_lte: Int

  """All values greater than the given value."""
  duels_gt: Int

  """All values greater than or equal the given value."""
  duels_gte: Int
  stability: Float

  """All values that are not equal to given value."""
  stability_not: Float

  """All values that are contained in given list."""
  stability_in: [Float!]

  """All values that are not contained in given list."""
  stability_not_in: [Float!]

  """All values less than the given value."""
  stability_lt: Float

  """All values less than or equal the given value."""
  stability_lte: Float

  """All values greater than the given value."""
  stability_gt: Float

  """All values greater than or equal the given value."""
  stability_gte: Float
  score: Float

  """All values that are not equal to given value."""
  score_not: Float

  """All values that are contained in given list."""
  score_in: [Float!]

  """All values that are not contained in given list."""
  score_not_in: [Float!]

  """All values less than the given value."""
  score_lt: Float

  """All values less than or equal the given value."""
  score_lte: Float

  """All values greater than the given value."""
  score_gt: Float

  """All values greater than or equal the given value."""
  score_gte: Float
  creator: UserWhereInput
}

input NameWhereUniqueInput {
  id: ID
  name: String
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  guesses(where: GuessWhereInput, orderBy: GuessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guess]!
  names(where: NameWhereInput, orderBy: NameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Name]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  post(where: PostWhereUniqueInput!): Post
  guess(where: GuessWhereUniqueInput!): Guess
  name(where: NameWhereUniqueInput!): Name
  user(where: UserWhereUniqueInput!): User
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  guessesConnection(where: GuessWhereInput, orderBy: GuessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuessConnection!
  namesConnection(where: NameWhereInput, orderBy: NameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NameConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  guess(where: GuessSubscriptionWhereInput): GuessSubscriptionPayload
  name(where: NameSubscriptionWhereInput): NameSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  name: String!
  email: String!
  guess(where: GuessWhereInput): Guess
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  guess: GuessCreateOneWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGuessInput {
  create: UserCreateWithoutGuessInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGuessInput {
  name: String!
  email: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  email: String
  guess: GuessUpdateOneWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  guess: GuessUpdateOneWithoutUserInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutGuessInput {
  create: UserCreateWithoutGuessInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutGuessDataInput
  upsert: UserUpsertWithoutGuessInput
}

input UserUpdateWithoutGuessDataInput {
  name: String
  email: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutGuessInput {
  update: UserUpdateWithoutGuessDataInput!
  create: UserCreateWithoutGuessInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  guess: GuessWhereInput
  _MagicalBackRelation_NameToUser_every: NameWhereInput
  _MagicalBackRelation_NameToUser_some: NameWhereInput
  _MagicalBackRelation_NameToUser_none: NameWhereInput
}

input UserWhereUniqueInput {
  id: ID
  name: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type GuessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'birthDate_ASC' |
  'birthDate_DESC' |
  'weight_ASC' |
  'weight_DESC' |
  'sex_ASC' |
  'sex_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NameOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'votes_ASC' |
  'votes_DESC' |
  'duels_ASC' |
  'duels_DESC' |
  'stability_ASC' |
  'stability_DESC' |
  'score_ASC' |
  'score_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  guess?: GuessUpdateOneWithoutUserInput
}

export interface UserCreateWithoutGuessInput {
  name: String
  email: String
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface NameCreateInput {
  name: String
  votes?: Int
  duels?: Int
  stability?: Float
  score?: Float
  creator?: UserCreateOneInput
}

export interface NameUpdateInput {
  name?: String
  votes?: Int
  duels?: Int
  stability?: Float
  score?: Float
  creator?: UserUpdateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  guess?: GuessWhereInput
  _MagicalBackRelation_NameToUser_every?: NameWhereInput
  _MagicalBackRelation_NameToUser_some?: NameWhereInput
  _MagicalBackRelation_NameToUser_none?: NameWhereInput
}

export interface UserUpsertWithoutGuessInput {
  update: UserUpdateWithoutGuessDataInput
  create: UserCreateWithoutGuessInput
}

export interface NameSubscriptionWhereInput {
  AND?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  OR?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  NOT?: NameSubscriptionWhereInput[] | NameSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NameWhereInput
}

export interface UserUpdateWithoutGuessDataInput {
  name?: String
  email?: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface UserUpdateOneWithoutGuessInput {
  create?: UserCreateWithoutGuessInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutGuessDataInput
  upsert?: UserUpsertWithoutGuessInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface GuessUpdateInput {
  birthDate?: String
  weight?: Int
  sex?: String
  user?: UserUpdateOneWithoutGuessInput
}

export interface GuessUpdateWithoutUserDataInput {
  birthDate?: String
  weight?: Int
  sex?: String
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface GuessWhereUniqueInput {
  id?: ID_Input
}

export interface GuessCreateWithoutUserInput {
  birthDate: String
  weight?: Int
  sex: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  name?: String
  email?: String
}

export interface GuessCreateOneWithoutUserInput {
  create?: GuessCreateWithoutUserInput
  connect?: GuessWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateInput {
  name: String
  email: String
  guess?: GuessCreateOneWithoutUserInput
}

export interface GuessSubscriptionWhereInput {
  AND?: GuessSubscriptionWhereInput[] | GuessSubscriptionWhereInput
  OR?: GuessSubscriptionWhereInput[] | GuessSubscriptionWhereInput
  NOT?: GuessSubscriptionWhereInput[] | GuessSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GuessWhereInput
}

export interface GuessUpsertWithoutUserInput {
  update: GuessUpdateWithoutUserDataInput
  create: GuessCreateWithoutUserInput
}

export interface UserCreateOneWithoutGuessInput {
  create?: UserCreateWithoutGuessInput
  connect?: UserWhereUniqueInput
}

export interface GuessCreateInput {
  birthDate: String
  weight?: Int
  sex: String
  user: UserCreateOneWithoutGuessInput
}

export interface GuessWhereInput {
  AND?: GuessWhereInput[] | GuessWhereInput
  OR?: GuessWhereInput[] | GuessWhereInput
  NOT?: GuessWhereInput[] | GuessWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  birthDate?: String
  birthDate_not?: String
  birthDate_in?: String[] | String
  birthDate_not_in?: String[] | String
  birthDate_lt?: String
  birthDate_lte?: String
  birthDate_gt?: String
  birthDate_gte?: String
  birthDate_contains?: String
  birthDate_not_contains?: String
  birthDate_starts_with?: String
  birthDate_not_starts_with?: String
  birthDate_ends_with?: String
  birthDate_not_ends_with?: String
  weight?: Int
  weight_not?: Int
  weight_in?: Int[] | Int
  weight_not_in?: Int[] | Int
  weight_lt?: Int
  weight_lte?: Int
  weight_gt?: Int
  weight_gte?: Int
  sex?: String
  sex_not?: String
  sex_in?: String[] | String
  sex_not_in?: String[] | String
  sex_lt?: String
  sex_lte?: String
  sex_gt?: String
  sex_gte?: String
  sex_contains?: String
  sex_not_contains?: String
  sex_starts_with?: String
  sex_not_starts_with?: String
  sex_ends_with?: String
  sex_not_ends_with?: String
  user?: UserWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  name?: String
  email?: String
  guess?: GuessUpdateOneWithoutUserInput
}

export interface NameWhereInput {
  AND?: NameWhereInput[] | NameWhereInput
  OR?: NameWhereInput[] | NameWhereInput
  NOT?: NameWhereInput[] | NameWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  votes?: Int
  votes_not?: Int
  votes_in?: Int[] | Int
  votes_not_in?: Int[] | Int
  votes_lt?: Int
  votes_lte?: Int
  votes_gt?: Int
  votes_gte?: Int
  duels?: Int
  duels_not?: Int
  duels_in?: Int[] | Int
  duels_not_in?: Int[] | Int
  duels_lt?: Int
  duels_lte?: Int
  duels_gt?: Int
  duels_gte?: Int
  stability?: Float
  stability_not?: Float
  stability_in?: Float[] | Float
  stability_not_in?: Float[] | Float
  stability_lt?: Float
  stability_lte?: Float
  stability_gt?: Float
  stability_gte?: Float
  score?: Float
  score_not?: Float
  score_in?: Float[] | Float
  score_not_in?: Float[] | Float
  score_lt?: Float
  score_lte?: Float
  score_gt?: Float
  score_gte?: Float
  creator?: UserWhereInput
}

export interface GuessUpdateOneWithoutUserInput {
  create?: GuessCreateWithoutUserInput
  connect?: GuessWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GuessUpdateWithoutUserDataInput
  upsert?: GuessUpsertWithoutUserInput
}

export interface NameWhereUniqueInput {
  id?: ID_Input
  name?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface GuessPreviousValues {
  id: ID_Output
  createdAt: DateTime
  birthDate: String
  weight?: Int
  sex: String
}

export interface Name extends Node {
  id: ID_Output
  creator?: User
  name: String
  votes?: Int
  duels?: Int
  stability?: Float
  score?: Float
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  name: String
  email: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  name: String
  email: String
  guess?: Guess
}

/*
 * An edge in a connection.

 */
export interface NameEdge {
  node: Name
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateGuess {
  count: Int
}

export interface NamePreviousValues {
  id: ID_Output
  name: String
  votes?: Int
  duels?: Int
  stability?: Float
  score?: Float
}

/*
 * A connection to a list of items.

 */
export interface GuessConnection {
  pageInfo: PageInfo
  edges: GuessEdge[]
  aggregate: AggregateGuess
}

export interface Guess extends Node {
  id: ID_Output
  createdAt: DateTime
  birthDate: String
  weight?: Int
  sex: String
  user: User
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface NameSubscriptionPayload {
  mutation: MutationType
  node?: Name
  updatedFields?: String[]
  previousValues?: NamePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AggregateName {
  count: Int
}

export interface GuessSubscriptionPayload {
  mutation: MutationType
  node?: Guess
  updatedFields?: String[]
  previousValues?: GuessPreviousValues
}

export interface Post extends Node {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

export interface PostPreviousValues {
  id: ID_Output
  isPublished: Boolean
  title: String
  text: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NameConnection {
  pageInfo: PageInfo
  edges: NameEdge[]
  aggregate: AggregateName
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregatePost {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface GuessEdge {
  node: Guess
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number