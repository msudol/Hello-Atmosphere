/*** Copyright 2015 Anaren Inc. All rights reserved ***/

/*
 * 
 * main.js : 
 * 		- attempts to download mobile application code from server
 * 		- handle the page init and filesystem hooks
 * 		- loads baseApp from the server JSON
 * 
 */

// called from app.js after device ready
function pageInit() {
		
	// get the auth API url
	var apiUrl = checkEnv(apiUrl);
	if ((apiUrl !== undefined) && (apiUrl !== null)) env.apiUrl = apiUrl;
	
	// init the file system 
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	
	// remove any temporary project list
	localStorage.setItem("projectList", "");
	
	if (env.debug) console.log("Local filesystem initialized");
	//the gotFS callback will fire getCurrentApp
}

// get current app will go to the web if we're online and grab the latest version of the app, save it to filesystem and eval the code base
function getCurrentApp(uuid) {
	
	// get the creds out of temp storage
	var user, pass;
	var loadStore = localStorage.getItem("tempLogin");
	if (loadStore !== "") {
		var creds = JSON.parse(loadStore);
		user = creds.user;
		pass = creds.pass;
	}
	else {
		if (env.debug) console.log("Atmosphere login credentials not found!");
		// kick it back to index
		return window.location.assign("index.html");
	}
		
	// its not secure but it's not plain text atleast and it's over https anyway	
	var session=btoa(btoa(user)+"|"+btoa(pass));
	
	var url = env.apiUrl + "fetchjs.php?data=" + session;
	
	// if a uuid was sent as part of getCurrentApp call, append the uuid string to the API call
	if ((uuid !== undefined) && (uuid !== null)) {
		url = url + "&uuid=" + uuid;
	}
	
	var xhr = new XMLHttpRequest();
	
	xhr.addEventListener('readystatechange', function() {
		
		// for debug - remove production	
		if (env.debugHigh) console.log('state: ' + xhr.readyState + ' | status: ' + xhr.status);
		
		// TODO: handle failures gracefully
		// Wait til readyState returns 4
	    if (xhr.readyState == 4) {
	    	
	    	// 200 is what we want to see
	    	if (xhr.status === 200) {
		    	// if the app is here and it is online, this should never really happen
		    	if (xhr.responseText == "false") {
		    		window.location.assign("index.html");
		    	}
		    	else {
					// global to store the text of currentApp (we could eval here)
		    		global.currentApp = xhr.responseText;
	
		    		if (env.debug) console.log("Reading XHR response");
		    		//if (env.debug) console.log(global.currentApp);
		    		
		    		evalProjectFile(global.currentApp);	    		
		    		
		    		// write the xhr response to the filesystem for safe keeping
		    		global.fileSystem.root.getFile("current_app.js", null, writeFileEntry, fail);
		    	}
	    	
	    	}

	    	// This is not what we want to see - connection was probably lost
	    	else if (xhr.status === 0) {
		    	if (env.debug) console.log("No connection found, loading current app");
		    	global.fileSystem.root.getFile("current_app.js", null, readFileEntry, fail);
		    }
		    
	    	// 404 means the auth url can't be found
	    	else if (xhr.status === 404) {
		    	if (env.debug) console.log("No connection found, loading current app");
		    	global.fileSystem.root.getFile("current_app.js", null, readFileEntry, fail);
		    }
	    	
	    	else {
		    	if (env.debug) console.log("Unknown error while loading current app");
		    	global.fileSystem.root.getFile("current_app.js", null, readFileEntry, fail);
	    	}

	    }
 
	}, false);
	
	xhr.open('get', url, true);
	xhr.send();
	
}

function gotFS(fs) {
	
	global.fileSystem = fs;
	// file system is online, run getCurrentApp function
	
	// check localstorage for an openProject item to determine what we are loading
	var openProject = localStorage.getItem("openProject");
	
	// a uuid saved in localstorage by the project list means the user has selected a project from project list
	if ((openProject !== undefined) && (openProject !== null)  && (openProject !== "")) {
		getCurrentApp(openProject);
	}
	else {	
		getCurrentApp();
	}
}

function writeFileEntry(fileEntry) {
	// we're writing to the file here..
    fileEntry.createWriter(gotFileWriter, fail);
}

function readFileEntry(fileEntry) {
    fileEntry.file(readAsText, fail);
}

function gotFileWriter(writer) {
	// save the data to the filesystem
    writer.write(global.currentApp);
}

// read our file as text 
function readAsText(file) {
    
	var file_reader = new FileReader();
    
    file_reader.onloadend = function(evt) {
        
    	if (env.debug) console.log("Reading current_app.js");
    	//if (env.debug) console.log(evt.target.result);
    	
    	// pass the result to function to eval the code base and load it as myApp
    	evalProjectFile(evt.target.result);
    };
    
    // get the file from file system
    var current_file = file_reader.readAsText(file);   
}


// function to handle eval of data and the loading
function evalProjectFile(data) {
	
	if (env.debug) console.log("Loading project file");
	//if (env.debug) console.log(data);
    // Init the BLE client
    baseApp = new Client('PhoneGapBLEClient');	
    
    // tell the environment variable that baseApp is loaded
    env.baseApp = true;
    
	// eval should be blocking.. this stuff should work but something isn't always loading.
	try {
	   eval(data);
	}
	catch(err) {
	   console.log(err.stack);
	   showConfirm();
	   return;
	}

	//TODO: instead of this try/catch baseApp.initialize should return a success or a failed callback that would provide far better error traces.
    // Init the app in a try.. if this fails then go to fallback
    try {   	         
    	// create new app
    	app = new MyApp(baseApp);
    	
    	// make our global
    	baseApp.setApp(app);	
    	
    	// initialize it all
    	baseApp.initialize(); 
    }
    catch(err) {
    	console.trace(err);
    	showConfirm();
    	return;
    }
}

// a fail function for the file reader
function readFail(evt) {
    console.log(evt.target.error.code);
}

// alert dialog dismissed
function onConfirm(button) {  
	// do something
	if ((button == "1") || (button == 1)) {
		//global.fileSystem.root.getFile("current_app.js", null, readFileEntry, fail);
		location.reload();
	} 
	else {
		// load empty app from fallback_app.js
		app = new FallbackApp(baseApp);
    	// make our global
    	baseApp.setApp(app);
    	// initialize it all
    	baseApp.initialize(); 
    	// log this issue
		baseApp.debugLog("Error loading remote app, empty app initialized...");		
	}
}

function showConfirm() {
    navigator.notification.confirm(
    	    'An error occurred while trying to load your project: make sure your project has been built, then refresh to try again',  // message
    	    onConfirm,        	 	// callback
    	    'Loading Error',        // title
    	    'Refresh,Cancel'        // buttonName
    ); 	
}

function fail(error) {
    console.log(error.code);
    showConfirm();
}

// a fallback app declaration in case we need to just load a blank app for whatever reason
function FallbackApp(parent) {
	var airMe = this;
	this.parent = parent;
	this.parent.serviceUUID = "52df6d1c-4c26-4bef-a39c-1684763dade9";
	this.parent.notifyUUID = "52df6d1c-4c26-4bef-a39c-1684763dadea";
	this.parent.localName = "ble_test";
	this.initialize = function() {
			this.layouts = {"Default": {"devicename": ".*", "elements": {}, "orientation": "portrait", "platform": "", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}};
			this.currentLayout = "Default";
			if (env.debug) console.log("Using layout " + this.currentLayout);
	};
}
