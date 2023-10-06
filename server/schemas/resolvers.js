const { User, Game } = require('./models');
//imports the models

//getUser, fetches by username and populates favorites
const resolvers = {
  Query: {
    getUser: async (_, { username }) => {
      return await User.findOne({ username }).populate('favorites');
    },
    
//getGame, fetches by title    
    getGame: async (_, { title }) => {
      return await Game.findOne({ title });
    },

//getGamesByPlatform, fetches by platform    
    getGamesByPlatform: async (_, { platform }) => {
      return await Game.find({ platform });
    }
  },
  
  // addUser, returns auth type 
  Mutation: {
    addUser: async (_, { username, password }) => {
      const user = new User({ username, password });
      return await user.save();
    },

//addGame, returns game type    
    addGame: async (_, { title, platform }) => {
      const game = new Game({ title, platform });
      return await game.save();
    },

//login, returns auth type    
    updateUser: async (_, { username, password }) => {
      return await User.findOneAndUpdate({ username }, { password }, { new: true });
    },

//updateGame, returns game type    
    updateGame: async (_, { title, platform }) => {
      return await Game.findOneAndUpdate({ title }, { platform }, { new: true });
    },

//deleteUser, returns boolean    
    deleteUser: async (_, { username }) => {
      const result = await User.deleteOne({ username });
      return result.deletedCount > 0;
    },

//deleteGame, returns boolean    
    deleteGame: async (_, { title }) => {
      const result = await Game.deleteOne({ title });
      return result.deletedCount > 0;
    },

    addFavoriteToUser: async (_, { username, gameId }) => {
      const game = await Game.findById(gameId);
      
      if (!game) {
        throw new Error('no game found');
      }
      
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: gameId } },
        { new: true }
      ).populate('favorites');

      if (!user) {
        throw new Error('no user found for this username');
      }

      return user;
    }
  }
};

module.exports = resolvers;
