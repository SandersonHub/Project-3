const jwt = require('jsonwebtoken');
const JWT_SECRET = 'just_pass_games'; 

// function for our authenticated routes
const authMiddleware = (context) => {
  let token = context.req.headers.authorization || '';

  // Check if token exists
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from token string
    token = token.slice(7, token.length);
  }

  //checks if token exists
  if (!token) {
    return context;
  }

  // verifies token and adds user data to the request
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    context.user = decodedToken;
  } catch (err) {
    console.log('check token');
  }

  return context;
};

// export middleware 
module.exports = {
  authMiddleware,
};