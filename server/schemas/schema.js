const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID!
    name: String!
    console: Console
  }

  type Console {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    favoriteGames: [Game]
  }

  type Query {
    game(id: ID!): Game
    games: [Game]
    Consoles: [Console]
    users: [User]
  }
`;

module.exports = typeDefs;
