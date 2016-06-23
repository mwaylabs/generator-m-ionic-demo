'use strict';


function isPlatformSupported(platform) {
	var supportedPlatforms = {
		android: true,
		ios: true
	};

	return platform in supportedPlatforms;
}


module.exports = isPlatformSupported;
