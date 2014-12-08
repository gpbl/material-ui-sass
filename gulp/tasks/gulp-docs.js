'use strict';
var gulp = require('gulp');
var run = require('gulp-run');
// Run gulp for the docs site
gulp.task('gulp-docs', function () {
  var cmd = new run.Command('gulp', {
    cwd: './node_modules/material-ui/docs'
  });
  cmd.exec();
});