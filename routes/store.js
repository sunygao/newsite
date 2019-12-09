import express from 'express';
var router = express.Router();

// /* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('https://www.etsy.com/shop/SunyGaoArt');
});

export default router;
