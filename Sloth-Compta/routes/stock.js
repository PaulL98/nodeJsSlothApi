const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
  res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/stock.html');
});

router.get('/allStock', function (req, res) {
	module.exports.getAllStock() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
})

module.exports.getAllStock = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT Seller.LastName, Seller.Name, Stock.Size, Stock.Quantity, Model.Name FROM Seller, Stock, Model Where Stock.IdSeller = Seller.id && Stock.IdModel = Model.id ORDER BY Seller.LastName , Model.id , Stock.Size DESC', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

router.get('/allCurrentStock', function (req, res) {
	module.exports.getAllCurrentStock() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
})

module.exports.getAllCurrentStock = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT Seller.LastName, Seller.Name, Stock.Size, COALESCE(Stock.Quantity - (SELECT SUM(Sale.Quantity) From Sale WHERE Seller.id = Sale.IdSeller && Sale.IdStock = Stock.Id ), Stock.Quantity) as Quantity , Model.Name FROM Seller, Stock, Model Where Stock.IdSeller = Seller.id && Stock.IdModel = Model.id ORDER BY Seller.LastName , Model.id , Stock.Size DESC', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}

router.get('/stockFromSeller', function (req, res) {
	con.query('SELECT Stock.*, Model.Name FROM Stock, Model WHERE idSeller=? && Model.Id = Stock.IdModel', [req.query.idSeller], function (error, results, fields) {
	 if (error) throw error;
	   res.send(results);
	 });
 });

router.get('/StockFromSellerOfModel', function (req, res) {
	con.query('SELECT * FROM Stock WHERE idSeller=? && idModel=?', [req.query.idSeller,req.query.idModel], function (error, results, fields) {
	 if (error) throw error;
	   res.send(results);
	 });
});

router.post('/addStock', function (req, res) {
	console.log('stock to add',req.body);
	var postData  = req.body;
	newStock(postData).then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
 });

function newStock(postData){
	console.log('Data posted', postData);
	console.log('Data posted', postData.size);
	console.log('Data posted', postData.idModel);
	console.log('Data posted', postData.idSeller);
	return getStock(postData.size, postData.idModel, postData.idSeller)
	.then(result => updateStock(postData,result))
	.catch(err => console.log('Error', err.message));
}

function updateStock(postData,res){
	console.log('GS Result', res);
	return new Promise((resolve, reject)=>{
		if (!res.length){
			con.query('INSERT INTO Stock SET ?', postData, function (error, results, fields) {
				if (error) throw error;
				resolve(results);
			});
		}else{
			console.log('new Quantity',parseInt(res[0].Quantity) + parseInt(postData.quantity));
			con.query('UPDATE Stock SET Quantity=? WHERE IdSeller = ? && IdModel = ? && Size = ?', [(parseInt(res[0].Quantity) + parseInt(postData.quantity)), postData.idSeller, postData.idModel, postData.size], function (error, results, fields) {
				if (error) throw error;
				resolve(results);
			});
		}
	});
}

module.exports.getStock = function(size, model, seller){
	return new Promise((resolve, reject)=>{
		con.query('SELECT * FROM Stock Where IdSeller = ? && IdModel = ? && Size = ?',[seller, model, size], (err, results) => {
			if(err) throw err;
			console.log(results);
			resolve(results);
		});
	});
}

module.exports.router = router;