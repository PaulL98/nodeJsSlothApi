const express = require('express');
const Joi = require('joi');
const seller =  require('./routes/seller');
const model =  require('./routes/model');
const sale =  require('./routes/sale');
const client =  require('./routes/client');
const expense =  require('./routes/expense');
const payment =  require('./routes/payment');
const stock =  require('./routes/stock');
const home = require('./routes/home');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();

let con = mysql.createConnection({
	host: "10.194.69.15",
	user: "A10",
	password: "6Z58pH0taK7RYXqV",
	database: "A10",
});

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
app.use('/',home);

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  });

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening to port ${port}`));