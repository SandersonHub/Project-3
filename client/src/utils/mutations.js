import { gql } from '@apollo/client';

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