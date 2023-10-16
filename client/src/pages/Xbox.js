import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CONSOLE } from '../utils/queries';

const Xbox = () => {
    // uses QUERY_CONSOLE to fetch games specifically for the "Xbox Series X"
    const { loading, data, error } = useQuery(QUERY_CONSOLE, {
        variables: { consoleType: "Xbox Series X" },
    });

    // loading
    if (loading) {
        return <h2>Loading games...</h2>;
    }

    // error handling
    if (error) {
        console.error("Error fetching Xbox games: ", error);
        return <h2>Error loading games.</h2>;
    }

    // extracting the games data from the query response.
    const games = data?.games || [];

    // renders the list of games for the "Xbox Series X"
    return (
        <div>
            <h1>Xbox Games</h1>
            {games.length ? (
                <div>
                    {games.map((game) => (
                        <div key={game._id}>
                            <h3>{game.name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <h4>No games found for Xbox</h4>
            )}
        </div>
    );
};

export default Xbox;
