function FunctionAndroid(parent, id, uuid, returnType, inputType) {
	var currentValue;
	//For some reason when the valueReturnedCallback function is execute this is a global reference instead of the instance of this element...
	var me = this;
	this.id = id;
	this.uuid = uuid;
	this.waiting = false;
	this.waitingCommand = null;
	this.waitingTimeout = null;
	this.returnType = returnType;
	this.inputType = inputType;
	parent.functionMapping[id] = this;
	
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
		
		var base64Value = null;
		
		if(me.inputType === "json" || me.inputType === undefined) {
			data = JSON.stringify(data);
			
			if(data === undefined) {
				data = "";
			}
			
			var t = [commandType, me.id, data.length];
			
			for(var x = 0; x < data.length; x++) {
				t.push(data.charCodeAt(x));
			}
			
			//This will null terminate the string.
			t.push(0x00);
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "int") {
			var long = parseInt(data);
			
			var t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for ( var index = 0; index < t.length; index ++ ) {
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "float") {
			var dataFloat = parseFloat(data);
			
			var buffer = new ArrayBuffer(4);
			var intView = new Int32Array(buffer);
			var floatView = new Float32Array(buffer);

			floatView[0] = dataFloat;
			
			var long = intView[0];
			
			var t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for ( var index = 0; index < t.length; index ++ ) {
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "double") {
			var dataFloat = parseFloat(data);
			
			var buffer = new ArrayBuffer(8);
			var intView = new Int32Array(buffer);
			var floatView = new Float64Array(buffer);

			floatView[0] = dataFloat;
			
			var t = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for ( var index = 0; index < t.length; index ++ ) {
				var long = intView[1];
				
				if(index > 3) {
					long = intView[0];
				}
				
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "bool") {
			var t = [];
			
			if(data) {
				t.push(0x01);
			}
			
			else {
				t.push(0x00);
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "char") {
			var t = [];
			
			if(typeof data === "string") {
				t.push(data.charCodeAt(0));
			}
			
			else if(typeof data === "number") {
				t.push(data % 256);
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "void") {
			var t = [0x00];
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "string") {
			var t = [];
			
			if(typeof data === "string") {
				for(var x = 0; x < data.length; x++) {
					t.push(data.charCodeAt(x));
				}
				
				//This will null terminate the string.
				t.push(0x00);
			}
			
			else if(data.length === undefined) {
				for(var x = 0; x < data.length; x++) {
					if(typeof data[x] === "number") {
						t.push(data[x]);
					}
					
					else {
						t.push(0x00);
					}
				}
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		parent.startBLECommand(me, base64Value);
	};
	
	//Helper Method
	this.sendEvent = function(commandType, data) {
		console.log("sendEvent:"+ me.id);
		
		if(data === undefined && me.inputType !== "json") {
			data = "";
		}
		
		if(parent.isConnected === false) {
			console.log("We are not fully connected yet...");
			me.waiting = false;
			return;
		}
		
		parent.addBLECommand(this, commandType, data);
	};
	
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		parent.endCurrentBLECommand();
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		parent.handleBLECallback(retObject);
		
		var data = atob(retObject.value);
		
		if(me.returnType === "json" || me.returnType === undefined) {
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
		
		else if(me.returnType === "int") {
			var buf = new Uint8Array(4);
			
			for (var i = 0; i < 4; ++i) {
				buf[i] = data.charCodeAt(i);
			}

			currentValue = new Int32Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "float") {
			var buf = new Uint8Array(4);
			
			for (var i = 0; i < 4; ++i) {
				buf[i] = data.charCodeAt(i);
			}

			currentValue = new Float32Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "double") {
			var buf = new Uint8Array(8);
			
			for (var j = 0; j < 8; ++j) {
				buf[j] = data.charCodeAt(j);
			}

			currentValue = new Float64Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "void") {
			currentValue = null;
		}
		
		else if(me.returnType === "bool") {
			currentValue = true == data.charCodeAt(0);
		}
		
		else if(me.returnType === "char") {
			currentValue = data.charCodeAt(0);
		}

		else if(me.returnType === "string") {
			currentValue = data;
		}
		
		if(me.valueReturned !== null) {
			me.valueReturned();
		}
		
		me.waiting = false;
		
		if(me.waitingTimeout !== null) {
			clearTimeout(me.waitingTimeout);
			me.waitingTimeout = null;
		}
		
		if(me.waitingCommand !== null) {
			me.sendEvent(0, "");
		}
	};
	
	this.notifyReturnedCallback = function(retObject) {
		console.log("notifyReturnedCallback");
        
		var data = atob(retObject.value);
		console.log(data.length);
		data = data.substring(2);
		data = data.substring(0, data.length-1);
		currentValue = null;

		if(isValidJSON(data)) {
			currentValue = JSON.parse(data);
		}

		else {
			currentValue = data;
		}

			me.notified();
	};
	
	
	
	this.valueWriteFailedCallback = function(retObject) {
		console.log("valueWriteFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
		me.waiting = false;
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		console.log("valueWriteSuccessCallback:"+ me.id);
		
		parent.handleBLECallback(retObject);
		
		if(me.valueReturned !== null) {
			bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":parent.parent.currentlyConnectedAddress, "serviceUuid":parent.parent.serviceUUID, "characteristicUuid":me.uuid});
		}
		
		else {
			parent.endCurrentBLECommand();
		}
	};
	
	//Source Method
	this.getValue = function() {
		return currentValue;
	};
}

function FunctionIOS(parent, id, uuid, returnType, inputType) {
	var currentValue;
	//For some reason when the valueReturnedCallback function is execute this is a global reference instead of the instance of this element...
	var me = this;
	this.id = id;
	this.uuid = uuid;
	this.waiting = false;
	this.waitingCommand = null;
	this.waitingTimeout = null;
	this.returnType = returnType;
	this.inputType = inputType;
	parent.functionMapping[id] = this;
	
	//Trigger
	this.valueReturned = null;
	
	//Trigger
	this.notified = function(e) {
	};
	
	//Target Method
	this.execute = function(args) {
		me.sendEvent(1, args);
	};
	
	//Helper Method
	this.sendEvent = function(commandType, data) {
		console.log("sendEvent:"+ me.id);
		
		if(data === undefined && me.inputType !== "json") {
			data = "";
		}
		
		if(parent.isConnected === false) {
			console.log("We are not fully connected yet...");
			me.waiting = false;
			return;
		}
		
		if (device.platform == iOSPlatform) {
			if(me.waiting) {
				console.log("I am waiting...");
				me.waitingCommand = {commandType:commandType, data:data};
				
				if(me.waitingTimeout === null) {
					me.waitingTimeout = setTimeout(function() {me.waiting = false; console.log("TIMEOUT REACHED"); clearTimeout(me.waitingTimeout); me.waitingTimeout = null;}, 1000);
				}
				
				return;
			}

			if(me.waitingCommand !== null) {
				var newWaitingCommand = {commandType:commandType, data:data};
				commandType = me.waitingCommand.commandType;
				data = me.waitingCommand.data;
				
				if(commandType !== 0) {
					me.waitingCommand = newWaitingCommand;
				}
				
				else {
					me.waitingCommand = null;
				}
			}
		}
		
		if(commandType === 0) {
			return;
		}
		
		me.waiting = true;
		
		var base64Value = null;
		
		if(me.inputType === "json" || me.inputType === undefined) {
			
			data = JSON.stringify(data);
			
			if(data === undefined) {
				data = "";
			}
			
			var t = [commandType, me.id, data.length];
			
			for(var x = 0; x < data.length; x++) {
				t.push(data.charCodeAt(x));
			}
			
			//This will null terminate the string.
			t.push(0x00);
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "int") {
			var long = parseInt(data);
			
			var t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for (var index = 0; index < t.length; index ++) {
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "float") {
			var dataFloat = parseFloat(data);
			var buffer = new ArrayBuffer(4);
			var intView = new Int32Array(buffer);
			var floatView = new Float32Array(buffer);
			
			floatView[0] = dataFloat;
			
			var long = intView[0];
			
			var t = [0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for (var index = 0; index < t.length; index ++) {
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "double") {
			var dataFloat = parseFloat(data);
			
			var buffer = new ArrayBuffer(8);
			var intView = new Int32Array(buffer);
			var floatView = new Float64Array(buffer);

			floatView[0] = dataFloat;
			
			var t = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]; //Four bytes for a integer 32-bit
			
			for ( var index = 0; index < t.length; index ++ ) {
				var long = intView[1];
				
				if(index > 3) {
					long = intView[0];
				}
				
				var byte = long & 0xff;
				t [ index ] = byte;
				long = (long - byte) / 256 ;
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "bool") {
			var t = [];
			
			if(data) {
				t.push(0x01);
			}
			
			else {
				t.push(0x00);
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "char") {
			var t = [];
			
			if(typeof data === "string") {
				t.push(data.charCodeAt(0));
			}
			
			else if(typeof data === "number") {
				t.push(data % 256);
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "void") {
			var t = [0x00];
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		else if(me.inputType === "string") {
			var t = [];
			
			if(typeof data === "string") {
				for(var x = 0; x < data.length; x++) {
					t.push(data.charCodeAt(x));
				}
				
				//This will null terminate the string.
				t.push(0x00);
			}
			
			else if(data.length === undefined) {
				for(var x = 0; x < data.length; x++) {
					if(typeof data[x] === "number") {
						t.push(data[x]);
					}
					
					else {
						t.push(0x00);
					}
				}
			}
			
			var value = new Uint8Array(t);
			base64Value = bluetoothle.bytesToEncodedString(value);
		}
		
		bluetoothle.write(me.valueWriteSuccessCallback, me.valueWriteFailedCallback, {"address":parent.parent.currentlyConnectedAddress, "value":base64Value, "serviceUuid":parent.parent.serviceUUID, "characteristicUuid":me.uuid});
	};
	
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		parent.handleBLECallback(retObject);
		
		var data = atob(retObject.value);
		
		if(me.returnType === "json" || me.returnType === undefined) {
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
		
		else if(me.returnType === "int") {
			var buf = new Uint8Array(4);
			
			for (var i = 0; i < 4; ++i) {
				buf[i] = data.charCodeAt(i);
			}

			currentValue = new Int32Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "float") {
			var buf = new Uint8Array(4);
			
			for (var i = 0; i < 4; ++i) {
				buf[i] = data.charCodeAt(i);
			}

			currentValue = new Float32Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "double") {
			var buf = new Uint8Array(8);
			
			for (var i = 0; i < 8; ++i) {
				buf[i] = data.charCodeAt(i);
			}

			currentValue = new Float64Array(buf.buffer)[0];
		}
		
		else if(me.returnType === "void") {
			currentValue = null;
		}
		
		else if(me.returnType === "bool") {
			currentValue = true == data.charCodeAt(0);
		}
		
		else if(me.returnType === "char") {
			currentValue = data.charCodeAt(i);
		}

		else if(me.returnType === "string") {
			currentValue = data;
		}
		
		if(me.valueReturned !== null) {
			me.valueReturned();
		}
		
		me.waiting = false;
		
		if(me.waitingTimeout !== null) {
			clearTimeout(me.waitingTimeout);
			me.waitingTimeout = null;
		}
		
		if(me.waitingCommand != null) {
			me.sendEvent(0, "");
		}
	};
	
	this.notifyReturnedCallback = function(retObject) {
		console.log("notifyReturnedCallback");
        
	var data = atob(retObject.value);
	console.log(data.length);
	data = data.substring(2);
	data = data.substring(0, data.length-1);
	currentValue = null;

	if(isValidJSON(data)) {
		currentValue = JSON.parse(data);
	}

	else {
		currentValue = data;
	}

		me.notified();
	};
	
	
	
	this.valueWriteFailedCallback = function(retObject) {
		console.log("valueWriteFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
		me.waiting = false;
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		console.log("valueWriteSuccessCallback:"+ me.id);
		
		parent.handleBLECallback(retObject);
		
		if(me.valueReturned !== null) {
			bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":parent.parent.currentlyConnectedAddress, "serviceUuid":parent.parent.serviceUUID, "characteristicUuid":me.uuid});
		}
		
		else {
			me.waiting = false;
		
			if(me.waitingTimeout !== null) {
				clearTimeout(me.waitingTimeout);
				me.waitingTimeout = null;
			}
			
			if(me.waitingCommand != null) {
				me.sendEvent(0, "");
			}
		}
	};
	
	//Source Method
	this.getValue = function() {
		return currentValue;
	};
}

function FunctionElement(parent, id, uuid, returnType, inputType) {
	if(device.platform == androidPlatform) {
		FunctionAndroid.call(this, parent, id, uuid, returnType, inputType);
	}
	
	else {
		FunctionIOS.call(this, parent, id, uuid, returnType, inputType);
	}
}


function ScannerElement(parent) {
	var currentValue = null;
	var me = this;
	
	parent.scanners.push(this);
	
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
		
		//console.log(JSON.stringify(currentValue));
		
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
		console.log("valueReadFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		parent.handleBLECallback(retObject);
		
		var data = atob(retObject.value);
		
		currentValue = data.charCodeAt(0);

		if(me.batteryLevelRead !== null) {
			me.batteryLevelRead();
		}
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
		console.log(JSON.stringify({"address":parent.parent.currentlyConnectedAddress, "serviceUuid":"180f", "characteristicUuid":"2a19"}));
		bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":parent.parent.currentlyConnectedAddress, "serviceUuid":"180f", "characteristicUuid":"2a19"});
	};
}
	
function GATTImmediateAlertElement(parent) {
	var currentValue = null;
	var currentStatus = null;
	
	// Me is never read?
	var me = this;
	
	//Helper Method
	this.valueReadFailedCallback = function(retObject) {
		console.log("valueReadFailedCallback:"+ me.id);
		parent.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueWriteCallback = function(retObject) {
		console.log("valueWriteSuccessCallback");
		
		parent.handleBLECallback(retObject);
	};
	
	//Target
	this.writeAlertLevel = function (level) {	
		var t = [0x00]
		
		for ( var index = 0; index < t.length; index ++ ) {
			var byte = level & 0xff;
			t [ index ] = byte;
			level = (level - byte) / 256 ;
		}
		
		var value = new Uint8Array(t);
		base64Value = bluetoothle.bytesToEncodedString(value);
		
		console.log(JSON.stringify({"address":parent.parent.currentlyConnectedAddress, "value":base64Value, "serviceUuid":"1802", "characteristicUuid":"2a06","type":"noResponse"}));
		
		bluetoothle.write(me.valueWriteCallback, me.valueWriteCallback, {"address":parent.parent.currentlyConnectedAddress, "value":base64Value, "serviceUuid":"1802", "characteristicUuid":"2a06","type":"noResponse"});
	};
}

