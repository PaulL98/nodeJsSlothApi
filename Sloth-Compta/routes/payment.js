const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/payment.html');
  });

router.post('/addPayment', function (req, res) {
	var postData  = req.body;
	con.query('INSERT INTO Payment SET ?', postData , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
});

router.get('/allPayment', function (req, res) {
	con.query('SELECT Seller.LastName, Payment.* FROM Payment, Seller Where Seller.Id = Payment.IdSeller', (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify(results));
	});
})

module.exports = router;