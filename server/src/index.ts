import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'
const cors = require('cors');

const resolvers = {
  Query: {
    user(parent, { id }, context: Context, info) {
      return context.db.query.user({ where: { id: id } }, info)
    },
    users(parent, args, context: Context, info) {
      return context.db.query.users({}, info)
    },
    guesses(parent, args, context: Context, info) {
      return context.db.query.guesses({}, info)
    },
    names(parent, args, context: Context, info) {
      return context.db.query.names({}, info)
    }
  },
  Mutation: {
    createUser(parent, { name, email }, context: Context, info) {
      return context.db.mutation.createUser(
        { data: { name, email } },
        info,
      )
    },
    createGuess(parent, { userId, birthDate, weight, sex }, context: Context, info) {
      return context.db.mutation.createGuess({
        data: {
          birthDate,
          weight,
          sex,
          user: {
            connect: {
              id: userId,
            }
          }
        }
      }, info);
    },
    async createUserAndGuess(parent, { birthDate, weight, sex, name, email }, context: Context, info) {
      const createUser = await context.db.mutation.createUser(
        { data: { name, email } },
        info,
      )
      return context.db.mutation.createGuess({
        data: {
          birthDate,
          weight,
          sex,
          user: {
            connect: {
              id: createUser.id,
            }
          }
        }
      }, info);
    },
    createName(parent, { name }, context: Context, info) {
      return context.db.mutation.createName({
        data: { name }
      },
        info,
      )
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://baby-database.herokuapp.com/server/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})
server.use(cors());
server.start({ port: 4000 }, () => console.log('Server is running on http://localhost:4000', process.env.NODE_ENV))
