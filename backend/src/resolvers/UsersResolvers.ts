import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Users } from "../models/Users";
import crypto from 'crypto'

@Resolver()
export class UsersResolvers {

    private data: Users[] = []

    @Query(() => [Users])
    async users() {
        return this.data
    }

    @Mutation(() => Users)
    async createUser(
        @Arg('name') name: String
    ) {
        const user =  { 
            id: crypto.randomUUID() ,
            name
        }

        this.data.push(user)

        return user
    }
}