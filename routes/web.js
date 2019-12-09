import express from 'express';
import pug from 'pug';
import homeData from '../data/home.json';
import { allWebObj } from '../data/web-projects'; 

var router = express.Router();
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

export default router;
