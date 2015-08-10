'use strict';

// gulp
var gulp = require('gulp');
var path = require('path');
var paths = gulp.paths;
var options = gulp.options;
// plugins
var $ = require('gulp-load-plugins')();
// modules
var karma = require('karma');

function runTests (singleRun, done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function () {
    done();
  });
}

gulp.task('test', function (done) {
  runTests(true, done);
});

gulp.task('test:auto', function (done) {
  runTests(false, done);
});

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(paths.protractor)
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      done();
    });
}

gulp.task('protractor', ['serve-no-open', 'webdriver-update'], runProtractor);
gulp.task('protractor-build', ['serve-build-no-open', 'webdriver-update'], runProtractor);
