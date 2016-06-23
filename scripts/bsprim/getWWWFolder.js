'use strict';


function getWWWFolder(platform) {
	var WWW_FOLDER = {
		android: 'assets/www',
		ios: 'www'
	};

	return ['platforms', platform, WWW_FOLDER[platform]].join('/');
}


module.exports = getWWWFolder;
