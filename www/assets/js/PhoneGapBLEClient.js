/*** 
 * Copyright 2016 Anaren Inc.
 * All rights reserved
 * 
 * PhoneGapBLEClient.js - included from assets into the mobile app to handle Cordova-Plugin-Bluetoothle API calls
 * 
 ***/

function PhoneGapBLEClient(root) {
	
	StandaloneClient.call(this, root);
	
	var currentPhoneGapBLEClient = this;
	
	this.deviceListMapping = {};
	this.app = {};
	this.clientType = "PhoneGapBLEClient";
	this.bleready = false;
	this.scanners = [];
	this.connections = [];
	this.isConnected = false;
	this.connectionTimeout = null;
	this.bleCommandStack = [];
	this.currentBLECommandElement = null;
	this.foundServices = [];
	this.embeddedChains = {};
	this.currentReadChain = null;
	this.cloudEnabled = false;
	this.cloudAvailable = false;
	this.currentCloudUuid = null;
	this.currentCloudToken = null;
	this.isScanning = false;
	this.autoConnectEnabled = false;
	this.autoConnectAddress = null;
	this.timeOut = null;
	this.lastSelectedDevice = null;
	this.lastSelectedProject = null;
	
	/*** Buttons ***/
	
	/* the toggle button */
	this.appMenu.right.settingsButton.onclick = function(state) { currentPhoneGapBLEClient.toggleMenu(state); };
	
	/* the top bar buttons */
	
	// device page
	this.appBar.content.scanButton.onclick = function() { currentPhoneGapBLEClient.showDeviceList(); };
	// project page
	this.appBar.content.projectButton.onclick = function() { currentPhoneGapBLEClient.showProjectList(); };
	// debug page
	this.appBar.content.debugButton.onclick = function() { currentPhoneGapBLEClient.showDebugLog(); };
	
	// reload app
	this.appBar.content.refreshButton.onclick = function() { 
		currentPhoneGapBLEClient.closeConnection(undefined, true, function(){
			location.reload();			
		});
	};
	// logout
	this.appBar.content.signoutButton.onclick = function() { 	
		currentPhoneGapBLEClient.closeConnection(undefined, true, function(){
			window.location = "index.html"; 
		});
	};
	
	/* the bottom bar buttons - check per page event listeners as well */
	
	// debug clear button
	this.appMenu.content.debugClearButton.onclick = function(e) { 
		currentPhoneGapBLEClient.debugData = "";
		currentPhoneGapBLEClient.appModal.content.innerHTML = currentPhoneGapBLEClient.debugData;
	};
	
	// device scan button 
	this.appMenu.content.deviceScanButton.onclick = function(e) {
		if (e.target.value == "start") {
			// Reset the device list when we scan
			currentPhoneGapBLEClient.deviceListMapping = {};
			currentPhoneGapBLEClient.startScanning();
		}
		else if (e.target.value == "stop") {
			currentPhoneGapBLEClient.stopScanning();
		}
		else {
			// button is in a starting or stopping mode - allow it to finish perhaps before sending event again?
			
		}
		//TODO: handle start/stop states and possible a "scanning" state.. maybe hook up a timer
	};	
	
	// device connect/disconnect button
	this.appMenu.content.deviceConnectButton.onclick = function(e) {
		
		if (this.value == "disconnected") {
			if (env.debugHigh) console.log("Connect to device: " + e.target.getAttribute("pid"));
			if ((e.target.getAttribute("pid") !== undefined) && (e.target.getAttribute("pid") !== null) && (e.target.getAttribute("pid") !== "")) {
				// try to connect to this pid
				currentPhoneGapBLEClient.connectToDevice(e.target.getAttribute("pid"));
			}
			else {
				if (navigator.notification) {
					navigator.notification.alert("Nothing has been selected.", null, "Notice:", "OK");
				}
				else {
					alert("Nothing has been selected");
				}
			}
		}
		
		else if (this.value == "connected") {
			if (env.debugHigh) console.log("Disconnect from device: " + currentPhoneGapBLEClient.currentlyConnectedAddress);
			// try to disconnect
			currentPhoneGapBLEClient.closeConnection();
		}
		
		else {
			// handle other states?
		}
		
	};
	
	// open project button
	this.appMenu.content.projectOpenButton.onclick = function(e) {
		
		if (env.debug) console.log("Open project: " + e.target.getAttribute("pid"));
		
		// make sure this is set to something before trying to load a project
		if ((e.target.getAttribute("pid") !== undefined) && (e.target.getAttribute("pid") !== null) && (e.target.getAttribute("pid") !== "")) {
			localStorage.setItem("openProject", e.target.getAttribute("pid"));
			
			if (currentPhoneGapBLEClient.isConnected) {
				currentPhoneGapBLEClient.closeConnection(undefined, true, function() {
					location.reload();
				});
			}
			else {
				location.reload();
			}
			
		}
		else {
			if (navigator.notification) {
				navigator.notification.alert("Nothing has been selected.", null, "Notice:", "OK");
			}
			else {
				alert("Nothing has been selected");
			}
		}
		
	};
	
	// open last built button
	this.appMenu.content.projectBuiltButton.onclick = function(e) {
		if (env.debug) console.log("Open project: last build");
		localStorage.setItem("openProject", "");
		
		if (currentPhoneGapBLEClient.isConnected) {
			currentPhoneGapBLEClient.closeConnection(undefined, true, function() {
				location.reload();
			});
		}
		else {
			location.reload();
		}
		
	};
	
	// if window touch is available
	if (window.ontouchstart !== undefined) {
		document.body.addEventListener("touchend", function(e) {
			currentPhoneGapBLEClient.handleTaps(e);
		});
	} 
	else { 
		// add click event listener   
		document.body.addEventListener("click", function(e) {
			currentPhoneGapBLEClient.handleTaps(e);	
		});		
	}

}

// setup prototype
PhoneGapBLEClient.prototype = Object.create(StandaloneClient.prototype);
PhoneGapBLEClient.prototype.constructor = PhoneGapBLEClient;

PhoneGapBLEClient.prototype.toggleMenu = function(state) { 
	StandaloneClient.prototype.toggleMenu.call(this, state);
	if(this.currentPage === undefined) {
		this.showDeviceList();
	}
};

// load project list function
PhoneGapBLEClient.prototype.showProjectList = function() {
	this.clearMenuClass();
	this.appBar.content.projectButton.className = "selected";
	this.currentPage = "project";
	this.appModalHeader.innerHTML = 'Project List';
	this.appModal.content.innerHTML = '<div class="loader"></div>';
	if (env.debug) console.log("Project List " + env.projectList);
	if (env.projectList) {
		this.getProjectList();
	}
	else {
		if (env.debug) console.log("Project list does not appear to be enabled");
		this.appModal.content.innerHTML = "Project list not available offline or in demo mode.";
	}
	this.appMenu.content.devicePageButtons.style.display = "none";
	this.appMenu.content.projectPageButtons.style.display = "inline";
	this.appMenu.content.debugPageButtons.style.display = "none";		
};

PhoneGapBLEClient.prototype.showDeviceList = function() {	
	this.clearMenuClass();
	this.appBar.content.scanButton.className = "selected";
	this.currentPage = "device";
	this.appModalHeader.innerHTML = 'Device List';
	this.appModal.content.innerHTML = '<div class="loader"></div>';
	this.loadDeviceList();
	this.appMenu.content.devicePageButtons.style.display = "inline";
	this.appMenu.content.projectPageButtons.style.display = "none";
	this.appMenu.content.debugPageButtons.style.display = "none";
};

PhoneGapBLEClient.prototype.initialize = function() {
	var currentPhoneGapBLEClient = this;
	
	if (env.debug) console.log ("Waiting for device ready...");
	
	document.addEventListener('deviceready', function() {
	   
		bluetoothle.initialize(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);					
			}, 
			
			function(retObject) {
				currentPhoneGapBLEClient.error(retObject);
			}, {"request":true});
		
		// stop any existing scans
		bluetoothle.stopScan();
		
		currentPhoneGapBLEClient.onReady();
		
	}, false);
	
};

PhoneGapBLEClient.prototype.getScreenInfo = function() {
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;		
	this.screenPixelRatio = window.devicePixelRatio || 1;
};

PhoneGapBLEClient.prototype.readyUI = function() {
	
	// readyUI should never fire if this.app isn't already set so this is a useless check IMHO -matt
	/*
	if((this.app === undefined) {
		// an uncaught issue made it this far
		
	}
	else if (this.app.initialize === undefined) {
		//
		
	} 
	*/

	//Check to see if we were given a container, if not run in the main root canvas fullscreen.
	if(this.root === null || this.root === undefined) {
		this.canvas = new zebra.ui.zCanvas("main");
		this.canvas.fullScreen();
		this.root = this.canvas.root;
	}
	
	this.getScreenInfo();
	this.root.setLayout(new zebra.layout.BorderLayout(0,0));
	this.mainPanel = new zebra.ui.Panel();
	this.mainPanel.setLayout(new zebra.layout.RasterLayout());
	this.root.add(zebra.layout.CENTER, this.mainPanel);
	this.appPanel = new zebra.ui.Panel();
	this.appPanel.setLayout(new zebra.layout.RasterLayout());
	this.appPanel.setBounds(0, 0, this.root.width, this.root.height);
	this.mainPanel.add(this.appPanel);	
	
	this.debugLog("Your Screen is (width, height, pixel ratio) = (" + this.screenWidth + "," + this.screenHeight + "," + this.screenPixelRatio + ")");
	this.app.initialize();
	this.appPanel.requestFocus();

};

PhoneGapBLEClient.prototype.onReady = function() {
	var currentPhoneGapBLEClient = this;
	
	// hide the iOS statusbar from the canvas web view 
	try { 
		StatusBar.hide(); //THIS IS SPECIFIC TO PHONEGAP CLIENT
	}
	catch (err) {
		// no need for an err
	}
	
	if(this.root === null || this.root === undefined) {
		zebra.ready(function(){
			currentPhoneGapBLEClient.readyUI();
			// client ready doesn't really do anything
			currentPhoneGapBLEClient.clientReady();
		});
	}
	else {
		this.readyUI();
		// client ready doesn't really do anything
		this.clientReady();
	}
};

PhoneGapBLEClient.prototype.getProjectList = function() {
	var currentPhoneGapBLEClient = this;
	var creds, user, pass;
	
	var loadStore = localStorage.getItem("tempLogin");
	
	if ((loadStore === undefined) || (loadStore === null)) {
		if (env.debug) console.log("Atmosphere login credentials not found!");
		return;
	}
	
	// Load up the user and contact the server 
	creds = JSON.parse(loadStore);
	user = creds.user;
	pass = creds.pass;			
	
	var session=btoa(btoa(user)+"|"+btoa(pass));
	
	var url = env.apiUrl + "fetch_projects.php?data=" + session;	
	
	var xhr = new XMLHttpRequest();
	
	if (env.debug) console.log("Fetching latest project list");
	
	xhr.addEventListener('readystatechange', function() {
		if (env.debugHigh) {
			console.log("XHR " + xhr.readyState + " : " + xhr.status);
		}
		
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (xhr.responseText == "false") {
				// no need to do anything really if this happens
			}
			
			else {
				global.projectList = xhr.responseText;
				currentPhoneGapBLEClient.loadProjectList(xhr.responseText);
			}
		}
		
		if (xhr.readyState == 4 && xhr.status === 0) {
			if (env.debug) {
				console.log("No internet connection found, cannot load project list");
			}
			
		currentPhoneGapBLEClient.debugLog("No internet connection found, cannot load project list");
		currentPhoneGapBLEClient.appModal.content.innerHTML = "Project list not available offline or in demo mode.";
		}
						 
	}, false);
	
	xhr.open('get', url, true);
	xhr.send();
};

PhoneGapBLEClient.prototype.loadProjectList = function(currentList) {
	
	// sort this thing by alphabet and ignore case
	function compare(a,b) {
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1;
		if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1;
		return 0;
	}
	
	try {
		currentList = JSON.parse(currentList);
	}
	
	catch(e) {
		console.log("Failed to parse Project List data...");
		return;
	}
	
	currentList.sort(compare);
	
	var count = 0;
	var plistHtml = '';
	
	for (var i = 0; i < currentList.length; i++) {	
		if (currentList[i].type !== "bcm43364") {
			count++;
			var fulluuid = currentList[i].project_uuid;	
			var name = currentList[i].name;
			var modifiediso = currentList[i].modified.split("T");
			var modified = modifiediso[0] + " " + modifiediso[1].substring(0,8); 			
			if ((count % 2) === 0) {
				plistHtml += '<div id="'+fulluuid+'" tabindex="-1" class="even plist">';
			}
			else {
				plistHtml += '<div id="'+fulluuid+'" tabindex="-1" class="odd plist">';
			}
			plistHtml += 'Name: '+name+'<br>';
			plistHtml += 'UUID: '+fulluuid+'<br>';
			plistHtml += 'Modified: '+modified+'<br>';			
			plistHtml += '</div>';
		}
	}
	this.appModal.content.innerHTML = plistHtml;
	this.appMenu.content.projectOpenButton.setAttribute('pid', '');
};

PhoneGapBLEClient.prototype.loadDeviceList = function() {
	var currentList = this.deviceListMapping;
	
	if (Object.keys(currentList).length === 0) {
		this.appModal.content.innerHTML = "No devices found.";
		this.appMenu.content.projectOpenButton.setAttribute('pid', '');
	}
	else {
		var count = 0;
		var plistHtml = '';
		
		for (var device in currentList) {		
			count++;
			var address = currentList[device].address;	
			var name = currentList[device].name;
			var rssi = currentList[device].rssi;
			var plistClass;
			var state = "";
			
			if ((count % 2) === 0) {
				plistClass = "even dlist";
			}
			else {
				plistClass = "odd dlist";
			}
			// add special class to highlight currently connected device in list
			if (address == this.currentlyConnectedAddress) {
				plistClass += " connected";	
				state = "<div class='ble'></div>";
			}
			plistHtml += '<div id="'+address+'" tabindex="-1" class="'+plistClass+'">';
			plistHtml += '<div id="'+address+'_state" class="connectedState">'+state+'</div>';
			plistHtml += '<span id="'+address+'_name" class="deviceName">Name: '+name+'</span><br>';
			plistHtml += '<span id="'+address+'_address" class="deviceAddress">Address: '+address+'</span><br>';
			plistHtml += '<span id="'+address+'_rssi" class="deviceRSSI">RSSI: '+rssi+'</span>';	
			plistHtml += '</div>';
		}
		
		if(this.currentPage === 'device') {
			this.appModal.content.innerHTML = plistHtml;
			this.appMenu.content.deviceConnectButton.setAttribute('pid', '');
		}
	}
	
};

PhoneGapBLEClient.prototype.updateDeviceList = function(device) {
	// this is a new device
	if (this.deviceListMapping[device.address] === undefined) {
		this.deviceListMapping[device.address] = device;
		var currentList = this.deviceListMapping;
		var count = 0;
		var plistHtml = '';		
		for (var devices in currentList) {		
			count++;
			var address = currentList[devices].address;	
			var name = currentList[devices].name;
			var rssi = currentList[devices].rssi;
			var plistClass;
			var state = "";
			
			if ((count % 2) === 0) {
				plistClass = "even dlist";
			}
			else {
				plistClass = "odd dlist";
			}
			// add special class to highlight currently connected device in list
			if (address == this.currentlyConnectedAddress) {
				plistClass += " connected";	
				state = "<div class='ble'></div>";
			}
			plistHtml += '<div id="'+address+'" tabindex="-1" class="'+plistClass+'">';
			plistHtml += '<div id="'+address+'_state" class="connectedState">'+state+'</div>';
			plistHtml += '<span id="'+address+'_name" class="deviceName">Name: '+name+'</span><br>';
			plistHtml += '<span id="'+address+'_address" class="deviceAddress">Address: '+address+'</span><br>';
			plistHtml += '<span id="'+address+'_rssi" class="deviceRSSI">RSSI: '+rssi+'</span>';	
			plistHtml += '</div>';
		}
		
		if(this.currentPage === "device") {
			this.appModal.content.innerHTML = plistHtml;
		}
	}
	else {
		if (this.deviceListMapping[device.address].rssi != device.rssi) {
			// live scan rssi update
			if(this.currentPage === "device") {
				var curdev = document.getElementById(device.address+"_rssi");
				if (curdev !== undefined && curdev !== null) {
					curdev.innerHTML = 'RSSI: '+device.rssi;
				}
			}
		}
	}
};

PhoneGapBLEClient.prototype.getCloudCredentials = function(callback) {
	var currentPhoneGapBLEClient = this;
	
	if (env.debug) {
		console.log("Getting Atmosphere Cloud Credentials");
	}
	
	if(this.cloudCredentialsOnEmbedded === true || this.cloudCredentialsOnEmbedded === undefined) {
		bluetoothle.read(
			function(retObject) {
				if (env.debug) console.log("Read Return From Atmosphere Cloud Credentials");
						if (env.debug) console.log(retObject.value);
						var data = atob(retObject.value);
				var pipeSplit = data.split('|');
				if (env.debug) console.log(pipeSplit);
						if(pipeSplit.length < 2 || pipeSplit[1] === undefined) {
							callback.call(currentPhoneGapBLEClient, null, null);
							return;
						}
						
						var uuid = pipeSplit[0];
				var token = pipeSplit[1].replace(/\W/g, '');
				
				if ((uuid === undefined || token === undefined)) {
					callback.call(currentPhoneGapBLEClient, null, null);
					return;
				}
				
				if ( /[^a-zA-Z0-9-]/.test( uuid.toString() ) || /[^a-zA-Z0-9-]/.test( token.toString() ) ) {
					callback.call(currentPhoneGapBLEClient, null, null);
					return;
				}
				
				callback.call(currentPhoneGapBLEClient, uuid, token);
				return;
			},
			
			function(retObject) {
				callback.call(currentPhoneGapBLEClient, null, null);
				return;
			},
			
			{
				"address":this.currentlyConnectedAddress, 
				"service":"bfe433cf-6b5e-4368-abab-b0a59666a402", 
				"characteristic":"bfe433cf-6b5e-4368-abab-b0a59666a403"			
			}
		);
	}
	
	else {
		var buildUuid = window.localStorage.getItem('cloudCredentialsBuildUuid_' + this.currentlyConnectedAddress);
		var serviceUuid = window.localStorage.getItem('cloudCredentialsProjectUuid_' + this.currentlyConnectedAddress);
		var cloudUuid = window.localStorage.getItem('cloudCredentialsUuid_' + this.currentlyConnectedAddress);
		var cloudToken = window.localStorage.getItem('cloudCredentialsToken_' + this.currentlyConnectedAddress);

		if(buildUuid !== this.buildUuid || serviceUuid !== this.serviceUUID || cloudUuid === null || cloudToken === null) {
			console.log("Local stored credentials not valid!");
			callback.call(currentPhoneGapBLEClient, null, null);
			return;
		}
		
		callback.call(currentPhoneGapBLEClient, cloudUuid, cloudToken);
		return;
	}
};

PhoneGapBLEClient.prototype.setCloudCredentials = function(uuid, token, callback) {
	var currentPhoneGapBLEClient = this;
	var id = uuid || 0;
	var data = id.toString();

	if(this.cloudCredentialsOnEmbedded === true || this.cloudCredentialsOnEmbedded === undefined) {
		var t = [];
		var x;
		
		if(data.length !== 36) {
			if (env.debug) console.log("Got bad uuid from Atmosphere Cloud!");
			return;
		}
		
		for(x = 0; x < data.length; x++) {
			t.push(data.charCodeAt(x));
		}
		
		t.push("|".charCodeAt(0));
		
		var tokenData = token.toString();
		
		for(x = 0; x < tokenData.length; x++) {
			t.push(tokenData.charCodeAt(x));
		}
		
		t.push(0x00);
		
		var value = new Uint8Array(t);
		var base64Value = bluetoothle.bytesToEncodedString(value);
		
		if (env.debug) {
			console.log("Sending Registration Data: " + base64Value.toString());
		}
		
		bluetoothle.write(
			function(retObject) {
				
				callback.call(currentPhoneGapBLEClient, uuid, token);
			},
			
			function(retObject) {
				callback.call(currentPhoneGapBLEClient, null, null);
			},
			
			{
				"value":base64Value,
				"address":this.currentlyConnectedAddress, 
				"service":"bfe433cf-6b5e-4368-abab-b0a59666a402", 
				"characteristic":"bfe433cf-6b5e-4368-abab-b0a59666a403"			
			}
		);
	}
	
	else {
		window.localStorage.setItem('cloudCredentialsBuildUuid_' + this.currentlyConnectedAddress, this.buildUuid);
		window.localStorage.setItem('cloudCredentialsProjectUuid_' + this.currentlyConnectedAddress, this.serviceUUID);
		window.localStorage.setItem('cloudCredentialsUuid_' + this.currentlyConnectedAddress, data);
		window.localStorage.setItem('cloudCredentialsToken_' + this.currentlyConnectedAddress, token);
		
		callback.call(currentPhoneGapBLEClient, data, token);
		return;
	}
};

PhoneGapBLEClient.prototype.registerDeviceToCloud = function() {
	var currentPhoneGapBLEClient = this;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		
		if (env.debug) console.log(xhttp.status);
		if (env.debug) console.log(xhttp.responseText);
		
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			
			var regData = null;
			
			try {
				regData = JSON.parse(xhttp.responseText);
			}
			
			catch(err) {
				regData = null;
			}
			
			if(regData !== null) {
				currentPhoneGapBLEClient.setCloudCredentials(regData.uuid, regData.token, function(uuid, token) {
					if(uuid === null) {
						if (env.debug) console.log("Unable to set BLE devices credentials...");
											  return;
					}
					
					currentPhoneGapBLEClient.getCloudCredentials(function(uuid, token) {
						
						if(uuid === null || token === null) {
							if (env.debug) {
								console.log("Registered to Atmosphere Cloud FAILED!");
							}
							
							currentPhoneGapBLEClient.debugLog("Failed to register to Atmosphere Cloud!");
							currentPhoneGapBLEClient.currentCloudUuid = null;
							currentPhoneGapBLEClient.currentCloudToken = null;
							return;
						}
						
						if (env.debug) {
							console.log("UUID:\"" + uuid.toString() + "\" Token:\"" + token.toString() + "\"");
						}
						
						if (env.debug) {
							console.log("Registered to Atmosphere Cloud so setting variables.");
						}
						
						currentPhoneGapBLEClient.debugLog("Registered to Atmosphere Cloud.");
						currentPhoneGapBLEClient.currentCloudUuid = uuid.toString();
						currentPhoneGapBLEClient.currentCloudToken = token.toString();
					});
				});
			}
		}
	};
	var store = localStorage.getItem("tempLogin");
	var creds = {};
	try {
		creds = JSON.parse(store);
	}
	catch(err) {
		if (env.debug) {
			console.log("Could not get user credentials.");
		}
		return;
	}
	
	if (env.debug) {
		console.log("Using the following creds: " + creds.user);
	}
	
	var pname = currentPhoneGapBLEClient.projectName.toString();
	var owner = creds.user.toString();
		
	if(navigator !== undefined && navigator.geolocation !== undefined) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				console.log("Register Data: " + "https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "meta":{"geoloc":{"lat":position.coords.latitude, "lon":position.coords.longitude}}, "owner":creds.user.toString(), "name":pname + " (new)"})));
				xhttp.open("GET", "https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "meta":{"geoloc":{"lat":position.coords.latitude, "lon":position.coords.longitude}}, "owner":creds.user.toString(), "name":pname + " (new)"})));
				xhttp.send();
			}, 
			
			function(error) {
				console.log("Register Data: " + "https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "owner":owner, "name":pname + " (new)"})));
				xhttp.open("GET", "https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "owner":owner, "name":pname + " (new)"})));
				xhttp.send();
			},
			
			{
				enableHighAccuracy: true,
				timeout: 1000,
				maximumAge: 1000
			}
		);
	}
	else {
		console.log("https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "owner":owner, "name":pname + " (new)"})));
		xhttp.open("GET", "https://" + currentPhoneGapBLEClient.cloudUrl + "/register/direct/" + encodeURIComponent(JSON.stringify({"pid":currentPhoneGapBLEClient.serviceUUID, "owner":owner, "name":pname + " (new)"})));
		xhttp.send();
	}

};

PhoneGapBLEClient.prototype.bleWatchdog = function(run, callback) {	
	var currentPhoneGapBLEClient = this;

	if (run) {
		var bleCheck = function(retObj) { 
			if (retObj.isEnabled) {
				setTimeout(function() { 
					currentPhoneGapBLEClient.bleWatchdog(true, callback);
				}, 100);
			}
			else {
				currentPhoneGapBLEClient.bleWatchdog(false, callback);
			}
		};
		bluetoothle.isEnabled(bleCheck);
	}
	else {
		// command was called to stop the watchstop
		typeof callback === 'function' && callback();
	}
};

PhoneGapBLEClient.prototype.startScanning = function() {
	var currentPhoneGapBLEClient = this;
	
	console.log("startScanning: Service UUID:" + this.serviceUUID.toString());
	
	if (device.platform == iOSPlatform) {
		bluetoothle.startScan(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);					
			}, 
			
			function(retObject) {
				currentPhoneGapBLEClient.error(retObject);
				
			}, {"services": [this.serviceUUID]});
	}
	else if(device.platform == androidPlatform) {
		bluetoothle.startScan(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);					
			}, 
			
			function(retObject) {
				currentPhoneGapBLEClient.error(retObject);
				
			}, {"services": []});
	}
};

PhoneGapBLEClient.prototype.stopScanCheck = function(retObject) { 
	var currentPhoneGapBLEClient = this;
	
	if (retObject.isEnabled) {
		bluetoothle.stopScan(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);					
			}, 
			
			function(retObject) {
				currentPhoneGapBLEClient.error(retObject);
				
			}
		);
	}
	else {
		// BLE is off - reset the app buttons
		this.scanner.className = "";
		this.appMenu.content.deviceScanButton.value = "start";
		this.appMenu.content.deviceScanButton.innerHTML = "Scan";	
		this.isScanning = false;
		this.bleWatchdog(false);
		// skip the error callback and call stopScan just in case
		bluetoothle.stopScan(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);					
			}
		);
	}
};

PhoneGapBLEClient.prototype.stopScanning = function() {
	var currentPhoneGapBLEClient = this;
	
	// check if BLE is enabled then run the stop scan function
	bluetoothle.isEnabled(
		function(retObject) {
			currentPhoneGapBLEClient.stopScanCheck(retObject);					
		}
	);
	
};

PhoneGapBLEClient.prototype.connectToDevice = function(address) {
	var currentPhoneGapBLEClient = this;
	
	if (env.debug) console.log("connectToDevice: " + address);
	
	for(var k = 0; k < this.connections.length; k++)	{
		this.connections[k].connecting();
	}
	
	this.appMenu.content.deviceConnectButton.innerHTML = "Connecting";
	this.appMenu.content.deviceConnectButton.value = "connecting";
	
	clearTimeout(this.connectionTimeout);
	
	this.connectionTimeout = setTimeout(function() {
		console.log("CONNECTION TIMEOUT REACHED");
		currentPhoneGapBLEClient.debugLog("Attempt to connect to device reached it's timeout");
		clearTimeout(currentPhoneGapBLEClient.connectionTimeout);
		currentPhoneGapBLEClient.appMenu.content.deviceConnectButton.innerHTML = "Connect";
		currentPhoneGapBLEClient.appMenu.content.deviceConnectButton.value = "disconnected";
		currentPhoneGapBLEClient.closeConnection(undefined, true);
	}, 30000);
	
	this.currentlyConnectedAddress = address;
	this.lastConnectedAddress = address;
	
	// connect with handler
	bluetoothle.connect(
		function(retObject) {
			currentPhoneGapBLEClient.success(retObject);					
		}, 
	
		function(retObject) {
			currentPhoneGapBLEClient.error(retObject);
		
		}, {"address":address});
};

PhoneGapBLEClient.prototype.closeMenuAndSetConnected = function() {
	this.toggleMenu("off");
	
	this.appMenu.content.deviceConnectButton.innerHTML = "Disconnect";
	this.appMenu.content.deviceConnectButton.value = "connected";
	
	this.appModal.content.connectedDevice = document.getElementById(this.currentlyConnectedAddress);
	this.appModal.content.connectedDeviceState = document.getElementById(this.currentlyConnectedAddress+"_state");
	
	if (this.appModal.content.connectedDevice) {
		if(!this.appModal.content.connectedDevice.classList.contains("connected")) {
			this.appModal.content.connectedDevice.className += "connected";
			this.appModal.content.connectedDeviceState.innerHTML = "<div class='ble'></div>";
		}
	}	
	
	this.debugLog("Connected to device: " + this.currentlyConnectedAddress);
	
	this.isConnected = true;
};

PhoneGapBLEClient.prototype.completeConnection = function() {
	var currentPhoneGapBLEClient = this;
	clearTimeout(this.connectionTimeout);
	this.connectionTimeout = null;
	
	// If Atmosphere Cloud is enabled
	if(this.cloudEnabled && this.cloudAvailable) {
		this.getCloudCredentials(function(uuid, token) {
			if(uuid === null || token === null) {
				if (env.debug) {
					console.log("Not registered to Atmosphere Cloud!");
				}
				
				currentPhoneGapBLEClient.registerDeviceToCloud();
				this.closeMenuAndSetConnected();
				return;
			}
			
			if (env.debug) {
				console.log("UUID:\"" + uuid.toString() + "\" Token:\"" + token.toString() + "\"");
				console.log("Registered to Atmosphere Cloud so setting variables.");
			}
			
			currentPhoneGapBLEClient.debugLog("Device is registered to Atmosphere Cloud.");
			currentPhoneGapBLEClient.currentCloudUuid = uuid.toString();
			currentPhoneGapBLEClient.currentCloudToken = token.toString();
			this.closeMenuAndSetConnected();
			return;
		});
	}
	
	else {
		this.closeMenuAndSetConnected();
	}
};

PhoneGapBLEClient.prototype.closeConnection = function(address, forceClosed, callback) {
	
	var currentPhoneGapBLEClient = this;
	
	forceClosed = forceClosed || false;
	address = address || this.currentlyConnectedAddress;
	
	if (this.isConnected || forceClosed) {
		
		if (env.debug) console.log("closeConnection");
		
		if(address === undefined) {
			if (env.debug) console.log("Forcing connection to close without an address, already closed? Failing gracefully...");
			callback.call(currentPhoneGapBLEClient);
			return;
		}
		
		for(var k = 0; k < this.connections.length; k++)	{
			this.connections[k].disconnecting();
		}
		
		this.currentlyConnectedAddress = "";
		
		bluetoothle.disconnect(
			function(retObject) {
				currentPhoneGapBLEClient.success(retObject);
				
				bluetoothle.close(
					function(retObject) {
						currentPhoneGapBLEClient.success(retObject);
						if(callback !== undefined && typeof callback === 'function') {
							console.log("running callback");
							callback.call(currentPhoneGapBLEClient);
						}
					}, 
					
					function(retObject) {
						currentPhoneGapBLEClient.error(retObject);
						if(callback !== undefined && typeof callback === 'function') {
							console.log("running callback");
							callback.call(currentPhoneGapBLEClient);
						}
					}, {"address":address});
			}, 
			
			function(retObject) {
				currentPhoneGapBLEClient.error(retObject);
				
				bluetoothle.close(
					function(retObject) {
						currentPhoneGapBLEClient.success(retObject);	
						if(callback !== undefined && typeof callback === 'function') {
							console.log("running callback");
							callback.call(currentPhoneGapBLEClient);
						}
					}, 
					
					function(retObject) {
						currentPhoneGapBLEClient.error(retObject);
						if(callback !== undefined && typeof callback === 'function') {
							console.log("running callback");
							callback.call(currentPhoneGapBLEClient);
						}
						
					}, {"address":address});
				
			}, {"address":address});
	}
};

PhoneGapBLEClient.prototype.success = function(retObject) {
	var currentPhoneGapBLEClient = this;
	
	if ((env.debug) && (retObject.status != "scanResult") && (retObject.status != "read") && (retObject.status != "written")) {
		console.log("Success callback: " + JSON.stringify(retObject));
	}
	else if (env.debugHigh) {
		console.log("Success callback: " + JSON.stringify(retObject));
	}
	else {
		// no log needed
	}
	
	var paramsObj = {};
	var nextService, i;
	
	//Status Types
	if(retObject.status !== undefined) {
		switch(retObject.status) {
			case "enabled":
				if (env.debug) console.log("Phonegap BLE plugin is successfully running");
				break;
				
			case "disabled":
				// iOS only it seems
				if (retObject.message == "Bluetooth powered off") {
					if (env.debug) console.log("Received a BLE shut off event callback!");
				}
				break;
				
			case "scanStarted":
				// clear the content area and reset the connect button
				this.appModal.content.innerHTML = "No devices found.";
				this.appMenu.content.projectOpenButton.setAttribute('pid', '');
				
				this.scanner.className = "scannerSpin";					
				this.appMenu.content.deviceScanButton.value = "stop";
				this.appMenu.content.deviceScanButton.innerHTML = "Stop";
				this.isScanning = true;
				// Fire the ble watchdog
				this.bleWatchdog(true, function(){currentPhoneGapBLEClient.stopScanning();});
				break;
				
			case "scanStopped":
				this.scanner.className = "";
				this.appMenu.content.deviceScanButton.value = "start";
				this.appMenu.content.deviceScanButton.innerHTML = "Scan";		
				this.isScanning = false;
				// Stop the ble watchdog
				this.bleWatchdog(false);
				break;
				
			case "scanResult":
				//FIXME: There is a bug with the service filtering when scanning with android. this is a workaround
				// SEE: https://github.com/randdusing/cordova-plugin-bluetoothle#startscan
				if (device.platform == androidPlatform) {
					var advData = retObject.advertisement;
					var rawData = atob(advData);
					var serviceUuid = "";
					for(i = 20; i >= 5; i--) {
						serviceUuid = serviceUuid + ("00" + rawData.charCodeAt(i).toString(16)).slice(-2);
						if(i == 17 || i == 15 || i == 13 || i == 11) {
							serviceUuid = serviceUuid + "-";
						}
					}
					if(serviceUuid !== this.serviceUUID) {
						return;
					}
				}
				this.updateDeviceList(retObject);
				break;
				
			case "connected":
				this.appMenu.content.deviceConnectButton.innerHTML = "Discovering";
				this.appMenu.content.deviceConnectButton.value = "discovering";
				
				if (device.platform == iOSPlatform)	{
					if (env.debug) console.log("Discovering services");
					paramsObj = {"address":this.currentlyConnectedAddress, "services":[]};
					bluetoothle.services(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, paramsObj);
				}
				// android
				else {
					if (env.debug) console.log("Beginning discovery");
// 					paramsObj = {"address":this.currentlyConnectedAddress, "clearCache": true};
					paramsObj = {"address":this.currentlyConnectedAddress};
					var priorityObj = {"address":this.currentlyConnectedAddress, "connectionPriority":"high"};
					bluetoothle.requestConnectionPriority(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, priorityObj);
					bluetoothle.discover(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, paramsObj);
				}
				
				break;	
				
			case "disconnected":
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";
				
				this.currentlyConnectedAddress = "";
				this.isConnected = false;
				this.currentCloudUuid = null;
				this.currentCloudToken = null;   
				
				this.loadDeviceList();
				this.debugLog("Disconnected from device: " + this.lastConnectedAddress);				
				this.closeConnection(retObject.address);		
				break;
				
			case "closed":
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";
							
				this.currentlyConnectedAddress = "";
				this.isConnected = false;
				this.currentCloudUuid = null;
				this.currentCloudToken = null;
				
				this.loadDeviceList();
				this.debugLog("Closed connection to device: " + this.lastConnectedAddress);
				break;
				
			//iOS only
			case "services":
				if (env.debug) console.log("Checking for characteristic");
				var serviceUuids = retObject.services;
				for (var j = 0; j < serviceUuids.length; j++) {
					this.foundServices.push(serviceUuids[j]);
				}
				if (env.debug) console.log("Finding characteristics");
				nextService = this.foundServices.shift();
				if(nextService !== undefined) {
					if(nextService.toLowerCase() === "bfe433cf-6b5e-4368-abab-b0a59666a402") {
						this.cloudAvailable = true;
					}
					paramsObj = {"address":this.currentlyConnectedAddress, "service":nextService};
					bluetoothle.characteristics(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, paramsObj);
				}
				break;
				
			//iOS only
			case "characteristics":
				if (env.debug) console.log("Finding characteristics");
				nextService = this.foundServices.shift();
				if(nextService !== undefined) {
					paramsObj = {"address":this.currentlyConnectedAddress, "service":nextService};
					bluetoothle.characteristics(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, paramsObj);
				}
				else { 
					paramsObj = {"address":this.currentlyConnectedAddress, "service":this.serviceUUID, "characteristic":this.notifyUUID};
					bluetoothle.subscribe(
						function(retObject) {
							currentPhoneGapBLEClient.success(retObject);					
						}, 
						
						function(retObject) {
							currentPhoneGapBLEClient.error(retObject);
							
						}, paramsObj);
					this.completeConnection();
				}
				break;	
				
			//Android only - true success here for a connection to android here
			case "discovered":	
				
				for(i = 0; i < retObject.services.length; i++) {
					//Look to see if the device has a Atmosphere Cloud credential defined.
					if(retObject.services[i].uuid.toLowerCase() === "bfe433cf-6b5e-4368-abab-b0a59666a402") {
						this.cloudAvailable = true;
					}
				}
				
				paramsObj = {"service":this.serviceUUID, "characteristic":this.notifyUUID,"isNotification":true, "address":this.currentlyConnectedAddress};
				
				//Subscribe to the global callback, this is needed for notifications.
				bluetoothle.subscribe(
					function(retObject) {
						currentPhoneGapBLEClient.success(retObject);					
					}, 
					
					function(retObject) {
						currentPhoneGapBLEClient.error(retObject);
						
					}, paramsObj);
				
				this.completeConnection();
				
				break;	
				
			case "subscribedResult":
				if((retObject.service.toLowerCase() == this.serviceUUID) && (retObject.characteristic.toLowerCase() == this.notifyUUID)) {
					if (env.debug) console.log("subscribedResult: data:" + atob(retObject.value));	
					var data = atob(retObject.value);
					var code = data.charCodeAt(0);
					var id = data.charCodeAt(1);
					if(this.functionMapping[id] !== undefined) {
						this.functionMapping[id].notifyReturnedCallback(data.substring(2));
					}
				}
				break;			
				
			case "read":
				break;
				
			case "written":
				break;
			
			case "connectionPriorityRequested":
				break;
				
			default:
				if (env.debug) {					
					console.log("Success not handled by client!");
					console.log(currentPhoneGapBLEClient.xinspect(retObject));
				}
				break;
		}
	}
	
	//Give all the scanner, and connection elements a chance to act on the new ble information.
	var k = 0;
	
	for(k = 0; k < this.scanners.length; k++) {
		this.scanners[k].bleCallbackHandler(retObject);
	}
	
	for(k = 0; k < this.connections.length; k++)	{
		this.connections[k].bleCallbackHandler(retObject);
	}		
};

PhoneGapBLEClient.prototype.error = function(retObject) {
	var currentPhoneGapBLEClient = this;
	
	if (env.debug) console.log("Error callback: " + JSON.stringify(retObject));

	var paramsObj = {};
	var nextService;
	
	if (retObject.error !== undefined) {
		switch(retObject.error) {
			
			// most serious error - bluetooth not enabled
			case "enable":
				navigator.notification.alert("Error notice: " + retObject.message, null, "Error", "Ok");
				break;
			case "startScan":
				// ignore not scanning but act on other scan failed messages
				if (retObject.message != "Not scanning") {
					if (retObject.message == "Scanning already in progress") {
						// quietly stop the scan and try scanning again
						bluetoothle.stopScan(
							function() { 
								bluetoothle.startScan(
									function(retObject) {
										currentPhoneGapBLEClient.success(retObject);					
									}, 
									
									function(retObject) {
										currentPhoneGapBLEClient.error(retObject);
										
									}
								); 
							}, 
						   
							function(retObject) {
								currentPhoneGapBLEClient.error(retObject);
							}
						);
					}
					else {
						navigator.notification.alert("Scan failed for the following reason: " + retObject.message, null, "Scan Failed", "Ok");
						bluetoothle.stopScan(
							function(retObject) {
								currentPhoneGapBLEClient.success(retObject);					
							}, 
							
							function(retObject) {
								currentPhoneGapBLEClient.error(retObject);
							}
						);
					}	
				}
				break;
			case "connect":
				this.isConnected = false;
				
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";
				
				if(retObject.address !== undefined) {
					this.closeConnection(retObject.address, true, function(){
						this.connectToDevice(retObject.address);
					});
				}
				
				break;
			case "isNotDisconnected":
				this.isConnected = false;
				
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";
				
				this.closeConnection(retObject.address, true, function(){
					this.connectToDevice(retObject.address);
				});
				
				break;
			case "read":
				this.debugLog("Read Error: Unable to read characteristic from target device: " + retObject.service + ':' + retObject.characteristic);
				break;				
			case "write":
				this.debugLog("Write Error: Unable to write characteristic to target device: " + retObject.service + ':' + retObject.characteristic);
				break;
			case "neverConnected":
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";		
				this.isConnected = false;
				
				break;
			case "isDisconnected":
				this.appMenu.content.deviceConnectButton.innerHTML = "Connect";
				this.appMenu.content.deviceConnectButton.value = "disconnected";				
				this.isConnected = false;
				
				break;	
			default:
				if (env.debug) console.log("Error not handled by client!");
				break;
		}
	}
	
	
	for(var k = 0; k < this.scanners.length; k++) {
		this.scanners[k].bleCallbackHandler(retObject);
	}
	
	for(var l = 0; l < this.connections.length; l++)	{
		this.connections[l].bleCallbackHandler(retObject);
	}
	
};

// when a device in the device list is touched, it calls this function
PhoneGapBLEClient.prototype.setSelectedDevice = function(target) {
	
	this.appMenu.content.deviceConnectButton.setAttribute('pid', target);
	var last = document.getElementById(this.lastSelectedDevice);
	
	// clear last devices selected class as a new device is now selected
	if ((last !== undefined) && (last !== null)) {
		if (last.classList.contains("odd")) {
			last.className = "odd dlist";
		}
		else {
			last.className = "even dlist";
		}
	}
	
	var elClass = document.getElementById(target).className;
	// if it's connected don't give it the selected class
	if(!(document.getElementById(target).classList.contains("connected"))) {
		if(!(document.getElementById(target).classList.contains("selected"))) {	
			document.getElementById(target).className = elClass + " selected";
		}
	}	
	
	this.lastSelectedDevice = target;
};

//when a project in the project list is touched, it calls this function
PhoneGapBLEClient.prototype.setSelectedProject = function(target) {
	
	this.appMenu.content.projectOpenButton.setAttribute('pid', target);
	var last = document.getElementById(this.lastSelectedProject);
	
	// clear last projects selected class as a new device is now selected
	if ((last !== undefined) && (last !== null)) {
		if (last.classList.contains("odd")) {
			last.className = "odd plist";
		}
		else {
			last.className = "even plist";
		}
	}
	
	var elClass = document.getElementById(target).className;
	// dont add selected twice to the className
	if(!(document.getElementById(target).classList.contains("selected"))) { 
		document.getElementById(target).className = elClass + " selected";
	}  
	
	this.lastSelectedProject = target;
	
};

PhoneGapBLEClient.prototype.xinspect = function(o,i) {
	if(typeof i=='undefined')i='';
	if(i.length>50)return '[MAX ITERATIONS]';
	var r=[];
	for(var p in o){
		var t=typeof o[p];
		r.push(i+'"'+p+'" ('+t+') => '+(t=='object' ? 'object:'+xinspect(o[p],i+'  ') : o[p]+''));
	}
	return r.join(i+'\n');
};

PhoneGapBLEClient.prototype.handleTaps = function(e) {
	var currentPhoneGapBLEClient = this; 
	currentPhoneGapBLEClient.timeOut = setTimeout(function() {
		 var selectedDevice;
		 var selectedProject;
		 if (e.target.nodeName == "DIV") {
			 if(e.target && e.target.classList.contains("plist")) {
				 currentPhoneGapBLEClient.setSelectedProject(e.target.id);
			 }
			 else if(e.target && e.target.classList.contains("dlist")) {
				 selectedDevice = e.target.id;
				 if ((selectedDevice !== undefined) && (selectedDevice !== null)) {
					 currentPhoneGapBLEClient.setSelectedDevice(selectedDevice);
				 }
			 }   
			 
		 }
		 else if (e.target.nodeName == "SPAN") {
			 if(e.target.parentNode && e.target.parentNode.classList.contains("dlist")) {
				 selectedDevice = e.target.parentNode.id;
				 if ((selectedDevice !== undefined) && (selectedDevice !== null)) {
					 currentPhoneGapBLEClient.setSelectedDevice(selectedDevice);
				 }
			 }	 
		 }	  
	}, 100);
};
