var express = require('express');
var router = express.Router();
var data = require('../data/work.json');
var pug = require('pug');

var manifest = require('../public/dist/manifest.json');

/* GET home page. */
router.get('/', function(req, res, next) {
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
		description: data.meta.description,
		env: process.env.NODE_ENV,
		manifest: manifest
	});
	res.send(html);
});


router.get('/:id', function(req, res, next) {
	var pageData = data[req.params.id];
	var nextData = data[pageData.next];
 	var workDetailPage = pug.compileFile('views/workDetail.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return workDetailPage({ 
			    	slug: req.params.id, 
			    	data: pageData,
			    	nextData: nextData
			    });
			  }
		}
	});
	var html = layout({
		title: pageData.meta.title,
		description: pageData.meta.description,
		env: process.env.NODE_ENV,
		manifest: manifest
	});
	res.send(html);
});

module.exports = router;
