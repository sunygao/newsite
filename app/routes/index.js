var express = require('express');
var router = express.Router();
var data = require('../data/work.json');
var pug = require('pug');

// /* GET home page. */
router.get('/', function(req, res, next) {
	var indexPage = pug.compileFile('views/index.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage({ data: data });
			  }
		}
	});
	var html = layout();
	res.send(html);
});

module.exports = router;
