const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
require('dotenv').config();

const path = require('path');

//Initializations
const app = express();



//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + '/views/'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Global Variables

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Routes 
app.use(require('./routes/index.routes'));

module.exports = app;

