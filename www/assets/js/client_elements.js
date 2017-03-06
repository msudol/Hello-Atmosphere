
function BaseUIElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	if(this.zebraUIElement === undefined) {
		return;
	}
	
	this.zebraUIElement.airParent = this;
	

	this.mousePressed = function(e) {
		currentParent.sendTrigger(this.name, "mousePressed");
	};
	
	this.mouseClicked = function(e) {
		currentParent.sendTrigger(this.name, "mouseClicked");
	};
	
	this.mouseReleased = function(e) {
		currentParent.sendTrigger(this.name, "mouseReleased");
	};
	
	this.mouseEntered = function(e) {
// 		currentParent.sendTrigger(this.name, "mouseEntered");
	};
	
	this.mouseMoved = function(e) {
// 		currentParent.sendTrigger(this.name, "mouseMoved");
	};
	
	this.mouseExited = function(e) {
// 		currentParent.sendTrigger(this.name, "mouseExited");
	};
	
	this.zebraUIElement.baseMousePressed = this.zebraUIElement.mousePressed;
	this.zebraUIElement.baseMouseClicked = this.zebraUIElement.mouseClicked;
	this.zebraUIElement.baseMouseReleased = this.zebraUIElement.mouseReleased;
	this.zebraUIElement.baseMouseEntered = this.zebraUIElement.mouseEntered;
	this.zebraUIElement.baseMouseMoved = this.zebraUIElement.mouseMoved;
	this.zebraUIElement.baseMouseExited = this.zebraUIElement.mouseExited;
	
	this.zebraUIElement.mousePressed = function(e) {
		currentElement.mousePressed(e);
		
		if(currentElement.zebraUIElement.baseMousePressed !== undefined) {
			currentElement.zebraUIElement.baseMousePressed(e);
		}
	};
	
	this.zebraUIElement.mouseClicked = function(e) {
		currentElement.mouseClicked(e);
		
		if(currentElement.zebraUIElement.baseMouseClicked !== undefined) {
			currentElement.zebraUIElement.baseMouseClicked(e);
		}
	};
	
	this.zebraUIElement.mouseReleased = function(e) {
		currentElement.mouseReleased(e);
		
		if(currentElement.zebraUIElement.baseMouseReleased !== undefined) {
			currentElement.zebraUIElement.baseMouseReleased(e);
		}
	};
	
	this.zebraUIElement.mouseEntered = function(e) {
		currentElement.mouseEntered(e);
		
		if(currentElement.zebraUIElement.baseMouseEntered !== undefined) {
			currentElement.zebraUIElement.baseMouseEntered(e);
		}
	};
	
	this.zebraUIElement.mouseMoved = function(e) {
		currentElement.mouseMoved(e);
		
		if(currentElement.zebraUIElement.baseMouseMoved !== undefined) {
			currentElement.zebraUIElement.baseMouseMoved(e);
		}
	};
	
	this.zebraUIElement.mouseExited = function(e) {
		currentElement.mouseExited(e);
		
		if(currentElement.zebraUIElement.baseMouseExited !== undefined) {
			currentElement.zebraUIElement.baseMouseExited(e);
		}
	};
}

BaseUIElement.prototype = Object.create(BaseElement.prototype);
BaseUIElement.prototype.constructor = BaseUIElement;

BaseUIElement.prototype.repaint = function() {
	this.zebraUIElement.repaint();
};

BaseUIElement.prototype.setEnabled = function(enabled) {
	this.zebraUIElement.setEnabled(!(enabled == 0));
};

BaseUIElement.prototype.setVisible = function(visible) {
	this.zebraUIElement.setVisible(!(visible == 0));
};

BaseUIElement.prototype.setLocation = function(x, y) {
	this.zebraUIElement.setLocation(x, y);
};

BaseUIElement.prototype.setSize = function(w, h) {
	this.zebraUIElement.setSize(w, h);
};

BaseUIElement.prototype.setBounds = function(x, y, w, h) {
	this.zebraUIElement.setBounds(x, y, w, h);
};

BaseUIElement.prototype.getZebraUIElement = function() {
	return this.zebraUIElement;
};

BaseUIElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
	
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



function ButtonElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.Button(new zebra.ui.MLabel(""));
	
	BaseUIElement.call(this, parent, name);
}

ButtonElement.prototype = Object.create(BaseUIElement.prototype);
ButtonElement.prototype.constructor = ButtonElement;

ButtonElement.prototype.setLabel = function(value) {
		
		if (value === undefined) {
			value = "undefined";
		}
		if (value === null) {
			value = "null";
		}
		
		this.zebraUIElement.find("//zebra.ui.MLabel").setValue(value.toString());
};

ButtonElement.prototype.setBorder = function(border) {
	this.zebraUIElement.setBorder(border);
};

ButtonElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.label !== undefined) {
		this.setLabel(state.label);
	}
};

function CheckboxElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.Checkbox(new zebra.ui.MLabel(""));
	
	BaseUIElement.call(this, parent, name);
	
	this.stateLock = false;
	
	this.switched = function(e) {
		if(!currentElement.stateLock) {
			currentParent.sendTrigger(currentElement.name, "switched", {"value":currentElement.getValue()});
		}
	};
	
	this.zebraUIElement.switched = function(e){
		this.stateUpdated(this.state, this.state);
		currentElement.switched(e);
	};
	
}

CheckboxElement.prototype = Object.create(BaseUIElement.prototype);
CheckboxElement.prototype.constructor = CheckboxElement;

CheckboxElement.prototype.setLabel = function(value) {
	if (value === undefined) {
		value = "undefined";
	}
	if (value === null) {
		value = "null";
	}
	
	this.zebraUIElement.find("//zebra.ui.MLabel").setValue(value.toString());
};

CheckboxElement.prototype.setValue = function(value) {
	this.zebraUIElement.setValue(!(value == 0));
	this.zebraUIElement.stateUpdated();
	this.zebraUIElement.repaint();
};

CheckboxElement.prototype.getValue = function() {
	return this.zebraUIElement.getValue();
};

CheckboxElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	this.stateLock = true;
	
	if(state.value !== undefined) {
		this.zebraUIElement.setValue(!(state.value == 0));
	}
	
	if(state.label !== undefined) {
		this.setLabel(state.label);
	}
	
	this.stateLock = false;
};

function ComboboxElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.Combo(new zebra.ui.List([]));
	
	BaseUIElement.call(this, parent, name);
	
	//PATCHING
	this.zebraUIElement.addValue = function(e) {
		this.list.model.add(e);
		return;
	};
	
	//PATCHING
	this.zebraUIElement.removeValue = function(e) {
		this.list.model.remove(e);
	};
	
	
	//PATCHING
	this.zebraUIElement.removeAll = function() {
		this.list.mode.removeAll();
	};
	
	//PATCHING
	this.zebraUIElement.addValues = function(e) {
		for(var i = 0; i < e.length; i++) {
			this.list.model.add(e[i]);
		}
	};
	
	//Trigger
	this.changed = function(e) {
		currentParent.sendTrigger(this.name, "changed");
	};
	
	this.zebraUIElement.bind(function(e){currentElement.changed(e);});
}

ComboboxElement.prototype = Object.create(BaseUIElement.prototype);
ComboboxElement.prototype.constructor = ComboboxElement;

//Target
ComboboxElement.prototype.setValue = function(value) {
	this.zebraUIElement.setValue(value);
};

//Target
ComboboxElement.prototype.addValue = function(value) {
	this.zebraUIElement.addValue(value);
};

//Target
ComboboxElement.prototype.addValues = function(value) {
	this.zebraUIElement.addValues(value);
};

//Target
ComboboxElement.prototype.removeValue = function(value) {
	this.zebraUIElement.removeValue(value);
};

//Target
ComboboxElement.prototype.clearValues = function(value) {
	this.zebraUIElement.removeAll();
};

//Source
ComboboxElement.prototype.getValue = function() {
	return this.zebraUIElement.getValue();
};

ComboboxElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.values !== undefined) {
		this.zebraUIElement.list.model.d = state.values;
	}
	
	if(state.value !== undefined) {
		this.zebraUIElement.setValue(state.value);
	}
};
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
		this.zebraUIElement.setEnabled(enabled == true);
	};
	
	//Target
	this.setVisible = function(visible) {
		this.zebraUIElement.setVisible(visible == true);
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

function ImageElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.ImagePan();
	
	BaseUIElement.call(this, parent, name);
	
	this.image = new Image();
	
	this.image.onload = function() {
		currentElement.zebraUIElement.setImage(this);
	};
	
	this.image.src = "";
	
	//PATCHING
	this.zebraUIElement.airOffset = [0, 0];
	this.zebraUIElement.airRotation = 0.0;
	
	this.zebraUIElement.paint = function (g) {
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
	
	this.zebraUIElement.setOffset = function (x, y) {
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

	this.zebraUIElement.getOffset = function() {
		if(this.airOffset === undefined) {
			this.airOffset = [0, 0];
		}
		
		return this.airOffset;
	};
	
	this.zebraUIElement.setRotation = function(r) {
		if(typeof r !== "number") {
			return;
		}
		
		if(this.airRotation != r) {
			this.airRotation = r;
			this.repaint();
		}
	};
	
	this.zebraUIElement.getRotation = function() {
		if (this.airRotation === undefined) {
			this.airRotation = 0;
		}
		
		return this.airRotation;
	};
}

ImageElement.prototype = Object.create(BaseUIElement.prototype);
ImageElement.prototype.constructor = ImageElement;

ImageElement.prototype.setImage = function(imageSrc) {
	var currentElement = this;
	
	this.image = new Image();
	
	this.image.onload = function() {
		currentElement.zebraUIElement.setImage(this);
	};
	
	this.image.src = imageSrc;
};

ImageElement.prototype.setOffset = function(x, y) {
	this.zebraUIElement.setOffset(x, y);
};
	
ImageElement.prototype.setBackground = function(value) {
	this.zebraUIElement.setBackground(value);
};
	
ImageElement.prototype.setRotation = function(r) {
	this.zebraUIElement.setRotation(r);
};

ImageElement.prototype.getOffset = function() {
	return this.zebraUIElement.getOffset();
};

ImageElement.prototype.getRotation = function() {
	return this.zebraUIElement.getRotation();
};

//Source
ImageElement.prototype.getValues = function() {
	return {
		"Offset":this.getOffset,
		"Rotation":this.getRotation
	};
};

ImageElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
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
};

function LabelElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.MLabel("");
	
	BaseUIElement.call(this, parent, name);
}

LabelElement.prototype = Object.create(BaseUIElement.prototype);
LabelElement.prototype.constructor = LabelElement;

LabelElement.prototype.setFont = function(font) {
	this.zebraUIElement.setFont(font);
};

LabelElement.prototype.setValue = function(value) {
	if (value === undefined) {
		value = "undefined";
	}
	if (value === null) {
		value = "null";
	}		

	this.zebraUIElement.setValue(value.toString());
};

LabelElement.prototype.appendValue = function(value) {
	if (value === undefined) {
		value = "undefined";
	}
	
	if (value === null) {
		value = "null";
	}		
	
	this.zebraUIElement.setValue(this.getValue() + value.toString());
};

LabelElement.prototype.setColor = function(color) {
	this.zebraUIElement.setColor(color);
};

LabelElement.prototype.getValue = function(color) {
	return this.zebraUIElement.getValue();
};

LabelElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.color !== undefined) {
		this.setColor(state.color);
	}
	
	if(state.font !== undefined) {
		this.setFont(state.font);
	}
	
	if(state.value !== undefined) {
		this.setValue(state.value);
	}
};

function LocalStorageElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.key = name;
	this.value = '';
	
	//Trigger
	this.valueSet = function() {
	};
	
	//Trigger
	this.valueReturned = function() {
	};
}

LocalStorageElement.prototype = Object.create(BaseElement.prototype);
LocalStorageElement.prototype.constructor = LocalStorageElement;

//Target
LocalStorageElement.prototype.setKey = function(k) {
	this.key = k;
};

//Target
LocalStorageElement.prototype.setValue = function(value) {
	window.localStorage.setItem(this.key, JSON.stringify(value));
	this.valueSet();
};

//Target
LocalStorageElement.prototype.retrieveValue = function() {
	this.value = JSON.parse(window.localStorage.getItem(this.key));
	this.valueReturned();
};

//Source
LocalStorageElement.prototype.getValue = function() {
	return this.value;
};

//Source
LocalStorageElement.prototype.getKey = function() {
	return this.key;
};

//Source
LocalStorageElement.prototype.getValues = function() {
	return {
		"value":this.getValue(),
		"key":this.getKey()
	};
};

LocalStorageElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileAlertElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.message = "Alert!";
	this.title = "Alert";
	this.buttonName = "OK";
	
	//Trigger
	this.alertDismissed = function() {
	};
}

MobileAlertElement.prototype = Object.create(BaseElement.prototype);
MobileAlertElement.prototype.constructor = MobileAlertElement;

//Target
MobileAlertElement.prototype.setMessage = function(message) {
	message = message || "";
	this.message = String(message);
};

//Target
MobileAlertElement.prototype.setTitle = function(title) {
	title = title || "";
	this.title = String(title);
};

//Target
MobileAlertElement.prototype.setButtonName = function(buttonName) {
	buttonName = buttonName || "";
	this.buttonName = String(buttonName);
};

//Target
MobileAlertElement.prototype.alert = function(message, title, buttonName) {
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

MobileAlertElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileBeepElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.numberOfBeeps = 1;
	
	//Trigger
	this.onBeep = function() {
	};
}

MobileBeepElement.prototype = Object.create(BaseElement.prototype);
MobileBeepElement.prototype.constructor = MobileBeepElement;

//Target
MobileBeepElement.prototype.setNumberOfBeeps = function(numberOfBeeps) {
	if (isFinite(numberOfBeeps)){
		this.numberOfBeeps = parseInt(numberOfBeeps);
	}
};

//Target
MobileBeepElement.prototype.beep = function(numberOfBeeps) {
	numberOfBeeps = isFinite(numberOfBeeps) ? numberOfBeeps : this.numberOfBeeps;
	navigator.notification.beep(parseInt(numberOfBeeps));
	this.onBeep();
};

//Source
MobileBeepElement.prototype.getNumberOfBeeps = function() {
	return this.numberOfBeeps;
};


MobileBeepElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileCloudCommand(parent, name, interval) {
	var currentParent = parent;
	var currentElement = this;
	
	parent.cloudEnabled = true;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.interval = interval || 1000;
	this.uri = null;
	this.value = null;
	this.status = 404;
	this.currentInterval = null;
	
	//Trigger
	this.valueReturned = function () {
	};
	
	//Trigger
	this.errorReturned = function () {
	};
	
	parent.connections.push(this);
}

MobileCloudCommand.prototype = Object.create(BaseElement.prototype);
MobileCloudCommand.prototype.constructor = MobileCloudCommand;

MobileCloudCommand.prototype.connecting = function() {
	var currentElement = this;
	
	if(this.currentInterval !== null) {
		console.log("Command Run");
		clearInterval(this.currentInterval);
	}
	
	this.currentInterval = setInterval(function() {
		currentElement.popCommand();
	}, this.interval);
};
	
MobileCloudCommand.prototype.disconnecting = function() {
	var currentElement = this;
	
	if(this.currentInterval !== null) {
		clearInterval(this.currentInterval);
	}
	
	this.currentInterval = null;
};

//Helper
MobileCloudCommand.prototype.bleCallbackHandler = function(e) {
};

//Source
MobileCloudCommand.prototype.getValue = function() {
	return this.value;
};

//Target
MobileCloudCommand.prototype.popCommand = function() {
	var currentElement = this;
	
	if(currentElement.parent.cloudUrl === null ||
		currentElement.parent.cloudUrl === undefined ||
		currentElement.parent.currentCloudUuid === null || 
		currentElement.parent.currentCloudUuid === undefined || 
		currentElement.parent.currentCloudToken === null ||
		currentElement.parent.currentCloudToken === undefined) {
		
// 		console.log("Credentials are null or undefined!");
		return;
	}
	
	var xhttp = new XMLHttpRequest();

	xhttp.responseType = 'text';
	
	xhttp.onreadystatechange = function() {
		
// 		console.log(xhttp.readyState + ':' + xhttp.status);
		
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			
			console.log("Got from commands: " + xhttp.responseText);
			
			try {
				var commands = JSON.parse(xhttp.responseText);
				
				if(commands !== null && commands !== undefined) {
					for(var i = 0; i < commands.length; i++) {
						var commandValue = commands[i].command;
						currentElement.value = commandValue;
						currentElement.valueReturned();
					}
				}
			}
			
			catch(e) {
			}	
		}
	};
	
	xhttp.open("GET", "https://"+currentElement.parent.cloudUrl+"/thing/" + currentElement.parent.currentCloudUuid  + "/command/" + this.name + "/popAll");
	xhttp.setRequestHeader("cloud", currentElement.parent.currentCloudToken);
	xhttp.send();
};

MobileCloudCommand.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileCloudEventElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	parent.cloudEnabled = true;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.uri = null;
	this.value = null;
	this.status = 404;
	
	//Trigger
	this.eventSent = function () {
	};
	
	//Trigger
	this.errorReturned = function () {
	};
}

MobileCloudEventElement.prototype = Object.create(BaseElement.prototype);
MobileCloudEventElement.prototype.constructor = MobileCloudEventElement;

//Target
MobileCloudEventElement.prototype.sendEvent = function(value, retries) {
	var currentElement = this;
	
	value = value || null;
	
	retries = retries || 5;
	
	if(retries < 0) {
		currentElement.errorReturned();
	}
	
	if(currentElement.parent.cloudUrl === null ||
		currentElement.parent.cloudUrl === undefined ||
		currentElement.parent.currentCloudUuid === null || 
		currentElement.parent.currentCloudUuid === undefined || 
		currentElement.parent.currentCloudUuid === null ||
		currentElement.parent.currentCloudUuid === undefined) {
		
		return;
	}
	
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			currentElement.eventSent();
		}
		
		else if(xhttp.readyState == 4) {
			currentElement.sendEvent(value, retries - 1);
		}
	};
	
	console.log("https://"+currentElement.parent.cloudUrl+"/thing/" + currentElement.parent.currentCloudUuid + "/event/" + this.name + "/" + encodeURIComponent(JSON.stringify(value)));
	xhttp.open("GET", "https://"+currentElement.parent.cloudUrl+"/thing/" + currentElement.parent.currentCloudUuid  + "/event/" + this.name + "/" + encodeURIComponent(JSON.stringify(value)));
	xhttp.setRequestHeader("cloud", currentElement.parent.currentCloudToken);
	xhttp.send();
};

MobileCloudEventElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileConfirmElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.message = "Are you sure?";
	this.title = "Confirm";
	this.buttonArray = ["Yes","No"];
	
	//Trigger
	this.confirmed = function() {};
}

MobileConfirmElement.prototype = Object.create(BaseElement.prototype);
MobileConfirmElement.prototype.constructor = MobileConfirmElement;

//Helper
MobileConfirmElement.prototype.helper = function(buttonIndex){
	
	if (buttonIndex === 0){
		this.pressedButton = 'No Button';
	}
	else {
		this.pressedButton = this.currentButtonArray[buttonIndex - 1];
	}

	this.confirmed();
};

//Target
MobileConfirmElement.prototype.setMessage = function(message) {
	message = message || "";
	this.message = String(message);
};

//Target
MobileConfirmElement.prototype.setTitle = function(title) {
	title = title || "";
	this.title = String(title);
};

//Target
MobileConfirmElement.prototype.addButton = function(buttonName) {
	buttonName = buttonName || "";
	buttonName = String(buttonName);
	if (buttonName !== ""){
		this.buttonArray.push(buttonName);
	}
};

//Target
MobileConfirmElement.prototype.removeButton = function(buttonName) {
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
MobileConfirmElement.prototype.alert = function(message, title, buttonArray) {
	var currentElement = this;
	
	message = message || "";
	title = title || "";
	message = String(message);
	title = String(title);

	message = message !== "" ? message : currentElement.message;
	title = title !== "" ? title : currentElement.title;
	
	buttonArray = (typeof buttonArray !== 'undefined' && buttonArray instanceof Array)? buttonArray : currentElement.buttonArray;
	currentElement.currentButtonArray = buttonArray;
	
	navigator.notification.confirm(message, function(buttonIndex){currentElement.helper(buttonIndex);}, title, buttonArray);
};

//Source
MobileConfirmElement.prototype.getPressedButton = function() {
	return this.pressedButton;
};

MobileConfirmElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileDeviceInfoElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
}

MobileDeviceInfoElement.prototype = Object.create(BaseElement.prototype);
MobileDeviceInfoElement.prototype.constructor = MobileDeviceInfoElement;

//Source
MobileDeviceInfoElement.prototype.getModel = function() {
	return device.model;
};

//Source
MobileDeviceInfoElement.prototype.getPlatform = function() {
	return device.platform;
};

//Source
MobileDeviceInfoElement.prototype.getUUID = function() {
	return device.uuid;
};

//Source
MobileDeviceInfoElement.prototype.getVersion = function() {
	return device.version;
};

//Source
MobileDeviceInfoElement.prototype.getIsVirtual = function() {
	return device.isVirtual;
};

//Source
MobileDeviceInfoElement.prototype.getSerial = function() {
	return device.serial;
};

//Source
MobileDeviceInfoElement.prototype.getInfo = function() {
	return {
		"model":device.model,
		"platform":device.platform,
		"uuid":device.uuid,
		"version":device.version,
		"isVirtual":device.isVirtual,
		"serial":device.serial
	};
};

MobileDeviceInfoElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};


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
function MobileMotionElement(parent, name) {
	
	this.name = name;
	this.parent = parent;
	
	this.currentAccelerationData = {x:0, y:0, z:0, timestamp:0};
	
	//Trigger
	this.accelerationRetrieved = function() {
	};
	
	//Trigger
	this.error = function() {
	};
}

//Target
MobileMotionElement.prototype.retrieveAcceleration = function() {
	var currentElement = this;
	
	if(navigator.accelerometer === undefined || navigator.accelerometer.getCurrentAcceleration === undefined) {
		return;
	}
	
	navigator.accelerometer.getCurrentAcceleration(function(accelerationData) {
		currentElement.currentAccelerationData = accelerationData;
		currentElement.accelerationRetrieved();
	}, function() {
		currentElement.error();
	});
	
};

//Source
MobileMotionElement.prototype.getAcceleration = function() {
	return [
		this.currentAccelerationData.x,
		this.currentAccelerationData.y,
		this.currentAccelerationData.z,
		this.currentAccelerationData.timestamp
		];
};

function MobileNetworkElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	//Trigger
	this.goesOffline = function() {
	};

	//Trigger
	this.goesOnline = function() {
	};
	
	document.addEventListener("offline", function() { currentElement.goesOfflineHelper(); }, false);
	document.addEventListener("online", function() { currentElement.goesOnlineHelper(); }, false);
}

MobileNetworkElement.prototype = Object.create(BaseElement.prototype);
MobileNetworkElement.prototype.constructor = MobileNetworkElement;

MobileNetworkElement.prototype.goesOfflineHelper = function() {
	this.goesOffline();
};

MobileNetworkElement.prototype.goesOnlineHelper = function() {
	this.goesOnline();
};

//Source
MobileNetworkElement.prototype.getConnectionType = function() {
	return navigator.connection.type;
};

MobileNetworkElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};


function MobileOrientationElement(parent, name) {
	
	this.name = name;
	this.parent = parent;
	
	this.currentHeading = {
		magneticHeading:null,
		trueHeading:null,
		headingAccuracy:null,
		timestamp:null
	};
	
	//Trigger
	this.orientationRetrieved = function() {
	};
	
	//Trigger
	this.error = function() {
	};
}

MobileOrientationElement.prototype.retrieveHeading = function() {
	
	var currentElement = this;
	
	if(navigator.compass === undefined || navigator.compass.getCurrentHeading === undefined) {
		return;
	}
	
	navigator.compass.getCurrentHeading(function(currentHeading) {
		currentElement.currentHeading = currentHeading;
		currentElement.orientationRetrieved();
		
	}, function() {
		currentElement.error();
	});
};

MobileOrientationElement.prototype.getHeading = function() {
	return [
		this.currentHeading.magneticHeading,
		this.currentHeading.trueHeading,
		this.currentHeading.headingAccuracy,
		this.currentHeading.timestamp
	];
};
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

function MobileSMS(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	this.currentNumber = null;
	this.currentMessage = null;
	
	//We currently do not suppoer incomming SMSes but will hopefully in the future.
	//Trigger
	this.recieved = function() {
	};
	
	//Trigger
	this.sent = function() {
	};
	
	//Trigger
	this.failed = function() {
	};
}

MobileSMS.prototype = Object.create(BaseElement.prototype);
MobileSMS.prototype.constructor = MobileSMS;

//Target
MobileSMS.prototype.setNumber = function(number) {
	if(number === undefined) {
		return;
	}
	
	this.currentNumber = number.toString();
};

//Target
MobileSMS.prototype.setMessage = function(message) {
	if(message === undefined) {
		return;
	}
	
	this.currentMessage = message.toString();
};

//Target
MobileSMS.prototype.sendMessage = function(number, message) {
	
	if(number === undefined || number === null) {
		number = this.currentNumber;
	}
	
	if(message === undefined || message === null) {
		message = this.currentMessage;
	}
	
	var currentElement = this;
	
	if(sms === undefined) {
		return;
	}
	
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
// 			intent: 'INTENT'  // send SMS with the native android SMS messaging
			intent: '' // send SMS without open any other app
		}
	};
	
	this.currentMessage = message;
	this.currentNumber = number;
	
	var success = function () { currentElement.sent(); };
	var error = function (e) { currentElement.failed(); };
	sms.send(number, message, options, success, error);
};

//Source
MobileSMS.prototype.getSMS = function () {
	return [this.currentNumber, this.currentMessage];
};

//Source
MobileSMS.prototype.getNumber = function() {
	return this.currentNumber;
};

//Source
MobileSMS.prototype.getMessage = function() {
	return this.currentMessage;
};

MobileSMS.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function MobileVibrationElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.vibrationTime = 1000;
	
	//Trigger
	this.vibrated = function() {
	};
}

MobileVibrationElement.prototype = Object.create(BaseElement.prototype);
MobileVibrationElement.prototype.constructor = MobileVibrationElement;

//Target
MobileVibrationElement.prototype.setTime = function(vibrationTime) {
	if (isFinite(vibrationTime)){
		this.vibrationTime = parseInt(vibrationTime);
	}
};

//Target
MobileVibrationElement.prototype.vibrate = function(vibrationTime) {
	vibrationTime = isFinite(vibrationTime) ? vibrationTime : this.vibrationTime;
	navigator.vibrate(parseInt(vibrationTime));
	this.vibrated();
};

//Source
MobileVibrationElement.prototype.getTime = function() {
	return this.vibrationTime;
};

MobileVibrationElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function NullUIElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.MLabel("");
	
	BaseUIElement.call(this, parent, name);
}

NullUIElement.prototype = Object.create(BaseUIElement.prototype);
NullUIElement.prototype.constructor = NullUIElement;

NullUIElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
};

function ProgressBarElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.Progress();
	
	this.zebraUIElement.getValue = function() {
		return this.value;
	};
	
	BaseUIElement.call(this, parent, name);
}

ProgressBarElement.prototype = Object.create(BaseUIElement.prototype);
ProgressBarElement.prototype.constructor = ProgressBarElement;

//Target
ProgressBarElement.prototype.setOrientation = function(orientation) {
	if(orientation.toLowerCase() === 'vertical') {
		this.zebraUIElement.setOrientation(zebra.layout.VERTICAL);
	}
	
	else if(orientation.toLowerCase() === 'horizontal') {
		this.zebraUIElement.setOrientation(zebra.layout.HORIZONTAL);
	}
};

//Target
ProgressBarElement.prototype.setValue = function(value) {
	this.zebraUIElement.setValue(value);
};

//Target
ProgressBarElement.prototype.setMaxValue = function(value) {
	this.zebraUIElement.setMaxValue(value);
};

//Target
ProgressBarElement.prototype.setGap = function(gap) {
	this.zebraUIElement.setGap(gap);
};

//Target
ProgressBarElement.prototype.setBundleSize = function(i) {
	
	if(i < 1) {
		return;
	}
	
	this.zebraUIElement.setBundleSize(i);
};

//Source
ProgressBarElement.prototype.getValue = function() {
	return this.zebraUIElement.getValue();
};

ProgressBarElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.gap !== undefined) {
		this.setGap(state.gap);
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

function SliderElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.zebraUIElement = new zebra.ui.Slider();
	
	var sliderImageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxOGMyZGY1OC1lMWE0LTgzNDctYWYzNi1iOGRmOGJiMTU0OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRUU5QkQwQUVCMTFFNTk5QkVCMjdBMUQyRDdFQjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRUU5QkMwQUVCMTFFNTk5QkVCMjdBMUQyRDdFQjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzg5MEVDNkUwQUU4MTFFNThCMUM5NEUyQzhGRkI3NzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg5MEVDNkYwQUU4MTFFNThCMUM5NEUyQzhGRkI3NzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4w9XRaAAABa0lEQVR42sxXoW7DMBC9mCwj/YRqI4NjVVlR4TIaNA1V+aYoMCi0Gywqq8YKSzr1E0yWsr3WZ9Wq0ire4lyf9EyS+J7Pzt1zRD6Y6weME3AKjsEhP9mBK3ABLul18N12yqhF0DuMKZiDcct5azADK4jZ/13AXL9g/KD/IYGITz8BZtUF+EbdoARnTdmIGoIPMH6BT9QtNuAIIvRlAWbl6wDBXRHPbibU2QtFwODEcxfNGejmwHkfzMhJfU39Ij5shd2ClPpH6p6BXEBAbrbAlNctyeBRcW2XwkRxY5HCVHFXk8JYOS1VAkNFwlBsJqSwU+xkpLBSbKOksFBHDyeHpW1GPx5+ryvUaEb39i/IBFafuc2oEhBQnQQYi5T0GDyxtuxUiIxDKXsIXro2/bwSztg4hsKGY1CzAJOWUSAR1pbvLwswIvTROne7HSXbcX1zV7Pr3dB8eChQ756uueZv4mvB292OA1/PfwUYAMT9Xofi/VbMAAAAAElFTkSuQmCC";

	this.setHandleImage(sliderImageSrc);
	
	BaseUIElement.call(this, parent, name);
	
	//PATCHING
	this.zebraUIElement.setValues = function(min,max,intervals,roughStep,exactStep) {
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
	this.zebraUIElement.setValue = function(v) {
		var prev = this.value;
		if(this.value != v) {
			this.value = v;
			this._.fired(this, prev);
			this.repaint();
		}
	};
		
	//PATCHING
	this.zebraUIElement.setValueNoEvent = function(v) {
		var prev = this.value;
		if(this.value != v) {
			this.value = v;
			this.repaint();
		}
	};
	
	//PATCHING
	this.zebraUIElement.setMaxValue = function (max) {
		this.setValues(this.min, max, this.intervals, this.roughStep, this.exactStep);
	};
			
	//PATCHING
	this.zebraUIElement.setMinValue = function(min) {
		this.setValues(min, this.max, this.intervals, this.roughStep, this.exactStep);
	};
	
	//PATCHING
	this.zebraUIElement.setIntervals = function(intervals) {
		this.setValues(this.min, this.max, intervals, this.roughStep, this.exactStep);
	};
	
	//Trigger
	this.changed = function (e) {
		this.lastValue = e.getValue();
		this.valueLocked = true;
		currentParent.sendTrigger(currentElement.name, "changed", {"value":e.getValue()});
	};
	
	//Trigger
	this.valueSet = function() {
	};
	
	this.zebraUIElement.bind(function(e) {currentElement.changed(e);});
}

SliderElement.prototype = Object.create(BaseUIElement.prototype);
SliderElement.prototype.constructor = SliderElement;
	
//Target
SliderElement.prototype.trigger = function() {
	this.onTrigger();
};

//Target
SliderElement.prototype.setHandleImage = function(imgSrc) {
	var currentElement = this;
	var sliderImage = new Image();

	sliderImage.onload = function() {
		currentElement.zebraUIElement.views.hbundle.target = sliderImage;
		currentElement.zebraUIElement.views.vbundle.target = sliderImage;
		currentElement.zebraUIElement.recalc();
		currentElement.zebraUIElement.repaint();
	}
	
	sliderImage.src = imgSrc;
};

//Target
SliderElement.prototype.setValue = function(value) {
	
	if(value < this.zebraUIElement.min) {
		value = this.zebraUIElement.min;
	}
	
	if(value > this.zebraUIElement.max) {
		value = this.zebraUIElement.max;
	}
	
	this.zebraUIElement.setValueNoEvent(value);
	this.valueSet();
};

//Target
SliderElement.prototype.setMaxValue = function(max) {
	this.zebraUIElement.setMaxValue(max);
};

//Target
SliderElement.prototype.setMinValue = function(min) {
	this.zebraUIElement.setMinValue(min);
};

//Target
SliderElement.prototype.setIntervals = function(intervals) {
	this.zebraUIElement.setIntervals(intervals);
};

//Target
SliderElement.prototype.setScaleStep = function(scaleStep) {
	this.zebraUIElement.setScaleStep(scaleStep);
};
	
//Target
SliderElement.prototype.setShowScale = function(show) {
	this.zebraUIElement.setShowScale(show);
};

//Target
SliderElement.prototype.setShowTitle = function(show) {
	this.zebraUIElement.setShowTitle(show);
};
	
//Target
SliderElement.prototype.setOrientation = function(orientation) {
	if(orientation.toLowerCase() === 'vertical') {
		this.zebraUIElement.orient = zebra.layout.VERTICAL;
	}
	
	else if(orientation.toLowerCase() === 'horizontal') {
		this.zebraUIElement.orient = zebra.layout.HORIZONTAL;
	}
};

//Source
SliderElement.prototype.getValue = function() {
	return this.zebraUIElement.getValue();
};
	
SliderElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.minValue !== undefined) {
		this.setMinValue(state.minValue);
	}
	
	if(state.maxValue !== undefined) {
		this.setMaxValue(state.maxValue);
	}
	
	if(state.intervals !== undefined) {
		this.setIntervals(state.intervals);
	}
	
	if(state.orientation !== undefined) {
		this.setOrientation(state.orientation);
	}
	
	if(state.scaleStep !== undefined) {
		this.setScaleStep(state.scaleStep);
	}
	
	if(state.showScale !== undefined) {
		this.setShowScale(state.showScale);
	}
	
	if(state.showTitle !== undefined) {
		this.setShowTitle(state.showTitle);
	}
	
	if(state.value !== undefined) {
		this.zebraUIElement.setValue(state.value);
	}
};

function TaskElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	this.currentRunIn = 1000;
	this.currentRunEvery = 1000;
	
	this.zebraTask = new zebra.util.task(function(c){
		currentElement.task();
	});
}

TaskElement.prototype.trigger = function() {
	this.onTrigger();
};

TaskElement.prototype.task = function() {
};

TaskElement.prototype.run = function(runIn, runEvery) {
	
	if(runIn !== undefined && runIn !== null) {
		this.currentRunIn = runIn;
	}
	
	if(runEvery !== undefined && runEvery !== null) {
		this.currentRunEvery = runEvery;
	}
	
	this.zebraTask.run(currentRunIn, currentRunEvery);
};

TaskElement.prototype.pause = function() {
	this.zebraTask.pause();
};

TaskElement.prototype.onTrigger = function() {
};


function TextFieldElement(parent, name, notHtml) {
	var currentParent = parent;
	var currentElement = this;
	
	if(notHtml === true) {
		this.zebraUIElement = new zebra.ui.TextField("");
	}
	
	else {
		this.zebraUIElement = new zebra.ui.HtmlTextField("");
	}
	
	BaseUIElement.call(this, parent, name);
	
	this.lastValue = '';
	this.valueLocked = false;
	
	this.keyReleased = function(e) {
		this.lastValue = this.getValue();
		this.valueLocked = true;
		currentParent.sendTrigger(this.name, "keyReleased", {"value":this.getValue()});
		//if (env.debug) baseApp.debugLog("Text field value on key release: " + this.getValue());
	};
	
	this.keyPressed = function(e) {
		currentParent.sendTrigger(this.name, "keyPressed");
	};
	
	this.returnPressed = function (e) {
		currentParent.sendTrigger(this.name, "returnPressed");
	};
	
	this.returnReleased = function (e) {
		currentParent.sendTrigger(this.name, "returnReleased");
	};
	
	this.zebraUIElement.keyReleased = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyReleased(e);
		
		this.repaint();
	};
	
	this.zebraUIElement.keyPressed = function(e) {
		//TODO: Put check in for enter key then trigger the correct trigger
		this.airParent.keyPressed(e);
	};
}

TextFieldElement.prototype = Object.create(BaseUIElement.prototype);
TextFieldElement.prototype.constructor = TextFieldElement;

TextFieldElement.prototype.setValue = function(value) {
	
	if (value === undefined) {
		value = "undefined";
	}
	if (value === null) {
		value = "null";
	}

	this.zebraUIElement.setValue(value.toString());
};

TextFieldElement.prototype.appendValue = function(value) {
	
	if (value === undefined) {
		value = "undefined";
	}
	if (value === null) {
		value = "null";
	}
	
	this.zebraUIElement.setValue(this.getValue() + value.toString());
};

TextFieldElement.prototype.getValue = function() {
	return this.zebraUIElement.getValue();
};

TextFieldElement.prototype.updateState = function(state) {
	BaseUIElement.prototype.updateState.call(this, state);
	
	if(state.value !== undefined) {
			
		if(!this.valueLocked) {
			this.setValue(state.value);
		}
		
		if(state.value === this.lastValue) {
			this.lastValue = null;
			this.valueLocked = false;
		}
	}
};

function WebIOElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.uri = null;
	this.value = null;
	this.status = null;
	
	//Trigger
	this.valueReturned = function () {
	};
	
	//Trigger
	this.errorReturned = function () {
	};
}

WebIOElement.prototype = Object.create(BaseElement.prototype);
WebIOElement.prototype.constructor = WebIOElement;

//Helper
WebIOElement.prototype.valueReturnedCallback = function(request) {
	//console.log(JSON.stringify(request));
	
	this.status = request.status;
	
	if (request.status == 200) {
		try {
			this.value = JSON.parse(request.response);
		}
		catch(e) {
			this.value = request.response;
			
		}
		
		this.valueReturned();
	}
	
	else {
		this.value = null;
		this.errorReturned();
	}
};

//Target
WebIOElement.prototype.get = function (data) {
	var currentElement = this;
	
	var gdata = zebra.io.GET(this.uri, {data:encodeURI(JSON.stringify(data))}, function(request){currentElement.valueReturnedCallback(request);});
};

//Target
WebIOElement.prototype.post = function (data) {
	var currentElement = this;

	var gdata = POSTForm(this.uri, {data:encodeURI(JSON.stringify(data))}, function(request){currentElement.valueReturnedCallback(request);});
};

//Target
WebIOElement.prototype.advancedGet = function(data) {
	var currentElement = this;
	
	var gdata = zebra.io.GET(this.uri, data, function(request){currentElement.valueReturnedCallback(request);});
};

//Target
WebIOElement.prototype.advancedPost = function(data, headers) {
	var currentElement = this;
	
	var gdata = POSTForm(this.uri, data, function(request){currentElement.valueReturnedCallback(request);}, headers);
};

//Target
WebIOElement.prototype.setURI = function (value) {
	this.uri = value;
};

//Source
WebIOElement.prototype.getURI = function () {
	return this.uri;
};

//Source
WebIOElement.prototype.getValue = function () {
	return this.value;
};

//Source
WebIOElement.prototype.getStatus = function () {
	return this.status;
};

//Source
WebIOElement.prototype.getValues = function() {
	return {
		"uri":this.getURI(),
		"value":this.getValue(),
		"status":this.getStatus()
	};
};

WebIOElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
};



function WebLinkElement(parent, name) {
	var currentParent = parent;
	var currentElement = this;
	
	BaseElement.call(this, parent);
	
	this.parent.elements[name] = this;
	this.name = name;
	
	this.url = "about:blank";
	
	//Trigger
	this.opened = function() {
	};
}

WebLinkElement.prototype = Object.create(BaseElement.prototype);
WebLinkElement.prototype.constructor = WebLinkElement;

//Target
WebLinkElement.prototype.open = function() {
	window.open(this.url, '_system');
	
	this.opened();
};

//Target
WebLinkElement.prototype.setURL = function(url) {
	this.url = url;
};

//Source
WebLinkElement.prototype.getURL = function() {
	return this.url;
};

WebLinkElement.prototype.updateState = function(state) {
	BaseElement.prototype.updateState.call(this, state);
	
	if(state.url !== undefined) {
		this.setURL(state.url);
	}
};


function WizardElement(parent, name) {
	parent.elements[name] = this;
	
	this.name = name;
	this.parent = parent;
}
