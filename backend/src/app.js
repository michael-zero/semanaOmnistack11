const express = require('express'); //passando as funcionalidades do express para a variavel express.
const cors = require('cors');

const {errors } = require('celebrate');

const routes = require('./routes');
const app = express();//construindo a aplicação p/ criar rotas. . 


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
