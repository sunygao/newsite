/*
 * Gulp commands for development
 * 
 *
 *
 *
 */

var gulp  = require('gulp'),
	sass = require('gulp-sass'),
  webpack = require("webpack"),
  WebpackDevServer = require("webpack-dev-server"),
  webpackConfig = require("../../webpack.config.js"),
  iconfont = require('gulp-iconfont'),
  iconfontCss = require('gulp-iconfont-css'),
  gutil   = require('gulp-util'),
  path = require('path'),
	config  = require('../config.json'),
  plumber = require('gulp-plumber'),
  fontName = 'iconfont',
  imagemin    = require('gulp-imagemin'),
  // imageminJpegoptim = require('imagemin-jpegoptim'),
  // imageminOptipng = require('imagemin-optipng'),
  del = require('del'),
  svgmin = require('gulp-svgmin'),
  runSequence = require('run-sequence');

/*
 * Set environment to prod
 *
 */
gulp.task('set-env-prod', function() {
    return gutil.env = 'prod';
});

/*
 * Set environment to dev
 *
 */
gulp.task('set-env-dev', function() {
    return gutil.env = 'dev';
});

  
/*
 * Compile compass
 *
 */
gulp.task('sass', function() {
  var options = {},
  cssPath;

  //dev config
  cssPath = config.development.css.path,
  options.outputStyle = 'expanded',
  sourcemap = true;
  
  // if for deployment
  if(gutil.env == 'prod') {
    cssPath = config.deploy.css.path,
    options.outputStyle = "compressed";
    options.sourcemap = false;
  }
  
  gulp.src(config.src.sass.files)
    .pipe( plumber())
      .pipe(sass(options).on('error', sass.logError))
      .pipe(gulp.dest(cssPath));
});

/*
 * Watch templates and compass/sass files.
 *
 */
gulp.task('watch', function() {
  gulp.watch(config.src.sass.files, ['sass']);

//  gulp.watch(config.src.js.files, ['webpack']);

  //gulp.watch(config.iconfont.srcSVG, ['iconfonts']);
});


/*
 * Icon Font generation
 * 
 */
gulp.task('iconfonts', function(){
  console.log('\n----- iconfonts ---- ');
    var fontPath = config.iconfont.fontPath;

    return gulp.src([config.iconfont.srcSVG],  {base: config.iconfont.base})
      .pipe( plumber())
      .pipe(iconfontCss({
        fontName: fontName,
        path: config.iconfont.cssTempSrc,
        targetPath: config.iconfont.sassDest,
        fontPath: fontPath
      }))
      .pipe(iconfont({
        fontName: fontName,
        normalize: true,
        appendCodepoints: true
       }))
      .pipe(gulp.dest(config.iconfont.destFontPath))
});

 // Start a webpack-dev-server
gulp.task('webpack-dev-server', function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

 
  new WebpackDevServer(webpack(myConfig), 
    myConfig.devServer
  ).listen(8080, '0.0.0.0', function(err) {

  });
});

/*
 * Compile js using webpack
 *
 */
gulp.task("webpack", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
 
  if( gutil.env == 'prod' ){
    myConfig.output.path = config.deploy.js.path;
    myConfig.debug = false;
    myConfig.devtool = false;
    myConfig.plugins = [new webpack.optimize.UglifyJsPlugin()];
  }

  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

/*
 * Clean out the dist folder
 *
 */
gulp.task('clean', function () {
  return del([
    'dist/'
  ]);
});

/*
 * Copy static files to dist folder
 *
 */
gulp.task('copyStaticFiles', function () {
      return gulp.src(config.staticSrc, {
          base: 'app'
      }).pipe(gulp.dest('dist'));
});

/*
 * Minify images
 *
 */
gulp.task('imgmin', function(cb, err) {
  return runSequence('imgmin.jpg','imgmin.png', cb);
});

gulp.task('imgmin.png',function(cb, err){
  return gulp.src(config.src.imgmin.png)
      .pipe(plumber())
      .pipe(imageminOptipng({optimizationLevel: 1})())
      .pipe(gulp.dest(config.deploy.imgmin.path));
});

gulp.task('imgmin.jpg', function () {
    return gulp.src(config.src.imgmin.jpg)
        .pipe(imageminJpegoptim({
          progressive: true,
          max: 75
        })())
        .pipe(gulp.dest(config.deploy.imgmin.path));
});

/*
 * Minify svgs
 *
 */
gulp.task('svgmin', function () {
    return gulp.src(config.src.svg.files)
        .pipe(svgmin())
        .pipe(gulp.dest(config.deploy.svg.path));
});

