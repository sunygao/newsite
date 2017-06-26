var express = require('express');
var router = express.Router();
var pug = require('pug');

// /* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('https://www.etsy.com/shop/SunyGaoArt');
});


module.exports = router;
