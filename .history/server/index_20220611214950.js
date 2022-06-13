const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.listen(port, console.log(`Server running on port ${port}`));
