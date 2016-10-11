/*** 
 * Copyright 2014 Anaren Inc.
 * All rights reserved
 ***/

function FilterElement(parent) {
	var testExpressions = [];
	var currentData = [];
	var currentPassedData = [];
	var currentFailedData = [];
	var percentagePassed = 0.0;
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.filtered = function() {
	};
	
	this.setTests = function(tests) {
		testExpressions = tests;
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.addTest = function(test) {
		if(typeof test !== "string") {
			return;
		}
		
		testExpressions.push({equation:test});
		
		return;
	};
	
	//Target
	this.clearTests = function() {
		testExpressions = [];
		
		return;
	};
	
	//Target
	this.addData = function(value) {
		currentData.push(value);
	};
	
	//Target
	this.setData = function(data) {
		
		if(!(data instanceof Array)) {
			return;
		}
		
		currentData = data;
	};
	
	//Target
	this.clearData = function(value) {
		data = [];
	};
	
	//Target
	this.filter = function() {
		
		currentPassedData = [];
		currentFailedData = [];
		
		for(var i = 0; i < data.length; i++) {
			for(var j = 0; j < testExpressions.length; j++) {
				var testValue = null;
				var value = data[i];
				
				try {
					eval("testValue = " + testExpressions[j].equation);
				}
				
				catch(err) {
					if(airMe.parent.debugLog !== undefined) {
						airMe.parent.debugLog("Filter Error: \"" + testExpressions[j].equation + "\"" + err.toString());
					}
					
					return;
				}
				
				if(!value) {
					currentFailedData.push(data[i]);
					break;
				}
				
				//We have passed all filter expressions
				else if(j == testExpressions.length - 1) {
					currentPassedData.push(data[i]);
				}
			}
		}
		
		this.filtered();
	};
	
	//Source
	this.getData = function() {
		return data;
	};
	
	//Source
	this.getPassedData = function() {
		return currentPassedData;
	};
	
	//Source
	this.getFailedData = function() {
		return currentFailedData;
	};
	
	//Source
	this.getPassedRatio = function() {
		return currentPassedData.length/data.length;
	};
	
	//Source
	this.getFailedRatio = function() {
		return currentFailedData.length/data.length;
	};
}

function BufferElement(parent) {
	this.buffer = [];
	this.pushedData = null;
	this.poppedData = null;
	this.removedData = null;
	this.currentValue = null;
	this.splicedData = null;
	this.retrievedData = null;
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.popped = function() {
	};
	
	//Trigger
	this.pushed = function() {
	};
	
	//Trigger
	this.indexRetreived = function() {
	};
	
	//Trigger
	this.indexSet = function() {
	};
	
	//Trigger
	this.spliced = function() {
	};
	
	//Trigger
	this.cleared = function() {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.push = function(value) {
		this.buffer.push(value);
		
		console.log("Pushing " + JSON.stringify(value));
		console.log("Current Buffer: " + JSON.stringify(this.buffer));
		
		this.pushedData = value;
		this.pushed();
	};
	
	//Target
	this.pop = function() {
		this.poppedData = this.buffer.pop();
		
		console.log("Popping " + JSON.stringify(poppedData));
		console.log("Current Buffer: " + JSON.stringify(this.buffer));
		
		this.popped();
	};
	
	//Target
	this.splice = function(value, length) {
		this.splicedData = this.buffer.splice();
		this.splicedData = this.splicedData.splice(value, length);
		this.spliced();
	};
	
	//Target
	this.setIndex = function(index, value) {
		this.buffer[index] = value;
		this.indexSet();
	};
	
	//Target
	this.getIndex = function(value) {
		this.retrievedData = this.buffer[value];
		this.indexRetreived();
	};
	
	//Target
	this.clear = function() {
		this.buffer = [];
		this.cleared();
	};
	
	//Source
	this.getRetreived = function() {
		return this.retrievedData;
	};
	
	//Source
	this.getPopped = function() {
		return this.poppedData;
	};
	
	//Source
	this.getPushed = function() {
		return this.pushedData;
	};
	
	//Source
	this.getSpliced = function() {
		return this.splicedData;
	};
	
	//Source
	this.getLength = function() {
		return this.buffer.length;
	};
	
	//Source
	this.getBuffer = function() {
		
		console.log("getBuffer");
		console.log("Current Buffer: " + JSON.stringify(this.buffer));
		
		return this.buffer;
	};
}

function ExpressionElement(parent, exp) {
	this.currentValue = null;
	this.currentValues = {};
	this.expression = exp;
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.expressionTrue = function(e) {
	};
	
	//Trigger
	this.expressionFalse = function(e) {
	};
	
	//Trigger
	this.evaluated = function(e) {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.evaluate = function(values) {

		if(values !== undefined && values !== null) {
			this.addValues(values);
		}
		
		var atmoLocalValues = {};
		var currentValue = this.currentValue;
		
		atmoLocalValues.values = this.currentValues;
		atmoLocalValues.currentValue = this.currentValue;
		
		values = this.currentValues;
		
		try {
			eval("currentValue = " + this.expression, atmoLocalValues);
		}
		
		catch(err) {
			if(baseApp.debugLog !== undefined) {
				baseApp.debugLog("Expression Error: " + err.toString());
			}
			
			return;
		}
		
		if(atmoLocalValues._used === true) {
			this.currentValue = atmoLocalValues.currentValue;
			this.currentValues = atmoLocalValues.values;
		}
		
		else {
			this.currentValue = currentValue;
			this.currentValues = values;
		}
		
		if(this.currentValue === true) {
			this.expressionTrue();
		}
		
		else {
			this.expressionFalse();
		}
		
		this.evaluated();
	};
	
	//Target
	this.clearValues = function() {
		this.currentValues = {};
	};
	
	//Target
	this.addValues = function(values) {
		for(var key in values) {
			this.currentValues[key] = values[key];
		}
		
// 		console.log("addValues:" + JSON.stringify(this.currentValues));
	};
	
	//Target
	this.addValue = function(key, value) {
		
// 		console.log("Adding: " + key + "," + value);
		
		this.currentValues[key] = value;
		
// 		console.log("addValue:" + JSON.stringify(this.currentValues));
	};
	
	//Source
	this.getValue = function() {
		return this.currentValue;
	};
	
	//Source
	this.getValues = function() {
		return this.currentValues;
	};
}

function ConditionElement(parent) {
	var currentValue = null;
	var me = this;
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.conditionTrue = function(e) {
	};
	
	//Trigger
	this.conditionFalse = function(e) {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.check = function(value) {
		
		currentValue = value;
		
		if(value) {
			this.conditionTrue();
		}
		
		else {
			this.conditionFalse();
		}
	};
	
	//Source
	this.getValue = function() {
		return currentValue;
	};
}

function ForEachElement(parent) {
	this.currentValue = null;
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.iteration = function() {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.iterate = function(array) {
		
		if(array instanceof Array) {
			
			for(var i = 0; i < array.length; i++) {
				this.currentValue = array[i];
				this.iteration();
			}
			
		}
		
	};
	
	//Source
	this.getValue = function() {
		return this.currentValue;
	};
}