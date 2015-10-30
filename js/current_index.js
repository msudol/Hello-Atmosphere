var iOSPlatform = "iOS";
var androidPlatform = "Android";

var baseApp = {
	bleready:false,
	currentScanResults:{},
	scanners:[],
	connections:[],
	functionMapping:{},
	isConnected:false,
	connectionTimeout:null,
	bleCommandStack:[],
	currentBLECommandElement:null,
	foundServices:[],

	POST:function(url, data, callback, headers) {
		var xmlhttp;

		// build the data using FormData (requires browser support - this should get tested)
		var formData = new FormData();
		
		for (var key in data) {
			if(data.hasOwnProperty(key)) {
				formData.append(key, data[key]);
			}
		}

		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}     
		
		// setup a callback function if it is defined
		if (callback !== null && callback !== undefined) {	
			xmlhttp.onreadystatechange=function() {
				if(xmlhttp.readyState == 4) {
					callback(xmlhttp);
				}
			};
			xmlhttp.ontimeout=function() {
				callback(xmlhttp);
			};
		}
		
		// open request to url async
		xmlhttp.open("POST", url, true);
		
		// headers is either sent headers or new object
		headers = headers || {};
			
		// default content-type 
		if (headers["Content-Type"] === undefined) {
			headers["Content-Type"] = "application/x-www-form-urlencoded";
		}
		
		// default connection header
		if (headers["Connection"] === undefined) {
			headers["Connection"] = "close";
		}
		
		// set the content length header from the formdata 
		headers["Content-Length"] = formData.length;

		// set up headers
		for(var k in headers) {
			if(headers.hasOwnProperty(k)) {
				xmlhttp.setRequestHeader(k.toString(), headers[k]);
			}
		}

		// send it
		xmlhttp.send(formData);   
	},
	
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	setAppVisible:function() {
		app.appPanel.setVisible(true);
		app.devWrapperPanel.setVisible(false);
		app.debugWrapperPanel.setVisible(false);
	},
	
	setDevVisible:function(value) {
		app.appPanel.setVisible(false);
		app.devWrapperPanel.setVisible(true);
		app.debugWrapperPanel.setVisible(false);
	},
	
	setDebugVisible:function(value) {
		app.appPanel.setVisible(false);
		app.devWrapperPanel.setVisible(false);
		app.debugWrapperPanel.setVisible(true);
	},
	
	debugLog:function(data) {
		
		if ((app.consoleTextArea !== undefined) && (app.consoleTextArea !== null)) {
			if ((app.consoleTextArea.getValue() !== undefined) && (app.consoleTextArea.getValue() !== null)) {
				var curConsole = app.consoleTextArea.getValue();
				if (curConsole.length > 50000) {
					app.consoleTextArea.setValue(curConsole(substring(40000)) + "\n" + data);
				}
				else {
					app.consoleTextArea.setValue(curConsole + "\n" + data);
				}
			}
			else {
				app.consoleTextArea.setValue(data);
			}
		}
		
		console.log(data);
	},
	
	startBLECommand : function(me, base64Value) {
		console.log("startBLECommand");
		
		baseApp.currentBLECommandElement = me;
		bluetoothle.write(me.valueWriteSuccessCallback, me.valueWriteFailedCallback, {"address":baseApp.currentlyConnectedAddress, "value":base64Value, "serviceUuid":app.serviceUUID, "characteristicUuid":me.uuid});
	},
	
	endCurrentBLECommand : function () {
		console.log("endCurrentBLECommand");
		
		baseApp.currentBLECommandElement = null;
		
		baseApp.executeNextBLECommand();
	},
	
	addBLECommand : function (me, commandType, data) {
		console.log("addBLECommand");
		
		baseApp.bleCommandStack.push({me:me, commandType:commandType, data:data});
		baseApp.executeNextBLECommand();
	},
	
	executeNextBLECommand : function() {
		
		console.log("executeNextBLECommand");
		
		if(!baseApp.isConnected) {
			return;
		}
		
		if(baseApp.currentBLECommandElement === null) {
			var nextCommand = baseApp.bleCommandStack.shift();
			
			if(nextCommand !== undefined && nextCommand !== null) {
				nextCommand.me.bleReadyCallback(nextCommand.commandType, nextCommand.data);
			}
		}
	},
	
	onDeviceReady: function() {
		bluetoothle.initialize(baseApp.initializeSuccess, baseApp.initializeFailed, {"request":true});
		
		baseApp.screenWidth = window.innerWidth;
		baseApp.screenHeight = window.innerHeight;
		baseApp.screenPixelRatio = window.devicePixelRatio || 1;
		baseApp.currentlyConnectedAddress = "";
		
		zebra.ready(function() {
			
			//Something went wrong with loading the application
			try {
				if(app === undefined) {
				}
			} catch(err) {
				app = {};
				app.airError = true;
				app.initialize = function() {
					return;
				};
			}
			
			app.deviceListMapping = {};
			
			
			app.canvas = new zebra.ui.zCanvas("main");
			app.canvas.fullScreen();
			app.root = app.canvas.root;
			//app.root.setLayout(new zebra.layout.RasterLayout());
			app.root.setLayout(new zebra.layout.BorderLayout(0,0));
			
			app.mainPanel = new zebra.ui.Panel();
			app.mainPanel.setLayout(new zebra.layout.RasterLayout());
			app.root.add(zebra.layout.CENTER, app.mainPanel);
			
			app.appPanel = new zebra.ui.Panel();
			app.appPanel.setLayout(new zebra.layout.RasterLayout());
			app.appPanel.setBounds(0, 0, app.root.width, app.root.height);
			app.mainPanel.add(app.appPanel);
			
			app.devWrapperPanel = new zebra.ui.Panel();
			app.devWrapperPanel.setLayout(new zebra.layout.RasterLayout());
			app.devWrapperPanel.setBounds(0, 0, app.root.width, app.root.height);
			app.mainPanel.add(app.devWrapperPanel);
			
			app.debugWrapperPanel = new zebra.ui.Panel();
			app.debugWrapperPanel.setLayout(new zebra.layout.RasterLayout());
			app.debugWrapperPanel.setBounds(0, 0, app.root.width, app.root.height);
			app.mainPanel.add(app.debugWrapperPanel);
			
			//Build the app panel
			app.devToolButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/gears.png"));
			app.devToolButton.setBounds(app.root.width - 64, app.root.height - 64, 64, 64);
			
			app.devToolButton.mousePressed = function(e) {
				baseApp.setDevVisible();
			};
			
			//Build the devtool panel
			app.devToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/close.png"));
			app.devToolCloseButton.setBounds(app.root.width - 64, app.root.height - 64, 64, 64);
			
			app.devToolCloseButton.mousePressed = function(e) {
				baseApp.setAppVisible();
			};
			
			app.logoutButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/logout.png"));
			app.logoutButton.setBounds(0, app.root.height - 64, 64, 64);
			app.logoutButton.mousePressed = function(e) {
				baseApp.stopScanning();
				baseApp.disconnectFromDevice();
				window.location = "index.html";
			};
			
			app.refreshButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/refresh.png"));
			app.refreshButton.setBounds(app.root.width - 130, app.root.height - 64, 64, 64);
			
			app.refreshButton.mousePressed = function(e) {
				baseApp.stopScanning();
				baseApp.disconnectFromDevice();
				location.reload();
			};
			
			app.debugButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/ladybug.png"));
			app.debugButton.setBounds(app.root.width - 196, app.root.height - 64, 64, 64);
			
			app.debugButton.mousePressed = function(e) {
				baseApp.setDebugVisible();
			};
			
			app.devPanel = new zebra.ui.Panel({
				layout: new zebra.layout.BorderLayout(4,4),
				background: "white",
				padding: 2,
				border: new zebra.ui.Border("lightGray", 5, 5),	
			});	

			app.devTopPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 2));

			app.devTopPanel.add(new zebra.ui.Label("Connect To Device")).properties({
			canHaveFocus: false,
			font: "20px Arial Bold",
			});

			app.devBottomPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 8));

			app.connectButton = new zebra.ui.Button("Connect").properties({
				height:44,
				width:112,
				psWidth:112,
				psHeight:44
			});
			app.connectButton.bind(function(e) {
				if(app.connectButton.find("//zebra.ui.Label").getValue() == "Connect") {
					baseApp.connectToDevice(e.airAddress);
				}
				else {
					baseApp.disconnectFromDevice();
				}
			});
			
			app.connectButton.setEnabled(false);
			
			app.devBottomPanel.add(app.connectButton);

			app.deviceList = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 4));

			app.pScroll = new zebra.ui.ScrollPan(app.deviceList, zebra.layout.VERTICAL);  	
			app.pScrollWrapper = new zebra.ui.BorderPan("Devices", app.pScroll);

			app.scanButton = new zebra.ui.Button("Scan").properties({
				height:44,
				width:112,
				psWidth:112,
				psHeight:44
			});
			
			app.scanButton.setBounds(app.root.width - 110, 96, 108, 38);
			app.scanButton.mousePressed = function(e) {
				if(app.scanButton.find("//zebra.ui.Label").getValue() == "Scan") {
					baseApp.startScanning();
				}
				else {
					baseApp.stopScanning();
				}
			};
			
			app.devBottomPanel.add(app.scanButton);
			
			app.devPanel.add(zebra.layout.TOP, app.devTopPanel);	
			app.devPanel.add(zebra.layout.CENTER, app.pScrollWrapper);	 
			app.devPanel.add(zebra.layout.BOTTOM, app.devBottomPanel);	
			app.devPanel.setBounds(22, 22, app.root.width - 44, app.root.height - 88);
			
			//Build debug panel
			app.debugToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/close.png"));
			app.debugToolCloseButton.setBounds(app.root.width - 64, app.root.height - 64, 64, 64);
			
			app.debugToolCloseButton.mousePressed = function(e) {
				baseApp.setDevVisible();
			};
			
			app.consoleClearButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/clear.png")).properties(app.defaultButtonProps);
			app.consoleClearButton.setBounds(app.root.width - 130, app.root.height - 64, 64, 64);
			
			app.consoleClearButton.bind(function(e) {
				app.consoleTextArea.setValue("");
			});
			
			app.consoleTextArea = new zebra.ui.TextArea("");
			app.consoleTextArea.setEditable("false");
			app.consoleScrollPan = new zebra.ui.ScrollPan(app.consoleTextArea);
			app.consolePanelBorderPan = new zebra.ui.BorderPan("Debug Console", app.consoleScrollPan);
			app.consolePanelBorderPan.setBorder(new zebra.ui.Border("transparent"));
			app.consolePanelBorderPan.kids[0].setColor("#222222");
			app.consolePanelBorderPan.setBounds(22, 22, app.root.width - 44, app.root.height - 88);
			
			//Init user's app
			baseApp.debugLog("Your Screen is (width, height, pixel ratio) = (" + baseApp.screenWidth + "," + baseApp.screenHeight + "," + baseApp.screenPixelRatio + ")");
			
			if(app.airError === true) {
				baseApp.debugLog("There was a critical error when attempting to try and run your project please send an export of the current Atmosphere project to a developer for debugging at support@atmosphere.anaren.com");
			}
			
			try {
				app.initialize();
				baseApp.debugLog("Using layout \"" + app.currentLayout + "\"");
			} catch (err) {
				baseApp.debugLog(err.toString());
			}
			
			//Finishing up building the UI
			app.devWrapperPanel.setVisible(false);
			app.devWrapperPanel.add(app.devPanel);
			app.devWrapperPanel.add(app.devToolCloseButton);
			app.devWrapperPanel.add(app.logoutButton);
			app.devWrapperPanel.add(app.refreshButton);
			app.devWrapperPanel.add(app.debugButton);
			
			app.debugWrapperPanel.setVisible(false);
			app.debugWrapperPanel.add(app.debugToolCloseButton);
			app.debugWrapperPanel.add(app.consoleClearButton);
			app.debugWrapperPanel.add(app.consolePanelBorderPan);
			
			app.appPanel.add(app.devToolButton);
		});
	},
	
	updateDeviceConnectionPanel: function(name, address, rssi) {
		var devicePanel = null;
		
		for(var key in app.deviceListMapping) {
			if(key == name + ":" + address) {
				devicePanel = app.deviceListMapping[name + ":" + address];
				break;
			}
		}
		
		if(devicePanel === null) {
			devicePanel = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 4));
			devicePanel.setPreferredSize(app.root.width - 44 - 50, 60);
			devicePanel.add(new zebra.ui.Label("Name: " + name));	   	
			devicePanel.add(new zebra.ui.Label("Address: " + address));	   	
			devicePanel.add(new zebra.ui.Label("RSSI: " + rssi));	  
			var deviceButton = new zebra.ui.Button();
			deviceButton.setLayout(new zebra.layout.ListLayout(zebra.layout.STRETCH));
			deviceButton.add(devicePanel);
			deviceButton.airAddress = address;
			app.deviceListMapping[name + ":" + address] = devicePanel;
			app.deviceList.add(deviceButton);
			
			deviceButton.bind(function(e) {
				console.log("Pressed " + e.airAddress);
				app.connectButton.airAddress = e.airAddress;
				app.connectButton.setEnabled(true);
				
				for(var i = 0; i < app.deviceList.kids.length; i++) {
					app.deviceList.kids[i].setBackground(new zebra.ui.Gradient("rgb(250, 250, 250)", "rgb(234, 234, 234)"));
				}
				
				e.setBackground(new zebra.ui.Gradient("#DCEBF9", "#7BAEDB"));
				
			});
			
			app.devPanel.repaint();
		}
		
		else {
			devicePanel.removeAll();
			devicePanel.add(new zebra.ui.Label("Name: " + name));	   	
			devicePanel.add(new zebra.ui.Label("Address: " + address));
			devicePanel.add(new zebra.ui.Label("RSSI: " + rssi));
			
			app.devPanel.repaint();
		}
	},
	
	startScanning: function() {
		console.log("startScanning: Serive UUID:" + app.serviceUUID.toString());
		
		if (device.platform == iOSPlatform) {
			bluetoothle.startScan(baseApp.scanSuccess, baseApp.scanFailed, {"serviceUuids": [app.serviceUUID]});
		}
		
		else if(device.platform == androidPlatform) {
			bluetoothle.startScan(baseApp.scanSuccess, baseApp.scanFailed, {"serviceUuids": []});
		}
	},
	
	stopScanning: function() {
		console.log("stopScanning");
		
		bluetoothle.stopScan(baseApp.scanSuccess, baseApp.scanFailed);
	},
	
	connectToDevice: function(address) {
		console.log("connectToDevice: " + address);
		
		baseApp.currentlyConnectedAddress = address;
		
		bluetoothle.connect(baseApp.connectedSuccess, baseApp.connectedFailed, {"address":address});
	},
	
	disconnectFromDevice: function(address) {
		console.log("disconnectFromDevice");
		
		if(address === undefined) {
			address = baseApp.currentlyConnectedAddress;
			
		}
		
		bluetoothle.disconnect(baseApp.disconnectSuccess, baseApp.disconnectFailed, {"address":address});
	},
	
	closeConnection: function(address) {
		console.log("closeConnection");
		
		if(address === undefined) {
			address = baseApp.currentlyConnectedAddress;
			
		}
		
		baseApp.connected = false;
		bluetoothle.close(baseApp.closeSuccess, baseApp.closeFailed, {"address":address});
	},
	
	reconnectToDevice: function(address) {
		console.log("reconnectToDevice");
		
		if(address === undefined) {
			address = baseApp.currentlyConnectedAddress;
			
		}
		
		bluetoothle.reconnect(baseApp.connectedSuccess, baseApp.connectedFailed, {"address":address});
	},
	
	handleBLECallback: function(retObject, fromCallback) {
		console.log("handleBLECallback");
		console.log(JSON.stringify(retObject));
		app.appPanel.repaint();
		
		//This gets re-used a lot, no need to redeclare it all the time
		var paramsObj = {};
		
		//Status Types
		if(retObject.status !== undefined) {
			switch(retObject.status) {
				case "enabled":
					break;
					
				case "scanStarted":
					app.scanButton.find("//zebra.ui.Label").setValue("Stop");
					break;
					
				case "scanStopped":
					app.scanButton.find("//zebra.ui.Label").setValue("Scan");
					break;
					
				case "scanResult":
					//FIXME: There is a bug with the service filtering when scanning with android. this is a workaround
					if (device.platform == androidPlatform) {
						
						var advData = retObject.advertisement;
						
						var rawData = atob(advData);
						
						serviceUuid = "";
						
						for(var i = 20; i >= 5; i--) {
							serviceUuid = serviceUuid + ("00" + rawData.charCodeAt(i).toString(16)).slice(-2);
							
							if(i == 17 || i == 15 || i == 13 || i == 11) {
								serviceUuid = serviceUuid + "-";
							}
							
						}
						
						if(serviceUuid !== app.serviceUUID) {
							return;
						}
					}
					
					baseApp.updateDeviceConnectionPanel(retObject.name, retObject.address, retObject.rssi);
					break;
				
				case "connecting":
					app.connectButton.find("//zebra.ui.Label").setValue("Connecting");
					baseApp.connectionTimeout = setTimeout(function() {
						console.log("CONNECTION TIMEOUT REACHED");
						baseApp.debugLog("Attempt to connect to device reached it's timeout");
						clearTimeout(baseApp.connectionTimeout);
						app.connectButton.find("//zebra.ui.Label").setValue("Connect");
						baseApp.disconnectFromDevice(retObject.address);
						
					}, 30000);
					break;
					
				case "connected":
					app.connectButton.find("//zebra.ui.Label").setValue("Discovering");
					
					if (device.platform == iOSPlatform)	{
						console.log("Discovering services");
						paramsObj = {"address":baseApp.currentlyConnectedAddress, "serviceUuids":[]};
						bluetoothle.services(baseApp.servicesSuccess, baseApp.servicesFailure, paramsObj);
					}
					
					else if (device.platform == androidPlatform) {
						console.log("Beginning discovery");
						paramsObj = {"address":baseApp.currentlyConnectedAddress, "serviceUuids":[app.serviceUUID]};
						bluetoothle.discover(baseApp.discoverSuccess, baseApp.discoverFailed, paramsObj);
					}
					break;
					
				case "disconnecting":
					app.connectButton.find("//zebra.ui.Label").setValue("Disconnecting");
					
					break;
					
				case "disconnected":
					app.connectButton.find("//zebra.ui.Label").setValue("Connect");
					baseApp.closeConnection(retObject.address);
					baseApp.isConnected = false;
					break;
					
				case "closed":
					break;
				
					
				//iOS only
				case "services":
					console.log("Checking for characteristic");
					var serviceUuids = retObject.serviceUuids;
					for (var j = 0; j < serviceUuids.length; j++) {
						baseApp.foundServices.push(serviceUuids[j]);
					}
					
					console.log("Finding characteristics");
					var nextService = baseApp.foundServices.shift();
					
					if(nextService !== undefined) {
						paramsObj = {"address":baseApp.currentlyConnectedAddress, "serviceUuid":nextService};
						bluetoothle.characteristics(baseApp.characteristicSuccess, baseApp.characteristicFailure, paramsObj);
					}
					
					break;
				
				//iOS only
				case "characteristics":
					console.log("Finding characteristics");
					var nextService = baseApp.foundServices.shift();
					
					if(nextService !== undefined) {
						paramsObj = {"address":baseApp.currentlyConnectedAddress, "serviceUuid":nextService};
						bluetoothle.characteristics(baseApp.characteristicSuccess, baseApp.characteristicFailure, paramsObj);
					}
					
					else {
						app.connectButton.find("//zebra.ui.Label").setValue("Disconnect"); 
					
						paramsObj = {"address":baseApp.currentlyConnectedAddress, "serviceUuid":app.serviceUUID, "characteristicUuid":app.notifyUUID};
						bluetoothle.subscribe(baseApp.subscribeSuccess, baseApp.subscribeFailed, paramsObj);
					}
					
					break;
					
				case "descriptors":
					
					break;
				
				//Android only
				case "discovered":
					app.connectButton.find("//zebra.ui.Label").setValue("Disconnect");
					
					paramsObj = {"serviceUuid":app.serviceUUID, "characteristicUuid":app.notifyUUID,"isNotification":true, "address":baseApp.currentlyConnectedAddress};
					bluetoothle.subscribe(baseApp.subscribeSuccess, baseApp.subscribeFailed, paramsObj);

					break;
					
				case "read":
					
					break;
					
				case "subscribed":
					baseApp.isConnected = true;
					clearTimeout(baseApp.connectionTimeout);
					
					for(var fid in baseApp.functionMapping) {
						baseApp.functionMapping[fid].waiting = false;
						baseApp.functionMapping[fid].waitingCommand = null;
					}
					
					if (device.platform == androidPlatform) {
// 						console.log("Changing priority");
// 						var paramsObj = {"address":baseApp.currentlyConnectedAddress, "priority":"high"};
// 						bluetoothle.requestConnectionPriority(function(ret){console.log("SUCCESS GOT:" + JSON.stringify(ret));} , function(ret){console.log("FAILURE GOT:" + JSON.stringify(ret));}, paramsObj);
					}
					
					baseApp.setAppVisible();
					baseApp.bleCommandStack = [];
					baseApp.endCurrentBLECommand();
					baseApp.executeNextBLECommand();
					
					break;
					
				case "subscribedResult":
					if(retObject.serviceUuid == app.serviceUUID && retObject.characteristicUuid == app.notifyUUID) {
						console.log("notification returned!");
						
						//console.log("Got data:" + atob(retObject.value));
						var data = atob(retObject.value);
						
						var code = data.charCodeAt(0);
						var id = data.charCodeAt(1);
						
						//FIXME:Le-sigh... This wasn't a notification, iOS has a bug...
						if(code == 0x04) {
							retObject.status = "read";
							if(baseApp.functionMapping[id] !== undefined) {
								baseApp.functionMapping[id].valueReturnedCallback(retObject);
							}
							return;
						}
						
						if(baseApp.functionMapping[id] !== undefined) {
							baseApp.functionMapping[id].notifyReturnedCallback(retObject);
						}
					}
					
					break;
					
				case "unsubscribed":
					break;
					
				case "written":
					break;
					
				case "readDescriptor":
					break;
					
				case "writtenDescriptor":
					break;
					
				case "rssi":
					break;
					
				default:
					break;
			}
		}

		if(retObject.error !== undefined) {
		
			switch(retObject.error) {
				//Error Types
				case "initialize":
					break;
					
				case "enable":
					break;
					
				case "arguments":
					break;
					
				case "startScan":
					app.scanButton.find("//zebra.ui.Label").setValue("Start");
					break;
					
				case "stopScan":
					app.scanButton.find("//zebra.ui.Label").setValue("Start");
					break;
					
				case "connect":
					app.connectButton.find("//zebra.ui.Label").setValue("Connect");
					
					if(fromCallback === "closeFailed" && retObject.error === "isNotDisconnected") {
						baseApp.disconnectFromDevice(retObject.address);
					}
					
					else if(fromCallback === "connectedFailed") {
						baseApp.closeConnection(retObject.address);
					}
					
					else if(fromCallback !== "disconnectFailed" && fromCallback !== "closeFailed") {
						baseApp.disconnectFromDevice(retObject.address);
					}
					
					//We have had a disconnect error, meaning we may need to try and close the connection.
					else if(fromCallback !== "closeFailed") {
						baseApp.closeConnection(retObject.address);
					}
					
					break;
					
				case "reconnect":
					break;
					
				case "discover":
					break;
					
				case "read":
					baseApp.debugLog("Read Error: Unable to read characteristic from target device: " + retObject.serviceUuid + ':' + retObject.characteristicUuid);
					break;
					
				case "subscription":
					break;
					
				case "write":
					baseApp.debugLog("Write Error: Unable to write characteristic from target device: " + retObject.serviceUuid + ':' + retObject.characteristicUuid);
					break;
					
				case "redDescriptor":
					break;
					
				case "writeDescriptor":
					break;
					
				case "rssi":
					break;
					
				case "neverConnected":
					app.connectButton.find("//zebra.ui.Label").setValue("Connect");
					baseApp.isConnected = false;
					
					break;
					
				case "isNotDisconnected":
					break;
					
				case "isNotConnected":
					baseApp.isConnected = false;
					break;
					
				case "isDisconnected":
					app.connectButton.find("//zebra.ui.Label").setValue("Connect");
					baseApp.closeConnection(retObject.address);
					
					break;
					
				case "service":
					break;
					
				case "characteristic":
					break;
					
				case "descriptor":
					break;
					
				default:
					break;
			}
		}
		
		var k = 0;
		
		for(k = 0; k < baseApp.scanners.length; k++) {
			baseApp.scanners[k].bleCallbackHandler(retObject);
		}
		
		for(k = 0; k < baseApp.connections.length; k++)	{
			baseApp.connections[k].bleCallbackHandler(retObject);
		}
	},
	
	initializeSuccess: function(retObject) {
		console.log("initializeSuccess");
		baseApp.bleready = true;
	},
	
	initializeFailed: function(retObject) {
		console.log("initializeFailed");
		baseApp.bleready = false;
	},
	
	scanSuccess: function(retObject) {
		console.log("scanSuccess");
		baseApp.handleBLECallback(retObject, "scanSuccess");
	},
	
	scanFailed: function(retObject) {
		console.log("scanFailed");
		baseApp.handleBLECallback(retObject, "scanFailed");
	},
	
	connectedSuccess: function(retObject) {
		console.log("connectedSuccess");
		baseApp.handleBLECallback(retObject, "connectedSuccess");
	},
	
	servicesSuccess: function(retObject) {
		console.log("servicesSuccess");
		baseApp.handleBLECallback(retObject, "servicesSuccess");
	},
	
	servicesFailure: function(retObject) {
		console.log("servicesFailure");
		baseApp.handleBLECallback(retObject, "servicesFailure");
	},
	
	characteristicSuccess: function(retObject) {
		console.log("characteristicSuccess");
		baseApp.handleBLECallback(retObject,"characteristicSuccess");
	},
	
	characteristicFailure: function(retObject) {
		console.log("characteristicFailure");
		baseApp.handleBLECallback(retObject, "characteristicFailure");
	},
	
	connectedFailed: function(retObject) {
		console.log("connectedFailed");
		baseApp.handleBLECallback(retObject, "connectedFailed");
	},
	
	disconnectSuccess: function(retObject) {
		console.log("disconnectSuccess");
		baseApp.handleBLECallback(retObject, "disconnectSuccess");
	},
	
	disconnectFailed: function(retObject) {
		console.log("disconnectFailed");
		baseApp.handleBLECallback(retObject, "disconnectFailed");
	},
	
	discoverSuccess: function(retObject) {
		console.log("discoverSuccess");
		baseApp.handleBLECallback(retObject, "discoverSuccess");
	},
	
	discoverFailed: function(retObject) {
		console.log("discoverFailed");
		baseApp.handleBLECallback(retObject, "discoverFailed");
	},
	
	closeSuccess: function(retObject) {
		console.log("closeSuccess");	
		baseApp.handleBLECallback(retObject, "closeSuccess");
	},
	
	closeFailed: function(retObject) {
		console.log("closeFailed");
		baseApp.handleBLECallback(retObject, "closeFailed");
	},
	
	subscribeSuccess: function(retObject) {
		console.log("subscribedSuccess");
        	baseApp.handleBLECallback(retObject, "subscribedSuccess");
	},
	
	subscribeFailed: function(retObject) {
		console.log("subscribedFailed");
		baseApp.handleBLECallback(retObject,"subscribedFailed");
	},
};
