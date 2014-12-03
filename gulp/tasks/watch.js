'use strict';

var gulp = require('gulp');
var src = require('../config').watch;
gulp.task('watch', function () {
	gulp.watch(src, ['sass']);
});