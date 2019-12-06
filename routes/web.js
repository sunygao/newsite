var express = require('express');
var router = express.Router();
var pug = require('pug');
var homeData = require('../data/home.json');
var { allWebObj } = require('../data/web-projects'); 

var pathname = 'web'

router.get('/', function(req, res, next) {
	var manifest = req.app.get('manifest');
	var env = req.app.get('env');

	var indexPage = pug.compileFile('views/index.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage({ pathname: pathname, data: allWebObj });
			  }
		}
	});
	var html = layout({ 
		meta: homeData,
		env: env,
		manifest: manifest
	});
	res.send(html);
});


router.get('/:id', function(req, res, next) {
	var manifest = req.app.get('manifest');
	var env = req.app.get('env');

	var workDetailPage = pug.compileFile('views/workDetail.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return workDetailPage({ 
			    	slug: req.params.id, 
					data: allWebObj[req.params.id],
					pathname: pathname
			    });
			  }
		}
	});
	var html = layout({
		meta: allWebObj[req.params.id].meta,
		env: env,
		manifest: manifest
	});
	res.send(html);
});

module.exports = router;
