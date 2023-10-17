const { User, Game, Console } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// resolvers
const resolvers = {
  // queries
  Query: {
    users: async () => {
      return User.find();
    },
    // retrieve single game by ID
    game: async (parent, { id }) => {
      return Game.findById(id);
    },

    // retrieve all games
    games: async (parent, args, context) => {
      return Game.find().populate("console");
    },
    console: async (parent, args) => {
      console.log(args);
      return await Game.find({ console: args.consoleType }).populate("console");
    },
  },

  // mutations for adding, updating, and deleting games
  Mutation: {
    // Add a game
    addGame: async (parent, { name, consoleId }) => {
      const game = await Game.create({ name, consoleId });
      return game;
    },

    // update a game
    updateGame: async (parent, { id, name, consoleId }) => {
      const game = await Game.findByIdAndUpdate(
        id,
        { name, consoleId },
        { new: true }
      );
      return game;
    },

    // Delete a game
    deleteGame: async (parent, { id }) => {
      const game = await Game.findByIdAndRemove(id);
      return game ? game._id : null;
    },

    // Create a user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // Login a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('try again');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

// Exporting the resolvers
module.exports = resolvers;
