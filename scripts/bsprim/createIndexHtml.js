'use strict';

var path = require('path');
var fs = require('fs');
var url = require('url');
var getWWWFolder = require('./getWWWFolder');


function createIndexHtml (servers, platform, cordovaDir, dest) {
  var html = fs.readFileSync(path.join(__dirname, 'browser-sync-start.html'), 'utf-8');

  var data = {};
  for (var key in servers) {
    if (typeof servers[key] !== 'undefined') {
      data[key] = url.resolve(servers[key], getWWWFolder(platform) + '/index.html');
    }
  }
  console.log('\n\n\n indexinject: \n' + JSON.stringify(data, null, 2));
  fs.writeFileSync(dest, html.replace(/__SERVERS__/, JSON.stringify(data)));
}

module.exports = createIndexHtml;
