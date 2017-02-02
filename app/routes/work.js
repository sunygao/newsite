var express = require('express');
var router = express.Router();
var data = require('../data/work.json');
var pug = require('pug');

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.render('index');
});

// router.get('/:id', function(req, res, next) {
//  	res.render('workDetail');
// });

router.get('/:id', function(req, res, next) {
	var pageData = data[req.params.id];
 	var workDetailPage = pug.compileFile('views/workDetail.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return workDetailPage({ 
			    	slug: req.params.id, 
			    	data: pageData });
			  }
		}
	});
	var html = layout({
		title: pageData.meta.title,
		description: pageData.meta.description
	});
	res.send(html);
});

module.exports = router;
