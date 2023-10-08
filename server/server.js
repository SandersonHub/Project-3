require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// mongo connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('made a connection to mongo');
  })
  .catch(error => {
    console.error('Error with mongo:', error.message);
  });

// authentication
app.use(authMiddleware);

// endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, 
}));

//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
