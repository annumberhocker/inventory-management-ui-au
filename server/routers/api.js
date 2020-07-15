const express = require('express');
const proxy = require("express-http-proxy");

const apiHost = process.env.API_HOST || 'localhost:3002';

module.exports = function(app){
  app.use('/api', proxy(apiHost));
};
