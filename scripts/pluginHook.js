#!/usr/bin/env node

'use strict';

var Patcher = require('./utils/Patcher');
var bs = require('browser-sync').create('m-ionic:livereload');

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

  console.log('\n\n\n\n hook3 \n\n\n\n\n');

  var bsOptions = {
    logConnections: true,
    open: false,
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
    var patcher = new Patcher(context.opts.projectRoot);
    patcher.patchConfigXml(urls.get('external'));
  });
};
