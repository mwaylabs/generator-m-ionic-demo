'use strict';

var path = require('path');
var BrowserSync = require('browser-sync');
var getWWWFolder = require('./getWWWFolder');


/**
 * Private function that adds the code snippet to deal with reloading
 * files when they are served from platform folders
 */
function monkeyPatch() {
	var script = function() {
		window.__karma__ = true;
		(function patch() {
			if (typeof window.__bs === 'undefined') {
				window.setTimeout(patch, 500);
			} else {
				var oldCanSync = window.__bs.prototype.canSync;
				window.__bs.prototype.canSync = function(data, optPath) {
					data.url = window.location.pathname.substr(0, window.location.pathname.indexOf('/www')) + data.url.substr(data.url.indexOf('/www'))
					return oldCanSync.apply(this, [data, optPath]);
				};
			}
		}());
	};
	return '<script>(' + script.toString() + '());</script>';
}


/**
 * Starts the browser sync server.
 * @param {String} cordovaDir - File path to the root of the cordova project (where the platforms/ directory can be found)
 * @param {Array} platforms - Array of strings, each of which is a Cordova platform name to serve.
 * @param {Object} opts - Options Object to be passed to browserSync. If this is a function, the function is called with default values and should return the final options to be passed to browser-sync
 * @param {Function} cb - A callback when server is ready, calls with (err, servr_hostname)
 */
function startBrowserSync(cordovaDir, platforms, opts, cb) {
	var defaults = {
		logFileChanges: true,
		logConnections: true,
		open: false,
		snippetOptions: {
			rule: {
				match: /<\/body>/i,
				fn: function(snippet, match) {
					return monkeyPatch() + snippet + match;
				}
			}
		},
		minify: false,
		watchOptions: {},
		files: [],
		server: {
			baseDir: [],
			routes: {}
		}
	};

	platforms.forEach(function(platform) {
		var www = getWWWFolder(platform);
		defaults.server.baseDir.push(path.join(www));
		defaults.server.routes['/' + www] = path.join(cordovaDir, www);
	});

    opts = opts || {};
	if (typeof opts === 'function') {
		opts = opts(defaults);
	} else {
		for (var key in defaults) {
			if (typeof opts[key] === 'undefined') {
				opts[key] = defaults[key];
			}
		}
	}

	var bsInstance = BrowserSync.create('cordova-browsersync');
	bsInstance.init(opts, function(err, callbackBsInstance) {
		var urls = callbackBsInstance.options.getIn(['urls']);
		var servers = {};
		['local', 'external', 'tunnel'].forEach(function(type) {
			servers[type] = urls.get(type);
		});

        cb(err, {
        	bsInstance: bsInstance,
        	servers: servers
        });
	});

	return bsInstance;
}


module.exports = startBrowserSync;
