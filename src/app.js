'use strict';

const express = require('express');

const app = express();
const router = express.Router();

app.use(
    express.json({
      limit: '5mb',
    })
  );
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  
  // Habilita o CORS
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

  module.exports = app;
