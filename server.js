const express = require('express');

const HubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use('/api/hubs', HubsRouter);
// meaning whenever clients call /api/hubs then, look up HubsRouter

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});


// this is an object (module.exports) like export for FE
module.exports = server;