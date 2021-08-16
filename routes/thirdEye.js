import express from 'express';
import pug from 'pug';
import thirdEyeData from '../data/third-eye.js';

var router = express.Router();

// /* GET home page. */
router.get('/', function(req, res, next) {
	var manifest = req.app.get('manifest');
	var env = req.app.get('env');

	var indexPage = pug.compileFile('views/thirdEye.pug');
	var layout = pug.compileFile('views/layout.pug', {
		filters: {
			'content': function () {
			    return indexPage();
			  }
		}
	});
	var html = layout({ 
		meta: thirdEyeData,
		env: env,
		manifest: manifest,
	});
	res.send(html);
});


export default router;
