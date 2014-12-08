'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var src = require('../config').watch;
gulp.task('watch', function () {
  gutil.log(gutil.colors.grey('Watching ' + src + '...'));
  gulp.watch(src, ['sass']);
});