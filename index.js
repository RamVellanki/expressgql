var express = require('express');
var {buildSchema} = require('graphql');
var graphqlHTTP = require('express-graphql');

//Schemas
var employee = require('./src/employee');
var student = require('./src/student');

//Resolvers
var empResolver = require('./src/empresolver');
var studentResolver = require('./src/studentresolver');

//Setup Express APP
var app = express();

app.use('/employee/graphql', graphqlHTTP({
  schema: buildSchema(employee),
  rootValue: empResolver,
  graphiql: true
}))

app.use('/student/graphql', graphqlHTTP({
  schema: buildSchema(student),
  rootValue: studentResolver,
  graphiql: true
}))

app.listen('3001', () => console.log('App listening at 3001'));