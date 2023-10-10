const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum ConsoleType {
    Xbox
    PS5
    Switch
  }

  type Game {
    id: ID!
    name: String!
    consoleType: ConsoleType!
  }

  type User {
    id: ID!
    username: String!
    favoriteGames: [Game]
  }

  type Query {
    games(consoleType: ConsoleType!): [Game]
    userFavorites(userId: ID!): [Game]
  }

  type Mutation {
    addGame(name: String!, consoleType: ConsoleType!): Game
    updateGame(id: ID!, name: String, consoleType: ConsoleType): Game
    deleteGame(id: ID!): ID
    addFavorite(userId: ID!, gameId: ID!): User
    removeFavorite(userId: ID!, gameId: ID!): User
  }
`;

module.exports = typeDefs;