import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const SAVE_GAME = gql`
    mutation saveGame($_id: ID!, $name: String!, $console: GameConsole) {
        saveGame(_id: $_id, name: $name, console: $console) {
            _id
            name
            console
        }
    }
`;

export const REMOVE_GAME = gql`
    mutation removeGame($_id: ID!, $name: String!, $console: GameConsole) {
        saveGame(_id: $_id, name: $name, console: $console) {
            _id
            name
            console
        }
    }
`;