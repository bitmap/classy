var gulp = require('gulp');
var mochaPhantomJS = require("gulp-mocha-phantomjs");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('jshint', function () {
  return gulp.src('src/cla$$.js')
    .pipe(jshint())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('dist', function() {
  return gulp.src('src/cla$$.js')
    .pipe(gulp.dest('dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('test', function () {
    return gulp
    .src('test/test.html')
    .pipe(mochaPhantomJS());
});

gulp.task('default', [
  'jshint',
  'test',
  'dist'
]);
