import express from 'express';
import pug from 'pug';
import artData from '../data/art.json';
import { allArtObj } from '../data/art-projects';

var router = express.Router();
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

export default router;
