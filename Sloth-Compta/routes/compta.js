const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
  res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/compta.html');
});

module.exports.getSellerCompta = function(){
	return new Promise((resolve, reject)=>{
		con.query('Select Seller.Id, Seller.Name, Seller.LastName, (SELECT SUM(Payment.Sum) From Payment Where Seller.Id = Payment.IdSeller) as SumPayment, (SELECT SUM(Expense.Sum) From Expense Where Seller.Id = Expense.IdSeller) as SumExpense, (SELECT SUM(Sale.Quantity * Sale.Price) From Sale Where Sale.IdSeller = Seller.Id) as SumSale From Seller', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

module.exports.getCompta = function(){
	return new Promise((resolve, reject)=>{
		con.query('Select (Select Sum(Sale.Quantity * Sale.Price) From Sale) as SaleIncome , (Select Sum(Payment.Sum) From Payment) as Payment, (Select Sum(Model.TotalPrice) From Model) as MarchandisePrice, (Select Sum(Expense.Sum) From Expense) as Expense', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

module.exports.getModelCompta = function(){
	return new Promise((resolve, reject)=>{
		con.query('Select Model.Id, Model.Name, COALESCE((Select Sum(Sale.Quantity * Sale.Price)From Sale, Stock WHERE Sale.IdStock = Stock.Id && Stock.IdModel = Model.Id), 0) as Income From Model', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

router.get('/sellerCompta', function (req, res) {
	module.exports.getSellerCompta() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

router.get('/compta', function (req, res) {
	module.exports.getCompta() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

router.get('/modelCompta', function (req, res) {
	module.exports.getModelCompta() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

module.exports.router = router;