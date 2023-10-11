const Game = require('../models/Game');
const User = require('../models/User');
const Console = require('../models/Console');

const resolvers = {
    Query: {
        game: async (parent, args) => {
            return Game.findById(args.id);
        },
    },
    Mutation: {
        addGame: async (parent, args) => {
            let game = new Game(args);
            return game.save();
        },
    },
    Game: {
        console: async (game) => {
            return Console.findById(game.consoleId);
        }
    },
    User: {
        favoriteGames: async (user) => {
            return Game.find({ userId: user.id });
        }
    }
};

module.exports = resolvers;
