var express = require('express');
var router = express.Router();
var pug = require('pug');
var homeData = require('../data/home.json');
var { allWorkObj } = require('../data/projects'); 

if(process.env.NODE_ENV == 'production') {
	var manifest = require('../public/dist/manifest.json');
}

router.get('/', function(req, res, next) {
	var indexPage = pug.compileFile('views/index.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage({ data: allWorkObj });
			  }
		}
	});
	var html = layout({ 
		meta: homeData,
		env: process.env.NODE_ENV,
		manifest: manifest ? manifest : ''
	});
	res.send(html);
});


router.get('/:id', function(req, res, next) {
	var workDetailPage = pug.compileFile('views/workDetail.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return workDetailPage({ 
			    	slug: req.params.id, 
			    	data: allWorkObj[req.params.id]
			    });
			  }
		}
	});
	var html = layout({
		meta: allWorkObj[req.params.id].meta,
		env: process.env.NODE_ENV,
		manifest: manifest ? manifest : ''
	});
	res.send(html);
});

module.exports = router;
