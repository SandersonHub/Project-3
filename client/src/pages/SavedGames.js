//import react
import React from 'react';
//import useQuery hook from @apollo/client
import { useQuery } from '@apollo/client';
//import QUERY_ME from utils/queries
import { QUERY_USER } from '../utils/queries';
//import Auth from utils/auth
import Auth from '../utils/auth';

//create SavedGames functional component
const SavedGames = () => {
    //use useQuery to make a request
    const { loading, data } = useQuery(QUERY_USER);
    //create userData variable and set it to data.me
    // "?" checks if the object is null or undefined if not it attempts to access data.me
    const userData = data?.me || {};
    console.log(userData);
    //if user is not logged in return return below what is in <h4>
    if (!Auth.loggedIn()) {
        return (
        <h4>
            You need to be logged in to see this page. Look towards the navigation bar on the top to login or sign up!
        </h4>
        );
    }
    //if loading return loading
    //monitors the loading state of the query
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        //<> this will allow the user to group several elements without adding extra nodes to the DOM
        <>
        <h2>
            {userData.savedGames.length //if userData.savedGames.length is greater than 0 return what is shown below
            ? `Viewing ${userData.savedGames.length} saved ${userData.savedGames.length === 1 ? 'game' : 'games'}:` //if userData.savedGames.length is equal to 1 return 'game' else return 'games' 
            : 'You have no saved games!'}
        </h2>
        {userData.savedGames.map((game) => { //map over the savedGames array and return what is shown below 
            return (
            <div key={game.gameId} className='card mb-3'>
                <p className='card-header'>
                {game.gameId} || {game.title}
                </p>
                <div className='card-body'>
                <p>{game.description}</p>
                <a href={game.link} target='_blank' rel='noopener noreferrer'>
                    Go to this game!
                </a>
                </div>
            </div>
            );
        })}
        </>
    );
};

export default SavedGames;