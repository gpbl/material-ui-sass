var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function () {
	gulp.src('./scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./node_modules/material-ui/docs/build'));
});

gulp.task('watch', function() {
	gulp.watch(['scss/**/*.scss'], ['sass']);
});