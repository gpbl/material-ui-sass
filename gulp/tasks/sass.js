'use strict';

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-ruby-sass');

var handleErrors = require('../utils/handleErrors');
var config       = require('../config').sass;

gulp.task('sass', function () {
	gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dest));
});
