const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('views/', {data:'Datos'});
});
app.post('/', (req, res) => {
  res.render('views/main', {name: req.body.name});
});

app.listen(3000, () => console.log('Listening on port 3000!'));