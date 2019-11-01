const express = require('express'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 
const server = express();

const userRouter = require('./users/userRouter.js'); 
server.use(express.json()); 
server.use(helmet());
server.use(morgan('dev'));



/*

    logger logs to the console the following information about each request: request method, request url, and a timestamp
    this middleware runs on every request made to the API

*/

const logger = (req, res, next) => {

  console.log(`REQUEST: ${req.method} ${req.path} DATE: ${Date.now()} Time: `)
  next();
};



/*
    validateUserId validates the user id on every request that expects a user id parameter
    if the id parameter is valid, store that user object as req.user
    if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" }
*/

const validateUserId = () => {

}


/*

    validateUser validates the body on a request to create a new user
    if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
    if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }

*/

const validateUser = () => {

}


/*
    validatePost validates the body on a request to create a new post
    if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
    if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }

*/
const validatePost = () => {

}

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
