const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'just-pass-games'; 
//this will set the time for the token to expire
const expiration = '2h';

module.exports = {
  signToken: function ({ _id }) {
    const payload = { id: _id };
    //creates jwt token with the payload and secret
    //expiration is set to 2 hours
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
