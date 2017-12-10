'use strict';

const server = require(`./lib/server`);
const winston = require(`winston`);

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({ filename: 'log.json' }),
  ],
});

require(`dotenv`).config();

server.start(process.env.PORT, () => {
  console.log(`The server is running on port: ${process.env.PORT}`);
  logger.log(`info`, `The server is running on port: ${process.env.PORT}`);
});
