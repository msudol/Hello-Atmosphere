/*** 
 * Copyright 2014 Anaren Inc.
 * All rights reserved
 ***/

function convertToBase64Data(commandType, dataType, id, data) {
	
	var base64Value = null;
	
	var t, value, long, x, byte, floatView, intView, buffer, dataFloat;
	
	dataType = dataType || "json";
	
	if(dataType === "json" || dataType === undefined || dataType === "string") {
		
		t = [];
// 		var space = " ";
		
		if(dataType === "json") {
			
			try {
				data = JSON.stringify(data);
			}
			
			catch(err) {
				data = "";
			}
		}
		
		else {
			try {
				data = data.toString();
			}
		
			catch(err) {
				data = "";
			}
		}
		
		data = data || "";
		
		for(x = 0; x < data.length; x++) {
			t.push(data.charCodeAt(x));
		}
		
		//This will null terminate the string.
		t.push(0x00);
		
		value = new Uint8Array(t);
		
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	if(dataType === "jsonLegacy" || dataType === undefined) {
		data = JSON.stringify(data);
		
		if(data === undefined) {
			data = "";
		}
		
		t = [commandType, id, data.length];
		
		for(x = 0; x < data.length; x++) {
			t.push(data.charCodeAt(x));
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "int") {
		long = parseInt(data);
		
		t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
		
		for (index = 0; index < t.length; index++) {
			byte = long & 0xff;
			t [ index ] = byte;
			long = (long - byte) / 256 ;
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "float") {
		dataFloat = parseFloat(data);
		
		buffer = new ArrayBuffer(4);
		intView = new Int32Array(buffer);
		floatView = new Float32Array(buffer);

		floatView[0] = dataFloat;
		
		long = intView[0];
		
		t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
		
		for (index = 0; index < t.length; index++) {
			byte = long & 0xff;
			t [ index ] = byte;
			long = (long - byte) / 256 ;
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "double") {
		dataFloat = parseFloat(data);
		
		buffer = new ArrayBuffer(8);
		intView = new Int32Array(buffer);
		floatView = new Float64Array(buffer);

		floatView[0] = dataFloat;
		
		t = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
		
		for (index = 0; index < t.length; index++) {
			long = intView[1];
			
			if(index > 3) {
				long = intView[0];
			}
			
			byte = long & 0xff;
			t [ index ] = byte;
			long = (long - byte) / 256 ;
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "bool") {
		t = [];
		
		if(data) {
			t.push(0x01);
		}
		
		else {
			t.push(0x00);
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "char") {
		t = [];
		
		if(typeof data === "string") {
			t.push(data.charCodeAt(0));
		}
		
		else if(typeof data === "number") {
			t.push(data % 256);
		}
		
		else {
			t.push(0);
		}
		
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	else if(dataType === "void") {
		t = [0x00];
		value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
	}
	
	//if (env.debug) console.log("Converting: " + data + " as value: " + value + " to base64: " + base64Value);

	return base64Value;
}

function convertFromBase64Data(dataType, data) {
	
	var currentValue = null;
	var buf, i;
	
	if(dataType === "json" || dataType === undefined) {
		currentValue = null;
		
		if(isValidJSON(data)) {
			currentValue = JSON.parse(data);
		}

		else {
			currentValue = data;
		}
	}
	
	else if(dataType === "jsonLegacy") {
		
		data = data.substring(2);
		data = data.substring(0, data.length-1);
		currentValue = null;
		
		if(isValidJSON(data)) {
			currentValue = JSON.parse(data);
		}

		else {
			currentValue = data;
		}
	}
	
	else if(dataType === "int") {
		buf = new Uint8Array(4);
		
		for (i = 0; i < 4; ++i) {
			buf[i] = data.charCodeAt(i);
		}

		currentValue = new Int32Array(buf.buffer)[0];
	}
	
	else if(dataType === "float") {
		buf = new Uint8Array(4);
		
		for (i = 0; i < 4; ++i) {
			buf[i] = data.charCodeAt(i);
		}

		currentValue = new Float32Array(buf.buffer)[0];
	}
	
	else if(dataType === "double") {
		buf = new Uint8Array(8);
		
		for (var j = 0; j < 8; ++j) {
			buf[j] = data.charCodeAt(j);
		}

		currentValue = new Float64Array(buf.buffer)[0];
	}
	
	else if(dataType === "void") {
		currentValue = null;
	}
	
	else if(dataType === "bool") {
		currentValue = true == data.charCodeAt(0);
	}
	
	else if(dataType === "char") {
		currentValue = data.charCodeAt(0);
	}

	else if(dataType === "string") {
		currentValue = data;
	}
	
	return currentValue;
}

function FunctionElement(parent, name, id, uuid, returnType, inputType) {
	var currentValue;

	this.name = name;
	this.parent = parent;
	parent.elements[name] = this;
	this.id = id;
	this.uuid = uuid;
	this.waiting = false;
	this.waitingCommand = null;
	this.returnType = returnType;
	this.inputType = inputType;
	parent.functionMapping[id] = this;
	
	//For some reason when the valueReturnedCallback function is execute this is a global reference instead of the instance of this element...
	var me = this;
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
		
	//Trigger
	this.valueReturned = null;
	
	//Trigger
	this.notified = function(e) {
	};
	
	//Target Method
	this.execute = function(args) {
		me.sendEvent(1, args);
	};
	
	this.bleReadyCallback = function(commandType, data) {
		
		if(commandType === 0) {
			parent.executeNextBLECommand();
			return;
		}
		
		me.waiting = true;

		var base64Value = convertToBase64Data(commandType, me.inputType, me.id, data);
		
		parent.startBLECommand(me, base64Value);
	};
	
	//Helper Method
	this.sendEvent = function(commandType, data) {
		console.log("sendEvent:"+ me.id);
		
		if(data === undefined && me.inputType !== "json") {
			data = "";
		}
		
		if(parent.isConnected === false) {
			if (env.debug) console.log("We are not fully connected yet...");
			me.waiting = false;
			return;
		}
		
		parent.addBLECommand(this, commandType, data);
	};
	
	this.valueReturnedCallback = function(retObject) {
		
		if(retObject.characteristic != me.uuid)	{
			if (env.debug) console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristic);
		}
		
		parent.handleBLECallback(retObject);
		
		var data = atob(retObject.value);
		
		if (env.debug) console.log("valueReturnedCallback: "+ me.id + " with data: " + data);
		
		currentValue = convertFromBase64Data(me.returnType, data);
		
		if(me.valueReturned !== null) {
			me.valueReturned();
		}
		
		me.finish();
		
		return;
	};
	
	this.finish = function() {
		if(parent.currentReadChain !== null) {
			var nextRead = parent.currentReadChain.pop();
			
			if(nextRead !== undefined) {
				var nextElement = parent.elements[nextRead];
				
				if(nextElement !== undefined) {
					nextElement.readValue();
					return;
				}
			}
		}
		
		parent.currentReadChain = null;
		parent.endCurrentBLECommand();
		
		me.waiting = false;
		
		if(me.waitingCommand !== null) {
			me.sendEvent(0, "");
		}
	};
	
	this.notifyReturnedCallback = function(data) {
		
		if (env.debug) console.log("notifyReturnedCallback");
		
		currentValue = convertFromBase64Data("json", data);

		me.notified();
	};

	this.valueWriteFailedCallback = function(retObject) {
		if (env.debug) console.log("valueWriteFailedCallback ID: " + me.id + " data: " + JSON.stringify(retObject));
		parent.handleBLECallback(retObject);
		me.waiting = false;
	};
	
	this.readValue = function() {
		if(parent.currentReadChain === null) {
// 			if (env.debug) console.log("No chain setting up!");
			
			if(parent.embeddedChains[me.name] !== undefined) {
				parent.currentReadChain = parent.embeddedChains[me.name].slice(0);
// 				if (env.debug) console.log("Chain for " + me.name + " is " + parent.currentReadChain);
			}
			
			else {
				parent.currentReadChain = null;
			}
		}
		
		if(me.valueReturned !== null) {
			bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":parent.currentlyConnectedAddress, "service":parent.serviceUUID, "characteristic":me.uuid});
		}
		
		else {
			me.finish();
		}
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		if (env.debug) console.log("valueWriteSuccessCallback ID: " + me.id + " data: " + JSON.stringify(retObject));	
		parent.handleBLECallback(retObject);
		me.readValue();
	};
	
	this.valueReadFailedCallback = function(retObject) {
		if (env.debug) console.log("valueReadFailedCallback ID: " + me.id + " data: " + JSON.stringify(retObject));
		parent.handleBLECallback(retObject);
	};
	
	//Source Method
	this.getValue = function() {
		return currentValue;
	};
}

function ScannerElement(parent) {
	var currentValue = null;
	var me = this;
	
	parent.scanners.push(this);
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.deviceDiscovered = function() {
	};
	
	//Trigger
	this.scanningStarted = function() {
	};
	
	//Trigger
	this.scanningStopped = function() {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.startScan = function(args) {
		parent.startScanning();
	};
	
	//Target
	this.stopScan = function(args) {
		parent.stopScanning();
	};
	
	//Helper
	this.bleCallbackHandler = function(e) {
		currentValue = e;
		
		if(currentValue.status == "scanStarted") {
			this.scanningStarted();
		}
		
		else if(currentValue.status == "scanStopped") {
			this.scanningStopped();
		}
		
		else if(currentValue.status == "scanResult") {
			this.deviceDiscovered();
		}
	};
	
	//Source
	this.getDeviceName = function() {
		
		if(currentValue === null) {
			return null;
		}
		
		return currentValue.name;
	};
	
	//Source
	this.getDeviceAddress = function() {
		
		if(currentValue === null) {
			return null;
		}
		
		return currentValue.address;
	};
	
	//Source
	this.getDeviceRSSI = function() {
		
		if(currentValue === null) {
			return null;
		}
		
		return currentValue.rssi;
	};
	
	//Source
	this.getValue = function () {
		return [currentValue.name, currentValue.address, currentValue.rssi];
	};
}

function ConnectionElement(parent) {
	
	// Current value is never read?
	var currentValue;
	var currentAddress;
	var currentName;
	
	// Me is never read?
	var me = this;
	
	parent.connections.push(this);
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.connecting = function() {
	};
	
	//Trigger
	this.connected = function() {
	};
	
	//Trigger
	this.disconnecting = function() {
	};
	
	//Trigger
	this.disconnected = function() {
	};
	
	//Helper
	this.bleCallbackHandler = function(e) {
		currentValue = e;
		
		if(e.address !== undefined) {
			currentAddress = e.address;
		}
		
		if(e.name !== undefined) {
			currentName = e.name;
		}
		
		//redundant log same as line 168 in bleclient, handleBLEcallback:  if (env.debug) console.log(JSON.stringify(currentValue));
		
		if(currentValue.status == "subscribed") {
			this.connected();
		}
		
		else if(currentValue.status == "connecting") {
			this.connecting();
		}
		
		else if(currentValue.status == "disconnecting") {
			this.disconnecting();
		}
		
		else if(currentValue.status == "disconnected")	{
			this.disconnected();
		}
		
		// else?
	};
	
	//Target
	this.connectToDevice = function(address) {
		parent.connectToDevice(address);
	};
	
	//Target
	this.disconnectFromDevice = function() {
		parent.disconnectFromDevice();
	};
	
	//Source
	this.getDeviceName = function() {
		return currentName;
	};
	
	//Source
	this.getDeviceAddress = function() {
		return currentAddress;
	};
	
	//Source
	this.getConnected = function() {
		return parent.isConnected;
	};
	
	//We may wish to expand this into a complete bluetooth control system.
}

function GATTBatteryElement(parent) {
	var currentValue = null;
	var currentStatus = null;
	
	// Me is never read?
	var me = this;
	
	parent.connections.push(this);
	
	//Helper
	//Once we are connected we can subscripe to the battery service notifier
	this.bleCallbackHandler = function(e) {
// 		if(currentValue.status == "subscribed") {
// 			this.connected();
// 		}
		
		// else?
	};
	
	//Helper Method
	this.valueReadFailedCallback = function(retObject) {
		if (env.debug) console.log("valueReadFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueReturnedCallback = function(retObject) {
		if (env.debug) console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristic != me.uuid)	{
			if (env.debug) console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristic);
		}
		
		parent.handleBLECallback(retObject);
		
		var data = atob(retObject.value);
		
		currentValue = data.charCodeAt(0);

		if(me.batteryLevelRead !== null) {
			me.batteryLevelRead();
		}
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.batteryLevelRead = function () {
	};
	
	//Trigger
	this.batteryLevelNotified = function () {
	};
	
	//Source
	this.getBatteryLevel = function () {
		return currentValue;
	};
	
	//Target
	this.readBatteryLevel = function () {
		if (env.debug) console.log(JSON.stringify({"address":parent.currentlyConnectedAddress, "service":"180f", "characteristic":"2a19"}));
		bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":parent.currentlyConnectedAddress, "service":"180f", "characteristic":"2a19"});
	};
}
	
function GATTImmediateAlertElement(parent) {
	var currentValue = null;
	var currentStatus = null;
	
	// Me is never read?
	var me = this;
	
	//Helper Method
	this.valueReadFailedCallback = function(retObject) {
		if (env.debug) console.log("valueReadFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueWriteCallback = function(retObject) {
		if (env.debug) console.log("valueWriteSuccessCallback");
		parent.handleBLECallback(retObject);
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
		
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.writeAlertLevel = function (level) {	
		var t = [0x00];
		
		for ( var index = 0; index < t.length; index ++ ) {
			var byte = level & 0xff;
			t [ index ] = byte;
			level = (level - byte) / 256 ;
		}
		
		var value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
		
		if (env.debug) console.log(JSON.stringify({"address":parent.currentlyConnectedAddress, "value":base64Value, "service":"1802", "characteristic":"2a06","type":"noResponse"}));
		
		bluetoothle.write(me.valueWriteCallback, me.valueWriteCallback, {"address":parent.currentlyConnectedAddress, "value":base64Value, "service":"1802", "characteristic":"2a06","type":"noResponse"});
	};
}

