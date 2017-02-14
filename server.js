const express = require('express');
const handlebars = require('express-handlebars');
//See doc at : https://www.npmjs.com/package/handlebars-helpers
const defaultHelpers = require('handlebars-helpers')();
const path = require('path');

// routes
let app = express();

//Map to public folder
app.use(express.static(path.join(__dirname, 'public')));

//Init handlebars engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: defaultHelpers
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

let indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

//404 case
app.use((req, res, next)=>{
  let err = Error('Not found');
  err.status = 404;
  next(err);
});

let appPort = 3000;
app.listen(appPort);
console.log(`Serveur ouvert sur le port : ${appPort}`);
