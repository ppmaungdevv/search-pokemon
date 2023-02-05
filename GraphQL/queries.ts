import { gql } from 'graphql-request'

export const getPokeCardQuery = (keyword = 'Blastoise') => {
  return gql`
        query{
          cards(filters: {name: "${keyword}"}, pagination:{page: 1, count: 10}) {
            id
            name
            rarity
            image
            attacks {
              damage
              effect
            }
            evolveFrom
          }
        }
      `
}

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