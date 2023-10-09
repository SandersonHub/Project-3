const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID!
    name: String!
    console: GameConsole
  }

  type GameConsole {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    favoriteGames: [Game]
  }

  type Query {
    games: [Game]
    gameConsoles: [GameConsole]
    users: [User]
  }
`;

module.exports = typeDefs;
