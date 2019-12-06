var express = require('express');
var pug = require('pug');
var router = express.Router();
var homeData = require('../data/home.json');
var { allWebObj } = require('../data/web-projects'); 

// /* GET home page. */
router.get('/', function(req, res, next) {
	//passed down for every route
	var manifest = req.app.get('manifest');
	var env = req.app.get('env');
	var pathname = 'web'; //used for links for work detail page

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
		manifest: manifest,
	});
	res.send(html);
});


module.exports = router;
