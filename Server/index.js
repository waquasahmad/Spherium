/**
 * Required External Modules
 */

'use strict'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import api from './api';

const app = express();
const http = require('http');
// Access-Control-Allow-Origin
app.use(cors());

// After your routes add a standard express error handler. This will be passed the Joi
// error, plus an extra "type" field so we can tell what type of validation failed
/*********** All Routes ********************/
// parse application/json
app.use( bodyParser.json());
app.use('/api', api);
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
      // we had a joi error, let's return a custom 400 json response
      res.status(400).json(failAction(err.error.message.toString().replace(/\""]+/g, '')));
  } else {
      // pass on to another error handler
      next(err);
  }
});
// Run static setup
app.use(express.static(__dirname + '/build'));
app.get('/*', function (req, res) {
  return res.sendFile(path.join(__dirname + '/build', 'index.html'));
});

// create server connection
const server = http.createServer(app);
const port = process.env.PORT || 3001

// Start the app by listening on the default Heroku port
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



