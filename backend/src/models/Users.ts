import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Users {

    @Field(_type => ID)
    id: String
    
    @Field()
    name: String
    
}