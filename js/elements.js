function FilterElement(parent) {
	var testExpressions = [];
	var currentData = [];
	var currentPassedData = [];
	var currentFailedData = [];
	var percentagePassed = 0.0;
	
	//Trigger
	this.filtered = function() {
	};
	
	this.setTests = function(tests) {
		testExpressions = tests;
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
	var buffer = [];
	var pushedData = null;
	var poppedData = null;
	var removedData = null;
	var currentValue = null;
	var splicedData = null;
	var retrievedData = null;
	
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
	this.spliced = function() {
	};
	
	//Target
	this.push = function(value) {
		buffer.push(value);
		pushedData = value;
		this.pushed();
	};
	
	//Target
	this.pop = function() {
		poppedData = buffer.pop();
		this.popped();
	};
	
	//Target
	this.splice = function(value) {
		splicedData = buffer.splice(value);
		this.spliced();
	};
	
	//Target
	this.getIndex = function(value) {
		retrievedData = buffer[value];
		this.indexRetreived();
	};
	
	//Target
	this.clear = function() {
	};
	
	//Source
	this.getRetreived = function() {
		return retrievedData;
	};
	
	//Source
	this.getPopped = function() {
		return poppedData;
	};
	
	//Source
	this.getPushed = function() {
		return pushedData;
	};
	
	//Source
	this.getSpliced = function() {
		return splicedData;
	};
	
	//Source
	this.getLength = function() {
		return buffer.length;
	};
	
	//Source
	this.getBuffer = function() {
		return buffer;
	};
}

function ExpressionElement(parent, exp) {
	var currentValue = null;
	var currentValues = {};
	var me = this;
	var expression = exp;
	
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
	this.evaluate = function(values) {

		if(values !== undefined && values !== null) {
			this.addValues(values);
		}
		
		values = currentValues;
		
		try {
			eval("currentValue = " + expression);
		}
		
		catch(err) {
			if(baseApp.debugLog !== undefined) {
				baseApp.debugLog("Expression Error: " + err.toString());
			}
			
			return;
		}
		
		if(currentValue === true) {
			this.expressionTrue();
		}
		
		else {
			this.expressionFalse();
		}
		
		this.evaluated();
	};
	
	//Target
	this.clearValues = function() {
		currentValues = {};
	};
	
	//Target
	this.addValues = function(values) {
		for(var key in values) {
			currentValues[key] = values[key];
		}
	};
	
	//Target
	this.addValue = function(key, value) {
		currentValues[key] = value;
	};
	
	//Source
	this.getValue = function() {
		return currentValue;
	};
	
	//Source
	this.getValues = function() {
		return currentValues;
	};
}

function ConditionElement(parent) {
	var currentValue = null;
	var me = this;
	
	//Trigger
	this.conditionTrue = function(e) {
	};
	
	//Trigger
	this.conditionFalse = function(e) {
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
