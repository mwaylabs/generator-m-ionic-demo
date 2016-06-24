#!/usr/bin/env node

'use strict';

var Patcher = require('./utils/Patcher');
var bs = require('browser-sync').create('m-ionic:livereload');

module.exports = function (context) {

  if (context.opts.options.argv.indexOf('--livereload') < 0) {
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
    // patch platform's config xml to allow navigation to
    // & to set content tag to bs externalUrl
    patcher.patchConfigXml(urls.get('external'));
  });
};
