const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Console {
    _id: ID!
    name: String!
  }

  type Game {
    _id: ID!
    name: String!
    console: Console
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String! 
    password: String!     
    favoriteGames: [Game]
  }

  input ConsoleInput {
    _id: ID!
    name: String
  }

  type Query {
    game(_id: ID!): Game
    games: [Game]
    userFavorites(userId: ID!): [Game]   
    users: [User]
    console(consoleType: String!): [Game]
  }

  type Mutation {
    addGame(name: String!, console: ConsoleInput): Game
    updateGame(_id: ID!, name: String, console: ConsoleInput): Game
    deleteGame(_id: ID!): ID
    addFavorite(userId: ID!, gameId: ID!): User
    removeFavorite(userId: ID!, gameId: ID!): User
    addUser(username: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!): Auth                       
  }
`;

module.exports = typeDefs;
