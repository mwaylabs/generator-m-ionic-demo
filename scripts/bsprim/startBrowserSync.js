'use strict';

var BrowserSync = require('browser-sync');

/**
 * Private function that adds the code snippet to deal with reloading
 * files when they are served from platform folders
 */
/*global window*/
function monkeyPatch () {
  var script = function () {
    window.__karma__ = true;
    (function patch () {
      if (typeof window.__bs === 'undefined') {
        window.setTimeout(patch, 500);
      } else {
        var oldCanSync = window.__bs.prototype.canSync;
        window.__bs.prototype.canSync = function (data, optPath) {
          data.url = window.location.pathname.substr(0, window.location.pathname.indexOf('/www')) + data.url.substr(data.url.indexOf('/www'));
          return oldCanSync.apply(this, [data, optPath]);
        };
      }
    })();
  };
  return '<script>(' + script.toString() + '());</script>';
}


/**
 * Starts the browser sync server.
 * @param {String} cordovaDir - File path to the root of the cordova project (where the platforms/ directory can be found)
 * @param {Object} opts - Options Object to be passed to browserSync. If this is a function, the function is called with default values and should return the final options to be passed to browser-sync
 * @param {Function} cb - A callback when server is ready, calls with (err, servr_hostname)
 */
function startBrowserSync (cordovaDir, cb) {
  var bsOptions = {
    logFileChanges: true,
    logConnections: true,
    open: false,
    snippetOptions: {
      rule: {
        match: /<\/body>/i,
        fn: function (snippet, match) {
          return monkeyPatch() + snippet + match;
        }
      }
    },
    minify: false,
    watchOptions: {},
    files: ['app', '.tmp'],
    server: {
      baseDir: ['app', '.tmp', 'platforms/ios/www/', 'platforms/android/assets/www/'],
      // platform www's for cordova.js
      routes: {}
    }
  };

  console.log(JSON.stringify(bsOptions, null, 2));
  var bsInstance = BrowserSync.create('cordova-browsersync');
  bsInstance.init(bsOptions, function (err, callbackBsInstance) {
    var urls = callbackBsInstance.options.getIn(['urls']);
    console.log('\n\n\n urls: \n' + JSON.stringify(urls, null, 2), '\n\n\n');
    cb(err, {
      bsInstance: bsInstance,
      servers: {
        external: urls.get('external')
      }
    });
  });

  return bsInstance;
}


module.exports = startBrowserSync;
