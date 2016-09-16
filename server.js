var port        = process.env.PORT || 80;
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var helmet      = require('helmet');
var favicon     = require('serve-favicon');
var morgan      = require('morgan');
var mysql      = require('mysql');

// TODO: Create MySQL and actually correctly link it. Use db schema
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});


// safety for user inputs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use(favicon(__dirname + '/utilities/logo.ico'));

// for rotating logs and rendering
app.use(morgan('common'));
app.set('view engine', 'pug');

app.use('/og', express.static(__dirname + '/static/og.html'));

app.get('/', function (req, res) {
    // TODO: add variable that we can iterate through to create views
    // TODO: constant search updates so the list shrinks when typing searches
  res.render('index', { title: 'Tipsy Reviews', message: 'Penis there!'});
});

// For reviews
app.get('/submit', function (req, res) {
  res.render('submission', { });
});

app.post('/submit', function (req, res) {
  console.log(req.body.name);
  console.log(req.body.reviewText);
  // TODO: make this redirect to root with upcated pug variables
  res.render('index', { title: 'Reviewed!!', message: 'So proud you were able to click submit. \n Your query was logged to console'});
});

// start app
app.listen(port);
console.log('There will be dragons on the port numbered ' + port);
