var express = require('express');
var router = express.Router();
var pug = require('pug');
var artData = require('../data/art.json');
var { allArtObj } = require('../data/art-projects');

var pathname = 'art';//used for links for work detail page

router.get('/', function(req, res, next) {
	//passed down for every route
	var manifest = req.app.get('manifest');
	var env = req.app.get('env');

	var indexPage = pug.compileFile('views/index.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage({ 
					pathname: pathname, 
					data: allArtObj 
				});
			  }
		}
	});
	var html = layout({ 
		meta: artData,
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
					data: allArtObj[req.params.id],
					pathname: pathname
			    });
			  }
		}
	});
	
	var html = layout({
		meta: allArtObj[req.params.id].meta,
		env: env,
		manifest: manifest
	});

	res.send(html);
});

module.exports = router;
