const mysql = require('mysql');

let con = mysql.createConnection({
	host: "10.194.69.15",
	user: "A10",
	password: "6Z58pH0taK7RYXqV",
	database: "A10",
});

module.exports = con;