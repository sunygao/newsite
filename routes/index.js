import express from 'express';
import pug from 'pug';
import homeData from '../data/home.json';
import { allWebObj } from '../data/web-projects/index.js'; 

var router = express.Router();

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


export default router;
