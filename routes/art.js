var express = require('express');
var router = express.Router();
var data = require('../data/home.json');
var pug = require('pug');

// /* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('http://sunygao.tumblr.com');
});


module.exports = router;
