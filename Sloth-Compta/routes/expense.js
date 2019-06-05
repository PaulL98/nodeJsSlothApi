const express =
 require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/expense.html');
  });

router.get('/allExpense', function (req, res) {
	module.exports.getAllExpense() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
})

router.post('/addExpense', function (req, res) {
	var postData  = req.body;
	con.query('INSERT INTO Expense SET ?', postData , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
});

module.exports.getAllExpense = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT Seller.LastName, Expense.* FROM Expense, Seller Where Seller.Id = Expense.IdSeller', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

module.exports.router = router;