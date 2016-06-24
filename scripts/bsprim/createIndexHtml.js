'use strict';

var path = require('path');
var fs = require('fs');
var url = require('url');
var getWWWFolder = require('./getWWWFolder');


function createIndexHtml (servers, platform, cordovaDir, dest) {
  var html = fs.readFileSync(path.join(__dirname, 'browser-sync-start.html'), 'utf-8');

  console.log('\n\n\n indexinject: \n' + JSON.stringify(servers, null, 2));
  fs.writeFileSync(dest, html.replace(/__SERVERS__/, JSON.stringify(servers)));
}

module.exports = createIndexHtml;
