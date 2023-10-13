import { gql } from '@apollo/client';

// Query to fetch games based on a specific console type
export const QUERY_CONSOLE = gql`
    query consoles($consoleType: String!) {
        games(consoleType: $consoleType) {
            _id
            name
            consoleType
        }
    }
`;

// Query to fetch a specific game based on its unique ID
export const QUERY_GAME = gql`
    query {
        game(id: ID!) {
            _id
            name
            console {
                _id
                consoleType
            }
        }
    }
`;

// Query to fetch a specific user's information and their saved games based on their ID
export const QUERY_USER = gql`
    query getUser($id: ID!) {
        user(id: $id) {
            _id
            username
            email
            savedGames {
                _id
                name
                console {
                    _id
                    consoleType
                }
            }
        }
    }
`;