import "reflect-metadata";
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import path from 'path'
import { UsersResolvers } from "./resolvers/UsersResolvers";

async function main() {

    const schema = await buildSchema({
        resolvers: [
            UsersResolvers
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema
    })

    const {url} = await server.listen()

    console.log(`Server running on ${url}`)
}

main()