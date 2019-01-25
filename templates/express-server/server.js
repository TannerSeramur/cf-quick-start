'use strict';

const express = require('express');
const app = express;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>HomePage</h1>');
});

app.post('/save', (req, res)=> {
  res.json(req.body);
});

app.get('/err', (req, res, next)=>{
  next('you have a error');
});

app.use((err,req,res,next) => {
  res.status(500);
  res.statusMessage = 'server error';
  console.log(err, 'error here');
  res.render('error', {reqest: req, error: err});
});


app.listen(3000, () => console.log('port is running on 3000'));