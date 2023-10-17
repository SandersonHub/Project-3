import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CONSOLE } from '../utils/queries';

const Switch = () => {
  // querying the games specific to the "Switch" console
  const { loading, data } = useQuery(QUERY_CONSOLE, {
    variables: { consoleType: "Switch" }
  });

  // loading
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // extracting the games data from the query response
  const games = data?.games.filter(game => game.console !== null) || [];

  return (
    <div>
      <h1>Nintendo Switch Games</h1>
      {games.length ? (
        <div>
          {games.map((game) => (
            <div key={game._id}>
              <h3>{game.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <h4>No games available for this console</h4>
      )}
    </div>
  );
};

export default Switch;
