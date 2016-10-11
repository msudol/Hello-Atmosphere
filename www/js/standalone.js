/*** Copyright 2015 Anaren Inc. All rights reserved ***/

/*
 * 
 * standalone.js : 
 * 		- this replaces app.js and main.js for a standalone package
 * 		- global handle of initialization for phonegap from the body onLoad function call
 * 		- global environment settings
 * 
 */

// creating an environment global object that we can refer to for various settings
var env = {
	deviceReady: false,
	online: false,
	apiUrl: "",
	page: "",
	debug: true,
	debugHigh: true,
	screenWidth: window.innerWidth,
	screenHeight: window.innerHeight,
	projectList: false,
};

// add event listeners when the document is loaded
// the deviceready listener will notify when the cordova is ready and talking to the devcice
function onLoad(page) {
	
 	document.addEventListener("deviceready", onDeviceReady, false);
 	
}

// Cordova is loaded and it is now safe to make calls to Cordova methods
function onDeviceReady() {
    
	if (env.debug) console.log("onDeviceReady"); 
	
	if (env.debugHigh) console.log(device.platform);
	
	// As of Android SDK 23 we must ask permission to coarse location
	if(device.platform == "Android") {
		bluetoothle.hasPermission(function(hasPermissionSuccess) {
		
			if (hasPermissionSuccess !== undefined) {
			
				console.log(JSON.stringify(hasPermissionSuccess));
			
				if (hasPermissionSuccess.hasPermission) {
					if (env.debug) console.log("BluetoothLE permission from the system: " + hasPermissionSuccess.hasPermission);
					pageInit();
				}
			
				else {
				
					bluetoothle.requestPermission(function(requestPermissionSuccess) {
					
						if (requestPermissionSuccess.requestPermission) {
							if (env.debug) console.log("BluetoothLE plugin received permission from the system: " + requestPermissionSuccess.requestPermission);
							pageInit();
						}
					
						else {
							if (env.debug) console.log("BluetoothLE plugin failed to get permission from the system");
						}
					
					});	
				}			
			}
			else {
				if (env.debug) console.log("BluetoothLE callback failure");
			}

		});
	}
	
	// IOS just page init
	else {
		pageInit();
	}
	
}

// routine to load the app when the mobile device is ready
function pageInit() {
    
	// Init the BLE client
    baseApp = new Client('PhoneGapBLEClient');
    
    // Init the app (this will be loaded as current_app.js in the deployment package)
   	app = new MyApp(baseApp);

	// make our global
	baseApp.setApp(app);
	
	// initialize it all
	baseApp.initialize(); 
	
}