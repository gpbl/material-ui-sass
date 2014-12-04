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
	return sass(config.src, { sourcemap: true })
		.on('error', handleErrors)
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest));
});