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
    const games = data?.games || [];
    console.log(data);
    // Rendering the list of games for the "PS5" console.
    return (
        <>
    <div className="card-deck bg-white card-rounded w-100">
      <h1>Nintendo Switch Games</h1>
      {games.length ? (
          games.map((game) => 
            // <div className="card-body m-5">
                <div className="d-flex row m-3">
                    {/* <div className="col-sm-4 mb-3 mb-sm-0"> */}
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {game.name}
                                </h5>
                                <img src={`${game?.image}`} className='w-100' />
                                    <button className="btn btn-primary">Save Game</button>                               
                            </div>
                        {/* </div> */}
                    </div>
                    </div>
                    // </div>
                    )
      ) : (
        <h4>No games available for this console</h4>
      )}
    </div>
    </>
  );
};

export default PlayStation;
