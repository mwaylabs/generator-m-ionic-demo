'use strict';

var path = require('path');
var fs = require('fs');
var plist = require('plist');

function fixATS(cordovaDir, projectName) {
	var filename = path.join(cordovaDir, 'platforms/ios', projectName, projectName + '-Info.plist');
	var data = plist.parse(fs.readFileSync(filename, 'utf-8'));
	data.NSAppTransportSecurity = {
		NSAllowsArbitraryLoads: true
	};
	fs.writeFileSync(filename, plist.build(data));
}


module.exports = fixATS;
