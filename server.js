var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');

// Routes
require('./server/config/routes.js')(app);

app.listen(8000);