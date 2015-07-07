'use strict';

// gulp
var gulp = require('gulp');
var paths = gulp.paths;
var options = gulp.options;

var path = require('path');

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
