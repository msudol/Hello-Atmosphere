/*** Copyright 2015 Anaren Inc. All rights reserved ***/

/*
 * 
 * app.js : 
 * 		- global handle of initialization for phonegap from the body onLoad function call
 * 		- global environment settings
 * 		- main shared functions for the app
 * 
 */

// creating an environment global object that we can refer to for various settings
var env = {
	deviceReady: false,
	online: false,
	apiUrl: "https://atmosphere.anaren.com/auth/",
	apiDefault: "https://atmosphere.anaren.com/auth/",
	page: "",
	debug: false,
	debugHigh: false,
	screenWidth: window.innerWidth,
	screenHeight: window.innerHeight,
	projectList: true,
	baseApp: false,
	alt:1
};

// global for the current app
var global = {
	currentApp: ""
};

//function to update our operating environment - the object "env"
function updateEnv(key, value) {
	env[key] = value;
	var store = JSON.stringify(env);
	localStorage.setItem("AtmosphereEnv", store);
}

// function to check our operating environment - the object "env"
function checkEnv(key) {
	var store = JSON.parse(localStorage.getItem("AtmosphereEnv"));
	return store.key;
}

// function to load the entire env from localStorage
function getEnv() {
	var store = JSON.parse(localStorage.getItem("AtmosphereEnv"));
	if ((store !== undefined) && (store !== null)) env = store;
}

//Cordova is loaded and it is now safe to make calls to Cordova methods
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
		// testing android fullscreen plugin
		AndroidFullScreen.immersiveMode(function() { if (env.debug) console.log("Android immersive mode enabled")}, function() { if (env.debug) console.log("Android immersive mode failed")});
	}
	
	// IOS just page init
	else {
		pageInit();
	}
	
}

// function called by body onload that initializes event listeneres
function onLoad(page) {
	getEnv();
	updateEnv("page", page);
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("deviceready", onDeviceReady, false);
}

// Handle the online event
function onOnline() {
	if (env.debug) console.log("onOnline");
    updateEnv("online", true);
	if (env.page == "index") {
		document.getElementById("loginButton").disabled = false;
		document.getElementById("messageBox").innerHTML = "Login to Atmosphere...";	
	}
}

// Handle the offline event
function onOffline() {  
	if (env.debug) console.log("onOffline");
	updateEnv("online", false);
	if (env.page == "index") {
		document.getElementById("loginButton").disabled = true;
		document.getElementById("messageBox").innerHTML = '<font color="red">Unable to contact server!</font>';		
	}
}
