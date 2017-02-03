var express = require('express');
var router = express.Router();
var data = require('../data/home.json');
var pug = require('pug');

// /* GET home page. */
router.get('/', function(req, res, next) {
	renderIndex(req, res);
});

function renderIndex(req, res) {
	var indexPage = pug.compileFile('views/index.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage({ data: data });
			  }
		}
	});
	var html = layout({ 
		title: data.meta.title,
		description: data.meta.description
	});
	res.send(html);
}

module.exports = router;
module.exports = renderIndex;
