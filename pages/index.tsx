import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Pokemon } from '@/types/type'
// import { gql, GraphQLClient, request } from 'graphql-request'
import graphQLClient from '../GraphQL/graphQLClient'
import { query, variables, spxquery } from '../GraphQL/queries'
import axios from 'axios'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import { SearchBar } from '@/components/SearchBar'
import { Result } from '@/components/Result'
import React from 'react'
import { User } from '@/types/usertype'



// export const getStaticProps: GetStaticProps = async () => {
  
//   try {
//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
//     const client = new ApolloClient({
//       uri: "https://spacex-production.up.railway.app/",
//       cache: new InMemoryCache(),
//     })
//     const { data } = await client.query({
//       query: gql`
//       query ExampleQuery {
//         company {
//           ceo
//         }
//         roadster {
//           apoapsis_au
//         }
//       }
//       `
//     })
//     console.log(data)
//     return {
//       props: {
  
//       }
//     }
//     // const data = await graphQLClient.request(query, variables)
    
//   } catch (error) {
//     console.log(error)
//     throw error;
    
//     // return {
//     //   props: {
  
//     //   }
//     // }
//   }

//   // return {
//   //   props: {

//   //   }
//   // }
// }



// export const getStaticProps: GetStaticProps = async () => {
//   const endpoint = process.env.END_POINT as string
//   console.log(typeof endpoint)
//   // const endpoint = "https://graphql-pokemon2.vercel.app/"
//   const graphQLClient = new GraphQLClient(endpoint,{
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   // graphQLClient.setEndpoint(endpoint)
//   // graphQLClient.setHeader('Content-Type', 'application/graphql')
//   // console.log(graphQLClient)
//   const query1 = gql`query pokemons($first: Int!){ pokemons(first: $first){ id number name } }`
//   const query = gql`{
//     pokemons(limit: $limit, offset: $offset) {
//       count
//       next
//       previous
//       nextOffset
//       prevOffset
//       status
//       message
//       results {
//         url
//         name
//         image
//       }
//     }
//   }`

//   const variables1 = {
//     "first": 1
//   }

//   const variables = {
//     limit: 1,
//     offset: 1
//   }

//   console.log(query)
  
//   try {
//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

//     // const dt = await request(endpoint, query, variables)
//     // console.log('sfag', dt)

//     // const reqBody = {
//     //   query: `query pokemons($first: Int!){ pokemons(first: $first){ id number name } }`,
//     //   variables1: variables1
//     // }

//     // const options = {
//     //   method: 'POST',
//     //   url: endpoint,
//     //   data: reqBody
//     // }

//     // const d = await axios(options)
//     // console.log(d)

//     const data = await graphQLClient.request(query1, variables1)
//     console.log(data)
    
//   } catch (error) {
//     // console.log(error)
//     throw error
//   }



//   return {
//     props: {

//     }
//   }
// }

type HomeProp = {
  users: User[]
}

export const getStaticProps: GetStaticProps<{users: User[]}> = async() => {

  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users') // ?city=Bartholomebury
  // console.log(data.length)
  const {data: pokemon} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
  console.log(pokemon.results[0])
  return {
    props: {
      users: data
    }
  }
}

const Home: NextPage<HomeProp> = ({users}) => {

  const [keyword, setKeyword] = React.useState('')
  const [dataList, setDataList] = React.useState<User[]>(users)

  const searchWithBtn = async (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users?userName=' + value) // ?city=Bartholomebury
      setDataList(data)
      console.log('value', data.length)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar
        value={keyword}
        handleChange={(event) => setKeyword(event.target.value)}
        handleSearch={((event) => searchWithBtn(event, keyword))} />
      <Result dataList={dataList} />
    </>
  )
}

export default Home