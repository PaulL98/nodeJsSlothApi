const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/sale.html');
  });

router.get('/allSale', function (req, res) {
	con.query('SELECT * FROM Sale', (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify(results));
	});
})

router.post('/addSale', function (req, res) {
	console.log('stock to add',req.body);
	var postData  = req.body;
	newSale(postData).then(result => res.send(result))
	.catch(err => res.send('Error', err.message));
});

function newSale(postData){
	console.log('Data posted', postData);
	console.log('Data posted', postData.size);
	console.log('Data posted', postData.idModel);
	console.log('Data posted', postData.idSeller);
	return getStock(postData.size, postData.idModel, postData.idSeller)
	.then(result => addSale(postData,result))
	.catch(err => console.log('Error', err.message));
}

function addSale(postData,res){
	console.log('GS Result', res);
	return new Promise((resolve, reject)=>{
		if (res.length && postData.quantity <= res[0].Quantity){
			con.query('INSERT INTO Sale SET ?', postData, function (error, results, fields) {
				if (error) throw error;
				resolve(results);
			});
		}else{
			console.log('Out of stock');
			reject('Out of stock')
		}
	});
}

function getStock(size, model, seller){
	return new Promise((resolve, reject)=>{
		con.query('SELECT * FROM Stock Where IdSeller = ? && IdModel = ? && Size = ?',[seller, model, size], (err, results) => {
			if(err) throw err;
			console.log(results);
			resolve(results);
		});
	});
}

module.exports = router;