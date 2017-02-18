
function BaseElement(parent) {
	this.parent = parent;
	
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
}

BaseElement.prototype.trigger = function() {
	this.onTrigger();
};

BaseElement.prototype.updateState = function(state) {
};

function BufferElement(parent) {
	this.buffer = [];
	this.pushedData = null;
	this.poppedData = null;
	this.removedData = null;
	this.currentValue = null;
	this.splicedData = null;
	this.retrievedData = null;
}

//Trigger
BufferElement.prototype.onTrigger = function(e) {
};

//Trigger
BufferElement.prototype.popped = function() {
};

//Trigger
BufferElement.prototype.pushed = function() {
};

//Trigger
BufferElement.prototype.indexRetreived = function() {
};

//Trigger
BufferElement.prototype.indexSet = function() {
};

//Trigger
BufferElement.prototype.spliced = function() {
};

//Trigger
BufferElement.prototype.cleared = function() {
};

//Trigger
BufferElement.prototype.enqueued = function() {
};

//Trigger
BufferElement.prototype.dequeued = function() {
};

//Target
BufferElement.prototype.trigger = function() {
	this.onTrigger();
};

//Target
BufferElement.prototype.push = function(value) {
	this.buffer.push(value);
	this.pushedData = value;
	this.pushed();
};

//Target
BufferElement.prototype.pop = function() {
	this.poppedData = this.buffer.pop();
	this.popped();
};

//Target
BufferElement.prototype.splice = function(value, length) {
	this.splicedData = this.buffer.splice(value, length);
	this.spliced();
};

//Target
BufferElement.prototype.enqueue = function(value) {
	this.buffer.push(value);
	this.enqueuedData = value;
	this.enqueued();
};

//Target
BufferElement.prototype.dequeue = function() {
	this.dequeuedData = this.buffer.shift();
	this.dequeued();
};

//Target
BufferElement.prototype.setIndex = function(index, value) {
	this.buffer[index] = value;
	this.indexSet();
};

//Target
BufferElement.prototype.getIndex = function(value) {
	this.retrievedData = this.buffer[value];
	this.indexRetreived();
};

//Target
BufferElement.prototype.clear = function() {
	this.buffer = [];
	this.cleared();
};

//Source
BufferElement.prototype.getRetreived = function() {
	return this.retrievedData;
};

//Source
BufferElement.prototype.getPopped = function() {
	return this.poppedData;
};

//Source
BufferElement.prototype.getPushed = function() {
	return this.pushedData;
};

//Source
BufferElement.prototype.getSpliced = function() {
	return this.splicedData;
};

//Source
BufferElement.prototype.getDequeued = function () {
	return this.dequeuedData;
};

//Source
BufferElement.prototype.getEnqueued = function () {
	return this.enqueuedData;
};

//Source
BufferElement.prototype.getLength = function() {
	return this.buffer.length;
};

//Source
BufferElement.prototype.getBuffer = function() {
	return this.buffer;
};



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
		
		if(!(value == 0)) {
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
		
		if(!(this.currentValue == 0)) {
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


function ForEachElement(parent) {
	this.currentValue = null;
	
	
}

//Trigger
ForEachElement.prototype.onTrigger = function(e) {
};
	
//Trigger
ForEachElement.prototype.iteration = function() {
};
	
//Target
ForEachElement.prototype.trigger = function() {
	this.onTrigger();
};

//Target
ForEachElement.prototype.iterate = function(array) {
	
	if(array instanceof Array) {
		
		for(var i = 0; i < array.length; i++) {
			this.currentValue = array[i];
			this.iteration();
		}
		
	}
	
};

//Source
ForEachElement.prototype.getValue = function() {
	return this.currentValue;
};


function NullElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
}

NullElement.prototype = Object.create(BaseElement.prototype);
NullElement.prototype.constructor = NullElement;

NullElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};

