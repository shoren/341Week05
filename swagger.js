const swaggerAutogen = require('swagger-autogen')();
// const appConfig = require("./config/app");

const doc = {
  info: {
    title: 'API for Week05',
    description: 'Week05 API',
  },
  host: 'localhost:8081',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);