#!/usr/bin/env node

'use strict';

var Patcher = require('./utils/Patcher');
var bs = require('browser-sync').create('m-ionic:livereload');

/**
 * Private function that adds the code snippet to deal with reloading
 * files when they are served from platform folders
 */
/*global window*/
function monkeyPatch () {
  var script = function () {
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

function parseOptions (opts) {
  var result = {};
  opts = opts || [];
  opts.forEach(function (opt) {
    var parts = opt.split(/=/);
    result[parts[0].replace(/^-+/, '')] = parts[1] || true;
  });
  return result;
}

module.exports = function (context) {

  console.log('\n\n\n\n hook2 \n\n\n\n\n');
  console.log(context.opts.options.argv);

  var options = parseOptions(context.opts.options.argv);
  console.log(options);
  if (typeof options['livereload'] === 'undefined') {
    console.log('return!!!');
    return;
  }

  // TODO - Add back ignored option
  // TODO - Enable live reload servers

  var patcher = new Patcher(context.opts.projectRoot);

  console.log('\n\n\n\n hook3 \n\n\n\n\n');

  var bsOptions = {
    logConnections: true,
    open: false,
    snippetOptions: {
      rule: {
        fn: function (snippet, match) {
          return monkeyPatch() + snippet + match;
        }
      }
    },
    files: ['app', '.tmp'],
    server: {
      baseDir: ['app', '.tmp', 'platforms/ios/www/', 'platforms/android/assets/www/'],
      // platform www's for cordova.js
    }
  };

  bs.init(bsOptions, function (err, bsInstance) {
    if (err) {
      console.log(err);
    }
    var urls = bsInstance.options.getIn(['urls']);
    patcher.patch({
      external: urls.get('external')
    });
  });
};
