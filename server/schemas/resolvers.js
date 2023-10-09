const Game = require('./models/Game');
const User = require('./models/User');
const Console = require('./models/Console');

const resolvers = {
    Query: {
        game: (parent, args) => {
            return Game.findById(args.id);
        },
    },
    Mutation: {
        addGame: (parent, args) => {
            let game = new Game({
            });
            return game.save();
        },
    },
    Game: {
        console: (game) => {
            return Console.findById(game.consoleId);
        }
    },
    User: {
        favoriteGames: (user) => {
            return Game.find({ userId: user.id });
        }
    }
};

module.exports = resolvers;
