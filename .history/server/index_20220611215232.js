const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 5000;

const app = express();

//Mount a GraphQL server on '/graphql' endpoint
app.use('/graphql', graphqlHTTP({

}));

app.listen(port, console.log(`Server running on port ${port}`));
