const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello World');
   // res.sendFile('C:/Users/Paul Lucas/Desktop/Sloth-Compta/html/index.html');
  });

module.exports = router;