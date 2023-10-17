import { gql } from '@apollo/client';

// log in a user
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//  add a game
export const ADD_GAME = gql`
  mutation addGame($userId: ID!, $name: String!, $console: ConsoleInput!) {
    addGame(userId: $userId, name: $name, console: $console) {
      _id
      name
      console {
        id
        name
      }
    }
  }
`;

// update a game
export const UPDATE_GAME = gql`
  mutation updateGame($id: ID!, $name: String, $console: ConsoleInput) {
    updateGame(id: $id, name: $name, console: $console) {
      _id
      name
      console {
        id
        name
      }
    }
  }
`;

// remove a game
export const REMOVE_GAME = gql`
  mutation removeGame($id: ID!) {
    removeGame(id: $id) 
  }
`;

