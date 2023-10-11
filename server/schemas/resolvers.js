const Game = require('../models/Game');
const User = require('../models/User');
const Console = require('../models/Console');

const resolvers = {
    Query: {
        game: async (parent, args) => {
            return await Game.findById(args.id);
        },
    },
    Mutation: {
        addGame: async (parent, args) => {
            let game = new Game(args);
            return await game.save();
        },
    },
    Game: {
        console: async (game) => {
            return await Console.findById(game.consoleId);
        }
    },
    User: {
        favoriteGames: async (user) => {
            return await Game.find({ userId: user.id });
        }
    }
};

module.exports = resolvers;
