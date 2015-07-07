// Karma configuration
// Generated on Wed Jul 01 2015 13:51:22 GMT+0200 (CEST)

'use strict';

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/ionic/release/js/ionic.js',
      'app/bower_components/ionic/release/js/ionic-angular.js',
      'app/bower_components/ngCordova/dist/ng-cordova.js',
      'app/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/bower_components/localforage/dist/localforage.js',
      'app/bower_components/angular-localForage/dist/angular-localForage.js',
      // other
      'app/main/main.js',
      'app/main/services/main-serv.js',
      'app/main/controllers/debug-ctrl.js',
      'app/main/constants/config-const.js',
      'app/app.js',
      // test
      'test/**/*.js',
      'app/**/templates/*.html'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // use template cache to avoid unexpected $http requests from ui-router
      // https://github.com/angular-ui/ui-router/issues/212#issuecomment-69974072
      'app/**/templates/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'myViews',
      stripPrefix: 'app/' // the path must be relative to the app.js
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
