const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

// error handler
app.use((err, req, res, next) => {
    next(err);
});

module.exports = app;