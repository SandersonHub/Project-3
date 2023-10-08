const jwt = require('jsonwebtoken');
const { GraphQLObjectType, GraphQLString } = require('graphql');
const UserType = require('./types').UserType;  
const User = require('../models/User');

//defines new GraphQLObjectType
const Mutation = new GraphQLObjectType({
    name: 'Mutation', //name and fields that are required
    fields: {
        //signup mutation
        signup: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            //resolve function
            resolve(parent, args) {
                const { username, password } = args;
                const user = new User({ username, password });
                user.save();
                //creates token
                //with our secret key
                const token = jwt.sign({ id: user.id }, 'just_pass_games_secret_key', { expiresIn: '1d' });

                return { user, token };
            }
        },
    }
});

module.exports = Mutation;
