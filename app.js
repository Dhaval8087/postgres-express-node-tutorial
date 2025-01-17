const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const routes = require('./server/routes');
app.use('/api', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
