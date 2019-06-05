const express = require('express');
const router = express.Router();
const con =  require('./connection.js');
const stock =  require('./stock.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/sale.html');
  });

router.get('/allSale', function (req, res) {
	module.exports.getAllSale() 
	.then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
})

module.exports.getAllSale = function(){
	return new Promise((resolve, reject)=>{
		con.query('SELECT Seller.LastName as Seller, Client.LastName, Client.Name, Model.Name as Model, Stock.Size, Sale.* FROM Sale, Client, Seller, Model, Stock Where Seller.Id = Sale.IdSeller && Client.Id = Sale.IdClient && Stock.Id = Sale.IdStock && Stock.IdModel = Model.Id', (err, results) => {
			if(err) throw err;
			resolve(JSON.stringify(results));
		});
	  });
}


router.post('/addSale', function (req, res) {
	console.log('sale to add',req.body);
	var postData  = req.body;
	newSale(postData).then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

function newSale(postData){
	console.log('Data posted', postData);
	console.log('Data posted size', postData.size);
	console.log('Data posted model', postData.idModel);
	console.log('Data posted seller', postData.idSeller);
	console.log('Data posted client', postData.idClient);
	return stock.getStock(postData.size, postData.idModel, postData.idSeller)
	.then(result => addSale(postData,result))
	.catch(err => console.log('Error', err.message));
}

function addSale(postData,res){
	console.log('GS Result', res);
	return new Promise((resolve, reject)=>{
		if (res.length && postData.quantity <= res[0].Quantity){
			const newSale = {
			  idSeller : postData.idSeller,
			  idClient : postData.idClient,
			  IdStock : res[0].Id,
			  quantity : postData.quantity,
			  price : postData.price
			};
			con.query('INSERT INTO Sale SET ?', newSale, function (error, results, fields) {
				if (error) throw error;
				resolve(results);
			});
		}else{
			console.log('Out of stock');
			reject('Out of stock')
		}
	});
}

module.exports.router = router;