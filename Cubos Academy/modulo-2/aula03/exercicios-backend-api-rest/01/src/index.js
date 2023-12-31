const express = require('express');
const routes = require('./routes.js');
const autentication = require('./middlewares/middleware.js')

const app = express();

app.use(express.json());

app.use(autentication);

app.use(routes);

app.listen(3000);