const jwt = require('jsonwebtoken');

//authMiddleware function
function authMiddleware(req, res, next) {
    //checks token in header
    const token = req.headers.authorization;
    //checks if it even exists
    if (token) {
        try {
            const user = jwt.verify(token, 'just_pass_games_secret_key');
            req.user = user;
            //error checking
        } catch (err) {
            console.log('token didnt work try again', err);
        }
    }
    next();
}

module.exports = authMiddleware;
