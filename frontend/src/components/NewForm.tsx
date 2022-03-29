import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USERS } from "../App";

const CREATE_USER = gql`
    mutation($name: String!) {
        createUser(name: $name) {
            name
        }
    }
`

export function NewForm() {

    const [ name , setName] = useState('')
    const [createUser, { data }] = useMutation(CREATE_USER)

    async function handleCreateUser(props: FormEvent) {
        props.preventDefault()

        if(!name) {
            return
        }

        await createUser({
            variables: {
                name,
            },
            refetchQueries: [GET_USERS]
        })
    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    )

}