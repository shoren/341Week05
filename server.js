const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const charactersRoute = require("./routes/characters");


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 8081;
const app = express();

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  // .use('/', require('./routes'));
  .use("/characters", charactersRoute);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});