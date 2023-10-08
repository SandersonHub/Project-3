const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLID, 
    GraphQLNonNull 
} = require('graphql');

const mongoose = require('mongoose');

// Import mongoose models
const Game = require('../models/Game');
const User = require('../models/User');
const GameConsole = require('../models/GameConsole');  

// defines console type
const ConsoleType = new GraphQLObjectType({
    name: 'GameConsole',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
});

// defines game type
const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        //game fields
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        //game console field
        console: {
            type: ConsoleType,
            //resolve function
            resolve(parent, args) 
            //returns console
            {
                return GameConsole.findById(parent.consoleId);
            }
        }
    })
});

// defines user type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        favoriteGames: {
            type: new GraphQLList(GameType),
            resolve(parent, args) {
                return Game.find({ userId: parent.id });
            }
        }
    })
});

// Define the Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        game: {
            type: GameType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Game.findById(args.id);
            }
        },
    }
});

// Define mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGame: {
            type: GameType,
            args: {
                name: { type: GraphQLString },
                consoleId: { type: GraphQLID }
           
            },
            resolve(parent, args) {
                let game = new Game({
                    name: args.name,
                    consoleId: args.consoleId
                });
                return game.save();
            }
        },
    }
});


//export schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
