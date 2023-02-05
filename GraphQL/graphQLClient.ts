import { GraphQLClient } from 'graphql-request'

// const endpoint = process.env.END_POINT as string
const endpoint = "https://spacex-production.up.railway.app/"

const graphQLClient = new GraphQLClient(endpoint)

export default graphQLClient