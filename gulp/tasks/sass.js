// "use strict";

var gulp = require('gulp');
var gutil = require('gulp-util');
var filter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var handleErrors = require('../utils/handleErrors');
var config = require('../config').sass;

gulp.task('sass', function () {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer({ cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});