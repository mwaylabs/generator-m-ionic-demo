#!/usr/bin/env node

'use strict';

var Patcher = require('./utils/Patcher');
var cordovaBrowserSync = require('./bsprim');

function parseOptions (opts) {
  var result = {};
  opts = opts || [];
  opts.forEach(function (opt) {
    var parts = opt.split(/=/);
    result[parts[0].replace(/^-+/, '')] = parts[1] || true;
  });
  return result;
}

console.log('\n\n\n\n hook \n\n\n\n\n');


module.exports = function (context) {

  console.log('\n\n\n\n hook2 \n\n\n\n\n');
  console.log(context.opts.options.argv);

  var options = parseOptions(context.opts.options.argv);
  console.log(options);
  if (typeof options['live-reload'] === 'undefined') {
    console.log('return!!!');
    return;
  }

  // TODO - Add back ignored option
  // TODO - Enable live reload servers

  var patcher = new Patcher(context.opts.projectRoot);

  console.log('\n\n\n\n hook3 \n\n\n\n\n');
  cordovaBrowserSync.startBrowserSync(context.opts.projectRoot, function (err, browserSyncValue) {
    patcher.patch({
      servers: browserSyncValue.servers
    });
  });
};
