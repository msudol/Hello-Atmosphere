function clone(obj) {
	if(obj === null || typeof(obj) != 'object')	{
		return obj;
	}
	
	var temp = obj.constructor(); // changed

	for(var key in obj)	{
		temp[key] = clone(obj[key]);
	}
	
	return temp;
}

function Label(initialValue, name) {
	
	this.name = name;
	
	if(initialValue === undefined) {
		initialValue = "";
	}
	
	var zebraUIElement = new zebra.ui.MLabel(initialValue);

	zebraUIElement.airParent = this;
	
	zebraUIElement.setValue = function(s){
		s = s.toString();
		if (s === null) s = "";
		this.view.setValue(s);
		this.repaint();
		return this;
	};
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.setFont = function(font) {
		zebraUIElement.setFont(font);
	};
	
	//Target
	this.setValue = function(value) {
		zebraUIElement.setValue(value.toString());
	};
	
	//Target
	this.appendValue = function(value) {
		zebraUIElement.setValue(this.getValue() + value.toString());
	};
	
	//Target
	this.setColor = function(color) {
		zebraUIElement.setColor(color);
	};
	
	//Target
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	//Target
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	//Source
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.mousePressed = function(e) {
	};
	
	//Trigger
	this.mouseClicked = function (e) {
	};
	
	//Trigger
	this.mouseReleased = function (e) {
	};
	
	//Trigger
	this.mouseEntered = function(e) {
	};
	
	//Trigger
	this.mouseMoved = function(e) {
	};
	
	//Trigger
	this.mouseExited = function(e) {
	};
	
	zebraUIElement.mousePressed = function(e) {this.airParent.mousePressed(e);};
	zebraUIElement.mouseClicked = function(e) {this.airParent.mouseClicked(e);};
	zebraUIElement.mouseReleased = function(e) {this.airParent.mouseReleased(e);};
	zebraUIElement.mouseEntered = function(e) {this.airParent.mouseEntered(e);};
	zebraUIElement.mouseMoved = function(e) {this.airParent.mouseMoved(e);};
	zebraUIElement.mouseExited = function(e) {this.airParent.mouseExited(e);};
}

function Button(initialValue, name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Button(new zebra.ui.MLabel(initialValue));
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	//Target
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	//Target
	this.setBorder = function(border) {
		zebraUIElement.setBorder(border);
	};
	
	//Target
	this.setProperties = function(properties) {
		zebraUIElement.properties(properties);
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.mousePressed = function(e) {
	};
	
	//Trigger
	this.mouseClicked = function (e) {
	};
	
	//Trigger
	this.mouseReleased = function (e) {
	};
	
	//Trigger
	this.mouseEntered = function(e) {
	};
	
	//Trigger
	this.mouseMoved = function(e) {
	};
	
	//Trigger
	this.mouseExited = function(e) {
	};
	
	zebraUIElement.mousePressed = function(e) {
		this._mousePressed(e);
		this.airParent.mousePressed(e);
	};
	
	zebraUIElement.mouseClicked = function(e) {
		this.airParent.mouseClicked(e);
	};
	
	zebraUIElement.mouseReleased = function(e) {
		this._mouseReleased(e);
		this.airParent.mouseReleased(e);
	};
	
	zebraUIElement.mouseEntered = function(e) {
		this._mouseEntered(e);
		this.airParent.mouseEntered(e);
	};
	
	zebraUIElement.mouseMoved = function(e) {
		this.airParent.mouseMoved(e);
	};
	
	zebraUIElement.mouseExited = function(e) {
		if (this.isEnabled === true) {
			this.setState(this.state == 1 ? 3 : 2);
			this.$isIn = false;
		}
            
		this.airParent.mouseExited(e);
	};
}

function Checkbox(initialValue, name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Checkbox(initialValue);
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	this.trigger = function() {
		this.onTrigger();
	};
	
	this.setValue = function(value) {
		zebraUIElement.setValue(value);
		zebraUIElement.stateUpdated();
		zebraUIElement.repaint();
	};
	
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	this.getValue = function () {
		return zebraUIElement.getValue();
	};
	
	this.onTrigger = function (e) {
	};
	
	this.switched = function (e) {
	};
	
	zebraUIElement.switched = function(e){
		this.stateUpdated(this.state, this.state);
		this.airParent.switched(e);
	};
}

function TextField(initialValue, name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.HtmlTextField(initialValue);
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	this.trigger = function() {
		this.onTrigger();
	};
	
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	this.setValue = function(value) {
		zebraUIElement.setValue(value.toString());
	};
	
	this.appendValue = function(value) {
		zebraUIElement.setValue(this.getValue() + value.toString());
	};
	
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	this.onTrigger = function(e) {
	};
	
	this.keyReleased = function(e) {
	};
	
	this.keyPressed = function(e) {
	};
	
	this.returnPressed = function (e) {
	};
	
	this.returnReleased = function (e) {
	};
	
	zebraUIElement.keyReleased = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyReleased(e);
	};
	
	zebraUIElement.keyPressed = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyPressed(e);
	};
}

function ImagePan(initialValue, name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.ImagePan();
	
	var i = new Image();

	i.onload = function() {
		zebraUIElement.setImage(this);
	};
	
	i.src = initialValue;
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//PATCHING
	zebraUIElement.airOffset = [0, 0];
	zebraUIElement.airRotation = 0.0;
	
	zebraUIElement.paint = function (g) {
		if (this.view !== null) {
			var l = this.getLeft(), t = this.getTop(), w = this.width, h = this.height;
			if(this.airRotation !== undefined) {
				g.translate(this.width/2, this.height/2);
				g.rotate(this.airRotation*Math.PI/180);
				g.translate(-this.width/2, -this.height/2);
			}
			this.view.paint(g, l, t, w, h, this);
		}
	};
	
	zebraUIElement.setOffset = function (x, y) {
		if(this.airOffset === undefined) {
			this.airOffset = [0, 0];
		}
		
		if(x != this.airOffset[0] || y != this.airOffset[1]) {
			this.setLocation(this.x - this.airOffset[0], this.y - this.airOffset[1]);
		
			this.airOffset[0] = x;
			this.airOffset[1] = y;
		
			this.setLocation(this.x + this.airOffset[0], this.y + this.airOffset[1]);
		
			this.repaint();
		}
	};

	zebraUIElement.getOffset = function() {
		return this.airOffset;
	};
	
	zebraUIElement.setRotation = function(r) {
		if(this.airRotation != r) {
			this.airRotation = r;
			this.repaint();
		}
	};
	
	zebraUIElement.getRotation = function() {
		if (this.airRotation === undefined) {
			this.airRotation = 0;
		}
		return this.airRotation;
	};
		
	zebraUIElement.paint = function (g) {
		if (this.view !== null) {
			var l = this.getLeft(), t = this.getTop(), w = this.width, h = this.height;
			if(this.airRotation !== undefined) {
				g.translate(this.width/2, this.height/2);
				g.rotate(this.airRotation*Math.PI/180);
				g.translate(-this.width/2, -this.height/2);
			}
			this.view.paint(g, l, t, w, h, this);
		}
	};
	
	this.trigger = function() {
		this.onTrigger();
	};
	
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	this.setImage = function(imageSrc) {
		var img = new Image();
		
		img.onload = function() {
			zebraUIElement.setImage(this);
		};
		
		img.src = imageSrc;
	};
	
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	this.setOffset = function(x, y) {
		zebraUIElement.setOffset(x, y);
	};
	
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	this.setBackground = function(value) {
		zebraUIElement.setBackground(value);
	};
	
	this.setRotation = function(r) {
		zebraUIElement.setRotation(r);
	};
	
	this.getOffset = function() {
		return zebraUIElement.getOffset();
	};
	
	this.getRotation = function() {
		return zebraUIElement.getRotation();
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.mousePressed = function(e) {
	};
	
	//Trigger
	this.mouseClicked = function (e) {
	};
	
	//Trigger
	this.mouseReleased = function (e) {
	};
	
	//Trigger
	this.mouseEntered = function(e) {
	};
	
	//Trigger
	this.mouseMoved = function(e) {
	};
	
	//Trigger
	this.mouseExited = function(e) {
	};
	
	zebraUIElement.mousePressed = function(e) {
		this.airParent.mousePressed(e);
	};
	
	zebraUIElement.mouseClicked = function(e) {
		this.airParent.mouseClicked(e);
	};
	
	zebraUIElement.mouseReleased = function(e) {
		this.airParent.mouseReleased(e);
	};
	
	zebraUIElement.mouseEntered = function(e) {
		this.airParent.mouseEntered(e);
	};
	
	zebraUIElement.mouseMoved = function(e) {
		this.airParent.mouseMoved(e);
	};
	
	zebraUIElement.mouseExited = function(e) {
		this.airParent.mouseExited(e);
	};
}

function Slider(name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Slider();
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//PATCHING
	zebraUIElement.setValues = function(min,max,intervals,roughStep,exactStep) {
		if(roughStep <= 0 || exactStep < 0 || min >= max || min + roughStep > max || min + exactStep > max) {
			//throw new Error("Invalid values");
		}

		// inject new intervals code here
		for(var i = 0, start = min;i < intervals.length; i ++ ) {
			start += intervals[i];
			if(start > max || intervals[i] < 0) {
				//throw new Error();
			}
		}

		this.min = min;
		this.max = max;
		this.roughStep = roughStep;
		this.exactStep = exactStep;
		this.intervals = Array(intervals.length);

		for(var j=0; j<intervals.length; j++){
			this.intervals[j] = intervals[j];
		}

		if(this.value < min || this.value > max) {
			this.setValue(this.isIntervalMode ? min + intervals[0] : min);
		}
		this.vrp();
	};
		
	//PATCHING
	zebraUIElement.setValue = function(v) {
		var prev = this.value;
		if(this.value != v) {
			this.value = v;
			this._.fired(this, prev);
			this.repaint();
		}
	};
	
	//PATCHING
	zebraUIElement.setMaxValue = function (max) {
		this.setValues(this.min, max, this.intervals, this.roughStep, this.exactStep);
	};
			
	//PATCHING
	zebraUIElement.setMinValue = function(min) {
		this.setValues(min, this.max, this.intervals, this.roughStep, this.exactStep);
	};
	
	//PATCHING
	zebraUIElement.setIntervals = function(intervals) {
		this.setValues(this.min, this.max, intervals, this.roughStep, this.exactStep);
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.setMaxValue = function(max) {
		zebraUIElement.setMaxValue(max);
	};
	
	//Target
	this.setMinValue = function(min) {
		zebraUIElement.setMinValue(min);
	};
	
	//Target
	this.setIntervals = function(intervals) {
		zebraUIElement.setIntervals(intervals);
	};
	
	//Target
	this.setScaleStep = function(scaleStep) {
		zebraUIElement.setScaleStep(scaleStep);
	};
	
	//Target
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	//Target
	this.setValue = function(value) {
		zebraUIElement.setValue(value);
	};
	
	//Target
	this.setShowScale = function(show) {
		zebraUIElement.setShowScale(show);
	};
	
	//Target
	this.setShowTitle = function(show) {
		zebraUIElement.setShowTitle(show);
	};
	
	//Target
	this.setOrientation = function(orientation) {
		if(orientation.toLowerCase() === 'vertical') {
			zebraUIElement.orient = zebra.layout.VERTICAL;
		}
		
		else if(orientation.toLowerCase() === 'horizontal') {
			zebraUIElement.orient = zebra.layout.HORIZONTAL;
		}
	};
	
	//Source
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.mousePressed = function(e) {
	};
	
	//Trigger
	this.mouseClicked = function (e) {
	};
	
	//Trigger
	this.mouseReleased = function (e) {
	};
	
	//Trigger
	this.mouseEntered = function(e) {
	};
	
	//Trigger
	this.mouseMoved = function(e) {
	};
	
	//Trigger
	this.mouseExited = function(e) {
	};
	
	//Trigger on change
	this.changed = function (e) {
	};
	
	zebraUIElement.mousePressed = function(e) {
		this.airParent.mousePressed(e);
	};
	
	zebraUIElement.mouseClicked = function(e) {
		this.airParent.mouseClicked(e);
	};
	
	zebraUIElement.mouseReleased = function(e) {
		this.airParent.mouseReleased(e);
	};
	
	zebraUIElement.mouseEntered = function(e) {
		this.airParent.mouseEntered(e);
	};
	
	zebraUIElement.mouseMoved = function(e) {
		this.airParent.mouseMoved(e);
	};
	
	zebraUIElement.mouseExited = function(e) {
		this.airParent.mouseExited(e);
	};
	
	// on change binding
	zebraUIElement.bind(function(e) {e.airParent.changed(e);});
		
}

function Combobox(initialValue, name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Combo(new zebra.ui.List(initialValue));
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//PATCHING
	zebraUIElement.addValue = function(e) {
		this.list.model.add(e);
		return;
	};
	
	//PATCHING
	zebraUIElement.removeValue = function(e) {
		var index = this.list.model.d.indexOf(e);
		
		if(index < 0)
			return;
		
		this.list.model.d.pop(e);
		this.list.elementRemoved(this.list, e, this.list.model.d.length + 1);
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.setValue = function(value) {
		zebraUIElement.setValue(value);
	};
	
	//Target
	this.addValue = function(value) {
		zebraUIElement.addValue(value);
	};
	
	//Target
	this.removeValue = function(value) {
		zebraUIElement.removeValue(value);
	};
	
	//Target
	this.setEnabled = function(enabled) {
		zebraUIElement.setEnabled(enabled);
	};
	
	//Target
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	//Source
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
	//Trigger
	this.changed = function(e) {
	};
	
	zebraUIElement.bind(function(e){e.airParent.changed(e);});
	
}

function ProgressBar(name) {
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Progress();
	
	zebraUIElement.airParent = this;
	
	this.getZebraUIElement = function() {
		return zebraUIElement;
	};
	
	this.repaint = function() {
		zebraUIElement.repaint();
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Target
	this.setOrientation = function(orientation) {
		if(orientation.toLowerCase() === 'vertical') {
			zebraUIElement.setOrientation(zebra.layout.VERTICAL);
		}
		
		else if(orientation.toLowerCase() === 'horizontal') {
			zebraUIElement.setOrientation(zebra.layout.HORIZONTAL);
		}
	};
	
	//Target
	this.setValue = function(value) {
		zebraUIElement.setValue(value);
	};
	
	//Target
	this.setMaxValue = function(value) {
		zebraUIElement.setMaxValue(value);
	};
	
	//Target
	this.setGap = function(gap) {
		zebraUIElement.setGap(gap);
	};
	
	//Target
	this.setEnabled = function(enable) {
		zebraUIElement.setEnabled(enable);
	};
	
	//Target
	this.setVisible = function(visible) {
		zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		zebraUIElement.setSize(w, h);
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		zebraUIElement.setBounds(x, y, w, h);
	};
	
	//Target
	this.setBundleSize = function(i, j) {
		zebraUIElement.setBundleSize(i, j);
	};
	
	//Source
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	//Trigger
	this.onTrigger = function(e) {
	};
	
}

function isValidJSON(str) {
	try	{
		JSON.parse(str);
		return true;
	}
	
	catch(e) {
		return false;
	}
	
	return false;
}

function Expression(exp) {
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

function Condition() {
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

function FunctionAndroid(id, uuid, returnType, inputType) {
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
	baseApp.functionMapping[id] = this;
	
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
			baseApp.executeNextBLECommand();
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
		
		baseApp.startBLECommand(me, base64Value);
// 		bluetoothle.write(me.valueWriteSuccessCallback, me.valueWriteFailedCallback, {"address":baseApp.currentlyConnectedAddress, "value":base64Value, "serviceUuid":app.serviceUUID, "characteristicUuid":me.uuid});
	};
	
	//Helper Method
	this.sendEvent = function(commandType, data) {
		console.log("sendEvent:"+ me.id);
		
		if(data === undefined && me.inputType !== "json") {
			data = "";
		}
		
		if(baseApp.isConnected === false) {
			console.log("We are not fully connected yet...");
			me.waiting = false;
			return;
		}
		
		baseApp.addBLECommand(this, commandType, data);
	};
	
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		baseApp.endCurrentBLECommand();
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		baseApp.handleBLECallback(retObject);
		
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
		baseApp.handleBLECallback(retObject);
		me.waiting = false;
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		console.log("valueWriteSuccessCallback:"+ me.id);
		
		baseApp.handleBLECallback(retObject);
		
		if(me.valueReturned !== null) {
			bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":baseApp.currentlyConnectedAddress, "serviceUuid":app.serviceUUID, "characteristicUuid":me.uuid});
		}
		
		else {
			baseApp.endCurrentBLECommand();
		}
	};
	
	//Source Method
	this.getValue = function() {
		return currentValue;
	};
}

function FunctionIOS(id, uuid, returnType, inputType) {
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
	baseApp.functionMapping[id] = this;
	
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
		
		if(baseApp.isConnected === false) {
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
		
		bluetoothle.write(me.valueWriteSuccessCallback, me.valueWriteFailedCallback, {"address":baseApp.currentlyConnectedAddress, "value":base64Value, "serviceUuid":app.serviceUUID, "characteristicUuid":me.uuid});
	};
	
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		baseApp.handleBLECallback(retObject);
		
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
		baseApp.handleBLECallback(retObject);
		me.waiting = false;
	};
	
	this.valueWriteSuccessCallback = function(retObject) {
		console.log("valueWriteSuccessCallback:"+ me.id);
		
		baseApp.handleBLECallback(retObject);
		
		if(me.valueReturned !== null) {
			bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":baseApp.currentlyConnectedAddress, "serviceUuid":app.serviceUUID, "characteristicUuid":me.uuid});
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

function Function(id, uuid, returnType, inputType) {
	if(device.platform == androidPlatform) {
		FunctionAndroid.call(this, id, uuid, returnType, inputType);
	}
	
	else {
		FunctionIOS.call(this, id, uuid, returnType, inputType);
	}
}

function AppFunction() {
	var currentValue;
	
	//Trigger
	this.executed = function() {
	};
	
	//Helper this will be redefined to be the users code.
	this.executeCode = function(args) {
	};
	
	//Target
	this.execute = function(args) {
		currentValue = this.executeCode(args);
		this.executed();
	};
	
	//Source
	this.getValue = function(args) {
		return currentValue;
	};
}

function Scanner() {
	var currentValue = null;
	var me = this;
	
	baseApp.scanners.push(this);
	
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
		baseApp.startScanning();
	};
	
	//Target
	this.stopScan = function(args) {
		baseApp.stopScanning();
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

function Connection() {
	
	// Current value is never read?
	var currentValue;
	var currentAddress;
	var currentName;
	
	// Me is never read?
	var me = this;
	
	baseApp.connections.push(this);
	
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
		baseApp.connectToDevice(address);
	};
	
	//Target
	this.disconnectFromDevice = function() {
		baseApp.disconnectFromDevice();
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
		return baseApp.isConnected;
	};
	
	//We may wish to expand this into a complete bluetooth control system.
}

function LocalStorage(k) {
	
	var value = '';
	var key = k;
 
	//Trigger
	this.valueSet = function() {
	};
	
	//Trigger
	this.valueReturned = function() {
	};
	
	//Target
	this.setKey = function(k) {
		key = k;
	};
	
	//Target
	this.setValue = function(value) {
		window.localStorage.setItem(key, JSON.stringify(value));
		this.valueSet();
	};
	
	//Target
	this.retrieveValue = function() {
		value = JSON.parse(window.localStorage.getItem(key));
		this.valueReturned();
	};
	
	//Source
	this.getValue = function() {
		return value;
	};
	
	//Source
	this.getKey = function() {
		return key;
	};
	
}

function WebIO() {
	var uri = null;
	var me = this;
	var currentValue = null;
	var currentStatus = 404;
	
	//Trigger
	this.valueReturned = function () {
	};
	
	//Trigger
	this.errorReturned = function () {
	};
	
	//Helper
	this.valueReturnedCallback = function(request) {
		//console.log(JSON.stringify(request));
		
		currentStatus = request.status;
		
		if (request.status == 200) {
			try {
				currentValue = JSON.parse(request.response);
			}
			catch(e) {
				currentValue = request.response;
				
			}
			
			me.valueReturned();
		}
		
		else {
			currentValue = null;
			me.errorReturned();
		}
	};
	
	//Target
	this.get = function (data) {
        //console.log(JSON.stringify(data));
		var gdata = zebra.io.GET(uri, {data:encodeURI(JSON.stringify(data))}, me.valueReturnedCallback);
	};
	
	//Target
	this.post = function (data) {
        //console.log(JSON.stringify(data));
		var gdata = baseApp.POST(uri, {data:encodeURI(JSON.stringify(data))}, me.valueReturnedCallback);
	};
	
	//Target
	this.advancedGet = function(data) {
        //console.log("get sent");
        //console.log(data);
		var gdata = zebra.io.GET(uri, data, me.valueReturnedCallback);
	};
	
	//Target
	this.advancedPost = function(data, headers) {
        //console.log("get sent");
        //console.log(JSON.stringify(data));
		var gdata = baseApp.POST(uri, data, me.valueReturnedCallback, headers);
	};
	
	//Target
	this.setURI = function (value) {
		uri = value;
	};
	
	//Source
	this.getURI = function () {
		return uri;
	};
	
	//Source
	this.getValue = function () {
		return currentValue;
	};
	
	//Source
	this.getStatus = function () {
		return currentStatus;
	};
}

function GATTBattery() {
	var currentValue = null;
	var currentStatus = null;
	
	// Me is never read?
	var me = this;
	
	baseApp.connections.push(this);
	
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
		baseApp.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueReturnedCallback = function(retObject) {
		console.log("valueReturnedCallback:"+ me.id);
		
		if(retObject.characteristicUuid != me.uuid)
		{
			console.log("I got the wrong UUID value! " + me.uuid + " I got " + retObject.characteristicUuid);
		}
		
		baseApp.handleBLECallback(retObject);
		
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
		console.log(JSON.stringify({"address":baseApp.currentlyConnectedAddress, "serviceUuid":"180f", "characteristicUuid":"2a19"}));
		bluetoothle.read(me.valueReturnedCallback, me.valueReadFailedCallback, {"address":baseApp.currentlyConnectedAddress, "serviceUuid":"180f", "characteristicUuid":"2a19"});
	};
}
	
function GATTImmediateAlert() {
	var currentValue = null;
	var currentStatus = null;
	
	// Me is never read?
	var me = this;
	
	//Helper Method
	this.valueReadFailedCallback = function(retObject) {
		console.log("valueReadFailedCallback:"+ me.id);
		baseApp.handleBLECallback(retObject);
	};
	
	//Helper
	this.valueWriteCallback = function(retObject) {
		console.log("valueWriteSuccessCallback");
		
		baseApp.handleBLECallback(retObject);
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
		
		console.log(JSON.stringify({"address":baseApp.currentlyConnectedAddress, "value":base64Value, "serviceUuid":"1802", "characteristicUuid":"2a06","type":"noResponse"}));
		
		bluetoothle.write(me.valueWriteCallback, me.valueWriteCallback, {"address":baseApp.currentlyConnectedAddress, "value":base64Value, "serviceUuid":"1802", "characteristicUuid":"2a06","type":"noResponse"});
	};
}

function WebLink(url) {
	this.url = url;
	
	//Trigger
	this.opened = function() {
	};
	
	this.open = function() {
		window.open(this.url, '_system');
		
		this.opened();
	};
	
	this.setURL = function(url) {
		this.url = url;
	};
	
	this.getURL = function() {
		return this.url;
	};
	
}