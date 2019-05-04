const express = require('express');
const router = express.Router();
const con =  require('./connection.js');

router.get('/',(req,res)=>{
	res.sendFile('C:/Users/Paul Lucas/Documents/ProjetTransversal/Sloth-Compta/html/model.html');
  });

router.post('/addModel', function (req, res) {
	var postData  = req.body;
	con.query('INSERT INTO Model SET ?', postData , function (error, results, fields) {
	   if (error) throw error;
	   res.send(results);
	 });
});

router.get('/allModel', function (req, res) {
	con.query('SELECT * FROM Model', (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify(results));
	});
})

router.get('/modelId', function (req, res) {
	con.query('SELECT * FROM Model WHERE id=?', [req.query.id], function (error, results, fields) {
	 if (error) throw error;
	   res.send(results);
	 });
 });

module.exports = router;