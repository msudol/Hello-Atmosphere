function ConnectionElement(parent) {
	
	this.currentValue;
	this.currentAddress;
	this.currentName;
	
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
		this.currentValue = e;
		
		if(e.address !== undefined) {
			this.currentAddress = e.address;
		}
		
		if(e.name !== undefined) {
			this.currentName = e.name;
		}
		
		if(this.currentValue.status == "subscribed") {
			this.connected();
		}

		else if(this.currentValue.status == "closed")	{
			this.disconnected();
		}
	};
	
	//Target
	this.connectToDevice = function(address) {
		parent.connectToDevice(address);
	};
	
	//Target
	this.disconnectFromDevice = function() {
		parent.closeConnection();
	};
	
	//Source
	this.getDeviceName = function() {
		return this.currentName;
	};
	
	//Source
	this.getDeviceAddress = function() {
		return this.currentAddress;
	};
	
	//Source
	this.getConnected = function() {
		return parent.isConnected;
	};
}

function convertToBase64Data(commandType, dataType, id, data) {
	
	var base64Value = null;
	
	var t, value, long, x, byte, floatView, intView, buffer, dataFloat;
	
	dataType = dataType || "json";
	
	if(dataType === "json" || dataType === undefined || dataType === "string") {
		
		t = [];
		
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
		intView = new Uint8Array(buffer);
		floatView = new Float32Array(buffer);
		
		floatView[0] = dataFloat;
		
		base64Value = bluetoothle.bytesToEncodedString(intView);
	}
	
	else if(dataType === "double") {
		dataFloat = parseFloat(data);
		
		buffer = new ArrayBuffer(8);
		intView = new Uint8Array(buffer);
		floatView = new Float64Array(buffer);
		
		floatView[0] = dataFloat;

		base64Value = bluetoothle.bytesToEncodedString(intView);
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
		currentValue = 0 !== data.charCodeAt(0);
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
	this.parent.elements[name] = this;
	this.id = id;
	this.uuid = uuid;
	this.returnType = returnType;
	this.inputType = inputType;
	this.currentWrite = null;
	this.writeRetryCount = 0;
	this.writeRetryTimeout = null;
	this.readRetryCount = 0;
	this.readRetryTimout = null;
	this.parent.functionMapping[id] = this;
	
	//For some reason when the valueReturnedCallback function is execute this is a global reference instead of the instance of this element...
	var me = this;
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		this.parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.valueReturned = null;
	
	//Trigger
	this.notified = function(e) {
	};
	
	//Target Method
	this.execute = function(args) {
		this.sendEvent(1, args);
	};
	
	//Helper Method
	this.sendEvent = function(commandType, data) {
		var currentFunctionElement = this;
		
		if(this.parent.isConnected === false) {
			return;
		}
		
		var base64Value = convertToBase64Data(commandType, this.inputType, this.id, data);
		
		this.currentWrite = {"address":this.parent.currentlyConnectedAddress, "value":base64Value, "service":this.parent.serviceUUID, "characteristic":me.uuid};
		this.writeRetryCount = 0;
		
		if(this.writeRetryTimeout !== null) {
			clearTimeout(this.writeRetryTimeout);
			this.writeRetryTimeout = null;
		}
		
		bluetoothle.write(
			function(retObject){
				currentFunctionElement.valueWriteSuccessCallback(retObject);
				
			}, 
			
			function(retObject){
				currentFunctionElement.valueWriteFailedCallback(retObject);
			},
			
			this.currentWrite);
	};
	
	this.valueReturnedCallback = function(retObject) {
		this.parent.success(retObject);
		
		this.readRetryCount = 0;
		
		var data = atob(retObject.value);
		
		
		currentValue = convertFromBase64Data(this.returnType, data);
		
		if(this.valueReturned !== null) {
			this.valueReturned();
		}
		
		if(this.parent.embeddedChains[this.name] !== undefined) {
			var currentChain = this.parent.embeddedChains[this.name];
			
			for(var i = 0; i < currentChain.length; i++) {
				this.parent.elements[currentChain[i]].readValue();
			}
		}
		
		return;
	};
	
	this.notifyReturnedCallback = function(data) {
		currentValue = convertFromBase64Data("json", data);
		
		this.notified();
	};
	
	this.valueWriteFailedCallback = function(retObject) {
		var currentFunctionElement = this;
		
		if(this.currentWrite !== null && this.writeRetryCount < 100) {
			this.writeRetryCount++;
			
			this.writeRetryTimeout = setTimeout(function() {
				clearTimeout(currentFunctionElement.writeRetryTimeout);
				currentFunctionElement.writeRetryTimeout = null;
				
				bluetoothle.write(
					function(retObject){
						currentFunctionElement.valueWriteSuccessCallback(retObject);
					}, 
					function(retObject){
						currentFunctionElement.valueWriteFailedCallback(retObject);
					}, 
				currentFunctionElement.currentWrite);
				
			}, 10);
			
		}
		
		else {
			this.parent.error(retObject);
		}
	};
	
	this.readValue = function() {
		var currentFunctionElement = this;
		
		if(this.valueReturned !== null || this.parent.embeddedChains[this.name] !== undefined) {
			bluetoothle.read(
				function(retObject){
					currentFunctionElement.valueReturnedCallback(retObject);
				}, 
				
				function(retObject){
					currentFunctionElement.valueReadFailedCallback(retObject);
				}, 
				
				{"address":this.parent.currentlyConnectedAddress, "service":this.parent.serviceUUID, "characteristic":this.uuid}
			);
		}
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		this.currentWrite = null;
		this.writeRetryCount = 0;
		this.readValue();
		this.parent.success(retObject);
	};
	
	this.valueReadFailedCallback = function(retObject) {
		var currentFunctionElement = this;
		
		if(this.readRetryCount < 100) {
			this.readRetryCount++;
			
			this.readRetryTimeout = setTimeout(function() {
				clearTimeout(currentFunctionElement.readRetryTimeout);
				currentFunctionElement.readRetryTimeout = null;
				
				currentFunctionElement.readValue();		
			}, 10);
			
		}
		
		else {
			this.parent.error(retObject);
		}
	};
	
	//Source Method
	this.getValue = function() {
		return currentValue;
	};
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
		parent.success(retObject);
	};
	
	//Helper
	this.valueReturnedCallback = function(retObject) {
		if (env.debug) console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristic != me.uuid)	{
			if (env.debug) console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristic);
		}
		
		parent.success(retObject);
		
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
		parent.success(retObject);
	};
	
	//Helper
	this.valueWriteCallback = function(retObject) {
		if (env.debug) console.log("valueWriteSuccessCallback");
		parent.success(retObject);
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