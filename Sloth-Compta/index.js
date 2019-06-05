const express = require('express');
const Joi = require('joi');
const seller =  require('./routes/seller').router;
const model =  require('./routes/model').router;
const sale =  require('./routes/sale').router;
const client =  require('./routes/client').router;
const expense =  require('./routes/expense').router;
const payment =  require('./routes/payment').router;
const stock =  require('./routes/stock').router;
const home = require('./routes/home');
const compta  = require('./routes/compta').router;
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();
const con =  require('./routes/connection.js');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    credentials: true };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static('public'));
app.use('/api/seller',seller);
app.use('/api/model',model);
app.use('/api/sale',sale);
app.use('/api/client',client);
app.use('/api/expense',expense);
app.use('/api/payment',payment);
app.use('/api/stock',stock);
app.use('/api/compta',compta);
//app.use('/',home);

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

const port = 3001;
app.listen(port,()=> console.log(`listening to port ${port}`));