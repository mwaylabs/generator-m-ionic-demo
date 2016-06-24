'use strict';

var path = require('path');
var fs = require('fs');
var et = require('elementtree'); // also included in gen-m/package.json


function parseXml (filename) {
  return new et.ElementTree(et.XML(fs.readFileSync(filename, 'utf-8')));
}

function Patcher (projectRoot) {
  this.projectRoot = projectRoot || '.';
}

Patcher.prototype.patchConfigXml = function (externalUrl) {
  var platforms = ['android', 'ios'];
  platforms.forEach(function (platform) {

    var CONFIG_LOCATION = {
      android: 'res/xml',
      ios: this.getProjectName()
    };

    var configXmlPath = path.join(this.projectRoot, 'platforms', platform, CONFIG_LOCATION[platform], 'config.xml');

    var configXml = parseXml(configXmlPath);

    var contentTag = configXml.find('content[@src]');
    if (contentTag) {
      contentTag.attrib.src = externalUrl;
    }

    // Add allow-navigation element so that http:// files will not launch an external browser.
    var allowNavTag = et.SubElement(configXml.find('.'), 'allow-navigation');
    allowNavTag.set('href', '*');

    fs.writeFileSync(configXmlPath, configXml.write({
      indent: 4
    }), 'utf-8');
  }, this);
};

Patcher.prototype.getProjectName = function () {
  var parsedConfigXML = parseXml(path.join(this.projectRoot, 'config.xml'));
  var nameTag = parsedConfigXML.find('name');
  return nameTag.text;
};


module.exports = Patcher;
