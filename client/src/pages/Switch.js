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

  console.log(games)

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

export default Switch;
