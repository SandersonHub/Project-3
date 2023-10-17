import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CONSOLE } from '../utils/queries';

const PlayStation = () => {
  // querying the games specific to the "PS5" console
  const { loading, data, error } = useQuery(QUERY_CONSOLE, {
        variables: { consoleType: "PS5" },
    });

    // loading 
    if (loading) {
        return <h2>Loading games...</h2>;
    }

    // error handling
    if (error) {
        console.error("Error fetching PS5 games: ", error);
        return <h2>Error loading games.</h2>;
    }

    // extracting the games data from the query
    const games = data?.games.filter(game => game.console !== null) || [];
    console.log(data);
    // Rendering the list of games for the "PS5" console.
    return (
        <div>
            <h1>PlayStation Games</h1>
            {games.length ? (
                <div>
                    {games.map((game) => (
                        <div key={game._id}>
                            <h3>{game.name}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <h4>No games found for PlayStation</h4>
            )}
        </div>
    );
};

export default PlayStation;
