const express = require('express');
const logger = require('morgan');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //mongoose to access mongodb database
const sass = require('node-sass-middleware');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));

app.use(sass({
  src: path.resolve(__dirname, 'sass'), //css & scss : same name !!
  dest: path.resolve(__dirname, 'public', 'stylesheets'),
  prefix: '/stylesheets'
}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(routes);

mongoose.connect('mongodb://localhost/todolist', {
  useMongoClient: true
}, () => console.log('Connected to database'));

app.listen(3000, () => console.log('Server listening on port 3000'));
