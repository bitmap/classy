var gulp = require('gulp');
var mochaPhantomJS = require("gulp-mocha-phantomjs");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('jshint', function () {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('dist', function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('test', function () {
    return gulp.src('test/index.html')
    .pipe(mochaPhantomJS());
});


gulp.task('watch', function () {
  gulp.watch('src/*.js', ['jshint', 'test']);
});

gulp.task('dev', [
  'jshint',
  'test',
  'watch'
]);

gulp.task('default', [
  'jshint',
  'test',
  'dist'
]);
