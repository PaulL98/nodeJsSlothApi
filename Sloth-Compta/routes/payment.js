const express = require('express');
const router = express.Router();
const mysql = require('mysql');

let con = mysql.createConnection({
	host: "10.194.69.15",
	user: "A10",
	password: "6Z58pH0taK7RYXqV",
	database: "A10",
});

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Desktop/Sloth-Compta/html/payment.html');
  });

router.post('/addPayment', function (req, res) {
	var postData  = req.body;
	con.query('INSERT INTO Payment SET ?', postData , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
});

router.get('/allPayment', function (req, res) {
	con.query('SELECT * FROM Payment', (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify(results));
	});
})

module.exports = router;