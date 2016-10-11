/*** 
 * Copyright 2014 Anaren Inc.
 * All rights reserved
 ***/

function LabelElement(parent, name) {
	parent.elements[name] = this;
	this.name = name;
	
	var zebraUIElement = new zebra.ui.MLabel("");
	zebraUIElement.airParent = this;
	
	zebraUIElement.setValue = function(s) {
		
		if (s === undefined) s = '';
		if (s === null) s = '';
		if (s.toString === undefined) s = '';
		
		s = s.toString();
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
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}		

		zebraUIElement.setValue(value.toString());

	};
	
	//Target
	this.appendValue = function(value) {

		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}		
		
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
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.mousePressed = function(e) {
		parent.sendTrigger(this.name, "mousePressed");
	};
	
	//Trigger
	this.mouseClicked = function (e) {
		parent.sendTrigger(this.name, "mouseClicked");
	};
	
	//Trigger
	this.mouseReleased = function (e) {
		parent.sendTrigger(this.name, "mouseReleased");
	};
	
	//Trigger
	this.mouseEntered = function(e) {
// 		parent.sendTrigger(this.name, "mouseEntered");
	};
	
	//Trigger
	this.mouseMoved = function(e) {
// 		parent.sendTrigger(this.name, "mouseMoved");
	};
	
	//Trigger
	this.mouseExited = function(e) {
// 		parent.sendTrigger(this.name, "mouseExited");
	};
	
	//Cloud
	this.updateState = function(state) {
// 		console.log(state);
		
		if(state.font !== undefined) {
			this.setFont(state.font);
		}
		
		if(state.value !== undefined) {
			this.setValue(state.value);
		}
		
		if(state.color !== undefined) {
			this.setColor(state.color);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
		
		if(state.font !== undefined) {
			this.setFont(state.font);
		}
	};
	
	zebraUIElement.mousePressed = function(e) {this.airParent.mousePressed(e);};
	zebraUIElement.mouseClicked = function(e) {this.airParent.mouseClicked(e);};
	zebraUIElement.mouseReleased = function(e) {this.airParent.mouseReleased(e);};
	zebraUIElement.mouseEntered = function(e) {this.airParent.mouseEntered(e);};
	zebraUIElement.mouseMoved = function(e) {this.airParent.mouseMoved(e);};
	zebraUIElement.mouseExited = function(e) {this.airParent.mouseExited(e);};
}

function ButtonElement(parent, name) {
	parent.elements[name] = this;
	this.name = name;

	var zebraUIElement = new zebra.ui.Button(new zebra.ui.MLabel(""));
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
	
	//Target
	this.setLabel = function(value) {
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}
		
		zebraUIElement.find("//zebra.ui.MLabel").setValue(value.toString());
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.mousePressed = function(e) {
		parent.sendTrigger(this.name, "mousePressed");
	};
	
	//Trigger
	this.mouseClicked = function (e) {
		parent.sendTrigger(this.name, "mouseClicked");
	};
	
	//Trigger
	this.mouseReleased = function (e) {
		parent.sendTrigger(this.name, "mouseReleased");
	};
	
	//Trigger
	this.mouseEntered = function(e) {
// 		parent.sendTrigger(this.name, "mouseEntered");
	};
	
	//Trigger
	this.mouseMoved = function(e) {
// 		parent.sendTrigger(this.name, "mouseMoved");
	};
	
	//Trigger
	this.mouseExited = function(e) {
// 		parent.sendTrigger(this.name, "mouseExited");
	};
	
	//Cloud
	this.updateState = function(state) {
// 		console.log(state);
		
		if(state.label !== undefined) {
			this.setLabel(state.label);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
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

function CheckboxElement(parent, name) {
	
	parent.elements[name] = this;
	
	var updatingState = false;
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Checkbox(new zebra.ui.MLabel(""));
	
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
	
	this.setLabel = function(value) {
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}
		
		zebraUIElement.find("//zebra.ui.Label").setValue(value.toString());
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
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	this.switched = function (e) {
		if(!updatingState) {
			parent.sendTrigger(this.name, "switched", {"value":this.getValue()});
		}
	};
	
	//Cloud
	this.updateState = function(state) {
// 		console.log(state);
		updatingState = true;
		
		if(state.value !== undefined) {
			zebraUIElement.setValue(state.value);
		}
		
		if(state.label !== undefined) {
			this.setEnabled(state.label);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
		
		updatingState = false;
	};
	
	zebraUIElement.switched = function(e){
		this.stateUpdated(this.state, this.state);
		this.airParent.switched(e);
	};
}

function TextFieldElement(parent, name) {
	
	parent.elements[name] = this;
	
	this.name = name;
	this.lastValue = '';
	this.valueLocked = false;
	
	var zebraUIElement = new zebra.ui.HtmlTextField("");
	
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
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}

		zebraUIElement.setValue(value.toString());
	};
	
	this.appendValue = function(value) {
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}
		
		zebraUIElement.setValue(this.getValue() + value.toString());
	};
	
	this.getValue = function() {
		return zebraUIElement.getValue();
	};
	
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	this.keyReleased = function(e) {
		this.lastValue = this.getValue();
		this.valueLocked = true;
		parent.sendTrigger(this.name, "keyReleased", {"value":this.getValue()});
		//if (env.debug) baseApp.debugLog("Text field value on key release: " + this.getValue());
	};
	
	this.keyPressed = function(e) {
		parent.sendTrigger(this.name, "keyPressed");
	};
	
	this.returnPressed = function (e) {
		parent.sendTrigger(this.name, "returnPressed");
	};
	
	this.returnReleased = function (e) {
		parent.sendTrigger(this.name, "returnReleased");
	};
	
	//Cloud
	this.updateState = function(state) {
// 		console.log(state);
		
		if(state.value !== undefined) {
			
			if(!this.valueLocked) {
				this.setValue(state.value);
			}
			
			if(state.value === this.lastValue) {
				this.lastValue = null;
				this.valueLocked = false;
			}
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
	};
	
	zebraUIElement.keyReleased = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyReleased(e);
		
		this.repaint();
	};
	
	zebraUIElement.keyPressed = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyPressed(e);
	};
}

function ImageElement(parent, name) {
	
	parent.elements[name] = this;
	
	this.name = name;
	
	var zebraUIElement = new zebra.ui.ImagePan();
	
	var i = new Image();

	i.onload = function() {
		zebraUIElement.setImage(this);
	};
	
	i.src = "";
	
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
		
		x = x || 0;
		y = y || 0;
		
		if(typeof x !== "number" || typeof y !== "number") {
			return;
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
		if(this.airOffset === undefined) {
			this.airOffset = [0, 0];
		}
		
		return this.airOffset;
	};
	
	zebraUIElement.setRotation = function(r) {
		if(typeof r !== "number") {
			return;
		}
		
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
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
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

	//Source
	this.getValues = function() {
		return {
			"Offset":this.getOffset,
			"Rotation":this.getRotation
		};
	};
	
	//Trigger
	this.mousePressed = function(e) {
		parent.sendTrigger(this.name, "mousePressed");
	};
	
	//Trigger
	this.mouseClicked = function (e) {
		parent.sendTrigger(this.name, "mouseClicked");
	};
	
	//Trigger
	this.mouseReleased = function (e) {
		parent.sendTrigger(this.name, "mouseReleased");
	};
	
	//Trigger
	this.mouseEntered = function(e) {
// 		parent.sendTrigger(this.name, "mouseEntered");
	};
	
	//Trigger
	this.mouseMoved = function(e) {
// 		parent.sendTrigger(this.name, "mouseMoved");
	};
	
	//Trigger
	this.mouseExited = function(e) {
// 		parent.sendTrigger(this.name, "mouseExited");
	};
	
	//Cloud
	this.updateState = function(state) {
		if(state.offset !== undefined) {
			this.setOffset(state.offset.x, state.offset.y);
		}
		
		if(state.rotation !== undefined) {
			this.setRotation(state.rotation);
		}
		
		if(state.imageSrc !== undefined) {
			this.setImage(state.imageSrc);
		}
		
		if(state.background !== undefined) {
			this.setBackground(state.background);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
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

function SliderElement(parent, name) {
	
	parent.elements[name] = this;
	
	this.name = name;
	this.lastValue = '';
	this.valueLocked = false;
	
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
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.mousePressed = function(e) {
	};
	
	//Trigger
	this.mouseClicked = function (e) {
	};
	
	//Trigger
	this.mouseReleased = function (e) {
		parent.sendTrigger(this.name, "mouseReleased");
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
	
	//Trigger
	this.changed = function (e) {
		this.lastValue = e.getValue();
		this.valueLocked = true;
		parent.sendTrigger(e.airParent.name, "changed", {"value":e.getValue()});
	};
	
	//Cloud
	this.updateState = function(state) {
		if(state.minValue !== undefined) {
			this.setMinValue(state.minValue);
		}
		
		if(state.maxValue !== undefined) {
			this.setMaxValue(state.maxValue);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
		
		if(state.intervals !== undefined) {
			this.setIntervals(state.intervals);
		}
		
		if(state.orientation !== undefined) {
			this.setOrientation(state.orientation);
		}
		
		if(state.value !== undefined) {
			
			if(!this.valueLocked) {
				zebraUIElement.setValue(state.value);
			}
			
			if(state.value === this.lastValue) {
				this.lastValue = null;
				this.valueLocked = false;
			}
		}
	};
	
	zebraUIElement.baseMousePressed = zebraUIElement.mousePressed;
	zebraUIElement.baseMouseClicked = zebraUIElement.mousePressed;
	zebraUIElement.baseMouseReleased = zebraUIElement.mousePressed;
	zebraUIElement.baseMouseEntered = zebraUIElement.mousePressed;
	zebraUIElement.baseMouseMoved = zebraUIElement.mousePressed;
	zebraUIElement.baseMouseExited = zebraUIElement.mousePressed;
	
	zebraUIElement.mousePressed = function(e) {
		this.airParent.mousePressed(e);
		zebraUIElement.baseMousePressed(e);
	};
	
	zebraUIElement.mouseClicked = function(e) {
		this.airParent.mouseClicked(e);
		zebraUIElement.baseMouseClicked(e);
	};
	
	zebraUIElement.mouseReleased = function(e) {
		this.airParent.mouseReleased(e);
		zebraUIElement.baseMouseReleased(e);
	};
	
	zebraUIElement.mouseEntered = function(e) {
		this.airParent.mouseEntered(e);
		zebraUIElement.baseMouseEntered(e);
	};
	
	zebraUIElement.mouseMoved = function(e) {
		this.airParent.mouseMoved(e);
		zebraUIElement.baseMouseMoved(e);
	};
	
	zebraUIElement.mouseExited = function(e) {
		this.airParent.mouseExited(e);
		zebraUIElement.baseMouseExited(e);
	};
	
	// on change binding
	zebraUIElement.bind(function(e) {e.airParent.changed(e);});
		
}

function ComboboxElement(parent, name) {
	parent.elements[name] = this;
	this.name = name;
	
	var zebraUIElement = new zebra.ui.Combo(new zebra.ui.List([]));
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
		this.list.model.remove(e);
	};
	
	
	//PATCHING
	zebraUIElement.removeAll = function() {
		this.list.mode.removeAll();
	};
	
	//PATCHING
	zebraUIElement.addValues = function(e) {
		for(var i = 0; i < e.length; i++) {
			this.list.model.add(e[i]);
		}
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
	this.addValues = function(value) {
		zebraUIElement.addValues(value);
	};
	
	//Target
	this.removeValue = function(value) {
		zebraUIElement.removeValue(value);
	};
	
	//Target
	this.clearValues = function(value) {
		zebraUIElement.removeAll();
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
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.changed = function(e) {
		parent.sendTrigger(this.name, "changed");
	};
	
	//Cloud
	this.updateState = function(state) {
		
		if(state.values !== undefined) {
			zebraUIElement.list.model.d = state.values;
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
		
		if(state.intervals !== undefined) {
			this.setIntervals(state.intervals);
		}
		
		if(state.orientation !== undefined) {
			this.setOrientation(state.orientation);
		}
		
		if(state.value !== undefined) {
			zebraUIElement.setValue(state.value);
		}
	};
	
	zebraUIElement.bind(function(e){e.airParent.changed(e);});
	
}

function ProgressBarElement(parent, name) {
	
	parent.elements[name] = this;
	
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
		parent.sendTrigger(this.name, "onTrigger");
	};
		
	//Cloud
	this.updateState = function(state) {
		if(state.gap !== undefined) {
			this.setGap(state.gap);
		}
		
		if(state.enabled !== undefined) {
			this.setEnabled(state.enabled);
		}
		
		if(state.visible !== undefined) {
			this.setVisible(state.visible);
		}
		
		if(state.location !== undefined && state.size !== undefined) {
			this.setBounds(state.location.x, state.location.y, state.size.width, state.size.height);
		}
		
		if(state.location !== undefined && state.size === undefined) {
			this.setLocation(state.location.x, state.location.y);
		}
		
		if(state.size !== undefined && state.location === undefined) {
			this.setSize(state.size.width, state.size.height);
		}
		
		if(state.maxValue !== undefined) {
			this.setMaxValue(state.maxValue);
		}
		
		if(state.orientation !== undefined) {
			this.setOrientation(state.orientation);
		}
		
		if(state.bundleSize !== undefined) {
			this.setBundleSize(state.bundleSize.w, state.bundleSize.h);
		}
		
		if(state.value !== undefined) {
			this.setValue(state.value);
		}
	};
	
}

function WebIOElement(parent, name) {
	
	parent.elements[name] = this;
	
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
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
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
		var gdata = POSTForm(uri, {data:encodeURI(JSON.stringify(data))}, me.valueReturnedCallback);
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
		var gdata = POSTForm(uri, data, me.valueReturnedCallback, headers);
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

	//Source
	this.getValues = function() {
		return {
			"URI":this.getURI,
			"Value":this.getValue,
			"Status":this.getStatus
		};
	};

}

// for handling connection to stratosphere directly 
// needs to have a global scope for  UUID & TOKEN 
function MobileCloudEventElement(parent, name) {
	
	parent.elements[name] = this;
	
	this.name = name;
	var uri = null;
	var me = this;
	var currentValue = null;
	var currentStatus = 404;
	
	//Trigger
	this.eventSent = function () {
	};
	
	//Trigger
	this.errorReturned = function () {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Target
	this.sendEvent = function(value) {
		
		if(parent.currentStratosphereUuid === null || 
			parent.currentStratosphereUuid === undefined || 
			parent.currentStratosphereUuid === null ||
			parent.currentStratosphereUuid === undefined) {
			
			return;
		}
		
		var currentMobileCloudEventElement = this;
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log("Strat Event Success");
				console.log(xhttp.responseText);
				
				currentMobileCloudEventElement.eventSent();
			}
		};
		
		console.log("https://ionosphere.anaren.com:1337/thing/" + parent.currentStratosphereUuid + "/event/" + this.name + "/" + encodeURIComponent(JSON.stringify(value)));
		xhttp.open("GET", "https://ionosphere.anaren.com:1337/thing/" + parent.currentStratosphereUuid  + "/event/" + this.name + "/" + encodeURIComponent(JSON.stringify(value)));
		xhttp.setRequestHeader("stratosphere", parent.currentStratosphereToken);
		xhttp.send();
	};
}

function LocalStorageElement(parent, name) {
	
	parent.elements[name] = this;
	
	var value = '';
	var key = name;
 
	//Trigger
	this.valueSet = function() {
	};
	
	//Trigger
	this.valueReturned = function() {
	};
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
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

	//Source
	this.getValues = function() {
		return {
			"Value":this.getValue,
			"Key":this.getKey
		};
	};
	
}

function WebLinkElement(parent, name) {
	parent.elements[name] = this;
	
	this.url = "about:blank";
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.opened = function() {
	};
	
	//Target
	this.open = function() {
		window.open(this.url, '_system');
		
		this.opened();
	};
	
	//Target
	this.setURL = function(url) {
		this.url = url;
	};
	
	//Source
	this.getURL = function() {
		return this.url;
	};
	
}

function GraphElement(parent, name) {
	parent.elements[name] = this;
	
	var me = this;

	this.chart = null;
	this.datasets = [];
	this.datasetLabelToNumber = {};

	this.isEmptyDataset = {};
	this.lastDataset = 0;
	
	this.zebraUIElement = new zebra.ui.HtmlElement("canvas");
	
	this.preLoadState = {
		showLabels: null,
		showVerticalLines: null,
		showHorizontalLines: null,
		gridLineWidth: null,
		gridLineColor: null,
		originLineColor: null,
		font: null,
		scaleStartValue: null,
		scaleSteps: null,
		scaleStepWidth: null,
		datasetLineColor: {},
		showPointDot:null,
		points: [],
		scaleType:"number",
	};
	
	this.zebraUIElement.basePaint = this.zebraUIElement.paint;
	var firstLoad = true;
	
	this.zebraUIElement.paint = function(g) {
		
		this.basePaint(g);

		if(firstLoad) {
			firstLoad = false;
			var ctx = this.element.getContext("2d");
			var k;
			var chartConfig = {
				showScale: true,
				scaleShowLabels: true,
				scaleShowHorizontalLines: true,
				scaleShowVerticalLines: false,
				scaleLineWidth: 1,
				scaleLineColor: "red",
				scaleGridLineColor: "#999",
				scaleLabel: "<%=value%>",
				scaleDateFormat: "mm/yyyy HH:MM",
				scaleTimeFormat: "HH:MM",
				scaleDateTimeFormat: "HH:MM",
				scaleGridLineWidth: 1,
				useUtc: true,
				pointDot: true,
				scaleType: me.preLoadState.scaleType,
				animation: false,

				scaleOverride: true,
				scaleSteps: 3,
				scaleStepWidth: 50,
				scaleStartValue: 0,
			};
			
			me.chart = new Chart(ctx).Scatter(me.datasets, chartConfig);
			
			if(me.preLoadState.showLabels !== undefined && me.preLoadState.showLabels !== null) {
				me.setShowLabels(me.preLoadState.showLabels);
			}
			
// 			showVerticalLines
			if(me.preLoadState.showVerticalLines !== undefined && me.preLoadState.showVerticalLines !== null) {
				me.setShowVerticalLines(me.preLoadState.showVerticalLines);
			}
			
// 			showHorizontalLines
			if(me.preLoadState.showHorizontalLines !== undefined && me.preLoadState.showHorizontalLines !== null) {
				me.setShowHorizontalLines(me.preLoadState.showHorizontalLines);
			}
			
// 			gridLineWidth
			if(me.preLoadState.gridLineWidth !== undefined && me.preLoadState.gridLineWidth !== null) {
				me.setGridLineWidth(me.preLoadState.gridLineWidth);
			}
			
// 			gridLineColor
			if(me.preLoadState.gridLineColor !== undefined && me.preLoadState.gridLineColor !== null) {
				me.setGridLineColor(me.preLoadState.gridLineColor);
			}
			
// 			originLineColor
			if(me.preLoadState.originLineColor !== undefined && me.preLoadState.originLineColor !== null) {
				me.setOriginLineColor(me.preLoadState.originLineColor);
			}
			
// 			font
			if(me.preLoadState.font !== undefined && me.preLoadState.font !== null) {
				me.setFont(me.preLoadState.font);
			}
			
// 			scaleStartValue
			if(me.preLoadState.scaleStartValue !== undefined && me.preLoadState.scaleStartValue !== null) {
				me.setScaleStartValue(me.preLoadState.scaleStartValue);
			}
			
// 			scaleSteps
			if(me.preLoadState.scaleSteps !== undefined && me.preLoadState.scaleSteps !== null) {
				me.setScaleSteps(me.preLoadState.scaleSteps);
			}
			
// 			scaleStepWidth
			if(me.preLoadState.scaleStepWidth !== undefined && me.preLoadState.scaleStepWidth !== null) {
				me.setScaleStepWidth(me.preLoadState.scaleStepWidth);
			}
			
// 			datasetLineColor
			if(me.preLoadState.datasetLineColor !== undefined && me.preLoadState.datasetLineColor !== null) {
				for(k in me.preLoadState.datasetLineColor) {
					me.setDatasetLineColor(k, me.preLoadState.datasetLineColor[k]);
				}
			}
			
// 			showPointDot
			if(me.preLoadState.showPointDot !== undefined && me.preLoadState.showPointDot !== null) {
				me.setShowPointDots(me.preLoadState.showPointDot);
			}
			
			if(me.preLoadState.pointColor !== undefined && me.preLoadState.pointColor !== null) {
				me.setPointColor(me.preLoadState.pointColor);
			}
			
// 			points
			if(me.preLoadState.points !== undefined && me.preLoadState.points !== null) {
				for(k in me.preLoadState.points) {
					for(var j = 0; j < me.preLoadState.points[k].length; j++) {
						me.chart.datasets[k].addPoint(me.preLoadState.points[k][j][0], me.preLoadState.points[k][j][1]);
						me.chart.update();
					}
				}
			}
		}
		
		else {
			me.chart.update();
		}
	};
	
	
	//Helper
	this.addDataset = function(label, data) {
		label = label || "No Label";
		data = data || [];
		
		this.datasetLabelToNumber[label] = this.datasets.length;
		this.datasets.push({ "label": label, "data": data });
		
		this.isEmptyDataset[this.datasetLabelToNumber[label]] = true;
		
		//TODO: If we have already loaded the chart we are going to have to reconstruct it based on the new data sets.
	};
	
	//Helper
	this.setScaleType = function(scaleType) {
		if(scaleType !== "number" || scaleType !== "date") {
			return;
		}
		
		this.preLoadState.scaleType = scaleType;
	};
	
	//Target
	this.setShowLabels = function(value) {
		
		this.preLoadState.showLabels = (value === true);
		
		if(!firstLoad) {
			this.chart.showLabels = (value === true);
			this.chart.update();
		}
	};
	
	//Target
	this.setShowVerticalLines = function(value) {
		this.preLoadState.showVerticalLines = (value === true);
		
		if(!firstLoad) {
			this.chart.scale.showVerticalLines = (value === true);
			this.chart.update();
		}
	};
	
	//Target
	this.setShowHorizontalLines = function(value) {
		this.preLoadState.showHorizontalLines = (value === true);
		
		if(!firstLoad) {
			this.chart.scale.showHorizontalLines = (value === true);
			this.chart.update();
		}
	};
	
	//Target
	this.setGridLineWidth = function(value) {
		this.preLoadState.gridLineWidth = value;
		
		if(!firstLoad) {
			this.chart.scale.gridLineWidth = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setGridLineColor = function(value) {
	
		this.preLoadState.gridLineColor = value;
		
		if(!firstLoad) {
			this.chart.scale.gridLineColor = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setOriginLineColor = function(value) {
		
		this.preLoadState.originLineColor = value;
		
		if(!firstLoad) {
			this.chart.scale.lineColor = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setFont = function(value) {
	
		this.preLoadState.font = value;
		
		if(!firstLoad) {
			this.chart.scale.font = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setScaleStartValue = function(value) {
		
		this.preLoadState.scaleStartValue = value;
		
		if(!firstLoad) {
			this.chart.scale.scaleStartValue = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setScaleSteps = function(value) {
	
		this.preLoadState.scaleSteps = value;
		
		if(!firstLoad) {
			this.chart.scale.scaleSteps = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setScaleStepWidth = function(value) {
		
		this.preLoadState.scaleStepWidth = value;
		
		if(!firstLoad) {
			this.chart.scale.scaleStepWidth = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setDatasetLineColor = function(dataset, value) {
		
		dataset = dataset || 0;
		
		if(typeof dataset !== "number") {
			dataset = this.datasetLabelToNumber[dataset];
		}
		
		if(dataset === undefined) {
			return;
		}
		
		this.preLoadState.datasetLineColor[dataset] = value;
		
		if(!firstLoad) {
			if(this.chart.datasets[dataset] !== undefined) {
				this.chart.datasets[dataset].strokeColor = value;
				this.chart.update();
			}
		}
	};
	
	//Target
	this.setShowPointDots = function(value) {
		
		this.preLoadState.showPointDot = value;
		
		if(!firstLoad) {
			this.chart.options.pointDot = value;
			this.chart.update();
		}
	};
	
	//Target
	this.setPointColor = function(value) {
		if(!firstLoad) {
			this.chart.options.pointColor = value;
			this.chart.update();
		}
	};
	
	//Target
	this.clearPoints = function(dataset) {
		
		dataset = dataset || 0;
		
		if(typeof dataset !== "number") {
			dataset = this.datasetLabelToNumber[dataset];
		}
		
		if(dataset === undefined) {
			return;
		}
		
		var oldLength = this.chart.datasets[dataset].points.length;
		
		for(var i = 0; i < oldLength; i++) {
			this.chart.datasets[dataset].removePoint(0);
		}
		
		this.chart.datasets[dataset].addPoint(0, 0);
		
		this.preLoadState.points[dataset] = [];
		this.isEmptyDataset[dataset] = true;
		
		this.chart.update();
		
		this.lastDataset = dataset;
	};
	
	//Target
	this.setPoints = function(dataset, points) {
		
		dataset = dataset || 0;
		
		if(typeof dataset !== "number") {
			dataset = this.datasetLabelToNumber[dataset];
		}
		
		if(dataset === undefined) {
			return;
		}
		
		this.clearPoints(dataset);
		this.chart.datasets[dataset].removePoint(0);
		
		this.isEmptyDataset[dataset] = false;
		
		var newLength = points.length;
		
		for(var i = 0; i < newLength; i++) {
			
			if(points[i].length !== undefined) {
				this.addPoint(dataset, points[i][0], points[i][1]);
			}
			
			else if(typeof points[i] === "object") {
				
				if(points[i].x !== undefined && points[i].y !== undefined) {
					this.addPoint(dataset, points[i].x, points[i].y);
				}
			}
			
			else {
				this.addPoint(dataset, i, points[i]);
			}
		}
		
		this.chart.update();
		
		this.lastDataset = dataset;
	};
	
	//Target
	this.addPoint = function(dataset, x, y) {
		
		dataset = dataset || 0;

		if(typeof dataset !== "number") {
			dataset = this.datasetLabelToNumber[dataset];
		}
		
		if(dataset === undefined) {
			return;
		}
		
		if(this.isEmptyDataset[dataset]) {
			x = x !== undefined ? x : 0;
			y = y !== undefined ? y : 0;
			
		}
		else {
			x = x !== undefined ? x : this.preLoadState.points[dataset][this.preLoadState.points[dataset].length - 1][0] + 1;
			y = y !== undefined ? y : this.preLoadState.points[dataset][this.preLoadState.points[dataset].length - 1][1] + 1;
		}
		
		if(this.preLoadState.points[dataset] === undefined) {
			this.preLoadState.points[dataset] = [];
		}
		
		
		if(!firstLoad) {
			
			if(this.chart.datasets[dataset] !== undefined) {
				this.chart.datasets[dataset].addPoint(x, y);
				
				if(this.isEmptyDataset[dataset]) {
					this.chart.datasets[dataset].removePoint(0);
				}
		
				this.chart.update();
			}
		}
		
		else {
		}
		
		this.preLoadState.points[dataset].push([x, y]);
		this.isEmptyDataset[dataset] = false;
		this.lastDataset = dataset;
		this.pointAdded();
	};
	
	//Target
	this.removePoint = function(dataset, index) {
		
		dataset = dataset || 0;
		index = index || 0;
		
		if(index < 0) {
			return;
		}
		
		if(typeof dataset !== "number") {
			dataset = this.datasetLabelToNumber[dataset];
		}
		
		if(dataset === undefined) {
			return;
		}
		
		if(this.preLoadState.points[dataset] !== undefined) {
			if(this.preLoadState.points[dataset].length > index) {
				this.preLoadState.points[dataset].splice(index, 1);
			}
		}
		
		if(!firstLoad) {
			if(this.chart.datasets[dataset] !== undefined) {
				this.chart.datasets[dataset].removePoint(index);
				this.chart.update();
			}
		}
		
		this.lastDataset = dataset;
		this.pointRemoved();
	};
	
	//Target
	this.setEnabled = function(enabled) {
		this.zebraUIElement.setEnabled(enabled);
	};
	
	//Target
	this.setVisible = function(visible) {
		this.zebraUIElement.setVisible(visible);
	};
	
	//Target
	this.setLocation = function(x, y) {
		this.zebraUIElement.setLocation(x, y);
	};
	
	//Target
	this.setSize = function(w, h) {
		this.zebraUIElement.setSize(w, h);
		if(!firstLoad) {
			this.chart.resize();
			this.chart.update();
		}
	};
	
	//Target
	this.setBounds = function(x, y, w, h) {
		this.zebraUIElement.setBounds(x, y, w, h);
		if(!firstLoad) {
			this.chart.resize();
			this.chart.update();
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
	this.pointAdded = function() {};
	
	//Trigger
	this.pointRemoved = function() {};
	
	//Source
	this.getPoints = function() {
		return [this.lastDataset, this.preLoadState.points[this.lastDataset]];
	};
	
	//Source
	this.getLastDatasetIndex = function() {
		return this.lastDataset;
	};
	
	this.getZebraUIElement = function() {
		return this.zebraUIElement;
	};

	//Source
	this.getValues = function() {
		return {
			"Points":this.getPoints,
			"LastDatasetIndex":this.getLastDatasetIndex
		};
	};
}
function MobileVibrationElement(parent, name) {
	parent.elements[name] = this;

	this.vibrationTime = 1000;

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.setTime = function(vibrationTime) {
		if (isFinite(vibrationTime)){
			this.vibrationTime = parseInt(vibrationTime);
		}
	};

	//Target
	this.vibrate = function(vibrationTime) {
		vibrationTime = isFinite(vibrationTime) ? vibrationTime : this.vibrationTime;
		navigator.vibrate(parseInt(vibrationTime));
		this.vibrated();
	};

	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Trigger
	this.vibrated = function() {
	};

	//Source
	this.getTime = function() {
		return this.vibrationTime;
	};

}
function MobileBeepElement(parent, name) {
	parent.elements[name] = this;

	this.numberOfBeeps = 1;

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.setNumberOfBeeps = function(numberOfBeeps) {
		if (isFinite(numberOfBeeps)){
			this.numberOfBeeps = parseInt(numberOfBeeps);
		}
	};

	//Target
	this.beep = function(numberOfBeeps) {
		numberOfBeeps = isFinite(numberOfBeeps) ? numberOfBeeps : this.numberOfBeeps;
		navigator.notification.beep(parseInt(numberOfBeeps));
		this.onBeep();
	};

	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Trigger
	this.onBeep = function() {
	};

	//Source
	this.getNumberOfBeeps = function() {
		return this.numberOfBeeps;
	};

}

function MobileDeviceInfoElement(parent, name) {
	parent.elements[name] = this;

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Source
	this.getModel = function() {
		return device.model;
	};

	//Source
	this.getPlatform = function() {
		return device.platform;
	};

	//Source
	this.getUUID = function() {
		return device.uuid;
	};

	//Source
	this.getVersion = function() {
		return device.version;
	};

	//Source
	this.getIsVirtual = function() {
		return device.isVirtual;
	};

	//Source
	this.getSerial = function() {
		return device.serial;
	};
	
	//Source
	this.getInfo = function() {
		return {
			"model":device.model,
			"platform":device.platform,
			"uuid":device.uuid,
			"version":device.version,
			"isVirtual":device.isVirtual,
			"serial":device.serial
		};
	};

}

function MobileNetworkElement(parent, name) {
	parent.elements[name] = this;

	var currentElement = this;
	
	document.addEventListener("offline", function() { currentElement.goesOfflineHelper(); }, false);
	document.addEventListener("online", function() { currentElement.goesOnlineHelper(); }, false);
	
	this.goesOfflineHelper = function() {
		currentElement.goesOffline.call(currentElement);
	};

	this.goesOnlineHelper = function() {
		currentElement.goesOnline.call(currentElement);
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
	this.goesOffline = function() {
	};

	//Trigger
	this.goesOnline = function() {
	};

	//Source
	this.getConnectionType = function() {
		return navigator.connection.type;
	};

}

function MobileAlertElement(parent, name) {
	parent.elements[name] = this;

	this.message = "Alert!";
	this.title = "Alert";
	this.buttonName = "OK";

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.setMessage = function(message) {
		message = message || "";
		this.message = String(message);
	};

	//Target
	this.setTitle = function(title) {
		title = title || "";
		this.title = String(title);
	};

	//Target
	this.setButtonName = function(buttonName) {
		buttonName = buttonName || "";
		this.buttonName = String(buttonName);
	};

	//Target
	this.alert = function(message, title, buttonName) {
		message = message || "";
		title = title || "";
		buttonName = buttonName || "";

		message = String(message);
		title = String(title);
		buttonName = String(buttonName);

		message = message !== "" ? message : this.message;
		title = title !== "" ? title : this.title;
		buttonName = buttonName !== "" ? buttonName : this.buttonName;
		navigator.notification.alert(message, this.alertDismissed, title, buttonName);
	};

	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Trigger
	this.alertDismissed = function() {
	};
}

function MobileConfirmElement(parent, name) {
	
	parent.elements[name] = this;

	var currentElement = this;
	
	this.message = "Are you sure?";
	this.title = "Confirm";
	this.buttonArray = ["Yes","No"];

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.setMessage = function(message) {
		message = message || "";
		this.message = String(message);
	};

	//Target
	this.setTitle = function(title) {
		title = title || "";
		this.title = String(title);
	};

	//Target
	this.addButton = function(buttonName) {
		buttonName = buttonName || "";
	 	buttonName = String(buttonName);
	 	if (buttonName !== ""){
	 		this.buttonArray.push(buttonName);
	 	}
	};

	//Target
	this.removeButton = function(buttonName) {
		if (isFinite(buttonName)){
			index = parseInt(buttonName);
			if (index >= 0 && index < this.buttonArray.length){
				this.buttonArray.splice(index,1);
			}
		}
		else{
			buttonName = buttonName || "";
		 	buttonName = String(buttonName);
		 	if (buttonName !== ""){
		 		index = buttonArray.indexOf(buttonName);
		 		if(i != -1){
					array.splice(i, 1);
				}
			}
		}
	};

	//Target
	this.alert = function(message, title, buttonArray) {
		message = message || "";
		title = title || "";
		message = String(message);
		title = String(title);

		message = message !== "" ? message : currentElement.message;
		title = title !== "" ? title : currentElement.title;
		
		buttonArray = (typeof buttonArray !== 'undefined' && buttonArray instanceof Array)? buttonArray : currentElement.buttonArray;
		currentElement.currentButtonArray = buttonArray;
		
		navigator.notification.confirm(message, currentElement.helper, title, buttonArray);
	};

	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Helper
	this.helper = function(buttonIndex){
		
		if (buttonIndex === 0){
			currentElement.pressedButton = 'No Button';
		}
		else {
			currentElement.pressedButton = currentElement.currentButtonArray[buttonIndex - 1];
		}

		currentElement.confirmed();
	};

	//Source
	this.getPressedButton = function() {
		return this.pressedButton;
	};
	
	//Trigger
	this.confirmed = function() {
	};
}

function MobilePromptElement(parent, name) {
	
	parent.elements[name] = this;

	var currentElement = this;
	
	this.message = "Enter Text:";
	this.title = "Prompt";
	this.buttonArray = ["Ok","Cancel"];
	this.value = "";
	this.pressedButton = "";

	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.setMessage = function(message) {
		message = message || "";
		this.message = String(message);
	};

	//Target
	this.setTitle = function(title) {
		title = title || "";
		this.title = String(title);
	};

	//Target
	this.addButton = function(buttonName) {
		buttonName = buttonName || "";
	 	buttonName = String(buttonName);
	 	if (buttonName !== ""){
	 		this.buttonArray.push(buttonName);
	 	}
	};

	//Target
	this.setValue = function(value) {
		value = value || "";
		this.value = String(value);
	};
	
	//Target
	this.removeButton = function(buttonName) {
		if (isFinite(buttonName)){
			index = parseInt(buttonName);
			if (index >= 0 && index < this.buttonArray.length){
				this.buttonArray.splice(index,1);
			}
		}
		else{
		 	buttonName = String(buttonName);
		 	if (buttonName !== ""){
		 		index = buttonArray.indexOf(buttonName);
		 		if(i != -1){
					array.splice(i, 1);
				}
			}
		}
	};

	//Target
	this.alert = function(value, message, title, buttonArray) {
		message = message || "";
		title = title || "";
		value = value || "";
		
		message = String(message);
		title = String(title);
		value = String(value);

		message = message !== "" ? message : currentElement.message;
		title = title !== "" ? title : currentElement.title;
		buttonArray = (typeof buttonArray !== 'undefined' && buttonArray instanceof Array)? buttonArray : currentElement.buttonArray;
		value = value !== "" ? value : currentElement.value;

		currentElement.currentButtonArray = buttonArray;

		navigator.notification.prompt(message, currentElement.helper, title, buttonArray, value);
	};

	//Source
	this.getPressedButton = function() {
		return this.pressedButton;
	};
	
	//Source
	this.getValue = function() {
		return this.value;
	};

	//Source
	this.getValues = function() {
		return {
			"Value":this.getValue,
			"PressedButton":this.getPressedButton
		};
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};

	//Helper
	this.helper = function(results){
		if (env.debug) console.log("Results returned: " + JSON.stringify(results));
		currentElement.value = results.input1;
		if (results.buttonIndex === 0){
			currentElement.pressedButton = 'No Button';
		}
		else{
			currentElement.pressedButton = currentElement.buttonArray[results.buttonIndex - 1];
		}
		currentElement.responded();
	};

	//Trigger
	this.responded = function() {
	};
}

function MobileGeolocationElement(parent, name) {
	
	parent.elements[name] = this;

	var currentElement = this;
	currentElement.currentPosition = null;	
	currentElement.currentError = null;
	
	//Target
	this.trigger = function() {
		this.onTrigger();
	};

	//Target
	this.retrievePosition = function() {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				currentElement.currentPosition = position;
				currentElement.positionRetrieved();
			}, 
		
			function(error) {
				currentElement.currentError = error;
				currentElement.failedToRetrievePosition();
			}
		);
	};
	
	//Source
	this.getPositionData = function() {
		return [
			currentElement.currentPosition.coords.latitude,
			currentElement.currentPosition.coords.longitude,
			currentElement.currentPosition.coords.altitude,
			currentElement.currentPosition.coords.accuracy,
			currentElement.currentPosition.coords.altitudeAccuracy,
			currentElement.currentPosition.coords.heading,
			currentElement.currentPosition.coords.speed,
			currentElement.currentPosition.timestamp
		];
	};
	
	//Source
	this.getError = function() {
		return [
			currentElement.currentError.code,
			currentElement.currentError.message
		];
	};
	
	//Trigger
	this.onTrigger = function(e) {
		parent.sendTrigger(this.name, "onTrigger");
	};
	
	//Trigger
	this.positionRetrieved = function() {
	};
	
	//Trigger
	this.failedToRetrievePosition = function() {
	};
}

function WizardElement(parent, name) {
	parent.elements[name] = this;
	
	this.name = name;
	this.parent = parent;
}