const swaggerAutogen = require('swagger-autogen')();
const appConfig = require("./config/app");

const doc = {
  info: {
    title: 'My API',
    description: 'Week05 API',
  },
  host: 'appConfig.host',
  schemes: [appConfig.protocol],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);