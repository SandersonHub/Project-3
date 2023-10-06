const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    favorites: [Game]
  }

  type Game {
    id: ID!
    title: String!
    platform: String!
  }
  type Query { 
    getUser(username: String!): User
    getGame(title: String!): Game
    getGamesByPlatform(platform: String!): [Game]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    addGame(title: String!, platform: String!): Game
    login(username: String!, password: String!): Auth
  }

  type Auth {
    token: String!
    user: User!
  }
`;

module.exports = typeDefs;
