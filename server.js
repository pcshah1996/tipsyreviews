var port        = process.env.PORT || 80;
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var helmet      = require('helmet');
var favicon     = require('serve-favicon');
var morgan      = require('morgan');


// safety for user inputs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use(favicon(__dirname + '/utilities/logo.ico'));

// for rotating logs
app.use(morgan('common'));

app.use('/og', express.static(__dirname + '/static'));

// start app
app.listen(port);
console.log('There will be dragons on the port numbered ' + port);
