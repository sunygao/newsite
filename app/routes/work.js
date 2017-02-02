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
 	var workDetailPage = pug.compileFile('views/workDetail.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return workDetailPage({ data: data });
			  }
		}
	});
	var html = layout();
	res.send(html);
});

module.exports = router;
