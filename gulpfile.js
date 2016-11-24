var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
includer = require('gulp-htmlincluder');
var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('minify-css', function() {
  return gulp.src('dev/Css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css/'));
});
var gulp = require('gulp'),
    includer = require('gulp-htmlincluder');
 
gulp.task('html', function() {
    gulp.src('dev/Html/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/Html'));
});
 
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});