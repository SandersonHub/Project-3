const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Console {
    id: ID!
    name: String!
  }

  type Game {
    id: ID!
    name: String!
    console: Console!
  }

  type User {
    id: ID!
    username: String!
    favoriteGames: [Game]
  }

  input ConsoleInput {
    id: ID!
    name: String
  }

  type Query {
    game(id: ID!): Game
    games(console: ConsoleInput): [Game]
    userFavorites(userId: ID!): [Game]
  }

  type Mutation {
    addGame(name: String!, console: ConsoleInput): Game
    updateGame(id: ID!, name: String, console: ConsoleInput): Game
    deleteGame(id: ID!): ID
    addFavorite(userId: ID!, gameId: ID!): User
    removeFavorite(userId: ID!, gameId: ID!): User
  }
`;

module.exports = typeDefs;