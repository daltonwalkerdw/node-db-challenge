const express = require('express');

const projectRouter = require('./projects/projectRouter');

const server = express();
const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use('/api/projects', projectRouter);




server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); 

module.exports = server;