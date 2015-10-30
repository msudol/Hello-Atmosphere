function PhoneGapBLEClient() {
	var me = this;
	this.bleready = false;
	this.currentScanResults = {};
	this.scanners = [];
	this.connections = [];
	this.functionMapping = {};
	this.isConnected = false;
	this.connectionTimeout = null;
	this.bleCommandStack = [];
	this.currentBLECommandElement = null;
	this.foundServices = [];
	
	this.initialize= function() {
		document.addEventListener('deviceready', function() {
			bluetoothle.initialize(me.initializeSuccess, me.initializeFailed, {"request":true});
			me.onReady();
		}, false);
	};
	
	this.startBLECommand = function(me, base64Value) {
		console.log("startBLECommand");
		
		this.currentBLECommandElement = me;
		bluetoothle.write(me.valueWriteSuccessCallback, me.valueWriteFailedCallback, {"address":this.currentlyConnectedAddress, "value":base64Value, "serviceUuid":this.serviceUUID, "characteristicUuid":me.uuid});
	};
	
	this.endCurrentBLECommand = function() {
		console.log("endCurrentBLECommand");
		
		this.currentBLECommandElement = null;
		
		this.executeNextBLECommand();
	};
	
	this.addBLECommand = function (me, commandType, data) {
		console.log("addBLECommand");
		
		this.bleCommandStack.push({me:me, commandType:commandType, data:data});
		this.executeNextBLECommand();
	};
	
	this.executeNextBLECommand = function() {
		
		console.log("executeNextBLECommand");
		
		if(!this.isConnected) {
			return;
		}
		
		if(this.currentBLECommandElement === null) {
			var nextCommand = this.bleCommandStack.shift();
			
			if(nextCommand !== undefined && nextCommand !== null) {
				nextCommand.me.bleReadyCallback(nextCommand.commandType, nextCommand.data);
			}
		}
	};
	
	this.updateDeviceConnectionPanel = function(name, address, rssi) {
		var devicePanel = null;
		
		for(var key in this.deviceListMapping) {
			if(key == name + ":" + address) {
				devicePanel = this.deviceListMapping[name + ":" + address];
				break;
			}
		}
		
		if(devicePanel === null) {
			devicePanel = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 4));
			devicePanel.setPreferredSize(this.root.width - 44 - 50, 60);
			devicePanel.add(new zebra.ui.Label("Name: " + name));	   	
			devicePanel.add(new zebra.ui.Label("Address: " + address));	   	
			devicePanel.add(new zebra.ui.Label("RSSI: " + rssi));	  
			var deviceButton = new zebra.ui.Button();
			deviceButton.setLayout(new zebra.layout.ListLayout(zebra.layout.STRETCH));
			deviceButton.add(devicePanel);
			deviceButton.airAddress = address;
			this.deviceListMapping[name + ":" + address] = devicePanel;
			this.deviceList.add(deviceButton);
			
			deviceButton.bind(function(e) {
				console.log("Pressed " + e.airAddress);
				me.connectButton.airAddress = e.airAddress;
				me.connectButton.setEnabled(true);
				
				for(var i = 0; i < me.deviceList.kids.length; i++) {
					me.deviceList.kids[i].setBackground(new zebra.ui.Gradient("rgb(250, 250, 250)", "rgb(234, 234, 234)"));
				}
				
				e.setBackground(new zebra.ui.Gradient("#DCEBF9", "#7BAEDB"));
				
			});
			
			this.devPanel.repaint();
		}
		
		else {
			devicePanel.removeAll();
			devicePanel.add(new zebra.ui.Label("Name: " + name));	   	
			devicePanel.add(new zebra.ui.Label("Address: " + address));
			devicePanel.add(new zebra.ui.Label("RSSI: " + rssi));
			
			this.devPanel.repaint();
		}
	};
	
	this.startScanning = function() {
		console.log("startScanning: Serive UUID:" + me.serviceUUID.toString());
		
		if (device.platform == iOSPlatform) {
			bluetoothle.startScan(me.scanSuccess, me.scanFailed, {"serviceUuids": [me.serviceUUID]});
		}
		
		else if(device.platform == androidPlatform) {
			bluetoothle.startScan(me.scanSuccess, me.scanFailed, {"serviceUuids": []});
		}
	};
	
	this.stopScanning = function() {
		console.log("stopScanning");
		
		bluetoothle.stopScan(me.scanSuccess, me.scanFailed);
	};
	
	this.connectToDevice = function(address) {
		console.log("connectToDevice: " + address);
		
		this.currentlyConnectedAddress = address;
		
		bluetoothle.connect(me.connectedSuccess, me.connectedFailed, {"address":address});
	};
	
	this.disconnectFromDevice = function(address) {
		console.log("disconnectFromDevice");
		
		if(address === undefined) {
			address = me.currentlyConnectedAddress;
			
		}
		
		bluetoothle.disconnect(me.disconnectSuccess, me.disconnectFailed, {"address":address});
	};
	
	this.closeConnection = function(address) {
		console.log("closeConnection");
		
		if(address === undefined) {
			address = me.currentlyConnectedAddress;
			
		}
		
		this.connected = false;
		bluetoothle.close(me.closeSuccess, me.closeFailed, {"address":address});
	};
	
	this.reconnectToDevice = function(address) {
		console.log("reconnectToDevice");
		
		if(address === undefined) {
			address = me.currentlyConnectedAddress;
			
		}
		
		bluetoothle.reconnect(me.connectedSuccess, me.connectedFailed, {"address":address});
	};
	
	this.handleBLECallback = function(retObject, fromCallback) {
		console.log("handleBLECallback");
		console.log(JSON.stringify(retObject));
		me.appPanel.repaint();
		
		//This gets re-used a lot, no need to redeclare it all the time
		var paramsObj = {};
		
		//Status Types
		if(retObject.status !== undefined) {
			switch(retObject.status) {
				case "enabled":
					break;
					
				case "scanStarted":
					me.scanButton.find("//zebra.ui.Label").setValue("Stop");
					break;
					
				case "scanStopped":
					me.scanButton.find("//zebra.ui.Label").setValue("Scan");
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
						
						if(serviceUuid !== me.serviceUUID) {
							return;
						}
					}
					
					me.updateDeviceConnectionPanel(retObject.name, retObject.address, retObject.rssi);
					break;
				
				case "connecting":
					me.connectButton.find("//zebra.ui.Label").setValue("Connecting");
					me.connectionTimeout = setTimeout(function() {
						console.log("CONNECTION TIMEOUT REACHED");
						me.debugLog("Attempt to connect to device reached it's timeout");
						clearTimeout(me.connectionTimeout);
						me.connectButton.find("//zebra.ui.Label").setValue("Connect");
						me.disconnectFromDevice(retObject.address);
						
					}, 30000);
					break;
					
				case "connected":
					me.connectButton.find("//zebra.ui.Label").setValue("Discovering");
					
					if (device.platform == iOSPlatform)	{
						console.log("Discovering services");
						paramsObj = {"address":me.currentlyConnectedAddress, "serviceUuids":[]};
						bluetoothle.services(me.servicesSuccess, me.servicesFailure, paramsObj);
					}
					
					else if (device.platform == androidPlatform) {
						console.log("Beginning discovery");
						paramsObj = {"address":me.currentlyConnectedAddress, "serviceUuids":[me.serviceUUID]};
						bluetoothle.discover(me.discoverSuccess, me.discoverFailed, paramsObj);
					}
					break;
					
				case "disconnecting":
					me.connectButton.find("//zebra.ui.Label").setValue("Disconnecting");
					
					break;
					
				case "disconnected":
					me.connectButton.find("//zebra.ui.Label").setValue("Connect");
					me.closeConnection(retObject.address);
					me.isConnected = false;
					break;
					
				case "closed":
					break;
				
					
				//iOS only
				case "services":
					console.log("Checking for characteristic");
					var serviceUuids = retObject.serviceUuids;
					for (var j = 0; j < serviceUuids.length; j++) {
						me.foundServices.push(serviceUuids[j]);
					}
					
					console.log("Finding characteristics");
					var nextService = me.foundServices.shift();
					
					if(nextService !== undefined) {
						paramsObj = {"address":me.currentlyConnectedAddress, "serviceUuid":nextService};
						bluetoothle.characteristics(me.characteristicSuccess, me.characteristicFailure, paramsObj);
					}
					
					break;
				
				//iOS only
				case "characteristics":
					console.log("Finding characteristics");
					var nextService = me.foundServices.shift();
					
					if(nextService !== undefined) {
						paramsObj = {"address":me.currentlyConnectedAddress, "serviceUuid":nextService};
						bluetoothle.characteristics(me.characteristicSuccess, me.characteristicFailure, paramsObj);
					}
					
					else {
						me.connectButton.find("//zebra.ui.Label").setValue("Disconnect"); 
					
						paramsObj = {"address":me.currentlyConnectedAddress, "serviceUuid":me.serviceUUID, "characteristicUuid":me.notifyUUID};
						bluetoothle.subscribe(me.subscribeSuccess, me.subscribeFailed, paramsObj);
					}
					
					break;
					
				case "descriptors":
					
					break;
				
				//Android only
				case "discovered":
					me.connectButton.find("//zebra.ui.Label").setValue("Disconnect");
					
					paramsObj = {"serviceUuid":me.serviceUUID, "characteristicUuid":me.notifyUUID,"isNotification":true, "address":me.currentlyConnectedAddress};
					bluetoothle.subscribe(me.subscribeSuccess, me.subscribeFailed, paramsObj);

					break;
					
				case "read":
					
					break;
					
				case "subscribed":
					me.isConnected = true;
					clearTimeout(me.connectionTimeout);
					
					for(var fid in me.functionMapping) {
						me.functionMapping[fid].waiting = false;
						me.functionMapping[fid].waitingCommand = null;
					}
					
					if (device.platform == androidPlatform) {
// 						console.log("Changing priority");
// 						var paramsObj = {"address":me.currentlyConnectedAddress, "priority":"high"};
// 						bluetoothle.requestConnectionPriority(function(ret){console.log("SUCCESS GOT:" + JSON.stringify(ret));} , function(ret){console.log("FAILURE GOT:" + JSON.stringify(ret));}, paramsObj);
					}
					
					me.setAppVisible();
					me.bleCommandStack = [];
					me.endCurrentBLECommand();
					me.executeNextBLECommand();
					
					break;
					
				case "subscribedResult":
					if(retObject.serviceUuid == me.serviceUUID && retObject.characteristicUuid == me.notifyUUID) {
						console.log("notification returned!");
						
						//console.log("Got data:" + atob(retObject.value));
						var data = atob(retObject.value);
						
						var code = data.charCodeAt(0);
						var id = data.charCodeAt(1);
						
						//FIXME:Le-sigh... This wasn't a notification, iOS has a bug...
						if(code == 0x04) {
							retObject.status = "read";
							if(me.functionMapping[id] !== undefined) {
								me.functionMapping[id].valueReturnedCallback(retObject);
							}
							return;
						}
						
						if(me.functionMapping[id] !== undefined) {
							me.functionMapping[id].notifyReturnedCallback(retObject);
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
					me.scanButton.find("//zebra.ui.Label").setValue("Start");
					break;
					
				case "stopScan":
					me.scanButton.find("//zebra.ui.Label").setValue("Start");
					break;
					
				case "connect":
					me.connectButton.find("//zebra.ui.Label").setValue("Connect");
					
					if(fromCallback === "closeFailed" && retObject.error === "isNotDisconnected") {
						me.disconnectFromDevice(retObject.address);
					}
					
					else if(fromCallback === "connectedFailed") {
						me.closeConnection(retObject.address);
					}
					
					else if(fromCallback !== "disconnectFailed" && fromCallback !== "closeFailed") {
						me.disconnectFromDevice(retObject.address);
					}
					
					//We have had a disconnect error, meaning we may need to try and close the connection.
					else if(fromCallback !== "closeFailed") {
						me.closeConnection(retObject.address);
					}
					
					break;
					
				case "reconnect":
					break;
					
				case "discover":
					break;
					
				case "read":
					me.debugLog("Read Error: Unable to read characteristic from target device: " + retObject.serviceUuid + ':' + retObject.characteristicUuid);
					break;
					
				case "subscription":
					break;
					
				case "write":
					me.debugLog("Write Error: Unable to write characteristic from target device: " + retObject.serviceUuid + ':' + retObject.characteristicUuid);
					break;
					
				case "redDescriptor":
					break;
					
				case "writeDescriptor":
					break;
					
				case "rssi":
					break;
					
				case "neverConnected":
					me.connectButton.find("//zebra.ui.Label").setValue("Connect");
					me.isConnected = false;
					
					break;
					
				case "isNotDisconnected":
					break;
					
				case "isNotConnected":
					me.isConnected = false;
					break;
					
				case "isDisconnected":
					me.connectButton.find("//zebra.ui.Label").setValue("Connect");
					me.closeConnection(retObject.address);
					
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
		
		for(k = 0; k < me.scanners.length; k++) {
			me.scanners[k].bleCallbackHandler(retObject);
		}
		
		for(k = 0; k < me.connections.length; k++)	{
			me.connections[k].bleCallbackHandler(retObject);
		}
	};
	
	this.initializeSuccess = function(retObject) {
		console.log("initializeSuccess");
		me.bleready = true;
	};
	
	this.initializeFailed = function(retObject) {
		console.log("initializeFailed");
		me.bleready = false;
	};
	
	this.scanSuccess = function(retObject) {
		console.log("scanSuccess");
		me.handleBLECallback(retObject, "scanSuccess");
	};
	
	this.scanFailed = function(retObject) {
		console.log("scanFailed");
		me.handleBLECallback(retObject, "scanFailed");
	};
	
	this.connectedSuccess = function(retObject) {
		console.log("connectedSuccess");
		me.handleBLECallback(retObject, "connectedSuccess");
	};
	
	this.servicesSuccess = function(retObject) {
		console.log("servicesSuccess");
		me.handleBLECallback(retObject, "servicesSuccess");
	};
	
	this.servicesFailure = function(retObject) {
		console.log("servicesFailure");
		me.handleBLECallback(retObject, "servicesFailure");
	};
	
	this.characteristicSuccess = function(retObject) {
		console.log("characteristicSuccess");
		me.handleBLECallback(retObject,"characteristicSuccess");
	};
	
	this.characteristicFailure = function(retObject) {
		console.log("characteristicFailure");
		me.handleBLECallback(retObject, "characteristicFailure");
	};
	
	this.connectedFailed = function(retObject) {
		console.log("connectedFailed");
		me.handleBLECallback(retObject, "connectedFailed");
	};
	
	this.disconnectSuccess = function(retObject) {
		console.log("disconnectSuccess");
		me.handleBLECallback(retObject, "disconnectSuccess");
	};
	
	this.disconnectFailed = function(retObject) {
		console.log("disconnectFailed");
		me.handleBLECallback(retObject, "disconnectFailed");
	};
	
	this.discoverSuccess = function(retObject) {
		console.log("discoverSuccess");
		me.handleBLECallback(retObject, "discoverSuccess");
	};
	
	this.discoverFailed = function(retObject) {
		console.log("discoverFailed");
		me.handleBLECallback(retObject, "discoverFailed");
	};
	
	this.closeSuccess = function(retObject) {
		console.log("closeSuccess");	
		me.handleBLECallback(retObject, "closeSuccess");
	};
	
	this.closeFailed = function(retObject) {
		console.log("closeFailed");
		me.handleBLECallback(retObject, "closeFailed");
	};
	
	this.subscribeSuccess = function(retObject) {
		console.log("subscribedSuccess");
        	me.handleBLECallback(retObject, "subscribedSuccess");
	};
	
	this.subscribeFailed = function(retObject) {
		console.log("subscribedFailed");
		me.handleBLECallback(retObject,"subscribedFailed");
	};
}