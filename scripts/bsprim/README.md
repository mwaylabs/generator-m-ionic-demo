# cordova-browsersync-primitives

This npm package contains common code used to implement browsersync with cordova.  It exports the following APIs:

## addCSP(filename)

###Parameters
* String filename - name of the HTML file to update.
  
###Returns
* Nothing.

### Description
Reads the HTML file specified by `filename`, updates the Content-Security-Policy, and saves the file in place.

## createIndexHtml(servers, platform, cordovaDir, [dest])

###Parameters
* Object servers - The list of IP addresses supplied by browsersync that it is listening on.  
* String platform - Which platform (`android` or `ios`) the page should be built for.  Affects the URLs embedded in the generated HTML file.
* String cordovaDir - Base directory of the cordova project.
* String dest (optional) - Location to save the start page.  If not specified, defaults to `<cordovaDir>/www/index.html`.

###Returns
* Nothing.

### Description

Creates an HTML page that is embedded inside the application's APK or IPA file.  When loaded, the HTML page redirects to the index.html served by browsersync.

This function embeds the IP addresses that the browsersync server is listening on into the HTML file that is built. 

## fixATS(cordovaDir, projectName)

###Parameters
* String cordovaDir - Base directory of the cordova project.
* String projectName - The name given to the cordova project at creation i.e. `cordova create <PATH> <ID> <NAME>`
  
###Returns
* Nothing.

### Description
Updates the iOS platform's `<projectName>-Info.plist` file to disable AppTransportSecurity, and allow loading external HTTP files.

## startBrowserSync(cordovaDir, platforms, opts, cb)

###Parameters
* String cordovaDir - Base directory of the cordova project.
* String[] platforms - Array of strings, each of which is a Cordova platform name to serve.
* Object | Function opts - Options object to be passed to browserSync. If this is a function, the function is called with default values and should return the final options to be passed to browser-sync.
* Function(err, browserSyncInfo) cb - A callback when server is ready.
  
###Returns
* Object - The browsersync instance created.

### Description

Creates and initializes a browsersync instance.  When the instance is ready, `cb` is called. `cb` will be passed 2 parameters:
* Object err - An error object given by browsersync.
* Object browserSyncInfo - Info about the browsersync instance.  Format:

````
Object {
	Object bsInstance - The browsersync instance.
	Object servers {
		String local (optional) - Base URL to localhost.  Example: http://localhost:3000
		String external (optional) - Base URL for external address.  Example: http://10.128.64.174:3000
	}
}
````

## getWWWFolder(platform)

###Parameters
* String platform - Specifies which platform's path (`android` or `ios`) is desired.

###Returns
* String - The path of the platform www directory.  **Note:** This path *always* uses `/` delimiters.

### Description

Returns the path of `platform`'s www directory relative to the cordova root directory.  For example: `platforms/android/assets/www`.

## updateConfigXml(cordovaDir, platform, projectName, hostedPage)

###Parameters
* String cordovaDir - Base directory of the cordova project.
* String platform - Specifies which platform's config.xml file (`android` or `ios`) should be updated.
* String projectName - The name given to the cordova project at creation i.e. `cordova create <PATH> <ID> <NAME>`
* String hostedPage - Name of the starting HTML file that is embedded in the APK or IPA file. 
   
###Returns
* Nothing.

### Description

Updates `platform`'s config.xml file.  Two things are changed:
1. The starting page is changed to `hostedPage` (`<content src='...'>`).
2. An `<allow-navigation href="*" />` element is added to allow the app to navigate to http URLs inside the embedded web view. 

## isPlatformSupported(platform)

###Parameters
* String platform - Specifies the name of the platform to test for support.
  
###Returns
* Boolean - Returns true if the platform is supported; false otherwise.

### Description
Returns true if a supported platform (`android` or `ios`) is passed in `platform`; false otherwise.