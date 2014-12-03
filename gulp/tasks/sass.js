'use strict';

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var filter       = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-ruby-sass');

var handleErrors = require('../utils/handleErrors');
var config = require('../config').sass;

gulp.task('sass', function () {
	var filterCSS = filter('**/*.css');
	gutil.log(gutil.colors.grey('CSS is rendered in ' + config.dest));
	gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(sourcemaps.write())
		.pipe(filterCSS)
		.pipe(autoprefixer())
		.pipe(filterCSS.restore())
		.pipe(gulp.dest(config.dest));
});