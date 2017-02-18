
function MyApp(parent) {

	var airMe = this;
	
	this.parent = parent;

	this.parent.projectName = "UI Demo";
	this.parent.cloudUrl = "atmosphere.anaren.com:1337";
		
	this.parent.serviceUUID = "c68c4c4b-21ce-47da-aca1-3ce24c3ba92f";
	this.parent.notifyUUID = "c68c4c4b-21ce-47da-aca1-3ce24c3ba930";
		
	this.parent.localName = "ui_demo";
	this.parent.embeddedChains = {"Beep": [], "Light": []};

	this.element_ButtonUp_mouseReleased = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"Beep\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Beep.execute(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Beep\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"SoundIcon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_SoundIcon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"SoundIcon\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"ButtonUp\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonUp.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp\" ]");
		})();

	};

	this.element_ButtonUp_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"Beep\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Beep.execute(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Beep\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"SoundIcon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_SoundIcon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"SoundIcon\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"ButtonUp\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonUp.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp\" ]");
		})();

	};

	this.element_ButtonUp2_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"ButtonDown2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonDown2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

	};

	this.element_ButtonUp2_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"ButtonDown2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonDown2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_ButtonDown2.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"Light\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Light.execute(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Light\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"LedIcon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_LedIcon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"LedIcon\" ]");
		})();

	};

	this.element_Page3But_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page1\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page1.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page3\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page3.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Spinner\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Spinner.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Needle\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Needle.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

	};

	this.element_Task1_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"logo01\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo01.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo01\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"logo02\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo02.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo02\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "5000", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task2\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Task2.run(clone(targetValues.runIn),clone(targetValues.runEvery));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Task1.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task1\" ]");
		})();

	};

	this.element_Task2_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"logo02\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo02.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo02\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"logo03\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo03.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo03\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "5000", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"Task3\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"Task3\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Task3.run(clone(targetValues.runIn),clone(targetValues.runEvery));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task3\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Task2.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task2\" ]");
		})();

	};

	this.element_Task3_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"logo03\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo03.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo03\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"logo04\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo04.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo04\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "5000", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"Task4\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"Task4\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Task4.run(clone(targetValues.runIn),clone(targetValues.runEvery));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task4\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Task3.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task3\" ]");
		})();

	};

	this.element_Task4_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"logo04\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo04.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo04\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"logo05\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo05.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo05\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "5000", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"Task5\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"Task5\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Task5.run(clone(targetValues.runIn),clone(targetValues.runEvery));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task5\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Task4.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task4\" ]");
		})();

	};

	this.element_Task5_task = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"logo05\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo05.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo05\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"logo01\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_logo01.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo01\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.runEvery = " + "5000", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"Task1\" ] " + err.toString());
				}
				
				return;
			}
				
			try {
				eval("targetValues.runIn = " + "500", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"Task1\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Task1.run(clone(targetValues.runIn),clone(targetValues.runEvery));
					
			//airMe.parent.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task1\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Task5.pause();
					
			//airMe.parent.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task5\" ]");
		})();

	};

	this.element_Connected_connected = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Connected\" ]---X--->[ \"BLEon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_BLEon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Connected\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"BLEon\" ]");
		})();

	};

	this.element_Connected_disconnected = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Connected\" ]---X--->[ \"BLEon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_BLEon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Connected\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"BLEon\" ]");
		})();

	};

	this.element_On_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Off\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Off.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

	};

	this.element_On_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Off\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Off.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_Off.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "\"Off\"", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Value\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Value.setValue(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Value\" ]");
		})();

	};

	this.element_Off_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"On\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_On.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

	};

	this.element_Off_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"On\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_On.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_On.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "\"On\"", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"Value\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Value.setValue(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Value\" ]");
		})();

	};

	this.element_Page2But_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page1\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page1.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page3\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page3.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Needle\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Needle.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Spinner\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Spinner.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

	};

	this.element_ButtonDown2_onTrigger = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"ButtonUp2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonUp2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

	};

	this.element_ButtonDown2_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"ButtonUp2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ButtonUp2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			airMe.element_ButtonUp2.trigger();
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"Light\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Light.execute(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Light\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"LedIcon\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_LedIcon.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"LedIcon\" ]");
		})();

	};

	this.element_Spinner_changed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_Spinner.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Spinner\" ]---X--->[ \"Needle\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Needle.setRotation(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"Spinner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

	};

	this.element_Page1But_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "true", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page1\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page1.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page2\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page2.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page3\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Page3.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Needle\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Needle.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.visible = " + "false", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Spinner\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Spinner.setVisible(clone(targetValues.visible));
					
			//airMe.parent.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

	};

		this.layouts = {"iPad": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 188, "x": -17, "width": 802, "height": 147}, "logo02": {"y": 16, "x": 330, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 330, "width": 110, "height": 55}, "Needle": {"y": 649, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 330, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 330, "width": 110, "height": 55}, "StatefulButton": {"y": 270, "x": 498, "width": 116, "height": 51}, "Spinner": {"y": 631.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 500, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 330, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 352, "x": 227, "width": 314, "height": 37}, "TogButLabel": {"y": 447, "x": 441, "width": 146, "height": 40}, "PageBg": {"y": 600, "x": -13, "width": 794, "height": 186}, "On": {"y": 448, "x": 221, "width": 80, "height": 38}, "Off": {"y": 448, "x": 221, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 448, "x": 324, "width": 92, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 21, "x": 635.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 21, "x": 635.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 500, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 626, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 628, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 627, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 1024, "width": 768, "version": ".*", "name": "iPad 1/2/Mini"}, "Default": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 70, "x": 4, "height": 100, "width": 316}, "logo02": {"y": 10, "x": 105, "height": 55, "width": 110}, "logo01": {"y": 10, "x": 105, "height": 55, "width": 110}, "ButtonUp": {"y": 72, "x": 7, "height": 51, "width": 116}, "logo05": {"y": 10, "x": 105, "height": 55, "width": 110}, "logo04": {"y": 10, "x": 105, "height": 55, "width": 110}, "StatefulButton": {"y": 126, "x": 199, "height": 51, "width": 116}, "Spinner": {"y": 323, "x": 17, "height": 127, "width": 106}, "ButtonUp2": {"y": 72, "x": 202, "height": 51, "width": 116}, "Page3But": {"y": 270, "x": 190, "height": 38, "width": 80}, "logo03": {"y": 10, "x": 105, "height": 55, "width": 110}, "ButtonDown": {"y": 72, "x": 7, "height": 51, "width": 116}, "Needle": {"y": 336.5, "x": 138, "height": 86, "width": 86}, "informationLabel": {"y": 177, "x": 7, "height": 37, "width": 311}, "TogButLabel": {"y": 216, "x": 173, "height": 40, "width": 146}, "PageBg": {"y": 312, "x": 4, "height": 146, "width": 316}, "On": {"y": 216, "x": 10.5, "height": 38, "width": 80}, "Off": {"y": 216, "x": 9.5, "height": 38, "width": 80}, "ImageAsButton": {"y": 126, "x": 10, "height": 51, "width": 116}, "Value": {"y": 216, "x": 104, "height": 38, "width": 55}, "BLEon": {"y": 22, "x": 10, "height": 27, "width": 67}, "SoundIcon": {"y": 15, "x": 272.5, "height": 45, "width": 45}, "Page2But": {"y": 270, "x": 100, "height": 38, "width": 80}, "LedIcon": {"y": 15.5, "x": 273, "height": 45, "width": 45}, "ButtonDown2": {"y": 72, "x": 202, "height": 51, "width": 116}, "Page1But": {"y": 270, "x": 10, "height": 38, "width": 80}, "Page2": {"y": 320, "x": 10, "height": 130, "width": 296}, "Page3": {"y": 319, "x": 10.5, "height": 130, "width": 293}, "Page1": {"y": 319.5, "x": 13.5, "height": 130, "width": 296}}, "orientation": "portrait", "platform": ".*", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}, "iPhone4": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 70, "x": -9, "width": 332, "height": 100}, "logo02": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 105, "width": 110, "height": 55}, "Needle": {"y": 336.5, "x": 138, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 105, "width": 110, "height": 55}, "StatefulButton": {"y": 126, "x": 190, "width": 116, "height": 51}, "Spinner": {"y": 323, "x": 16, "width": 106, "height": 127}, "ButtonUp2": {"y": 72, "x": 190, "width": 116, "height": 51}, "Page3But": {"y": 270, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 105, "width": 110, "height": 55}, "ButtonDown": {"y": 72, "x": 7, "width": 116, "height": 51}, "ButtonUp": {"y": 72, "x": 7, "width": 116, "height": 51}, "informationLabel": {"y": 177, "x": 11, "width": 311, "height": 37}, "TogButLabel": {"y": 217, "x": 164, "width": 146, "height": 40}, "PageBg": {"y": 312, "x": -11, "width": 335, "height": 146}, "On": {"y": 216, "x": 10.5, "width": 80, "height": 38}, "Off": {"y": 216, "x": 9.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 126, "x": 10, "width": 116, "height": 51}, "Value": {"y": 216, "x": 104, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 10, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 261, "width": 45, "height": 45}, "Page2But": {"y": 270, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 261, "width": 45, "height": 45}, "ButtonDown2": {"y": 72, "x": 190, "width": 116, "height": 51}, "Page1But": {"y": 270, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 320, "x": 12, "width": 296, "height": 130}, "Page3": {"y": 319, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 319.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 480, "width": 320, "version": ".*", "name": "iPhone 4/4S"}, "iPhone5": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 80, "x": -21, "width": 343, "height": 100}, "logo02": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 105, "width": 110, "height": 55}, "Needle": {"y": 380.5, "x": 138, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 105, "width": 110, "height": 55}, "StatefulButton": {"y": 135, "x": 190, "width": 116, "height": 51}, "Spinner": {"y": 360, "x": 17, "width": 106, "height": 127}, "ButtonUp2": {"y": 82, "x": 190, "width": 116, "height": 51}, "Page3But": {"y": 310, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 105, "width": 110, "height": 55}, "ButtonDown": {"y": 82, "x": 7, "width": 116, "height": 51}, "ButtonUp": {"y": 82, "x": 7, "width": 116, "height": 51}, "informationLabel": {"y": 197, "x": 6, "width": 311, "height": 37}, "TogButLabel": {"y": 251, "x": 163, "width": 146, "height": 40}, "PageBg": {"y": 349, "x": -13, "width": 333, "height": 146}, "On": {"y": 250, "x": 10.5, "width": 80, "height": 38}, "Off": {"y": 250, "x": 9.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 136, "x": 10, "width": 116, "height": 51}, "Value": {"y": 250, "x": 104, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 10, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 261, "width": 45, "height": 45}, "Page2But": {"y": 310, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 261, "width": 45, "height": 45}, "ButtonDown2": {"y": 82, "x": 190, "width": 116, "height": 51}, "Page1But": {"y": 310, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 359, "x": 10, "width": 296, "height": 130}, "Page3": {"y": 360, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 359.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 320, "version": ".*", "name": "iPhone 5/5C/5S & iPod Touch"}, "iPhone6": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 80, "x": -21, "width": 397, "height": 100}, "logo02": {"y": 10, "x": 140, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 140, "width": 110, "height": 55}, "Needle": {"y": 380.5, "x": 162, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 140, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 140, "width": 110, "height": 55}, "StatefulButton": {"y": 135, "x": 227, "width": 116, "height": 51}, "Spinner": {"y": 360, "x": 24, "width": 106, "height": 127}, "ButtonUp2": {"y": 82, "x": 225, "width": 116, "height": 51}, "Page3But": {"y": 310, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 140, "width": 110, "height": 55}, "ButtonDown": {"y": 82, "x": 25, "width": 116, "height": 51}, "ButtonUp": {"y": 82, "x": 25, "width": 116, "height": 51}, "informationLabel": {"y": 199, "x": 30.5, "width": 314, "height": 37}, "TogButLabel": {"y": 251, "x": 204, "width": 146, "height": 40}, "PageBg": {"y": 349, "x": -13, "width": 391, "height": 146}, "On": {"y": 250, "x": 29.5, "width": 80, "height": 38}, "Off": {"y": 250, "x": 29.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 136, "x": 28, "width": 116, "height": 51}, "Value": {"y": 250, "x": 131, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 19, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 300, "width": 45, "height": 45}, "Page2But": {"y": 310, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 300, "width": 45, "height": 45}, "ButtonDown2": {"y": 82, "x": 225, "width": 116, "height": 51}, "Page1But": {"y": 310, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 359, "x": 13, "width": 296, "height": 130}, "Page3": {"y": 360, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 359.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 375, "version": ".*", "name": "iPhone 6"}, "iPhone6Plus": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 184.5, "x": -11, "width": 562, "height": 147}, "logo02": {"y": 16, "x": 220, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 220, "width": 110, "height": 55}, "Needle": {"y": 630, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 220, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 220, "width": 110, "height": 55}, "StatefulButton": {"y": 270, "x": 333, "width": 116, "height": 51}, "Spinner": {"y": 605.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 334, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 220, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 349, "x": 111, "width": 314, "height": 37}, "TogButLabel": {"y": 404, "x": 334, "width": 146, "height": 40}, "PageBg": {"y": 595, "x": -19.5, "width": 567, "height": 146}, "On": {"y": 405, "x": 85, "width": 80, "height": 38}, "Off": {"y": 405, "x": 85, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 405, "x": 242.5, "width": 55, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 22, "x": 424.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 22, "x": 424.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 334, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 608, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 608, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 606, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 960, "width": 540, "version": ".*", "name": "iPhone 6 Plus"}, "Nexus7": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 188, "x": -15.5, "width": 631, "height": 147}, "logo02": {"y": 16, "x": 240, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 240, "width": 110, "height": 55}, "Needle": {"y": 630, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 240, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 240, "width": 110, "height": 55}, "StatefulButton": {"y": 271, "x": 360, "width": 116, "height": 51}, "Spinner": {"y": 605.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 360, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 240, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 349, "x": 145, "width": 314, "height": 37}, "TogButLabel": {"y": 404, "x": 334, "width": 146, "height": 40}, "PageBg": {"y": 598, "x": -15, "width": 630, "height": 146}, "On": {"y": 405, "x": 85, "width": 80, "height": 38}, "Off": {"y": 405, "x": 85, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 405, "x": 242.5, "width": 55, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 22, "x": 468.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 22, "x": 468.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 360, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 608, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 608, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 606, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "Android", "height": 912, "width": 600, "version": ".*", "name": "Nexus 7 (2013)"}};
			
	this.initialize = function() {

			this.currentLayout = this.parent.layoutSelector(this.layouts);
			
			
			this.element_ButtonBackground = new ImageElement(this.parent, "ButtonBackground");
			
			this.element_ButtonBackground.setImage("https://atmosphere.anaren.com/dev/images/demo/blank.png");
			this.element_ButtonBackground.setRotation(0);
			this.element_ButtonBackground.setVisible(true);
			this.element_ButtonBackground.setEnabled(true);
			this.element_ButtonBackground.setBackground("#8CC4DB");

			if(this.element_ButtonBackground_onTrigger)
				this.element_ButtonBackground.onTrigger = this.element_ButtonBackground_onTrigger;
			
			if(this.element_ButtonBackground_mousePressed)
				this.element_ButtonBackground.mousePressed = this.element_ButtonBackground_mousePressed;
				
			if(this.element_ButtonBackground_mouseClicked)
				this.element_ButtonBackground.mouseClicked = this.element_ButtonBackground_mouseClicked;
			
			if(this.element_ButtonBackground_mouseReleased)
				this.element_ButtonBackground.mouseReleased = this.element_ButtonBackground_mouseReleased;
			
			if(this.element_ButtonBackground_mouseEntered)
				this.element_ButtonBackground.mouseEntered = this.element_ButtonBackground_mouseEntered;
			
			if(this.element_ButtonBackground_mouseMoved)
				this.element_ButtonBackground.mouseMoved = this.element_ButtonBackground_mouseMoved;
			
			if(this.element_ButtonBackground_mouseExited)
				this.element_ButtonBackground.mouseExited = this.element_ButtonBackground_mouseExited;
			
			this.element_ButtonBackground.setBounds(this.layouts[this.currentLayout]["elements"]["ButtonBackground"].x, 
							this.layouts[this.currentLayout]["elements"]["ButtonBackground"].y, 
							this.layouts[this.currentLayout]["elements"]["ButtonBackground"].width, 
							this.layouts[this.currentLayout]["elements"]["ButtonBackground"].height);
							
		
			this.element_logo02 = new ImageElement(this.parent, "logo02");
			
			this.element_logo02.setImage("https://atmosphere.anaren.com/dev/images/demo/animdemo/02.gif");
			this.element_logo02.setRotation(0);
			this.element_logo02.setVisible(false);
			this.element_logo02.setEnabled(true);
			this.element_logo02.setBackground("transparent");

			if(this.element_logo02_onTrigger)
				this.element_logo02.onTrigger = this.element_logo02_onTrigger;
			
			if(this.element_logo02_mousePressed)
				this.element_logo02.mousePressed = this.element_logo02_mousePressed;
				
			if(this.element_logo02_mouseClicked)
				this.element_logo02.mouseClicked = this.element_logo02_mouseClicked;
			
			if(this.element_logo02_mouseReleased)
				this.element_logo02.mouseReleased = this.element_logo02_mouseReleased;
			
			if(this.element_logo02_mouseEntered)
				this.element_logo02.mouseEntered = this.element_logo02_mouseEntered;
			
			if(this.element_logo02_mouseMoved)
				this.element_logo02.mouseMoved = this.element_logo02_mouseMoved;
			
			if(this.element_logo02_mouseExited)
				this.element_logo02.mouseExited = this.element_logo02_mouseExited;
			
			this.element_logo02.setBounds(this.layouts[this.currentLayout]["elements"]["logo02"].x, 
							this.layouts[this.currentLayout]["elements"]["logo02"].y, 
							this.layouts[this.currentLayout]["elements"]["logo02"].width, 
							this.layouts[this.currentLayout]["elements"]["logo02"].height);
							
		
			this.element_logo01 = new ImageElement(this.parent, "logo01");
			
			this.element_logo01.setImage("https://atmosphere.anaren.com/dev/images/demo/animdemo/01.gif");
			this.element_logo01.setRotation(0);
			this.element_logo01.setVisible(true);
			this.element_logo01.setEnabled(true);
			this.element_logo01.setBackground("transparent");

			if(this.element_logo01_onTrigger)
				this.element_logo01.onTrigger = this.element_logo01_onTrigger;
			
			if(this.element_logo01_mousePressed)
				this.element_logo01.mousePressed = this.element_logo01_mousePressed;
				
			if(this.element_logo01_mouseClicked)
				this.element_logo01.mouseClicked = this.element_logo01_mouseClicked;
			
			if(this.element_logo01_mouseReleased)
				this.element_logo01.mouseReleased = this.element_logo01_mouseReleased;
			
			if(this.element_logo01_mouseEntered)
				this.element_logo01.mouseEntered = this.element_logo01_mouseEntered;
			
			if(this.element_logo01_mouseMoved)
				this.element_logo01.mouseMoved = this.element_logo01_mouseMoved;
			
			if(this.element_logo01_mouseExited)
				this.element_logo01.mouseExited = this.element_logo01_mouseExited;
			
			this.element_logo01.setBounds(this.layouts[this.currentLayout]["elements"]["logo01"].x, 
							this.layouts[this.currentLayout]["elements"]["logo01"].y, 
							this.layouts[this.currentLayout]["elements"]["logo01"].width, 
							this.layouts[this.currentLayout]["elements"]["logo01"].height);
							
		
			this.element_ButtonUp = new ImageElement(this.parent, "ButtonUp");
			
			this.element_ButtonUp.setImage("https://atmosphere.anaren.com/dev/images/demo/button-up.png");
			this.element_ButtonUp.setRotation(0);
			this.element_ButtonUp.setVisible(true);
			this.element_ButtonUp.setEnabled(true);
			this.element_ButtonUp.setBackground("transparent");

			if(this.element_ButtonUp_onTrigger)
				this.element_ButtonUp.onTrigger = this.element_ButtonUp_onTrigger;
			
			if(this.element_ButtonUp_mousePressed)
				this.element_ButtonUp.mousePressed = this.element_ButtonUp_mousePressed;
				
			if(this.element_ButtonUp_mouseClicked)
				this.element_ButtonUp.mouseClicked = this.element_ButtonUp_mouseClicked;
			
			if(this.element_ButtonUp_mouseReleased)
				this.element_ButtonUp.mouseReleased = this.element_ButtonUp_mouseReleased;
			
			if(this.element_ButtonUp_mouseEntered)
				this.element_ButtonUp.mouseEntered = this.element_ButtonUp_mouseEntered;
			
			if(this.element_ButtonUp_mouseMoved)
				this.element_ButtonUp.mouseMoved = this.element_ButtonUp_mouseMoved;
			
			if(this.element_ButtonUp_mouseExited)
				this.element_ButtonUp.mouseExited = this.element_ButtonUp_mouseExited;
			
			this.element_ButtonUp.setBounds(this.layouts[this.currentLayout]["elements"]["ButtonUp"].x, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp"].y, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp"].width, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp"].height);
							
		
			this.element_logo05 = new ImageElement(this.parent, "logo05");
			
			this.element_logo05.setImage("https://atmosphere.anaren.com/dev/images/demo/animdemo/05.gif");
			this.element_logo05.setRotation(0);
			this.element_logo05.setVisible(false);
			this.element_logo05.setEnabled(true);
			this.element_logo05.setBackground("transparent");

			if(this.element_logo05_onTrigger)
				this.element_logo05.onTrigger = this.element_logo05_onTrigger;
			
			if(this.element_logo05_mousePressed)
				this.element_logo05.mousePressed = this.element_logo05_mousePressed;
				
			if(this.element_logo05_mouseClicked)
				this.element_logo05.mouseClicked = this.element_logo05_mouseClicked;
			
			if(this.element_logo05_mouseReleased)
				this.element_logo05.mouseReleased = this.element_logo05_mouseReleased;
			
			if(this.element_logo05_mouseEntered)
				this.element_logo05.mouseEntered = this.element_logo05_mouseEntered;
			
			if(this.element_logo05_mouseMoved)
				this.element_logo05.mouseMoved = this.element_logo05_mouseMoved;
			
			if(this.element_logo05_mouseExited)
				this.element_logo05.mouseExited = this.element_logo05_mouseExited;
			
			this.element_logo05.setBounds(this.layouts[this.currentLayout]["elements"]["logo05"].x, 
							this.layouts[this.currentLayout]["elements"]["logo05"].y, 
							this.layouts[this.currentLayout]["elements"]["logo05"].width, 
							this.layouts[this.currentLayout]["elements"]["logo05"].height);
							
		
			this.element_logo04 = new ImageElement(this.parent, "logo04");
			
			this.element_logo04.setImage("https://atmosphere.anaren.com/dev/images/demo/animdemo/04.gif");
			this.element_logo04.setRotation(0);
			this.element_logo04.setVisible(false);
			this.element_logo04.setEnabled(true);
			this.element_logo04.setBackground("transparent");

			if(this.element_logo04_onTrigger)
				this.element_logo04.onTrigger = this.element_logo04_onTrigger;
			
			if(this.element_logo04_mousePressed)
				this.element_logo04.mousePressed = this.element_logo04_mousePressed;
				
			if(this.element_logo04_mouseClicked)
				this.element_logo04.mouseClicked = this.element_logo04_mouseClicked;
			
			if(this.element_logo04_mouseReleased)
				this.element_logo04.mouseReleased = this.element_logo04_mouseReleased;
			
			if(this.element_logo04_mouseEntered)
				this.element_logo04.mouseEntered = this.element_logo04_mouseEntered;
			
			if(this.element_logo04_mouseMoved)
				this.element_logo04.mouseMoved = this.element_logo04_mouseMoved;
			
			if(this.element_logo04_mouseExited)
				this.element_logo04.mouseExited = this.element_logo04_mouseExited;
			
			this.element_logo04.setBounds(this.layouts[this.currentLayout]["elements"]["logo04"].x, 
							this.layouts[this.currentLayout]["elements"]["logo04"].y, 
							this.layouts[this.currentLayout]["elements"]["logo04"].width, 
							this.layouts[this.currentLayout]["elements"]["logo04"].height);
							
		
			this.element_StatefulButton = new LabelElement(this.parent, "StatefulButton");
			
			this.element_StatefulButton.setValue("Stateful Button Image\nThis will toggle the\nBlue LED");
			this.element_StatefulButton.setVisible(true);
			this.element_StatefulButton.setEnabled(true);
			this.element_StatefulButton.setColor("Black");
			this.element_StatefulButton.setFont("12px Arial");
			
			if(this.element_StatefulButton_onTrigger !== undefined)
				this.element_StatefulButton.onTrigger = this.element_StatefulButton_onTrigger;
			
			if(this.element_StatefulButton_mousePressed !== undefined)
				this.element_StatefulButton.mousePressed = this.element_StatefulButton_mousePressed;
				
			if(this.element_StatefulButton_mouseClicked !== undefined)
				this.element_StatefulButton.mouseClicked = this.element_StatefulButton_mouseClicked;
			
			if(this.element_StatefulButton_mouseReleased !== undefined)
				this.element_StatefulButton.mouseReleased = this.element_StatefulButton_mouseReleased;
			
			if(this.element_StatefulButton_mouseEntered !== undefined)
				this.element_StatefulButton.mouseEntered = this.element_StatefulButton_mouseEntered;
			
			if(this.element_StatefulButton_mouseMoved !== undefined)
				this.element_StatefulButton.mouseMoved = this.element_StatefulButton_mouseMoved;
			
			if(this.element_StatefulButton_mouseExited !== undefined)
				this.element_StatefulButton.mouseExited = this.element_StatefulButton_mouseExited;
			
			this.element_StatefulButton.setBounds(this.layouts[this.currentLayout]["elements"]["StatefulButton"].x, 
								this.layouts[this.currentLayout]["elements"]["StatefulButton"].y, 
								this.layouts[this.currentLayout]["elements"]["StatefulButton"].width, 
								this.layouts[this.currentLayout]["elements"]["StatefulButton"].height);
							
		
			this.element_Beep = new FunctionElement(this.parent, "Beep", 24, "c68c4c4b-21ce-47da-aca1-3ce24c3ba931", "json", "json");
				
			if(this.element_Beep_onTrigger)
				this.element_Beep.onTrigger = this.element_Beep_onTrigger;
			
			if(this.element_Beep_valueReturned)
				this.element_Beep.valueReturned = this.element_Beep_valueReturned;
				
			if(this.element_Beep_notified)
				this.element_Beep.notified = this.element_Beep_notified;
		
			this.element_ButtonUp2 = new ImageElement(this.parent, "ButtonUp2");
			
			this.element_ButtonUp2.setImage("https://atmosphere.anaren.com/dev/images/demo/button-up.png");
			this.element_ButtonUp2.setRotation(0);
			this.element_ButtonUp2.setVisible(true);
			this.element_ButtonUp2.setEnabled(true);
			this.element_ButtonUp2.setBackground("transparent");

			if(this.element_ButtonUp2_onTrigger)
				this.element_ButtonUp2.onTrigger = this.element_ButtonUp2_onTrigger;
			
			if(this.element_ButtonUp2_mousePressed)
				this.element_ButtonUp2.mousePressed = this.element_ButtonUp2_mousePressed;
				
			if(this.element_ButtonUp2_mouseClicked)
				this.element_ButtonUp2.mouseClicked = this.element_ButtonUp2_mouseClicked;
			
			if(this.element_ButtonUp2_mouseReleased)
				this.element_ButtonUp2.mouseReleased = this.element_ButtonUp2_mouseReleased;
			
			if(this.element_ButtonUp2_mouseEntered)
				this.element_ButtonUp2.mouseEntered = this.element_ButtonUp2_mouseEntered;
			
			if(this.element_ButtonUp2_mouseMoved)
				this.element_ButtonUp2.mouseMoved = this.element_ButtonUp2_mouseMoved;
			
			if(this.element_ButtonUp2_mouseExited)
				this.element_ButtonUp2.mouseExited = this.element_ButtonUp2_mouseExited;
			
			this.element_ButtonUp2.setBounds(this.layouts[this.currentLayout]["elements"]["ButtonUp2"].x, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp2"].y, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp2"].width, 
							this.layouts[this.currentLayout]["elements"]["ButtonUp2"].height);
							
		
			this.element_Page3But = new ButtonElement(this.parent, "Page3But");
			
			this.element_Page3But.setLabel("Page3");
			this.element_Page3But.setVisible(true);
			this.element_Page3But.setEnabled(true);
		
			this.element_Page3But.setBorder("plain");

			if(this.element_Page3But_onTrigger !== undefined)
				this.element_Page3But.onTrigger = this.element_Page3But_onTrigger;
			
			if(this.element_Page3But_mousePressed !== undefined)
				this.element_Page3But.mousePressed = this.element_Page3But_mousePressed;
				
			if(this.element_Page3But_mouseClicked !== undefined)
				this.element_Page3But.mouseClicked = this.element_Page3But_mouseClicked;
			
			if(this.element_Page3But_mouseReleased !== undefined)
				this.element_Page3But.mouseReleased = this.element_Page3But_mouseReleased;
			
			if(this.element_Page3But_mouseEntered !== undefined)
				this.element_Page3But.mouseEntered = this.element_Page3But_mouseEntered;
			
			if(this.element_Page3But_mouseMoved !== undefined)
				this.element_Page3But.mouseMoved = this.element_Page3But_mouseMoved;
			
			if(this.element_Page3But_mouseExited !== undefined)
				this.element_Page3But.mouseExited = this.element_Page3But_mouseExited;
			
			this.element_Page3But.setBounds(this.layouts[this.currentLayout]["elements"]["Page3But"].x, 
							this.layouts[this.currentLayout]["elements"]["Page3But"].y, 
							this.layouts[this.currentLayout]["elements"]["Page3But"].width, 
							this.layouts[this.currentLayout]["elements"]["Page3But"].height);
			
		
			this.element_logo03 = new ImageElement(this.parent, "logo03");
			
			this.element_logo03.setImage("https://atmosphere.anaren.com/dev/images/demo/animdemo/03.gif");
			this.element_logo03.setRotation(0);
			this.element_logo03.setVisible(false);
			this.element_logo03.setEnabled(true);
			this.element_logo03.setBackground("transparent");

			if(this.element_logo03_onTrigger)
				this.element_logo03.onTrigger = this.element_logo03_onTrigger;
			
			if(this.element_logo03_mousePressed)
				this.element_logo03.mousePressed = this.element_logo03_mousePressed;
				
			if(this.element_logo03_mouseClicked)
				this.element_logo03.mouseClicked = this.element_logo03_mouseClicked;
			
			if(this.element_logo03_mouseReleased)
				this.element_logo03.mouseReleased = this.element_logo03_mouseReleased;
			
			if(this.element_logo03_mouseEntered)
				this.element_logo03.mouseEntered = this.element_logo03_mouseEntered;
			
			if(this.element_logo03_mouseMoved)
				this.element_logo03.mouseMoved = this.element_logo03_mouseMoved;
			
			if(this.element_logo03_mouseExited)
				this.element_logo03.mouseExited = this.element_logo03_mouseExited;
			
			this.element_logo03.setBounds(this.layouts[this.currentLayout]["elements"]["logo03"].x, 
							this.layouts[this.currentLayout]["elements"]["logo03"].y, 
							this.layouts[this.currentLayout]["elements"]["logo03"].width, 
							this.layouts[this.currentLayout]["elements"]["logo03"].height);
							
		
			this.element_Task1 = new zebra.util.task(function(c){
				if(airMe.element_Task1_task)
					airMe.element_Task1_task();
			});
			
			this.element_Task1.element_Task1_task = this.element_Task1_task;

			this.element_Task1.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_Task1_onTrigger)
				this.element_Task1.onTrigger = this.element_Task1_onTrigger;
			
			this.element_Task1.run(500, 5000);
			
		
			this.element_Task2 = new zebra.util.task(function(c){
				if(airMe.element_Task2_task)
					airMe.element_Task2_task();
			});
			
			this.element_Task2.element_Task2_task = this.element_Task2_task;

			this.element_Task2.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_Task2_onTrigger)
				this.element_Task2.onTrigger = this.element_Task2_onTrigger;
			
			this.element_Task2.run(500, 5000);
			
		
			this.element_Task2.pause();
			
			this.element_Task3 = new zebra.util.task(function(c){
				if(airMe.element_Task3_task)
					airMe.element_Task3_task();
			});
			
			this.element_Task3.element_Task3_task = this.element_Task3_task;

			this.element_Task3.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_Task3_onTrigger)
				this.element_Task3.onTrigger = this.element_Task3_onTrigger;
			
			this.element_Task3.run(500, 5000);
			
		
			this.element_Task3.pause();
			
			this.element_Task4 = new zebra.util.task(function(c){
				if(airMe.element_Task4_task)
					airMe.element_Task4_task();
			});
			
			this.element_Task4.element_Task4_task = this.element_Task4_task;

			this.element_Task4.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_Task4_onTrigger)
				this.element_Task4.onTrigger = this.element_Task4_onTrigger;
			
			this.element_Task4.run(500, 5000);
			
		
			this.element_Task4.pause();
			
			this.element_Task5 = new zebra.util.task(function(c){
				if(airMe.element_Task5_task)
					airMe.element_Task5_task();
			});
			
			this.element_Task5.element_Task5_task = this.element_Task5_task;

			this.element_Task5.trigger = function() {
				if(this.onTrigger)
					this.onTrigger();
			}
			
			if(this.element_Task5_onTrigger)
				this.element_Task5.onTrigger = this.element_Task5_onTrigger;
			
			this.element_Task5.run(500, 5000);
			
		
			this.element_Task5.pause();
			
			this.element_ButtonDown = new ImageElement(this.parent, "ButtonDown");
			
			this.element_ButtonDown.setImage("https://atmosphere.anaren.com/dev/images/demo/button-down.png");
			this.element_ButtonDown.setRotation(0);
			this.element_ButtonDown.setVisible(true);
			this.element_ButtonDown.setEnabled(true);
			this.element_ButtonDown.setBackground("transparent");

			if(this.element_ButtonDown_onTrigger)
				this.element_ButtonDown.onTrigger = this.element_ButtonDown_onTrigger;
			
			if(this.element_ButtonDown_mousePressed)
				this.element_ButtonDown.mousePressed = this.element_ButtonDown_mousePressed;
				
			if(this.element_ButtonDown_mouseClicked)
				this.element_ButtonDown.mouseClicked = this.element_ButtonDown_mouseClicked;
			
			if(this.element_ButtonDown_mouseReleased)
				this.element_ButtonDown.mouseReleased = this.element_ButtonDown_mouseReleased;
			
			if(this.element_ButtonDown_mouseEntered)
				this.element_ButtonDown.mouseEntered = this.element_ButtonDown_mouseEntered;
			
			if(this.element_ButtonDown_mouseMoved)
				this.element_ButtonDown.mouseMoved = this.element_ButtonDown_mouseMoved;
			
			if(this.element_ButtonDown_mouseExited)
				this.element_ButtonDown.mouseExited = this.element_ButtonDown_mouseExited;
			
			this.element_ButtonDown.setBounds(this.layouts[this.currentLayout]["elements"]["ButtonDown"].x, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown"].y, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown"].width, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown"].height);
							
		
			this.element_Needle = new ImageElement(this.parent, "Needle");
			
			this.element_Needle.setImage("http://atmosphere.anaren.com/dev/images/demo/compass_needle.png");
			this.element_Needle.setRotation(0);
			this.element_Needle.setVisible(false);
			this.element_Needle.setEnabled(true);
			this.element_Needle.setBackground("transparent");

			if(this.element_Needle_onTrigger)
				this.element_Needle.onTrigger = this.element_Needle_onTrigger;
			
			if(this.element_Needle_mousePressed)
				this.element_Needle.mousePressed = this.element_Needle_mousePressed;
				
			if(this.element_Needle_mouseClicked)
				this.element_Needle.mouseClicked = this.element_Needle_mouseClicked;
			
			if(this.element_Needle_mouseReleased)
				this.element_Needle.mouseReleased = this.element_Needle_mouseReleased;
			
			if(this.element_Needle_mouseEntered)
				this.element_Needle.mouseEntered = this.element_Needle_mouseEntered;
			
			if(this.element_Needle_mouseMoved)
				this.element_Needle.mouseMoved = this.element_Needle_mouseMoved;
			
			if(this.element_Needle_mouseExited)
				this.element_Needle.mouseExited = this.element_Needle_mouseExited;
			
			this.element_Needle.setBounds(this.layouts[this.currentLayout]["elements"]["Needle"].x, 
							this.layouts[this.currentLayout]["elements"]["Needle"].y, 
							this.layouts[this.currentLayout]["elements"]["Needle"].width, 
							this.layouts[this.currentLayout]["elements"]["Needle"].height);
							
		
			this.element_informationLabel = new LabelElement(this.parent, "informationLabel");
			
			this.element_informationLabel.setValue("Using a transparent png above and setting the \nbackground color to create a background box.");
			this.element_informationLabel.setVisible(true);
			this.element_informationLabel.setEnabled(true);
			this.element_informationLabel.setColor("#a3c0da");
			this.element_informationLabel.setFont("Bold 12px Georgia");
			
			if(this.element_informationLabel_onTrigger !== undefined)
				this.element_informationLabel.onTrigger = this.element_informationLabel_onTrigger;
			
			if(this.element_informationLabel_mousePressed !== undefined)
				this.element_informationLabel.mousePressed = this.element_informationLabel_mousePressed;
				
			if(this.element_informationLabel_mouseClicked !== undefined)
				this.element_informationLabel.mouseClicked = this.element_informationLabel_mouseClicked;
			
			if(this.element_informationLabel_mouseReleased !== undefined)
				this.element_informationLabel.mouseReleased = this.element_informationLabel_mouseReleased;
			
			if(this.element_informationLabel_mouseEntered !== undefined)
				this.element_informationLabel.mouseEntered = this.element_informationLabel_mouseEntered;
			
			if(this.element_informationLabel_mouseMoved !== undefined)
				this.element_informationLabel.mouseMoved = this.element_informationLabel_mouseMoved;
			
			if(this.element_informationLabel_mouseExited !== undefined)
				this.element_informationLabel.mouseExited = this.element_informationLabel_mouseExited;
			
			this.element_informationLabel.setBounds(this.layouts[this.currentLayout]["elements"]["informationLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["informationLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["informationLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["informationLabel"].height);
							
		
			this.element_TogButLabel = new LabelElement(this.parent, "TogButLabel");
			
			this.element_TogButLabel.setValue("Using standard button\nas a toggle button");
			this.element_TogButLabel.setVisible(true);
			this.element_TogButLabel.setEnabled(true);
			this.element_TogButLabel.setColor("Black");
			this.element_TogButLabel.setFont("12px Verdana");
			
			if(this.element_TogButLabel_onTrigger !== undefined)
				this.element_TogButLabel.onTrigger = this.element_TogButLabel_onTrigger;
			
			if(this.element_TogButLabel_mousePressed !== undefined)
				this.element_TogButLabel.mousePressed = this.element_TogButLabel_mousePressed;
				
			if(this.element_TogButLabel_mouseClicked !== undefined)
				this.element_TogButLabel.mouseClicked = this.element_TogButLabel_mouseClicked;
			
			if(this.element_TogButLabel_mouseReleased !== undefined)
				this.element_TogButLabel.mouseReleased = this.element_TogButLabel_mouseReleased;
			
			if(this.element_TogButLabel_mouseEntered !== undefined)
				this.element_TogButLabel.mouseEntered = this.element_TogButLabel_mouseEntered;
			
			if(this.element_TogButLabel_mouseMoved !== undefined)
				this.element_TogButLabel.mouseMoved = this.element_TogButLabel_mouseMoved;
			
			if(this.element_TogButLabel_mouseExited !== undefined)
				this.element_TogButLabel.mouseExited = this.element_TogButLabel_mouseExited;
			
			this.element_TogButLabel.setBounds(this.layouts[this.currentLayout]["elements"]["TogButLabel"].x, 
								this.layouts[this.currentLayout]["elements"]["TogButLabel"].y, 
								this.layouts[this.currentLayout]["elements"]["TogButLabel"].width, 
								this.layouts[this.currentLayout]["elements"]["TogButLabel"].height);
							
		
			this.element_Connected = new ConnectionElement(this.parent);
			
			if(this.element_Connected_onTrigger)
				this.element_Connected.onTrigger = this.element_Connected_onTrigger;
		
			if(this.element_Connected_connecting)
				this.element_Connected.connecting = this.element_Connected_connecting;
		
			if(this.element_Connected_connected)
				this.element_Connected.connected = this.element_Connected_connected;
		
			if(this.element_Connected_disconnecting)
				this.element_Connected.disconnecting = this.element_Connected_disconnecting;
		
			if(this.element_Connected_disconnected)
				this.element_Connected.disconnected = this.element_Connected_disconnected;
		
			this.element_PageBg = new ImageElement(this.parent, "PageBg");
			
			this.element_PageBg.setImage("https://atmosphere.anaren.com/dev/images/demo/blank.png");
			this.element_PageBg.setRotation(0);
			this.element_PageBg.setVisible(true);
			this.element_PageBg.setEnabled(false);
			this.element_PageBg.setBackground("#ccc");

			if(this.element_PageBg_onTrigger)
				this.element_PageBg.onTrigger = this.element_PageBg_onTrigger;
			
			if(this.element_PageBg_mousePressed)
				this.element_PageBg.mousePressed = this.element_PageBg_mousePressed;
				
			if(this.element_PageBg_mouseClicked)
				this.element_PageBg.mouseClicked = this.element_PageBg_mouseClicked;
			
			if(this.element_PageBg_mouseReleased)
				this.element_PageBg.mouseReleased = this.element_PageBg_mouseReleased;
			
			if(this.element_PageBg_mouseEntered)
				this.element_PageBg.mouseEntered = this.element_PageBg_mouseEntered;
			
			if(this.element_PageBg_mouseMoved)
				this.element_PageBg.mouseMoved = this.element_PageBg_mouseMoved;
			
			if(this.element_PageBg_mouseExited)
				this.element_PageBg.mouseExited = this.element_PageBg_mouseExited;
			
			this.element_PageBg.setBounds(this.layouts[this.currentLayout]["elements"]["PageBg"].x, 
							this.layouts[this.currentLayout]["elements"]["PageBg"].y, 
							this.layouts[this.currentLayout]["elements"]["PageBg"].width, 
							this.layouts[this.currentLayout]["elements"]["PageBg"].height);
							
		
			this.element_On = new ButtonElement(this.parent, "On");
			
			this.element_On.setLabel("On");
			this.element_On.setVisible(false);
			this.element_On.setEnabled(true);
		
			this.element_On.setBorder("plain");

			if(this.element_On_onTrigger !== undefined)
				this.element_On.onTrigger = this.element_On_onTrigger;
			
			if(this.element_On_mousePressed !== undefined)
				this.element_On.mousePressed = this.element_On_mousePressed;
				
			if(this.element_On_mouseClicked !== undefined)
				this.element_On.mouseClicked = this.element_On_mouseClicked;
			
			if(this.element_On_mouseReleased !== undefined)
				this.element_On.mouseReleased = this.element_On_mouseReleased;
			
			if(this.element_On_mouseEntered !== undefined)
				this.element_On.mouseEntered = this.element_On_mouseEntered;
			
			if(this.element_On_mouseMoved !== undefined)
				this.element_On.mouseMoved = this.element_On_mouseMoved;
			
			if(this.element_On_mouseExited !== undefined)
				this.element_On.mouseExited = this.element_On_mouseExited;
			
			this.element_On.setBounds(this.layouts[this.currentLayout]["elements"]["On"].x, 
							this.layouts[this.currentLayout]["elements"]["On"].y, 
							this.layouts[this.currentLayout]["elements"]["On"].width, 
							this.layouts[this.currentLayout]["elements"]["On"].height);
			
		
			this.element_Off = new ButtonElement(this.parent, "Off");
			
			this.element_Off.setLabel("Off");
			this.element_Off.setVisible(true);
			this.element_Off.setEnabled(true);
		
			this.element_Off.setBorder("plain");

			if(this.element_Off_onTrigger !== undefined)
				this.element_Off.onTrigger = this.element_Off_onTrigger;
			
			if(this.element_Off_mousePressed !== undefined)
				this.element_Off.mousePressed = this.element_Off_mousePressed;
				
			if(this.element_Off_mouseClicked !== undefined)
				this.element_Off.mouseClicked = this.element_Off_mouseClicked;
			
			if(this.element_Off_mouseReleased !== undefined)
				this.element_Off.mouseReleased = this.element_Off_mouseReleased;
			
			if(this.element_Off_mouseEntered !== undefined)
				this.element_Off.mouseEntered = this.element_Off_mouseEntered;
			
			if(this.element_Off_mouseMoved !== undefined)
				this.element_Off.mouseMoved = this.element_Off_mouseMoved;
			
			if(this.element_Off_mouseExited !== undefined)
				this.element_Off.mouseExited = this.element_Off_mouseExited;
			
			this.element_Off.setBounds(this.layouts[this.currentLayout]["elements"]["Off"].x, 
							this.layouts[this.currentLayout]["elements"]["Off"].y, 
							this.layouts[this.currentLayout]["elements"]["Off"].width, 
							this.layouts[this.currentLayout]["elements"]["Off"].height);
			
		
			this.element_ImageAsButton = new LabelElement(this.parent, "ImageAsButton");
			
			this.element_ImageAsButton.setValue("Button Image\nPressing will also\ntrigger the Buzzer");
			this.element_ImageAsButton.setVisible(true);
			this.element_ImageAsButton.setEnabled(true);
			this.element_ImageAsButton.setColor("Black");
			this.element_ImageAsButton.setFont("12px Arial");
			
			if(this.element_ImageAsButton_onTrigger !== undefined)
				this.element_ImageAsButton.onTrigger = this.element_ImageAsButton_onTrigger;
			
			if(this.element_ImageAsButton_mousePressed !== undefined)
				this.element_ImageAsButton.mousePressed = this.element_ImageAsButton_mousePressed;
				
			if(this.element_ImageAsButton_mouseClicked !== undefined)
				this.element_ImageAsButton.mouseClicked = this.element_ImageAsButton_mouseClicked;
			
			if(this.element_ImageAsButton_mouseReleased !== undefined)
				this.element_ImageAsButton.mouseReleased = this.element_ImageAsButton_mouseReleased;
			
			if(this.element_ImageAsButton_mouseEntered !== undefined)
				this.element_ImageAsButton.mouseEntered = this.element_ImageAsButton_mouseEntered;
			
			if(this.element_ImageAsButton_mouseMoved !== undefined)
				this.element_ImageAsButton.mouseMoved = this.element_ImageAsButton_mouseMoved;
			
			if(this.element_ImageAsButton_mouseExited !== undefined)
				this.element_ImageAsButton.mouseExited = this.element_ImageAsButton_mouseExited;
			
			this.element_ImageAsButton.setBounds(this.layouts[this.currentLayout]["elements"]["ImageAsButton"].x, 
								this.layouts[this.currentLayout]["elements"]["ImageAsButton"].y, 
								this.layouts[this.currentLayout]["elements"]["ImageAsButton"].width, 
								this.layouts[this.currentLayout]["elements"]["ImageAsButton"].height);
							
		
			this.element_Light = new FunctionElement(this.parent, "Light", 26, "c68c4c4b-21ce-47da-aca1-3ce24c3ba932", "json", "json");
				
			if(this.element_Light_onTrigger)
				this.element_Light.onTrigger = this.element_Light_onTrigger;
			
			if(this.element_Light_valueReturned)
				this.element_Light.valueReturned = this.element_Light_valueReturned;
				
			if(this.element_Light_notified)
				this.element_Light.notified = this.element_Light_notified;
		
			this.element_Value = new TextFieldElement(this.parent, "Value");
			
			this.element_Value.setValue("Off");
			this.element_Value.setVisible(true);
			this.element_Value.setEnabled(false);

			if(this.element_Value_onTrigger)
				this.element_Value.onTrigger = this.element_Value_onTrigger;
			
			if(this.element_Value_keyPressed)
				this.element_Value.keyPressed = this.element_Value_keyPressed;
				
			if(this.element_Value_keyReleased)
				this.element_Value.keyReleased = this.element_Value_keyReleased;
			
			this.element_Value.setBounds(this.layouts[this.currentLayout]["elements"]["Value"].x, 
							this.layouts[this.currentLayout]["elements"]["Value"].y, 
							this.layouts[this.currentLayout]["elements"]["Value"].width, 
							this.layouts[this.currentLayout]["elements"]["Value"].height);
							
		
			this.element_BLEon = new ImageElement(this.parent, "BLEon");
			
			this.element_BLEon.setImage("https://atmosphere.anaren.com/dev/images/demo/LogoBluetoothSmart.jpg");
			this.element_BLEon.setRotation(0);
			this.element_BLEon.setVisible(false);
			this.element_BLEon.setEnabled(true);
			this.element_BLEon.setBackground("transparent");

			if(this.element_BLEon_onTrigger)
				this.element_BLEon.onTrigger = this.element_BLEon_onTrigger;
			
			if(this.element_BLEon_mousePressed)
				this.element_BLEon.mousePressed = this.element_BLEon_mousePressed;
				
			if(this.element_BLEon_mouseClicked)
				this.element_BLEon.mouseClicked = this.element_BLEon_mouseClicked;
			
			if(this.element_BLEon_mouseReleased)
				this.element_BLEon.mouseReleased = this.element_BLEon_mouseReleased;
			
			if(this.element_BLEon_mouseEntered)
				this.element_BLEon.mouseEntered = this.element_BLEon_mouseEntered;
			
			if(this.element_BLEon_mouseMoved)
				this.element_BLEon.mouseMoved = this.element_BLEon_mouseMoved;
			
			if(this.element_BLEon_mouseExited)
				this.element_BLEon.mouseExited = this.element_BLEon_mouseExited;
			
			this.element_BLEon.setBounds(this.layouts[this.currentLayout]["elements"]["BLEon"].x, 
							this.layouts[this.currentLayout]["elements"]["BLEon"].y, 
							this.layouts[this.currentLayout]["elements"]["BLEon"].width, 
							this.layouts[this.currentLayout]["elements"]["BLEon"].height);
							
		
			this.element_SoundIcon = new ImageElement(this.parent, "SoundIcon");
			
			this.element_SoundIcon.setImage("https://atmosphere.anaren.com/dev/images/demo/sound.png");
			this.element_SoundIcon.setRotation(0);
			this.element_SoundIcon.setVisible(false);
			this.element_SoundIcon.setEnabled(true);
			this.element_SoundIcon.setBackground("transparent");

			if(this.element_SoundIcon_onTrigger)
				this.element_SoundIcon.onTrigger = this.element_SoundIcon_onTrigger;
			
			if(this.element_SoundIcon_mousePressed)
				this.element_SoundIcon.mousePressed = this.element_SoundIcon_mousePressed;
				
			if(this.element_SoundIcon_mouseClicked)
				this.element_SoundIcon.mouseClicked = this.element_SoundIcon_mouseClicked;
			
			if(this.element_SoundIcon_mouseReleased)
				this.element_SoundIcon.mouseReleased = this.element_SoundIcon_mouseReleased;
			
			if(this.element_SoundIcon_mouseEntered)
				this.element_SoundIcon.mouseEntered = this.element_SoundIcon_mouseEntered;
			
			if(this.element_SoundIcon_mouseMoved)
				this.element_SoundIcon.mouseMoved = this.element_SoundIcon_mouseMoved;
			
			if(this.element_SoundIcon_mouseExited)
				this.element_SoundIcon.mouseExited = this.element_SoundIcon_mouseExited;
			
			this.element_SoundIcon.setBounds(this.layouts[this.currentLayout]["elements"]["SoundIcon"].x, 
							this.layouts[this.currentLayout]["elements"]["SoundIcon"].y, 
							this.layouts[this.currentLayout]["elements"]["SoundIcon"].width, 
							this.layouts[this.currentLayout]["elements"]["SoundIcon"].height);
							
		
			this.element_Page2But = new ButtonElement(this.parent, "Page2But");
			
			this.element_Page2But.setLabel("Page2");
			this.element_Page2But.setVisible(true);
			this.element_Page2But.setEnabled(true);
		
			this.element_Page2But.setBorder("plain");

			if(this.element_Page2But_onTrigger !== undefined)
				this.element_Page2But.onTrigger = this.element_Page2But_onTrigger;
			
			if(this.element_Page2But_mousePressed !== undefined)
				this.element_Page2But.mousePressed = this.element_Page2But_mousePressed;
				
			if(this.element_Page2But_mouseClicked !== undefined)
				this.element_Page2But.mouseClicked = this.element_Page2But_mouseClicked;
			
			if(this.element_Page2But_mouseReleased !== undefined)
				this.element_Page2But.mouseReleased = this.element_Page2But_mouseReleased;
			
			if(this.element_Page2But_mouseEntered !== undefined)
				this.element_Page2But.mouseEntered = this.element_Page2But_mouseEntered;
			
			if(this.element_Page2But_mouseMoved !== undefined)
				this.element_Page2But.mouseMoved = this.element_Page2But_mouseMoved;
			
			if(this.element_Page2But_mouseExited !== undefined)
				this.element_Page2But.mouseExited = this.element_Page2But_mouseExited;
			
			this.element_Page2But.setBounds(this.layouts[this.currentLayout]["elements"]["Page2But"].x, 
							this.layouts[this.currentLayout]["elements"]["Page2But"].y, 
							this.layouts[this.currentLayout]["elements"]["Page2But"].width, 
							this.layouts[this.currentLayout]["elements"]["Page2But"].height);
			
		
			this.element_LedIcon = new ImageElement(this.parent, "LedIcon");
			
			this.element_LedIcon.setImage("https://atmosphere.anaren.com/dev/images/demo/led.png");
			this.element_LedIcon.setRotation(0);
			this.element_LedIcon.setVisible(false);
			this.element_LedIcon.setEnabled(true);
			this.element_LedIcon.setBackground("#2EB1D9");

			if(this.element_LedIcon_onTrigger)
				this.element_LedIcon.onTrigger = this.element_LedIcon_onTrigger;
			
			if(this.element_LedIcon_mousePressed)
				this.element_LedIcon.mousePressed = this.element_LedIcon_mousePressed;
				
			if(this.element_LedIcon_mouseClicked)
				this.element_LedIcon.mouseClicked = this.element_LedIcon_mouseClicked;
			
			if(this.element_LedIcon_mouseReleased)
				this.element_LedIcon.mouseReleased = this.element_LedIcon_mouseReleased;
			
			if(this.element_LedIcon_mouseEntered)
				this.element_LedIcon.mouseEntered = this.element_LedIcon_mouseEntered;
			
			if(this.element_LedIcon_mouseMoved)
				this.element_LedIcon.mouseMoved = this.element_LedIcon_mouseMoved;
			
			if(this.element_LedIcon_mouseExited)
				this.element_LedIcon.mouseExited = this.element_LedIcon_mouseExited;
			
			this.element_LedIcon.setBounds(this.layouts[this.currentLayout]["elements"]["LedIcon"].x, 
							this.layouts[this.currentLayout]["elements"]["LedIcon"].y, 
							this.layouts[this.currentLayout]["elements"]["LedIcon"].width, 
							this.layouts[this.currentLayout]["elements"]["LedIcon"].height);
							
		
			this.element_ButtonDown2 = new ImageElement(this.parent, "ButtonDown2");
			
			this.element_ButtonDown2.setImage("https://atmosphere.anaren.com/dev/images/demo/button-down.png");
			this.element_ButtonDown2.setRotation(0);
			this.element_ButtonDown2.setVisible(false);
			this.element_ButtonDown2.setEnabled(true);
			this.element_ButtonDown2.setBackground("transparent");

			if(this.element_ButtonDown2_onTrigger)
				this.element_ButtonDown2.onTrigger = this.element_ButtonDown2_onTrigger;
			
			if(this.element_ButtonDown2_mousePressed)
				this.element_ButtonDown2.mousePressed = this.element_ButtonDown2_mousePressed;
				
			if(this.element_ButtonDown2_mouseClicked)
				this.element_ButtonDown2.mouseClicked = this.element_ButtonDown2_mouseClicked;
			
			if(this.element_ButtonDown2_mouseReleased)
				this.element_ButtonDown2.mouseReleased = this.element_ButtonDown2_mouseReleased;
			
			if(this.element_ButtonDown2_mouseEntered)
				this.element_ButtonDown2.mouseEntered = this.element_ButtonDown2_mouseEntered;
			
			if(this.element_ButtonDown2_mouseMoved)
				this.element_ButtonDown2.mouseMoved = this.element_ButtonDown2_mouseMoved;
			
			if(this.element_ButtonDown2_mouseExited)
				this.element_ButtonDown2.mouseExited = this.element_ButtonDown2_mouseExited;
			
			this.element_ButtonDown2.setBounds(this.layouts[this.currentLayout]["elements"]["ButtonDown2"].x, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown2"].y, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown2"].width, 
							this.layouts[this.currentLayout]["elements"]["ButtonDown2"].height);
							
		
			this.element_Spinner = new SliderElement(this.parent, "Spinner");
			
			this.element_Spinner.setVisible(false);
			this.element_Spinner.setEnabled(true);
			this.element_Spinner.setShowScale(true);
			this.element_Spinner.setShowTitle(true);
			this.element_Spinner.setMinValue(0);
			this.element_Spinner.setMaxValue(360);
			this.element_Spinner.setValue(0);
			this.element_Spinner.setIntervals([0, 180, 180]);
			this.element_Spinner.setScaleStep(90);
			this.element_Spinner.setOrientation("Vertical");

			if(this.element_Spinner_onTrigger)
				this.element_Spinner.onTrigger = this.element_Spinner_onTrigger;
			
			if(this.element_Spinner_changed)
				this.element_Spinner.changed = this.element_Spinner_changed;
			
			if(this.element_Spinner_valueSet)
				this.element_Spinner.valueSet = this.element_Spinner_valueSet;
				
			if(this.element_Spinner_mousePressed)
				this.element_Spinner.mousePressed = this.element_Spinner_mousePressed;
				
			if(this.element_Spinner_mouseClicked)
				this.element_Spinner.mouseClicked = this.element_Spinner_mouseClicked;
			
			if(this.element_Spinner_mouseReleased)
				this.element_Spinner.mouseReleased = this.element_Spinner_mouseReleased;
			
			if(this.element_Spinner_mouseEntered)
				this.element_Spinner.mouseEntered = this.element_Spinner_mouseEntered;
			
			if(this.element_Spinner_mouseMoved)
				this.element_Spinner.mouseMoved = this.element_Spinner_mouseMoved;
			
			if(this.element_Spinner_mouseExited)
				this.element_Spinner.mouseExited = this.element_Spinner_mouseExited;
			
			this.element_Spinner.setBounds(this.layouts[this.currentLayout]["elements"]["Spinner"].x, 
							this.layouts[this.currentLayout]["elements"]["Spinner"].y, 
							this.layouts[this.currentLayout]["elements"]["Spinner"].width, 
							this.layouts[this.currentLayout]["elements"]["Spinner"].height);
							
		
			this.element_Page1But = new ButtonElement(this.parent, "Page1But");
			
			this.element_Page1But.setLabel("Page1");
			this.element_Page1But.setVisible(true);
			this.element_Page1But.setEnabled(true);
		
			this.element_Page1But.setBorder("plain");

			if(this.element_Page1But_onTrigger !== undefined)
				this.element_Page1But.onTrigger = this.element_Page1But_onTrigger;
			
			if(this.element_Page1But_mousePressed !== undefined)
				this.element_Page1But.mousePressed = this.element_Page1But_mousePressed;
				
			if(this.element_Page1But_mouseClicked !== undefined)
				this.element_Page1But.mouseClicked = this.element_Page1But_mouseClicked;
			
			if(this.element_Page1But_mouseReleased !== undefined)
				this.element_Page1But.mouseReleased = this.element_Page1But_mouseReleased;
			
			if(this.element_Page1But_mouseEntered !== undefined)
				this.element_Page1But.mouseEntered = this.element_Page1But_mouseEntered;
			
			if(this.element_Page1But_mouseMoved !== undefined)
				this.element_Page1But.mouseMoved = this.element_Page1But_mouseMoved;
			
			if(this.element_Page1But_mouseExited !== undefined)
				this.element_Page1But.mouseExited = this.element_Page1But_mouseExited;
			
			this.element_Page1But.setBounds(this.layouts[this.currentLayout]["elements"]["Page1But"].x, 
							this.layouts[this.currentLayout]["elements"]["Page1But"].y, 
							this.layouts[this.currentLayout]["elements"]["Page1But"].width, 
							this.layouts[this.currentLayout]["elements"]["Page1But"].height);
			
		
			this.element_Page2 = new LabelElement(this.parent, "Page2");
			
			this.element_Page2.setValue("Atmosphere supports the following image formats\nfor the ImagePan; PNG, JPG, JPEG and GIF, however\nthere is no support for animated GIF. \n\nTo simulate this effect in the Logo above, note how \ntasks were used to step through the images as if \nthey were \"frames\".");
			this.element_Page2.setVisible(false);
			this.element_Page2.setEnabled(true);
			this.element_Page2.setColor("Black");
			this.element_Page2.setFont("12px Arial");
			
			if(this.element_Page2_onTrigger !== undefined)
				this.element_Page2.onTrigger = this.element_Page2_onTrigger;
			
			if(this.element_Page2_mousePressed !== undefined)
				this.element_Page2.mousePressed = this.element_Page2_mousePressed;
				
			if(this.element_Page2_mouseClicked !== undefined)
				this.element_Page2.mouseClicked = this.element_Page2_mouseClicked;
			
			if(this.element_Page2_mouseReleased !== undefined)
				this.element_Page2.mouseReleased = this.element_Page2_mouseReleased;
			
			if(this.element_Page2_mouseEntered !== undefined)
				this.element_Page2.mouseEntered = this.element_Page2_mouseEntered;
			
			if(this.element_Page2_mouseMoved !== undefined)
				this.element_Page2.mouseMoved = this.element_Page2_mouseMoved;
			
			if(this.element_Page2_mouseExited !== undefined)
				this.element_Page2.mouseExited = this.element_Page2_mouseExited;
			
			this.element_Page2.setBounds(this.layouts[this.currentLayout]["elements"]["Page2"].x, 
								this.layouts[this.currentLayout]["elements"]["Page2"].y, 
								this.layouts[this.currentLayout]["elements"]["Page2"].width, 
								this.layouts[this.currentLayout]["elements"]["Page2"].height);
							
		
			this.element_Page3 = new LabelElement(this.parent, "Page3");
			
			this.element_Page3.setValue("");
			this.element_Page3.setVisible(false);
			this.element_Page3.setEnabled(false);
			this.element_Page3.setColor("Black");
			this.element_Page3.setFont("12px Arial");
			
			if(this.element_Page3_onTrigger !== undefined)
				this.element_Page3.onTrigger = this.element_Page3_onTrigger;
			
			if(this.element_Page3_mousePressed !== undefined)
				this.element_Page3.mousePressed = this.element_Page3_mousePressed;
				
			if(this.element_Page3_mouseClicked !== undefined)
				this.element_Page3.mouseClicked = this.element_Page3_mouseClicked;
			
			if(this.element_Page3_mouseReleased !== undefined)
				this.element_Page3.mouseReleased = this.element_Page3_mouseReleased;
			
			if(this.element_Page3_mouseEntered !== undefined)
				this.element_Page3.mouseEntered = this.element_Page3_mouseEntered;
			
			if(this.element_Page3_mouseMoved !== undefined)
				this.element_Page3.mouseMoved = this.element_Page3_mouseMoved;
			
			if(this.element_Page3_mouseExited !== undefined)
				this.element_Page3.mouseExited = this.element_Page3_mouseExited;
			
			this.element_Page3.setBounds(this.layouts[this.currentLayout]["elements"]["Page3"].x, 
								this.layouts[this.currentLayout]["elements"]["Page3"].y, 
								this.layouts[this.currentLayout]["elements"]["Page3"].width, 
								this.layouts[this.currentLayout]["elements"]["Page3"].height);
							
		
			this.element_Page1 = new LabelElement(this.parent, "Page1");
			
			this.element_Page1.setValue("This is an example of a way to create tab pages\nwith buttons and labels.\n\nUse the buttons above to navigate to a new \"page\"\nwithin this view.\n\n");
			this.element_Page1.setVisible(true);
			this.element_Page1.setEnabled(true);
			this.element_Page1.setColor("Black");
			this.element_Page1.setFont("12px Arial");
			
			if(this.element_Page1_onTrigger !== undefined)
				this.element_Page1.onTrigger = this.element_Page1_onTrigger;
			
			if(this.element_Page1_mousePressed !== undefined)
				this.element_Page1.mousePressed = this.element_Page1_mousePressed;
				
			if(this.element_Page1_mouseClicked !== undefined)
				this.element_Page1.mouseClicked = this.element_Page1_mouseClicked;
			
			if(this.element_Page1_mouseReleased !== undefined)
				this.element_Page1.mouseReleased = this.element_Page1_mouseReleased;
			
			if(this.element_Page1_mouseEntered !== undefined)
				this.element_Page1.mouseEntered = this.element_Page1_mouseEntered;
			
			if(this.element_Page1_mouseMoved !== undefined)
				this.element_Page1.mouseMoved = this.element_Page1_mouseMoved;
			
			if(this.element_Page1_mouseExited !== undefined)
				this.element_Page1.mouseExited = this.element_Page1_mouseExited;
			
			this.element_Page1.setBounds(this.layouts[this.currentLayout]["elements"]["Page1"].x, 
								this.layouts[this.currentLayout]["elements"]["Page1"].y, 
								this.layouts[this.currentLayout]["elements"]["Page1"].width, 
								this.layouts[this.currentLayout]["elements"]["Page1"].height);
							
		
			this.parent.appPanel.add(this.element_PageBg.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_On.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_LedIcon.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_SoundIcon.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ButtonBackground.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ButtonUp2.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ButtonDown.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ButtonDown2.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ImageAsButton.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_StatefulButton.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_informationLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_logo01.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_logo02.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_logo03.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_logo04.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_logo05.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Off.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Value.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_BLEon.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page1But.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page2But.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page3But.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page3.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page2.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_TogButLabel.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Needle.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Spinner.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_Page1.getZebraUIElement());
			
			this.parent.appPanel.add(this.element_ButtonUp.getZebraUIElement());
			
	};

}
