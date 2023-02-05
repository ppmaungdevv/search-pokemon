import { gql } from 'graphql-request'

export const query = gql`
query {
    pokemons($first: first){
      id
      number
      
    }
  }
`
export const variables = {
      "first": 1
    }

export const spxquery = gql`
    query ExampleQuery {
        company {
            ceo
        }
        roadster {
            apoapsis_au
        }
    }
`