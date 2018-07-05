import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma'
import { Context } from './utils'

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
  },
  Mutation: {
    // createDraft(parent, { title, text }, context: Context, info) {
    //   return context.db.mutation.createPost(
    //     { data: { title, text } },
    //     info,
    //   )
    // },
    // deletePost(parent, { id }, context: Context, info) {
    //   return context.db.mutation.deletePost({ where: { id } }, info)
    // },
    // publish(parent, { id }, context: Context, info) {
    //   return context.db.mutation.updatePost(
    //     {
    //       where: { id },
    //       data: { isPublished: true },
    //     },
    //     info,
    //   )
    // },
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
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://eu1.prisma.sh/public-dandypegasus-221/server/dev', // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})
server.start({ port: 4000 }, () => console.log('Server is running on http://localhost:4000'))
