const express = require('express')
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/Home');
const session = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  //Life time 1 hour
  cookie: {maxAge: 60 * 1000 * 60},
  answers: []
}));
app.use(express.static(__dirname+'/client/dist'));

app.use('/', homeRoutes)

module.exports = app