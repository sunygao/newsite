import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import pug from 'pug';

import index from './routes/index.js';
//import work from './routes/work';
import web from './routes/web.js';
import thirdEye from './routes/thirdEye.js';
// import art from './routes/art';
// import store from './routes/store';
// import shop from './routes/shop';
// import assetManifest from '../public/dist/manifest.json'

var env = process.env.NODE_ENV;
// var manifest;
// if (env == 'production') {
//     import('./public/dist/manifest.json')
//     .then((manifest) => {
//        manifest = manifest;
//     });
// }
// var manifest = env == 'production'? require('../public/dist/manifest.json') : '';
var app = express();
var __dirname = path.resolve();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.set('config', {
// 	env: env,
// 	manifest: manifest
// });
app.set('config', {
	env: env
});

app.use('/', index);
//app.use('/work', work);
app.use('/web', web);
app.use('/third-eye', thirdEye);
// app.use('/art', art);
// app.use('/store', store);
// app.use('/shop', shop);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  
  var errorPage = pug.compileFile('views/error.pug');
	var layout = pug.compileFile('views/layout.pug', {
	filters: {
		'content': function () {
		    return errorPage();
		  }
	}
	});
	var html = layout({ 
		title: 'Suny Gao - Error',
		description: 'Suny Gao',
		pageClass: 'error'
	});
	res.send(html);

});

export default app;
