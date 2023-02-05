import { GraphQLClient } from 'graphql-request'

const endpoint = "https://api.tcgdex.net/v2/graphql"

const graphQLClient = new GraphQLClient(endpoint)

export default graphQLClient