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
    mutation saveGame($_id: ID!, $name: String!, $consoleType: String!) {
        saveGame(_id: $_id, name: $name, consoleType: $consoleType) {
            _id
            name
            consoleType
        }
    }
`;

export const REMOVE_GAME = gql`
    mutation removeGame($_id: ID!, $name: String!, $consoleType: String!) {
        removeGame(_id: $_id, name: $name, consoleType: $consoleType) {
            _id
            name
            consoleType
        }
    }
`;