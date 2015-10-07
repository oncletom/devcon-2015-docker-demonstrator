'use strict';

let http = require('http');
let server = http.createServer();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

server.on('request', (request, response) => {
  const message = process.env.MOTD || 'N/A';

  response.end(`[${HOSTNAME}]: ${message}`);
});

server.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
