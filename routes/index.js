var express = require('express');
var pug = require('pug');
var router = express.Router();
var homeData = require('../data/home.json');
var { allWorkObj } = require('../data/projects'); 

if(process.env.NODE_ENV == 'production') {
	var manifest = require('../public/dist/manifest.json');
}

// /* GET home page. */
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


module.exports = router;
