import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { NewForm } from './components/NewForm';

type User = {
  id: String
  name: String
}

export const GET_USERS = gql`
  query {
    users {
      id
      name
    } 
  }
`

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS)
  const count = 1
  if(loading) {
    return <h1>Carregando....</h1>
  }

  return (
    <div>
       <ul>
          {
            data?.users.map((user: any) => <li key={user.id}>{user.name}</li>)
          }
       </ul>

       <NewForm />
    </div>
  );
}

export default App;
