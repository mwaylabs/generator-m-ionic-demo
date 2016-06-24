'use strict';

var path = require('path');
var fs = require('fs');

var et = require('elementtree'); // also included in gen-m/package.json
var browserSyncPrimitives = require('../bsprim');


var START_PAGE = 'browser-sync-start.html';

function parseXml (filename) {
  return new et.ElementTree(et.XML(fs.readFileSync(filename, 'utf-8').replace(/^\uFEFF/, '')));
}

function Patcher (projectRoot, platforms) {
  this.projectRoot = projectRoot || '.';
  if (typeof platforms === 'string') {
    platforms = platforms.split(',');
  }
  this.platforms = platforms || ['android', 'ios'];

}

Patcher.prototype.copyStartPage = function (servers) {
  this.platforms.forEach(function (platform) {
    var dest = path.join(this.projectRoot, browserSyncPrimitives.getWWWFolder(platform), START_PAGE);
    browserSyncPrimitives.createIndexHtml(servers, platform, this.projectRoot, dest);
  }, this);
};

Patcher.prototype.updateConfigXml = function () {
  this.platforms.forEach(function (platform) {
    browserSyncPrimitives.updateConfigXml(this.projectRoot, platform, this.getProjectName(), START_PAGE);
  }, this);
};

Patcher.prototype.getProjectName = function () {
  var parsedConfigXML = parseXml(path.join(this.projectRoot, 'config.xml'));
  var nameTag = parsedConfigXML.find('name');
  return nameTag.text;
};

Patcher.prototype.patch = function (opts) {
  opts = opts || {};
  this.copyStartPage(opts.servers);
  this.updateConfigXml();
  // seems to work without fixATS (tested with iOS9)
  if (this.platforms.indexOf('ios') !== -1) {
    browserSyncPrimitives.fixATS(this.projectRoot, this.getProjectName());
  }
};

module.exports = Patcher;
