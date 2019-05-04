const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/expense.html');
  });

router.get('/allExpense', function (req, res) {
	con.query('SELECT * FROM Expense', (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify(results));
	});
})

router.post('/addExpense', function (req, res) {
	var postData  = req.body;
	con.query('INSERT INTO Expense SET ?', postData , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
});

module.exports = router;