
var app = {

	serviceUUID:"873e9bb0-35b8-474b-9017-3a6ddef1e521",
	notifyUUID:"873e9bb0-35b8-474b-9017-3a6ddef1e522",
		
		localName:"ui_demo",
		
	element_ButtonUp2_onTrigger: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"ButtonDown2\" ] " + err.toString());
					}
				}
				
			app.element_ButtonDown2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

	},

	element_ButtonUp2_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"ButtonDown2\" ] " + err.toString());
					}
				}
				
			app.element_ButtonDown2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_ButtonDown2.trigger();
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"Light\" ] " + err.toString());
					}
				}
				
			app.element_Light.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Light\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp2\" ]---X--->[ \"LedIcon\" ] " + err.toString());
					}
				}
				
			app.element_LedIcon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"LedIcon\" ]");
		})();

	},

	element_Page3But_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page1\" ] " + err.toString());
					}
				}
				
			app.element_Page1.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page2\" ] " + err.toString());
					}
				}
				
			app.element_Page2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Page3\" ] " + err.toString());
					}
				}
				
			app.element_Page3.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Spinner\" ] " + err.toString());
					}
				}
				
			app.element_Spinner.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page3But\" ]---X--->[ \"Needle\" ] " + err.toString());
					}
				}
				
			app.element_Needle.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page3But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

	},

	element_Task1_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"logo01\" ] " + err.toString());
					}
				}
				
			app.element_logo01.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo01\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"logo02\" ] " + err.toString());
					}
				}
				
			app.element_logo02.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo02\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task2\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "500");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task2\" ] " + err.toString());
					}
				}
				
			app.element_Task2.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task5\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task1\" ]---X--->[ \"Task5\" ] " + err.toString());
					}
				}
				
			app.element_Task5.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task5\" ]");
		})();

	},

	element_Task2_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Task1.pause();
				
			//baseApp.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task1\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"logo02\" ] " + err.toString());
					}
				}
				
			app.element_logo02.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo02\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"logo03\" ] " + err.toString());
					}
				}
				
			app.element_logo03.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo03\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"Task3\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "500");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task2\" ]---X--->[ \"Task3\" ] " + err.toString());
					}
				}
				
			app.element_Task3.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task3\" ]");
		})();

	},

	element_Task3_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Task2.pause();
				
			//baseApp.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"logo03\" ] " + err.toString());
					}
				}
				
			app.element_logo03.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo03\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"logo04\" ] " + err.toString());
					}
				}
				
			app.element_logo04.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo04\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"Task4\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "500");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task3\" ]---X--->[ \"Task4\" ] " + err.toString());
					}
				}
				
			app.element_Task4.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task3\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task4\" ]");
		})();

	},

	element_Task4_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Task3.pause();
				
			//baseApp.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task3\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"logo04\" ] " + err.toString());
					}
				}
				
			app.element_logo04.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo04\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"logo05\" ] " + err.toString());
					}
				}
				
			app.element_logo05.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo05\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"Task5\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "500");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task4\" ]---X--->[ \"Task5\" ] " + err.toString());
					}
				}
				
			app.element_Task5.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task4\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task5\" ]");
		})();

	},

	element_Task5_task: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Task4.pause();
				
			//baseApp.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task4\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"logo05\" ] " + err.toString());
					}
				}
				
			app.element_logo05.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo05\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"logo01\" ] " + err.toString());
					}
				}
				
			app.element_logo01.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"logo01\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.runEvery = " + "undefined");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"Task1\" ] " + err.toString());
					}
				}
				
				try {
					eval("targetValues.runIn = " + "500");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Task5\" ]---X--->[ \"Task1\" ] " + err.toString());
					}
				}
				
			app.element_Task1.run(targetValues.runIn,targetValues.runEvery);
				
			//baseApp.debugLog("Connection Event: [ \"Task5\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Task1\" ]");
		})();

	},

	element_ButtonUp_mouseReleased: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"ButtonDown\" ] " + err.toString());
					}
				}
				
			app.element_ButtonDown.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"Beep\" ] " + err.toString());
					}
				}
				
			app.element_Beep.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Beep\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"SoundIcon\" ] " + err.toString());
					}
				}
				
			app.element_SoundIcon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"SoundIcon\" ]");
		})();

	},

	element_ButtonUp_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"ButtonDown\" ] " + err.toString());
					}
				}
				
			app.element_ButtonDown.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonDown\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"Beep\" ] " + err.toString());
					}
				}
				
			app.element_Beep.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Beep\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonUp\" ]---X--->[ \"SoundIcon\" ] " + err.toString());
					}
				}
				
			app.element_SoundIcon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonUp\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"SoundIcon\" ]");
		})();

	},

	element_Connected_connected: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Connected\" ]---X--->[ \"BLEon\" ] " + err.toString());
					}
				}
				
			app.element_BLEon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Connected\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"BLEon\" ]");
		})();

	},

	element_Connected_disconnected: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Connected\" ]---X--->[ \"BLEon\" ] " + err.toString());
					}
				}
				
			app.element_BLEon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Connected\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"BLEon\" ]");
		})();

	},

	element_On_onTrigger: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Off\" ] " + err.toString());
					}
				}
				
			app.element_Off.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

	},

	element_On_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Off\" ] " + err.toString());
					}
				}
				
			app.element_Off.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_Off.trigger();
				
			//baseApp.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Off\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "\"Off\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"On\" ]---X--->[ \"Value\" ] " + err.toString());
					}
				}
				
			app.element_Value.setValue(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"On\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Value\" ]");
		})();

	},

	element_Off_onTrigger: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"On\" ] " + err.toString());
					}
				}
				
			app.element_On.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

	},

	element_Off_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"On\" ] " + err.toString());
					}
				}
				
			app.element_On.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_On.trigger();
				
			//baseApp.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"On\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "\"On\"");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Off\" ]---X--->[ \"Value\" ] " + err.toString());
					}
				}
				
			app.element_Value.setValue(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Off\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Value\" ]");
		})();

	},

	element_Page2But_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page1\" ] " + err.toString());
					}
				}
				
			app.element_Page1.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page2\" ] " + err.toString());
					}
				}
				
			app.element_Page2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Page3\" ] " + err.toString());
					}
				}
				
			app.element_Page3.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Needle\" ] " + err.toString());
					}
				}
				
			app.element_Needle.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page2But\" ]---X--->[ \"Spinner\" ] " + err.toString());
					}
				}
				
			app.element_Spinner.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page2But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

	},

	element_ButtonDown2_onTrigger: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"ButtonUp2\" ] " + err.toString());
					}
				}
				
			app.element_ButtonUp2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

	},

	element_ButtonDown2_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"ButtonUp2\" ] " + err.toString());
					}
				}
				
			app.element_ButtonUp2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
			app.element_ButtonUp2.trigger();
				
			//baseApp.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ButtonUp2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.value = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"Light\" ] " + err.toString());
					}
				}
				
			app.element_Light.execute(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Light\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"ButtonDown2\" ]---X--->[ \"LedIcon\" ] " + err.toString());
					}
				}
				
			app.element_LedIcon.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"ButtonDown2\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"LedIcon\" ]");
		})();

	},

	element_Spinner_changed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue =  app.element_Spinner.getValue();
			var value = sourceValue;
				try {
					eval("targetValues.value = " + "value");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Spinner\" ]---X--->[ \"Needle\" ] " + err.toString());
					}
				}
				
			app.element_Needle.setRotation(targetValues.value);
				
			//baseApp.debugLog("Connection Event: [ \"Spinner\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

	},

	element_Page1But_mousePressed: function(e) {
		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "true");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page1\" ] " + err.toString());
					}
				}
				
			app.element_Page1.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page1\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page2\" ] " + err.toString());
					}
				}
				
			app.element_Page2.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page2\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Page3\" ] " + err.toString());
					}
				}
				
			app.element_Page3.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Page3\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Needle\" ] " + err.toString());
					}
				}
				
			app.element_Needle.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Needle\" ]");
		})();

		(function(){
			var targetValues = {};
			var sourceValue = undefined;
				try {
					eval("targetValues.visible = " + "false");
				}
				
				catch(err) {
					if(baseApp.debugLog !== undefined) {
						baseApp.debugLog("Connector Error: [ \"Page1But\" ]---X--->[ \"Spinner\" ] " + err.toString());
					}
				}
				
			app.element_Spinner.setVisible(targetValues.visible);
				
			//baseApp.debugLog("Connection Event: [ \"Page1But\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Spinner\" ]");
		})();

	},

	initialize: function() {
		// Override POSTForm to fix webIO in 1.2.0?
		baseApp.POST = function(url, data, callback, headers) {
			var xmlhttp;
			var formData = "";
			for (var key in data) {
				if(data.hasOwnProperty(key)) {
					formData += key + "=" + data[key] + "&"
				}
			}
			formData = formData.substring(0, formData.length - 1);
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			}
			else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}  
			if (callback !== null && callback !== undefined) {
				xmlhttp.onreadystatechange=function() {
					if(xmlhttp.readyState == 4) {
						callback(xmlhttp);
					}
				};
				xmlhttp.ontimeout=function() {
					callback(xmlhttp);
				};
			}
			xmlhttp.open("POST", url, true);
			headers = headers || {};
			if (headers["Content-Type"] === undefined) {
				headers["Content-Type"] = "application/x-www-form-urlencoded";
			}
			if (headers["Connection"] === undefined) {
				headers["Connection"] = "close";
			}
			headers["Content-Length"] = formData.length;
			for(var k in headers) {
				if(headers.hasOwnProperty(k)) {
					xmlhttp.setRequestHeader(k.toString(), headers[k]);
				}
			}
			xmlhttp.send(formData);  
		}

			app.layouts = {"iPad": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 188, "x": -17, "width": 802, "height": 147}, "logo02": {"y": 16, "x": 330, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 330, "width": 110, "height": 55}, "Needle": {"y": 649, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 330, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 330, "width": 110, "height": 55}, "StatefulButton": {"y": 270, "x": 498, "width": 116, "height": 51}, "Spinner": {"y": 631.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 500, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 330, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 352, "x": 227, "width": 314, "height": 37}, "TogButLabel": {"y": 447, "x": 441, "width": 146, "height": 40}, "PageBg": {"y": 600, "x": -13, "width": 794, "height": 186}, "On": {"y": 448, "x": 221, "width": 80, "height": 38}, "Off": {"y": 448, "x": 221, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 448, "x": 324, "width": 92, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 21, "x": 635.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 21, "x": 635.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 500, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 626, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 628, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 627, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 1024, "width": 768, "version": ".*", "name": "iPad 1/2/Mini"}, "Default": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 70, "x": 4, "height": 100, "width": 316}, "logo02": {"y": 10, "x": 105, "height": 55, "width": 110}, "logo01": {"y": 10, "x": 105, "height": 55, "width": 110}, "Needle": {"y": 336.5, "x": 138, "height": 86, "width": 86}, "logo05": {"y": 10, "x": 105, "height": 55, "width": 110}, "logo04": {"y": 10, "x": 105, "height": 55, "width": 110}, "StatefulButton": {"y": 126, "x": 199, "height": 51, "width": 116}, "Spinner": {"y": 323, "x": 17, "height": 127, "width": 106}, "ButtonUp2": {"y": 72, "x": 202, "height": 51, "width": 116}, "Page3But": {"y": 270, "x": 190, "height": 38, "width": 80}, "logo03": {"y": 10, "x": 105, "height": 55, "width": 110}, "ButtonDown": {"y": 72, "x": 7, "height": 51, "width": 116}, "ButtonUp": {"y": 72, "x": 7, "height": 51, "width": 116}, "informationLabel": {"y": 177, "x": 7, "height": 37, "width": 311}, "TogButLabel": {"y": 216, "x": 173, "height": 40, "width": 146}, "PageBg": {"y": 312, "x": 4, "height": 146, "width": 316}, "On": {"y": 216, "x": 10.5, "height": 38, "width": 80}, "Off": {"y": 216, "x": 9.5, "height": 38, "width": 80}, "ImageAsButton": {"y": 126, "x": 10, "height": 51, "width": 116}, "Value": {"y": 216, "x": 104, "height": 38, "width": 55}, "BLEon": {"y": 22, "x": 10, "height": 27, "width": 67}, "SoundIcon": {"y": 15, "x": 272.5, "height": 45, "width": 45}, "Page2But": {"y": 270, "x": 100, "height": 38, "width": 80}, "LedIcon": {"y": 15.5, "x": 273, "height": 45, "width": 45}, "ButtonDown2": {"y": 72, "x": 202, "height": 51, "width": 116}, "Page1But": {"y": 270, "x": 10, "height": 38, "width": 80}, "Page2": {"y": 320, "x": 10, "height": 130, "width": 296}, "Page3": {"y": 319, "x": 10.5, "height": 130, "width": 293}, "Page1": {"y": 319.5, "x": 13.5, "height": 130, "width": 296}}, "orientation": "portrait", "platform": ".*", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}, "iPhone4": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 70, "x": -9, "width": 332, "height": 100}, "logo02": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 105, "width": 110, "height": 55}, "Needle": {"y": 336.5, "x": 138, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 105, "width": 110, "height": 55}, "StatefulButton": {"y": 126, "x": 190, "width": 116, "height": 51}, "Spinner": {"y": 323, "x": 16, "width": 106, "height": 127}, "ButtonUp2": {"y": 72, "x": 190, "width": 116, "height": 51}, "Page3But": {"y": 270, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 105, "width": 110, "height": 55}, "ButtonDown": {"y": 72, "x": 7, "width": 116, "height": 51}, "ButtonUp": {"y": 72, "x": 7, "width": 116, "height": 51}, "informationLabel": {"y": 177, "x": 11, "width": 311, "height": 37}, "TogButLabel": {"y": 217, "x": 164, "width": 146, "height": 40}, "PageBg": {"y": 312, "x": -11, "width": 335, "height": 146}, "On": {"y": 216, "x": 10.5, "width": 80, "height": 38}, "Off": {"y": 216, "x": 9.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 126, "x": 10, "width": 116, "height": 51}, "Value": {"y": 216, "x": 104, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 10, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 261, "width": 45, "height": 45}, "Page2But": {"y": 270, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 261, "width": 45, "height": 45}, "ButtonDown2": {"y": 72, "x": 190, "width": 116, "height": 51}, "Page1But": {"y": 270, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 320, "x": 12, "width": 296, "height": 130}, "Page3": {"y": 319, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 319.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 480, "width": 320, "version": ".*", "name": "iPhone 4/4S"}, "iPhone5": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 80, "x": -21, "width": 343, "height": 100}, "logo02": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 105, "width": 110, "height": 55}, "Needle": {"y": 380.5, "x": 138, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 105, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 105, "width": 110, "height": 55}, "StatefulButton": {"y": 135, "x": 190, "width": 116, "height": 51}, "Spinner": {"y": 360, "x": 17, "width": 106, "height": 127}, "ButtonUp2": {"y": 82, "x": 190, "width": 116, "height": 51}, "Page3But": {"y": 310, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 105, "width": 110, "height": 55}, "ButtonDown": {"y": 82, "x": 7, "width": 116, "height": 51}, "ButtonUp": {"y": 82, "x": 7, "width": 116, "height": 51}, "informationLabel": {"y": 197, "x": 6, "width": 311, "height": 37}, "TogButLabel": {"y": 251, "x": 163, "width": 146, "height": 40}, "PageBg": {"y": 349, "x": -13, "width": 333, "height": 146}, "On": {"y": 250, "x": 10.5, "width": 80, "height": 38}, "Off": {"y": 250, "x": 9.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 136, "x": 10, "width": 116, "height": 51}, "Value": {"y": 250, "x": 104, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 10, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 261, "width": 45, "height": 45}, "Page2But": {"y": 310, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 261, "width": 45, "height": 45}, "ButtonDown2": {"y": 82, "x": 190, "width": 116, "height": 51}, "Page1But": {"y": 310, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 359, "x": 10, "width": 296, "height": 130}, "Page3": {"y": 360, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 359.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 320, "version": ".*", "name": "iPhone 5/5C/5S & iPod Touch"}, "iPhone6": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 80, "x": -21, "width": 397, "height": 100}, "logo02": {"y": 10, "x": 140, "width": 110, "height": 55}, "logo01": {"y": 10, "x": 140, "width": 110, "height": 55}, "Needle": {"y": 380.5, "x": 162, "width": 86, "height": 86}, "logo05": {"y": 10, "x": 140, "width": 110, "height": 55}, "logo04": {"y": 10, "x": 140, "width": 110, "height": 55}, "StatefulButton": {"y": 135, "x": 227, "width": 116, "height": 51}, "Spinner": {"y": 360, "x": 24, "width": 106, "height": 127}, "ButtonUp2": {"y": 82, "x": 225, "width": 116, "height": 51}, "Page3But": {"y": 310, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 10, "x": 140, "width": 110, "height": 55}, "ButtonDown": {"y": 82, "x": 25, "width": 116, "height": 51}, "ButtonUp": {"y": 82, "x": 25, "width": 116, "height": 51}, "informationLabel": {"y": 199, "x": 30.5, "width": 314, "height": 37}, "TogButLabel": {"y": 251, "x": 204, "width": 146, "height": 40}, "PageBg": {"y": 349, "x": -13, "width": 391, "height": 146}, "On": {"y": 250, "x": 29.5, "width": 80, "height": 38}, "Off": {"y": 250, "x": 29.5, "width": 80, "height": 38}, "ImageAsButton": {"y": 136, "x": 28, "width": 116, "height": 51}, "Value": {"y": 250, "x": 131, "width": 55, "height": 38}, "BLEon": {"y": 22, "x": 19, "width": 67, "height": 27}, "SoundIcon": {"y": 15, "x": 300, "width": 45, "height": 45}, "Page2But": {"y": 310, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 15.5, "x": 300, "width": 45, "height": 45}, "ButtonDown2": {"y": 82, "x": 225, "width": 116, "height": 51}, "Page1But": {"y": 310, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 359, "x": 13, "width": 296, "height": 130}, "Page3": {"y": 360, "x": 10.5, "width": 293, "height": 130}, "Page1": {"y": 359.5, "x": 10, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 568, "width": 375, "version": ".*", "name": "iPhone 6"}, "iPhone6Plus": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 184.5, "x": -11, "width": 562, "height": 147}, "logo02": {"y": 16, "x": 220, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 220, "width": 110, "height": 55}, "Needle": {"y": 630, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 220, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 220, "width": 110, "height": 55}, "StatefulButton": {"y": 270, "x": 333, "width": 116, "height": 51}, "Spinner": {"y": 605.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 334, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 220, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 349, "x": 111, "width": 314, "height": 37}, "TogButLabel": {"y": 404, "x": 334, "width": 146, "height": 40}, "PageBg": {"y": 595, "x": -19.5, "width": 567, "height": 146}, "On": {"y": 405, "x": 85, "width": 80, "height": 38}, "Off": {"y": 405, "x": 85, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 405, "x": 242.5, "width": 55, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 22, "x": 424.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 22, "x": 424.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 334, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 608, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 608, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 606, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "iOS", "height": 960, "width": 540, "version": ".*", "name": "iPhone 6 Plus"}, "Nexus7": {"devicename": ".*", "elements": {"ButtonBackground": {"y": 188, "x": -15.5, "width": 631, "height": 147}, "logo02": {"y": 16, "x": 240, "width": 110, "height": 55}, "logo01": {"y": 16, "x": 240, "width": 110, "height": 55}, "Needle": {"y": 630, "x": 364, "width": 86, "height": 86}, "logo05": {"y": 16, "x": 240, "width": 110, "height": 55}, "logo04": {"y": 16, "x": 240, "width": 110, "height": 55}, "StatefulButton": {"y": 271, "x": 360, "width": 116, "height": 51}, "Spinner": {"y": 605.5, "x": 108, "width": 106, "height": 127}, "ButtonUp2": {"y": 211, "x": 360, "width": 116, "height": 51}, "Page3But": {"y": 550, "x": 190, "width": 80, "height": 38}, "logo03": {"y": 16, "x": 240, "width": 110, "height": 55}, "ButtonDown": {"y": 211, "x": 103, "width": 116, "height": 51}, "ButtonUp": {"y": 211, "x": 103, "width": 116, "height": 51}, "informationLabel": {"y": 349, "x": 145, "width": 314, "height": 37}, "TogButLabel": {"y": 404, "x": 334, "width": 146, "height": 40}, "PageBg": {"y": 598, "x": -15, "width": 630, "height": 146}, "On": {"y": 405, "x": 85, "width": 80, "height": 38}, "Off": {"y": 405, "x": 85, "width": 80, "height": 38}, "ImageAsButton": {"y": 270, "x": 102, "width": 116, "height": 51}, "Value": {"y": 405, "x": 242.5, "width": 55, "height": 38}, "BLEon": {"y": 30, "x": 57, "width": 67, "height": 27}, "SoundIcon": {"y": 22, "x": 468.5, "width": 45, "height": 45}, "Page2But": {"y": 550, "x": 100, "width": 80, "height": 38}, "LedIcon": {"y": 22, "x": 468.5, "width": 45, "height": 45}, "ButtonDown2": {"y": 211, "x": 360, "width": 116, "height": 51}, "Page1But": {"y": 550, "x": 10, "width": 80, "height": 38}, "Page2": {"y": 608, "x": 24, "width": 296, "height": 130}, "Page3": {"y": 608, "x": 25.5, "width": 293, "height": 130}, "Page1": {"y": 606, "x": 24, "width": 296, "height": 130}}, "orientation": "portrait", "platform": "Android", "height": 912, "width": 600, "version": ".*", "name": "Nexus 7 (2013)"}};
			app.currentLayout = "Default";
			var bestLayoutMatch = "Default";
			
			for(var layoutName in app.layouts) {
				if(app.layouts[layoutName].width == baseApp.screenWidth && app.layouts[layoutName].height == baseApp.screenHeight && device.platform == app.layouts[layoutName].platform) {
					bestLayoutMatch = layoutName;
					break;
				}
			
				else if(	app.layouts[layoutName].width <= baseApp.screenWidth &&
						app.layouts[layoutName].height <= baseApp.screenHeight) {
						
						if(bestLayoutMatch != "Default") {
							if(((baseApp.screenWidth - app.layouts[layoutName].width) + (baseApp.screenHeight - app.layouts[layoutName].height)) <
							((baseApp.screenWidth - app.layouts[bestLayoutMatch].width) + (baseApp.screenHeight - app.layouts[bestLayoutMatch].height))) {
								
								bestLayoutMatch = layoutName;
							}
						}
						
						else {
							bestLayoutMatch = layoutName;
						}
				}
			}
			
			if(app.layouts[bestLayoutMatch] === undefined) {
				bestLayoutMatch = "Default";
			}
			
			app.currentLayout = bestLayoutMatch;
			
			
			app.element_ButtonBackground = new ImagePan("images/blank.png", "element_ButtonBackground");
			
			app.element_ButtonBackground.setRotation(0);
			app.element_ButtonBackground.setVisible(true);
			app.element_ButtonBackground.setEnabled(true);
			app.element_ButtonBackground.setBackground("#8CC4DB");

			if(app.element_ButtonBackground_onTrigger != undefined)
				app.element_ButtonBackground.onTrigger = app.element_ButtonBackground_onTrigger;
			
			if(app.element_ButtonBackground_mousePressed != undefined)
				app.element_ButtonBackground.mousePressed = app.element_ButtonBackground_mousePressed;
				
			if(app.element_ButtonBackground_mouseClicked != undefined)
				app.element_ButtonBackground.mouseClicked = app.element_ButtonBackground_mouseClicked;
			
			if(app.element_ButtonBackground_mouseReleased != undefined)
				app.element_ButtonBackground.mouseReleased = app.element_ButtonBackground_mouseReleased;
			
			if(app.element_ButtonBackground_mouseEntered != undefined)
				app.element_ButtonBackground.mouseEntered = app.element_ButtonBackground_mouseEntered;
			
			if(app.element_ButtonBackground_mouseMoved != undefined)
				app.element_ButtonBackground.mouseMoved = app.element_ButtonBackground_mouseMoved;
			
			if(app.element_ButtonBackground_mouseExited != undefined)
				app.element_ButtonBackground.mouseExited = app.element_ButtonBackground_mouseExited;
			
			app.element_ButtonBackground.setBounds(	app.layouts[app.currentLayout]["elements"]["ButtonBackground"].x, 
							app.layouts[app.currentLayout]["elements"]["ButtonBackground"].y, 
							app.layouts[app.currentLayout]["elements"]["ButtonBackground"].width, 
							app.layouts[app.currentLayout]["elements"]["ButtonBackground"].height);
							
		
			app.element_logo02 = new ImagePan("images/02.gif", "element_logo02");
			
			app.element_logo02.setRotation(0);
			app.element_logo02.setVisible(false);
			app.element_logo02.setEnabled(true);
			app.element_logo02.setBackground("transparent");

			if(app.element_logo02_onTrigger != undefined)
				app.element_logo02.onTrigger = app.element_logo02_onTrigger;
			
			if(app.element_logo02_mousePressed != undefined)
				app.element_logo02.mousePressed = app.element_logo02_mousePressed;
				
			if(app.element_logo02_mouseClicked != undefined)
				app.element_logo02.mouseClicked = app.element_logo02_mouseClicked;
			
			if(app.element_logo02_mouseReleased != undefined)
				app.element_logo02.mouseReleased = app.element_logo02_mouseReleased;
			
			if(app.element_logo02_mouseEntered != undefined)
				app.element_logo02.mouseEntered = app.element_logo02_mouseEntered;
			
			if(app.element_logo02_mouseMoved != undefined)
				app.element_logo02.mouseMoved = app.element_logo02_mouseMoved;
			
			if(app.element_logo02_mouseExited != undefined)
				app.element_logo02.mouseExited = app.element_logo02_mouseExited;
			
			app.element_logo02.setBounds(	app.layouts[app.currentLayout]["elements"]["logo02"].x, 
							app.layouts[app.currentLayout]["elements"]["logo02"].y, 
							app.layouts[app.currentLayout]["elements"]["logo02"].width, 
							app.layouts[app.currentLayout]["elements"]["logo02"].height);
							
		
			app.element_logo01 = new ImagePan("images/01.gif", "element_logo01");
			
			app.element_logo01.setRotation(0);
			app.element_logo01.setVisible(true);
			app.element_logo01.setEnabled(true);
			app.element_logo01.setBackground("transparent");

			if(app.element_logo01_onTrigger != undefined)
				app.element_logo01.onTrigger = app.element_logo01_onTrigger;
			
			if(app.element_logo01_mousePressed != undefined)
				app.element_logo01.mousePressed = app.element_logo01_mousePressed;
				
			if(app.element_logo01_mouseClicked != undefined)
				app.element_logo01.mouseClicked = app.element_logo01_mouseClicked;
			
			if(app.element_logo01_mouseReleased != undefined)
				app.element_logo01.mouseReleased = app.element_logo01_mouseReleased;
			
			if(app.element_logo01_mouseEntered != undefined)
				app.element_logo01.mouseEntered = app.element_logo01_mouseEntered;
			
			if(app.element_logo01_mouseMoved != undefined)
				app.element_logo01.mouseMoved = app.element_logo01_mouseMoved;
			
			if(app.element_logo01_mouseExited != undefined)
				app.element_logo01.mouseExited = app.element_logo01_mouseExited;
			
			app.element_logo01.setBounds(	app.layouts[app.currentLayout]["elements"]["logo01"].x, 
							app.layouts[app.currentLayout]["elements"]["logo01"].y, 
							app.layouts[app.currentLayout]["elements"]["logo01"].width, 
							app.layouts[app.currentLayout]["elements"]["logo01"].height);
							
		
			app.element_Needle = new ImagePan("images/compass_needle.png", "element_Needle");
			
			app.element_Needle.setRotation(0);
			app.element_Needle.setVisible(false);
			app.element_Needle.setEnabled(true);
			app.element_Needle.setBackground("transparent");

			if(app.element_Needle_onTrigger != undefined)
				app.element_Needle.onTrigger = app.element_Needle_onTrigger;
			
			if(app.element_Needle_mousePressed != undefined)
				app.element_Needle.mousePressed = app.element_Needle_mousePressed;
				
			if(app.element_Needle_mouseClicked != undefined)
				app.element_Needle.mouseClicked = app.element_Needle_mouseClicked;
			
			if(app.element_Needle_mouseReleased != undefined)
				app.element_Needle.mouseReleased = app.element_Needle_mouseReleased;
			
			if(app.element_Needle_mouseEntered != undefined)
				app.element_Needle.mouseEntered = app.element_Needle_mouseEntered;
			
			if(app.element_Needle_mouseMoved != undefined)
				app.element_Needle.mouseMoved = app.element_Needle_mouseMoved;
			
			if(app.element_Needle_mouseExited != undefined)
				app.element_Needle.mouseExited = app.element_Needle_mouseExited;
			
			app.element_Needle.setBounds(	app.layouts[app.currentLayout]["elements"]["Needle"].x, 
							app.layouts[app.currentLayout]["elements"]["Needle"].y, 
							app.layouts[app.currentLayout]["elements"]["Needle"].width, 
							app.layouts[app.currentLayout]["elements"]["Needle"].height);
							
		
			app.element_logo05 = new ImagePan("images/05.gif", "element_logo05");
			
			app.element_logo05.setRotation(0);
			app.element_logo05.setVisible(false);
			app.element_logo05.setEnabled(true);
			app.element_logo05.setBackground("transparent");

			if(app.element_logo05_onTrigger != undefined)
				app.element_logo05.onTrigger = app.element_logo05_onTrigger;
			
			if(app.element_logo05_mousePressed != undefined)
				app.element_logo05.mousePressed = app.element_logo05_mousePressed;
				
			if(app.element_logo05_mouseClicked != undefined)
				app.element_logo05.mouseClicked = app.element_logo05_mouseClicked;
			
			if(app.element_logo05_mouseReleased != undefined)
				app.element_logo05.mouseReleased = app.element_logo05_mouseReleased;
			
			if(app.element_logo05_mouseEntered != undefined)
				app.element_logo05.mouseEntered = app.element_logo05_mouseEntered;
			
			if(app.element_logo05_mouseMoved != undefined)
				app.element_logo05.mouseMoved = app.element_logo05_mouseMoved;
			
			if(app.element_logo05_mouseExited != undefined)
				app.element_logo05.mouseExited = app.element_logo05_mouseExited;
			
			app.element_logo05.setBounds(	app.layouts[app.currentLayout]["elements"]["logo05"].x, 
							app.layouts[app.currentLayout]["elements"]["logo05"].y, 
							app.layouts[app.currentLayout]["elements"]["logo05"].width, 
							app.layouts[app.currentLayout]["elements"]["logo05"].height);
							
		
			app.element_logo04 = new ImagePan("images/04.gif", "element_logo04");
			
			app.element_logo04.setRotation(0);
			app.element_logo04.setVisible(false);
			app.element_logo04.setEnabled(true);
			app.element_logo04.setBackground("transparent");

			if(app.element_logo04_onTrigger != undefined)
				app.element_logo04.onTrigger = app.element_logo04_onTrigger;
			
			if(app.element_logo04_mousePressed != undefined)
				app.element_logo04.mousePressed = app.element_logo04_mousePressed;
				
			if(app.element_logo04_mouseClicked != undefined)
				app.element_logo04.mouseClicked = app.element_logo04_mouseClicked;
			
			if(app.element_logo04_mouseReleased != undefined)
				app.element_logo04.mouseReleased = app.element_logo04_mouseReleased;
			
			if(app.element_logo04_mouseEntered != undefined)
				app.element_logo04.mouseEntered = app.element_logo04_mouseEntered;
			
			if(app.element_logo04_mouseMoved != undefined)
				app.element_logo04.mouseMoved = app.element_logo04_mouseMoved;
			
			if(app.element_logo04_mouseExited != undefined)
				app.element_logo04.mouseExited = app.element_logo04_mouseExited;
			
			app.element_logo04.setBounds(	app.layouts[app.currentLayout]["elements"]["logo04"].x, 
							app.layouts[app.currentLayout]["elements"]["logo04"].y, 
							app.layouts[app.currentLayout]["elements"]["logo04"].width, 
							app.layouts[app.currentLayout]["elements"]["logo04"].height);
							
		
			app.element_StatefulButton = new Label("Stateful Button Image\nThis will toggle the\nBlue LED", "element_StatefulButton");
			
			app.element_StatefulButton.setVisible(true);
			app.element_StatefulButton.setEnabled(true);
			app.element_StatefulButton.setColor("Black");
			app.element_StatefulButton.setFont("12px Arial");
			
			if(app.element_StatefulButton_onTrigger != undefined)
				app.element_StatefulButton.onTrigger = app.element_StatefulButton_onTrigger;
			
			if(app.element_StatefulButton_mousePressed != undefined)
				app.element_StatefulButton.mousePressed = app.element_StatefulButton_mousePressed;
				
			if(app.element_StatefulButton_mouseClicked != undefined)
				app.element_StatefulButton.mouseClicked = app.element_StatefulButton_mouseClicked;
			
			if(app.element_StatefulButton_mouseReleased != undefined)
				app.element_StatefulButton.mouseReleased = app.element_StatefulButton_mouseReleased;
			
			if(app.element_StatefulButton_mouseEntered != undefined)
				app.element_StatefulButton.mouseEntered = app.element_StatefulButton_mouseEntered;
			
			if(app.element_StatefulButton_mouseMoved != undefined)
				app.element_StatefulButton.mouseMoved = app.element_StatefulButton_mouseMoved;
			
			if(app.element_StatefulButton_mouseExited != undefined)
				app.element_StatefulButton.mouseExited = app.element_StatefulButton_mouseExited;
			
			app.element_StatefulButton.setBounds(	app.layouts[app.currentLayout]["elements"]["StatefulButton"].x, 
							app.layouts[app.currentLayout]["elements"]["StatefulButton"].y, 
							app.layouts[app.currentLayout]["elements"]["StatefulButton"].width, 
							app.layouts[app.currentLayout]["elements"]["StatefulButton"].height);
							
		
			app.element_Beep = new Function(19, "873e9bb0-35b8-474b-9017-3a6ddef1e523", "json", "json");
				
			app.element_Beep.trigger = function() {
				if(app.element_Beep.onTrigger != undefined)
					app.element_Beep.onTrigger();
			}
			
			if(app.element_Beep_onTrigger != undefined)
				app.element_Beep.onTrigger = app.element_Beep_onTrigger;
			
			if(app.element_Beep_valueReturned != undefined)
				app.element_Beep.valueReturned = app.element_Beep_valueReturned;
				
			if(app.element_Beep_notified != undefined)
				app.element_Beep.notified = app.element_Beep_notified;
		
			app.element_ButtonUp2 = new ImagePan("images/button-up.png", "element_ButtonUp2");
			
			app.element_ButtonUp2.setRotation(0);
			app.element_ButtonUp2.setVisible(true);
			app.element_ButtonUp2.setEnabled(true);
			app.element_ButtonUp2.setBackground("transparent");

			if(app.element_ButtonUp2_onTrigger != undefined)
				app.element_ButtonUp2.onTrigger = app.element_ButtonUp2_onTrigger;
			
			if(app.element_ButtonUp2_mousePressed != undefined)
				app.element_ButtonUp2.mousePressed = app.element_ButtonUp2_mousePressed;
				
			if(app.element_ButtonUp2_mouseClicked != undefined)
				app.element_ButtonUp2.mouseClicked = app.element_ButtonUp2_mouseClicked;
			
			if(app.element_ButtonUp2_mouseReleased != undefined)
				app.element_ButtonUp2.mouseReleased = app.element_ButtonUp2_mouseReleased;
			
			if(app.element_ButtonUp2_mouseEntered != undefined)
				app.element_ButtonUp2.mouseEntered = app.element_ButtonUp2_mouseEntered;
			
			if(app.element_ButtonUp2_mouseMoved != undefined)
				app.element_ButtonUp2.mouseMoved = app.element_ButtonUp2_mouseMoved;
			
			if(app.element_ButtonUp2_mouseExited != undefined)
				app.element_ButtonUp2.mouseExited = app.element_ButtonUp2_mouseExited;
			
			app.element_ButtonUp2.setBounds(	app.layouts[app.currentLayout]["elements"]["ButtonUp2"].x, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp2"].y, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp2"].width, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp2"].height);
							
		
			app.element_Page3But = new Button("Page3", "element_Page3But");
			
			app.element_Page3But.setVisible(true);
			app.element_Page3But.setEnabled(true);
		
			app.element_Page3But.setBorder("plain");

			if(app.element_Page3But_onTrigger != undefined)
				app.element_Page3But.onTrigger = app.element_Page3But_onTrigger;
			
			if(app.element_Page3But_mousePressed != undefined)
				app.element_Page3But.mousePressed = app.element_Page3But_mousePressed;
				
			if(app.element_Page3But_mouseClicked != undefined)
				app.element_Page3But.mouseClicked = app.element_Page3But_mouseClicked;
			
			if(app.element_Page3But_mouseReleased != undefined)
				app.element_Page3But.mouseReleased = app.element_Page3But_mouseReleased;
			
			if(app.element_Page3But_mouseEntered != undefined)
				app.element_Page3But.mouseEntered = app.element_Page3But_mouseEntered;
			
			if(app.element_Page3But_mouseMoved != undefined)
				app.element_Page3But.mouseMoved = app.element_Page3But_mouseMoved;
			
			if(app.element_Page3But_mouseExited != undefined)
				app.element_Page3But.mouseExited = app.element_Page3But_mouseExited;
			
			app.element_Page3But.setBounds(	app.layouts[app.currentLayout]["elements"]["Page3But"].x, 
							app.layouts[app.currentLayout]["elements"]["Page3But"].y, 
							app.layouts[app.currentLayout]["elements"]["Page3But"].width, 
							app.layouts[app.currentLayout]["elements"]["Page3But"].height);
			
		
			app.element_logo03 = new ImagePan("images/03.gif", "element_logo03");
			
			app.element_logo03.setRotation(0);
			app.element_logo03.setVisible(false);
			app.element_logo03.setEnabled(true);
			app.element_logo03.setBackground("transparent");

			if(app.element_logo03_onTrigger != undefined)
				app.element_logo03.onTrigger = app.element_logo03_onTrigger;
			
			if(app.element_logo03_mousePressed != undefined)
				app.element_logo03.mousePressed = app.element_logo03_mousePressed;
				
			if(app.element_logo03_mouseClicked != undefined)
				app.element_logo03.mouseClicked = app.element_logo03_mouseClicked;
			
			if(app.element_logo03_mouseReleased != undefined)
				app.element_logo03.mouseReleased = app.element_logo03_mouseReleased;
			
			if(app.element_logo03_mouseEntered != undefined)
				app.element_logo03.mouseEntered = app.element_logo03_mouseEntered;
			
			if(app.element_logo03_mouseMoved != undefined)
				app.element_logo03.mouseMoved = app.element_logo03_mouseMoved;
			
			if(app.element_logo03_mouseExited != undefined)
				app.element_logo03.mouseExited = app.element_logo03_mouseExited;
			
			app.element_logo03.setBounds(	app.layouts[app.currentLayout]["elements"]["logo03"].x, 
							app.layouts[app.currentLayout]["elements"]["logo03"].y, 
							app.layouts[app.currentLayout]["elements"]["logo03"].width, 
							app.layouts[app.currentLayout]["elements"]["logo03"].height);
							
		
			app.element_Task1 = new zebra.util.task(function(c){
				if(app.element_Task1_task != undefined)
					this.element_Task1_task();
			});
			
			app.element_Task1.element_Task1_task = app.element_Task1_task;

			app.element_Task1.trigger = function() {
				if(app.element_Task1.onTrigger != undefined)
					app.element_Task1.onTrigger();
			}
			
			if(app.element_Task1_onTrigger != undefined)
				app.element_Task1.onTrigger = app.element_Task1_onTrigger;
			
			app.element_Task1.run(500, 5000);
			
		
			app.element_Task2 = new zebra.util.task(function(c){
				if(app.element_Task2_task != undefined)
					this.element_Task2_task();
			});
			
			app.element_Task2.element_Task2_task = app.element_Task2_task;

			app.element_Task2.trigger = function() {
				if(app.element_Task2.onTrigger != undefined)
					app.element_Task2.onTrigger();
			}
			
			if(app.element_Task2_onTrigger != undefined)
				app.element_Task2.onTrigger = app.element_Task2_onTrigger;
			
			app.element_Task2.run(500, 5000);
			
		
			app.element_Task2.pause();
			
			app.element_Task3 = new zebra.util.task(function(c){
				if(app.element_Task3_task != undefined)
					this.element_Task3_task();
			});
			
			app.element_Task3.element_Task3_task = app.element_Task3_task;

			app.element_Task3.trigger = function() {
				if(app.element_Task3.onTrigger != undefined)
					app.element_Task3.onTrigger();
			}
			
			if(app.element_Task3_onTrigger != undefined)
				app.element_Task3.onTrigger = app.element_Task3_onTrigger;
			
			app.element_Task3.run(500, 5000);
			
		
			app.element_Task3.pause();
			
			app.element_Task4 = new zebra.util.task(function(c){
				if(app.element_Task4_task != undefined)
					this.element_Task4_task();
			});
			
			app.element_Task4.element_Task4_task = app.element_Task4_task;

			app.element_Task4.trigger = function() {
				if(app.element_Task4.onTrigger != undefined)
					app.element_Task4.onTrigger();
			}
			
			if(app.element_Task4_onTrigger != undefined)
				app.element_Task4.onTrigger = app.element_Task4_onTrigger;
			
			app.element_Task4.run(500, 5000);
			
		
			app.element_Task4.pause();
			
			app.element_Task5 = new zebra.util.task(function(c){
				if(app.element_Task5_task != undefined)
					this.element_Task5_task();
			});
			
			app.element_Task5.element_Task5_task = app.element_Task5_task;

			app.element_Task5.trigger = function() {
				if(app.element_Task5.onTrigger != undefined)
					app.element_Task5.onTrigger();
			}
			
			if(app.element_Task5_onTrigger != undefined)
				app.element_Task5.onTrigger = app.element_Task5_onTrigger;
			
			app.element_Task5.run(500, 5000);
			
		
			app.element_Task5.pause();
			
			app.element_ButtonDown = new ImagePan("images/button-down.png", "element_ButtonDown");
			
			app.element_ButtonDown.setRotation(0);
			app.element_ButtonDown.setVisible(false);
			app.element_ButtonDown.setEnabled(true);
			app.element_ButtonDown.setBackground("transparent");

			if(app.element_ButtonDown_onTrigger != undefined)
				app.element_ButtonDown.onTrigger = app.element_ButtonDown_onTrigger;
			
			if(app.element_ButtonDown_mousePressed != undefined)
				app.element_ButtonDown.mousePressed = app.element_ButtonDown_mousePressed;
				
			if(app.element_ButtonDown_mouseClicked != undefined)
				app.element_ButtonDown.mouseClicked = app.element_ButtonDown_mouseClicked;
			
			if(app.element_ButtonDown_mouseReleased != undefined)
				app.element_ButtonDown.mouseReleased = app.element_ButtonDown_mouseReleased;
			
			if(app.element_ButtonDown_mouseEntered != undefined)
				app.element_ButtonDown.mouseEntered = app.element_ButtonDown_mouseEntered;
			
			if(app.element_ButtonDown_mouseMoved != undefined)
				app.element_ButtonDown.mouseMoved = app.element_ButtonDown_mouseMoved;
			
			if(app.element_ButtonDown_mouseExited != undefined)
				app.element_ButtonDown.mouseExited = app.element_ButtonDown_mouseExited;
			
			app.element_ButtonDown.setBounds(	app.layouts[app.currentLayout]["elements"]["ButtonDown"].x, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown"].y, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown"].width, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown"].height);
							
		
			app.element_ButtonUp = new ImagePan("images/button-up.png", "element_ButtonUp");
			
			app.element_ButtonUp.setRotation(0);
			app.element_ButtonUp.setVisible(true);
			app.element_ButtonUp.setEnabled(true);
			app.element_ButtonUp.setBackground("transparent");

			if(app.element_ButtonUp_onTrigger != undefined)
				app.element_ButtonUp.onTrigger = app.element_ButtonUp_onTrigger;
			
			if(app.element_ButtonUp_mousePressed != undefined)
				app.element_ButtonUp.mousePressed = app.element_ButtonUp_mousePressed;
				
			if(app.element_ButtonUp_mouseClicked != undefined)
				app.element_ButtonUp.mouseClicked = app.element_ButtonUp_mouseClicked;
			
			if(app.element_ButtonUp_mouseReleased != undefined)
				app.element_ButtonUp.mouseReleased = app.element_ButtonUp_mouseReleased;
			
			if(app.element_ButtonUp_mouseEntered != undefined)
				app.element_ButtonUp.mouseEntered = app.element_ButtonUp_mouseEntered;
			
			if(app.element_ButtonUp_mouseMoved != undefined)
				app.element_ButtonUp.mouseMoved = app.element_ButtonUp_mouseMoved;
			
			if(app.element_ButtonUp_mouseExited != undefined)
				app.element_ButtonUp.mouseExited = app.element_ButtonUp_mouseExited;
			
			app.element_ButtonUp.setBounds(	app.layouts[app.currentLayout]["elements"]["ButtonUp"].x, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp"].y, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp"].width, 
							app.layouts[app.currentLayout]["elements"]["ButtonUp"].height);
							
		
			app.element_informationLabel = new Label("Using a transparent png above and setting the \nbackground color to create a background box.", "element_informationLabel");
			
			app.element_informationLabel.setVisible(true);
			app.element_informationLabel.setEnabled(true);
			app.element_informationLabel.setColor("#a3c0da");
			app.element_informationLabel.setFont("Bold 12px Georgia");
			
			if(app.element_informationLabel_onTrigger != undefined)
				app.element_informationLabel.onTrigger = app.element_informationLabel_onTrigger;
			
			if(app.element_informationLabel_mousePressed != undefined)
				app.element_informationLabel.mousePressed = app.element_informationLabel_mousePressed;
				
			if(app.element_informationLabel_mouseClicked != undefined)
				app.element_informationLabel.mouseClicked = app.element_informationLabel_mouseClicked;
			
			if(app.element_informationLabel_mouseReleased != undefined)
				app.element_informationLabel.mouseReleased = app.element_informationLabel_mouseReleased;
			
			if(app.element_informationLabel_mouseEntered != undefined)
				app.element_informationLabel.mouseEntered = app.element_informationLabel_mouseEntered;
			
			if(app.element_informationLabel_mouseMoved != undefined)
				app.element_informationLabel.mouseMoved = app.element_informationLabel_mouseMoved;
			
			if(app.element_informationLabel_mouseExited != undefined)
				app.element_informationLabel.mouseExited = app.element_informationLabel_mouseExited;
			
			app.element_informationLabel.setBounds(	app.layouts[app.currentLayout]["elements"]["informationLabel"].x, 
							app.layouts[app.currentLayout]["elements"]["informationLabel"].y, 
							app.layouts[app.currentLayout]["elements"]["informationLabel"].width, 
							app.layouts[app.currentLayout]["elements"]["informationLabel"].height);
							
		
			app.element_TogButLabel = new Label("Using standard button\nas a toggle button", "element_TogButLabel");
			
			app.element_TogButLabel.setVisible(true);
			app.element_TogButLabel.setEnabled(true);
			app.element_TogButLabel.setColor("Black");
			app.element_TogButLabel.setFont("12px Verdana");
			
			if(app.element_TogButLabel_onTrigger != undefined)
				app.element_TogButLabel.onTrigger = app.element_TogButLabel_onTrigger;
			
			if(app.element_TogButLabel_mousePressed != undefined)
				app.element_TogButLabel.mousePressed = app.element_TogButLabel_mousePressed;
				
			if(app.element_TogButLabel_mouseClicked != undefined)
				app.element_TogButLabel.mouseClicked = app.element_TogButLabel_mouseClicked;
			
			if(app.element_TogButLabel_mouseReleased != undefined)
				app.element_TogButLabel.mouseReleased = app.element_TogButLabel_mouseReleased;
			
			if(app.element_TogButLabel_mouseEntered != undefined)
				app.element_TogButLabel.mouseEntered = app.element_TogButLabel_mouseEntered;
			
			if(app.element_TogButLabel_mouseMoved != undefined)
				app.element_TogButLabel.mouseMoved = app.element_TogButLabel_mouseMoved;
			
			if(app.element_TogButLabel_mouseExited != undefined)
				app.element_TogButLabel.mouseExited = app.element_TogButLabel_mouseExited;
			
			app.element_TogButLabel.setBounds(	app.layouts[app.currentLayout]["elements"]["TogButLabel"].x, 
							app.layouts[app.currentLayout]["elements"]["TogButLabel"].y, 
							app.layouts[app.currentLayout]["elements"]["TogButLabel"].width, 
							app.layouts[app.currentLayout]["elements"]["TogButLabel"].height);
							
		
			app.element_Connected = new Connection();

			app.element_Connected.trigger = function() {
				if(app.element_Connected.onTrigger != undefined)
					app.element_Connected.onTrigger();
			}
			
			if(app.element_Connected_onTrigger != undefined)
				app.element_Connected.onTrigger = app.element_Connected_onTrigger;
		
			if(app.element_Connected_connecting != undefined)
				app.element_Connected.connecting = app.element_Connected_connecting;
		
			if(app.element_Connected_connected != undefined)
				app.element_Connected.connected = app.element_Connected_connected;
		
			if(app.element_Connected_disconnecting != undefined)
				app.element_Connected.disconnecting = app.element_Connected_disconnecting;
		
			if(app.element_Connected_disconnected != undefined)
				app.element_Connected.disconnected = app.element_Connected_disconnected;
		
			app.element_PageBg = new ImagePan("images/blank.png", "element_PageBg");
			
			app.element_PageBg.setRotation(0);
			app.element_PageBg.setVisible(true);
			app.element_PageBg.setEnabled(false);
			app.element_PageBg.setBackground("#ccc");

			if(app.element_PageBg_onTrigger != undefined)
				app.element_PageBg.onTrigger = app.element_PageBg_onTrigger;
			
			if(app.element_PageBg_mousePressed != undefined)
				app.element_PageBg.mousePressed = app.element_PageBg_mousePressed;
				
			if(app.element_PageBg_mouseClicked != undefined)
				app.element_PageBg.mouseClicked = app.element_PageBg_mouseClicked;
			
			if(app.element_PageBg_mouseReleased != undefined)
				app.element_PageBg.mouseReleased = app.element_PageBg_mouseReleased;
			
			if(app.element_PageBg_mouseEntered != undefined)
				app.element_PageBg.mouseEntered = app.element_PageBg_mouseEntered;
			
			if(app.element_PageBg_mouseMoved != undefined)
				app.element_PageBg.mouseMoved = app.element_PageBg_mouseMoved;
			
			if(app.element_PageBg_mouseExited != undefined)
				app.element_PageBg.mouseExited = app.element_PageBg_mouseExited;
			
			app.element_PageBg.setBounds(	app.layouts[app.currentLayout]["elements"]["PageBg"].x, 
							app.layouts[app.currentLayout]["elements"]["PageBg"].y, 
							app.layouts[app.currentLayout]["elements"]["PageBg"].width, 
							app.layouts[app.currentLayout]["elements"]["PageBg"].height);
							
		
			app.element_On = new Button("On", "element_On");
			
			app.element_On.setVisible(false);
			app.element_On.setEnabled(true);
		
			app.element_On.setBorder("plain");

			if(app.element_On_onTrigger != undefined)
				app.element_On.onTrigger = app.element_On_onTrigger;
			
			if(app.element_On_mousePressed != undefined)
				app.element_On.mousePressed = app.element_On_mousePressed;
				
			if(app.element_On_mouseClicked != undefined)
				app.element_On.mouseClicked = app.element_On_mouseClicked;
			
			if(app.element_On_mouseReleased != undefined)
				app.element_On.mouseReleased = app.element_On_mouseReleased;
			
			if(app.element_On_mouseEntered != undefined)
				app.element_On.mouseEntered = app.element_On_mouseEntered;
			
			if(app.element_On_mouseMoved != undefined)
				app.element_On.mouseMoved = app.element_On_mouseMoved;
			
			if(app.element_On_mouseExited != undefined)
				app.element_On.mouseExited = app.element_On_mouseExited;
			
			app.element_On.setBounds(	app.layouts[app.currentLayout]["elements"]["On"].x, 
							app.layouts[app.currentLayout]["elements"]["On"].y, 
							app.layouts[app.currentLayout]["elements"]["On"].width, 
							app.layouts[app.currentLayout]["elements"]["On"].height);
			
		
			app.element_Off = new Button("Off", "element_Off");
			
			app.element_Off.setVisible(true);
			app.element_Off.setEnabled(true);
		
			app.element_Off.setBorder("plain");

			if(app.element_Off_onTrigger != undefined)
				app.element_Off.onTrigger = app.element_Off_onTrigger;
			
			if(app.element_Off_mousePressed != undefined)
				app.element_Off.mousePressed = app.element_Off_mousePressed;
				
			if(app.element_Off_mouseClicked != undefined)
				app.element_Off.mouseClicked = app.element_Off_mouseClicked;
			
			if(app.element_Off_mouseReleased != undefined)
				app.element_Off.mouseReleased = app.element_Off_mouseReleased;
			
			if(app.element_Off_mouseEntered != undefined)
				app.element_Off.mouseEntered = app.element_Off_mouseEntered;
			
			if(app.element_Off_mouseMoved != undefined)
				app.element_Off.mouseMoved = app.element_Off_mouseMoved;
			
			if(app.element_Off_mouseExited != undefined)
				app.element_Off.mouseExited = app.element_Off_mouseExited;
			
			app.element_Off.setBounds(	app.layouts[app.currentLayout]["elements"]["Off"].x, 
							app.layouts[app.currentLayout]["elements"]["Off"].y, 
							app.layouts[app.currentLayout]["elements"]["Off"].width, 
							app.layouts[app.currentLayout]["elements"]["Off"].height);
			
		
			app.element_ImageAsButton = new Label("Button Image\nPressing will also\ntrigger the Buzzer", "element_ImageAsButton");
			
			app.element_ImageAsButton.setVisible(true);
			app.element_ImageAsButton.setEnabled(true);
			app.element_ImageAsButton.setColor("Black");
			app.element_ImageAsButton.setFont("12px Arial");
			
			if(app.element_ImageAsButton_onTrigger != undefined)
				app.element_ImageAsButton.onTrigger = app.element_ImageAsButton_onTrigger;
			
			if(app.element_ImageAsButton_mousePressed != undefined)
				app.element_ImageAsButton.mousePressed = app.element_ImageAsButton_mousePressed;
				
			if(app.element_ImageAsButton_mouseClicked != undefined)
				app.element_ImageAsButton.mouseClicked = app.element_ImageAsButton_mouseClicked;
			
			if(app.element_ImageAsButton_mouseReleased != undefined)
				app.element_ImageAsButton.mouseReleased = app.element_ImageAsButton_mouseReleased;
			
			if(app.element_ImageAsButton_mouseEntered != undefined)
				app.element_ImageAsButton.mouseEntered = app.element_ImageAsButton_mouseEntered;
			
			if(app.element_ImageAsButton_mouseMoved != undefined)
				app.element_ImageAsButton.mouseMoved = app.element_ImageAsButton_mouseMoved;
			
			if(app.element_ImageAsButton_mouseExited != undefined)
				app.element_ImageAsButton.mouseExited = app.element_ImageAsButton_mouseExited;
			
			app.element_ImageAsButton.setBounds(	app.layouts[app.currentLayout]["elements"]["ImageAsButton"].x, 
							app.layouts[app.currentLayout]["elements"]["ImageAsButton"].y, 
							app.layouts[app.currentLayout]["elements"]["ImageAsButton"].width, 
							app.layouts[app.currentLayout]["elements"]["ImageAsButton"].height);
							
		
			app.element_Light = new Function(21, "873e9bb0-35b8-474b-9017-3a6ddef1e524", "json", "json");
				
			app.element_Light.trigger = function() {
				if(app.element_Light.onTrigger != undefined)
					app.element_Light.onTrigger();
			}
			
			if(app.element_Light_onTrigger != undefined)
				app.element_Light.onTrigger = app.element_Light_onTrigger;
			
			if(app.element_Light_valueReturned != undefined)
				app.element_Light.valueReturned = app.element_Light_valueReturned;
				
			if(app.element_Light_notified != undefined)
				app.element_Light.notified = app.element_Light_notified;
		
			app.element_Value = new TextField("Off", "element_Value");
			
			app.element_Value.setVisible(true);
			app.element_Value.setEnabled(false);

			if(app.element_Value_onTrigger != undefined)
				app.element_Value.onTrigger = app.element_Value_onTrigger;
			
			if(app.element_Value_keyPressed != undefined)
				app.element_Value.keyPressed = app.element_Value_keyPressed;
				
			if(app.element_Value_keyReleased != undefined)
				app.element_Value.keyReleased = app.element_Value_keyReleased;
			
			app.element_Value.setBounds(	app.layouts[app.currentLayout]["elements"]["Value"].x, 
							app.layouts[app.currentLayout]["elements"]["Value"].y, 
							app.layouts[app.currentLayout]["elements"]["Value"].width, 
							app.layouts[app.currentLayout]["elements"]["Value"].height);
							
		
			app.element_BLEon = new ImagePan("images/LogoBluetoothSmart.jpg", "element_BLEon");
			
			app.element_BLEon.setRotation(0);
			app.element_BLEon.setVisible(false);
			app.element_BLEon.setEnabled(true);
			app.element_BLEon.setBackground("transparent");

			if(app.element_BLEon_onTrigger != undefined)
				app.element_BLEon.onTrigger = app.element_BLEon_onTrigger;
			
			if(app.element_BLEon_mousePressed != undefined)
				app.element_BLEon.mousePressed = app.element_BLEon_mousePressed;
				
			if(app.element_BLEon_mouseClicked != undefined)
				app.element_BLEon.mouseClicked = app.element_BLEon_mouseClicked;
			
			if(app.element_BLEon_mouseReleased != undefined)
				app.element_BLEon.mouseReleased = app.element_BLEon_mouseReleased;
			
			if(app.element_BLEon_mouseEntered != undefined)
				app.element_BLEon.mouseEntered = app.element_BLEon_mouseEntered;
			
			if(app.element_BLEon_mouseMoved != undefined)
				app.element_BLEon.mouseMoved = app.element_BLEon_mouseMoved;
			
			if(app.element_BLEon_mouseExited != undefined)
				app.element_BLEon.mouseExited = app.element_BLEon_mouseExited;
			
			app.element_BLEon.setBounds(	app.layouts[app.currentLayout]["elements"]["BLEon"].x, 
							app.layouts[app.currentLayout]["elements"]["BLEon"].y, 
							app.layouts[app.currentLayout]["elements"]["BLEon"].width, 
							app.layouts[app.currentLayout]["elements"]["BLEon"].height);
							
		
			app.element_SoundIcon = new ImagePan("images/sound.png", "element_SoundIcon");
			
			app.element_SoundIcon.setRotation(0);
			app.element_SoundIcon.setVisible(false);
			app.element_SoundIcon.setEnabled(true);
			app.element_SoundIcon.setBackground("transparent");

			if(app.element_SoundIcon_onTrigger != undefined)
				app.element_SoundIcon.onTrigger = app.element_SoundIcon_onTrigger;
			
			if(app.element_SoundIcon_mousePressed != undefined)
				app.element_SoundIcon.mousePressed = app.element_SoundIcon_mousePressed;
				
			if(app.element_SoundIcon_mouseClicked != undefined)
				app.element_SoundIcon.mouseClicked = app.element_SoundIcon_mouseClicked;
			
			if(app.element_SoundIcon_mouseReleased != undefined)
				app.element_SoundIcon.mouseReleased = app.element_SoundIcon_mouseReleased;
			
			if(app.element_SoundIcon_mouseEntered != undefined)
				app.element_SoundIcon.mouseEntered = app.element_SoundIcon_mouseEntered;
			
			if(app.element_SoundIcon_mouseMoved != undefined)
				app.element_SoundIcon.mouseMoved = app.element_SoundIcon_mouseMoved;
			
			if(app.element_SoundIcon_mouseExited != undefined)
				app.element_SoundIcon.mouseExited = app.element_SoundIcon_mouseExited;
			
			app.element_SoundIcon.setBounds(	app.layouts[app.currentLayout]["elements"]["SoundIcon"].x, 
							app.layouts[app.currentLayout]["elements"]["SoundIcon"].y, 
							app.layouts[app.currentLayout]["elements"]["SoundIcon"].width, 
							app.layouts[app.currentLayout]["elements"]["SoundIcon"].height);
							
		
			app.element_Page2But = new Button("Page2", "element_Page2But");
			
			app.element_Page2But.setVisible(true);
			app.element_Page2But.setEnabled(true);
		
			app.element_Page2But.setBorder("plain");

			if(app.element_Page2But_onTrigger != undefined)
				app.element_Page2But.onTrigger = app.element_Page2But_onTrigger;
			
			if(app.element_Page2But_mousePressed != undefined)
				app.element_Page2But.mousePressed = app.element_Page2But_mousePressed;
				
			if(app.element_Page2But_mouseClicked != undefined)
				app.element_Page2But.mouseClicked = app.element_Page2But_mouseClicked;
			
			if(app.element_Page2But_mouseReleased != undefined)
				app.element_Page2But.mouseReleased = app.element_Page2But_mouseReleased;
			
			if(app.element_Page2But_mouseEntered != undefined)
				app.element_Page2But.mouseEntered = app.element_Page2But_mouseEntered;
			
			if(app.element_Page2But_mouseMoved != undefined)
				app.element_Page2But.mouseMoved = app.element_Page2But_mouseMoved;
			
			if(app.element_Page2But_mouseExited != undefined)
				app.element_Page2But.mouseExited = app.element_Page2But_mouseExited;
			
			app.element_Page2But.setBounds(	app.layouts[app.currentLayout]["elements"]["Page2But"].x, 
							app.layouts[app.currentLayout]["elements"]["Page2But"].y, 
							app.layouts[app.currentLayout]["elements"]["Page2But"].width, 
							app.layouts[app.currentLayout]["elements"]["Page2But"].height);
			
		
			app.element_LedIcon = new ImagePan("images/led.png", "element_LedIcon");
			
			app.element_LedIcon.setRotation(0);
			app.element_LedIcon.setVisible(false);
			app.element_LedIcon.setEnabled(true);
			app.element_LedIcon.setBackground("#2EB1D9");

			if(app.element_LedIcon_onTrigger != undefined)
				app.element_LedIcon.onTrigger = app.element_LedIcon_onTrigger;
			
			if(app.element_LedIcon_mousePressed != undefined)
				app.element_LedIcon.mousePressed = app.element_LedIcon_mousePressed;
				
			if(app.element_LedIcon_mouseClicked != undefined)
				app.element_LedIcon.mouseClicked = app.element_LedIcon_mouseClicked;
			
			if(app.element_LedIcon_mouseReleased != undefined)
				app.element_LedIcon.mouseReleased = app.element_LedIcon_mouseReleased;
			
			if(app.element_LedIcon_mouseEntered != undefined)
				app.element_LedIcon.mouseEntered = app.element_LedIcon_mouseEntered;
			
			if(app.element_LedIcon_mouseMoved != undefined)
				app.element_LedIcon.mouseMoved = app.element_LedIcon_mouseMoved;
			
			if(app.element_LedIcon_mouseExited != undefined)
				app.element_LedIcon.mouseExited = app.element_LedIcon_mouseExited;
			
			app.element_LedIcon.setBounds(	app.layouts[app.currentLayout]["elements"]["LedIcon"].x, 
							app.layouts[app.currentLayout]["elements"]["LedIcon"].y, 
							app.layouts[app.currentLayout]["elements"]["LedIcon"].width, 
							app.layouts[app.currentLayout]["elements"]["LedIcon"].height);
							
		
			app.element_ButtonDown2 = new ImagePan("images/button-down.png", "element_ButtonDown2");
			
			app.element_ButtonDown2.setRotation(0);
			app.element_ButtonDown2.setVisible(false);
			app.element_ButtonDown2.setEnabled(true);
			app.element_ButtonDown2.setBackground("transparent");

			if(app.element_ButtonDown2_onTrigger != undefined)
				app.element_ButtonDown2.onTrigger = app.element_ButtonDown2_onTrigger;
			
			if(app.element_ButtonDown2_mousePressed != undefined)
				app.element_ButtonDown2.mousePressed = app.element_ButtonDown2_mousePressed;
				
			if(app.element_ButtonDown2_mouseClicked != undefined)
				app.element_ButtonDown2.mouseClicked = app.element_ButtonDown2_mouseClicked;
			
			if(app.element_ButtonDown2_mouseReleased != undefined)
				app.element_ButtonDown2.mouseReleased = app.element_ButtonDown2_mouseReleased;
			
			if(app.element_ButtonDown2_mouseEntered != undefined)
				app.element_ButtonDown2.mouseEntered = app.element_ButtonDown2_mouseEntered;
			
			if(app.element_ButtonDown2_mouseMoved != undefined)
				app.element_ButtonDown2.mouseMoved = app.element_ButtonDown2_mouseMoved;
			
			if(app.element_ButtonDown2_mouseExited != undefined)
				app.element_ButtonDown2.mouseExited = app.element_ButtonDown2_mouseExited;
			
			app.element_ButtonDown2.setBounds(	app.layouts[app.currentLayout]["elements"]["ButtonDown2"].x, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown2"].y, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown2"].width, 
							app.layouts[app.currentLayout]["elements"]["ButtonDown2"].height);
							
		
			app.element_Spinner = new Slider("element_Spinner");
			
			app.element_Spinner.setVisible(false);
			app.element_Spinner.setEnabled(true);
			app.element_Spinner.setShowScale(true);
			app.element_Spinner.setShowTitle(true);
			app.element_Spinner.setMinValue(0);
			app.element_Spinner.setMaxValue(360);
			app.element_Spinner.setValue(0);
			app.element_Spinner.setIntervals([0, 180, 180]);
			app.element_Spinner.setScaleStep(90);
			app.element_Spinner.setOrientation("Vertical");

			if(app.element_Spinner_onTrigger != undefined)
				app.element_Spinner.onTrigger = app.element_Spinner_onTrigger;
			
			if(app.element_Spinner_changed != undefined)
				app.element_Spinner.changed = app.element_Spinner_changed;
				
			if(app.element_Spinner_mousePressed != undefined)
				app.element_Spinner.mousePressed = app.element_Spinner_mousePressed;
				
			if(app.element_Spinner_mouseClicked != undefined)
				app.element_Spinner.mouseClicked = app.element_Spinner_mouseClicked;
			
			if(app.element_Spinner_mouseReleased != undefined)
				app.element_Spinner.mouseReleased = app.element_Spinner_mouseReleased;
			
			if(app.element_Spinner_mouseEntered != undefined)
				app.element_Spinner.mouseEntered = app.element_Spinner_mouseEntered;
			
			if(app.element_Spinner_mouseMoved != undefined)
				app.element_Spinner.mouseMoved = app.element_Spinner_mouseMoved;
			
			if(app.element_Spinner_mouseExited != undefined)
				app.element_Spinner.mouseExited = app.element_Spinner_mouseExited;
			
			app.element_Spinner.setBounds(	app.layouts[app.currentLayout]["elements"]["Spinner"].x, 
							app.layouts[app.currentLayout]["elements"]["Spinner"].y, 
							app.layouts[app.currentLayout]["elements"]["Spinner"].width, 
							app.layouts[app.currentLayout]["elements"]["Spinner"].height);
							
		
			app.element_Page1But = new Button("Page1", "element_Page1But");
			
			app.element_Page1But.setVisible(true);
			app.element_Page1But.setEnabled(true);
		
			app.element_Page1But.setBorder("plain");

			if(app.element_Page1But_onTrigger != undefined)
				app.element_Page1But.onTrigger = app.element_Page1But_onTrigger;
			
			if(app.element_Page1But_mousePressed != undefined)
				app.element_Page1But.mousePressed = app.element_Page1But_mousePressed;
				
			if(app.element_Page1But_mouseClicked != undefined)
				app.element_Page1But.mouseClicked = app.element_Page1But_mouseClicked;
			
			if(app.element_Page1But_mouseReleased != undefined)
				app.element_Page1But.mouseReleased = app.element_Page1But_mouseReleased;
			
			if(app.element_Page1But_mouseEntered != undefined)
				app.element_Page1But.mouseEntered = app.element_Page1But_mouseEntered;
			
			if(app.element_Page1But_mouseMoved != undefined)
				app.element_Page1But.mouseMoved = app.element_Page1But_mouseMoved;
			
			if(app.element_Page1But_mouseExited != undefined)
				app.element_Page1But.mouseExited = app.element_Page1But_mouseExited;
			
			app.element_Page1But.setBounds(	app.layouts[app.currentLayout]["elements"]["Page1But"].x, 
							app.layouts[app.currentLayout]["elements"]["Page1But"].y, 
							app.layouts[app.currentLayout]["elements"]["Page1But"].width, 
							app.layouts[app.currentLayout]["elements"]["Page1But"].height);
			
		
			app.element_Page2 = new Label("Atmosphere supports the following image formats\nfor the ImagePan; PNG, JPG, JPEG and GIF, however\nthere is no support for animated GIF. \n\nTo simulate this effect in the Logo above, note how \ntasks were used to step through the images as if \nthey were \"frames\".", "element_Page2");
			
			app.element_Page2.setVisible(false);
			app.element_Page2.setEnabled(true);
			app.element_Page2.setColor("Black");
			app.element_Page2.setFont("12px Arial");
			
			if(app.element_Page2_onTrigger != undefined)
				app.element_Page2.onTrigger = app.element_Page2_onTrigger;
			
			if(app.element_Page2_mousePressed != undefined)
				app.element_Page2.mousePressed = app.element_Page2_mousePressed;
				
			if(app.element_Page2_mouseClicked != undefined)
				app.element_Page2.mouseClicked = app.element_Page2_mouseClicked;
			
			if(app.element_Page2_mouseReleased != undefined)
				app.element_Page2.mouseReleased = app.element_Page2_mouseReleased;
			
			if(app.element_Page2_mouseEntered != undefined)
				app.element_Page2.mouseEntered = app.element_Page2_mouseEntered;
			
			if(app.element_Page2_mouseMoved != undefined)
				app.element_Page2.mouseMoved = app.element_Page2_mouseMoved;
			
			if(app.element_Page2_mouseExited != undefined)
				app.element_Page2.mouseExited = app.element_Page2_mouseExited;
			
			app.element_Page2.setBounds(	app.layouts[app.currentLayout]["elements"]["Page2"].x, 
							app.layouts[app.currentLayout]["elements"]["Page2"].y, 
							app.layouts[app.currentLayout]["elements"]["Page2"].width, 
							app.layouts[app.currentLayout]["elements"]["Page2"].height);
							
		
			app.element_Page3 = new Label("", "element_Page3");
			
			app.element_Page3.setVisible(false);
			app.element_Page3.setEnabled(false);
			app.element_Page3.setColor("Black");
			app.element_Page3.setFont("12px Arial");
			
			if(app.element_Page3_onTrigger != undefined)
				app.element_Page3.onTrigger = app.element_Page3_onTrigger;
			
			if(app.element_Page3_mousePressed != undefined)
				app.element_Page3.mousePressed = app.element_Page3_mousePressed;
				
			if(app.element_Page3_mouseClicked != undefined)
				app.element_Page3.mouseClicked = app.element_Page3_mouseClicked;
			
			if(app.element_Page3_mouseReleased != undefined)
				app.element_Page3.mouseReleased = app.element_Page3_mouseReleased;
			
			if(app.element_Page3_mouseEntered != undefined)
				app.element_Page3.mouseEntered = app.element_Page3_mouseEntered;
			
			if(app.element_Page3_mouseMoved != undefined)
				app.element_Page3.mouseMoved = app.element_Page3_mouseMoved;
			
			if(app.element_Page3_mouseExited != undefined)
				app.element_Page3.mouseExited = app.element_Page3_mouseExited;
			
			app.element_Page3.setBounds(	app.layouts[app.currentLayout]["elements"]["Page3"].x, 
							app.layouts[app.currentLayout]["elements"]["Page3"].y, 
							app.layouts[app.currentLayout]["elements"]["Page3"].width, 
							app.layouts[app.currentLayout]["elements"]["Page3"].height);
							
		
			app.element_Page1 = new Label("This is an example of a way to create tab pages\nwith buttons and labels.\n\nUse the buttons above to navigate to a new \"page\"\nwithin this view.\n\n", "element_Page1");
			
			app.element_Page1.setVisible(true);
			app.element_Page1.setEnabled(true);
			app.element_Page1.setColor("Black");
			app.element_Page1.setFont("12px Arial");
			
			if(app.element_Page1_onTrigger != undefined)
				app.element_Page1.onTrigger = app.element_Page1_onTrigger;
			
			if(app.element_Page1_mousePressed != undefined)
				app.element_Page1.mousePressed = app.element_Page1_mousePressed;
				
			if(app.element_Page1_mouseClicked != undefined)
				app.element_Page1.mouseClicked = app.element_Page1_mouseClicked;
			
			if(app.element_Page1_mouseReleased != undefined)
				app.element_Page1.mouseReleased = app.element_Page1_mouseReleased;
			
			if(app.element_Page1_mouseEntered != undefined)
				app.element_Page1.mouseEntered = app.element_Page1_mouseEntered;
			
			if(app.element_Page1_mouseMoved != undefined)
				app.element_Page1.mouseMoved = app.element_Page1_mouseMoved;
			
			if(app.element_Page1_mouseExited != undefined)
				app.element_Page1.mouseExited = app.element_Page1_mouseExited;
			
			app.element_Page1.setBounds(	app.layouts[app.currentLayout]["elements"]["Page1"].x, 
							app.layouts[app.currentLayout]["elements"]["Page1"].y, 
							app.layouts[app.currentLayout]["elements"]["Page1"].width, 
							app.layouts[app.currentLayout]["elements"]["Page1"].height);
							
		
			app.appPanel.add(app.element_PageBg.getZebraUIElement());
			
			app.appPanel.add(app.element_On.getZebraUIElement());
			
			app.appPanel.add(app.element_LedIcon.getZebraUIElement());
			
			app.appPanel.add(app.element_SoundIcon.getZebraUIElement());
			
			app.appPanel.add(app.element_ButtonBackground.getZebraUIElement());
			
			app.appPanel.add(app.element_ButtonUp.getZebraUIElement());
			
			app.appPanel.add(app.element_ButtonUp2.getZebraUIElement());
			
			app.appPanel.add(app.element_ButtonDown.getZebraUIElement());
			
			app.appPanel.add(app.element_ButtonDown2.getZebraUIElement());
			
			app.appPanel.add(app.element_ImageAsButton.getZebraUIElement());
			
			app.appPanel.add(app.element_StatefulButton.getZebraUIElement());
			
			app.appPanel.add(app.element_informationLabel.getZebraUIElement());
			
			app.appPanel.add(app.element_logo01.getZebraUIElement());
			
			app.appPanel.add(app.element_logo02.getZebraUIElement());
			
			app.appPanel.add(app.element_logo03.getZebraUIElement());
			
			app.appPanel.add(app.element_logo04.getZebraUIElement());
			
			app.appPanel.add(app.element_logo05.getZebraUIElement());
			
			app.appPanel.add(app.element_Off.getZebraUIElement());
			
			app.appPanel.add(app.element_Value.getZebraUIElement());
			
			app.appPanel.add(app.element_BLEon.getZebraUIElement());
			
			app.appPanel.add(app.element_Page1But.getZebraUIElement());
			
			app.appPanel.add(app.element_Page2But.getZebraUIElement());
			
			app.appPanel.add(app.element_Page3But.getZebraUIElement());
			
			app.appPanel.add(app.element_Page3.getZebraUIElement());
			
			app.appPanel.add(app.element_Page2.getZebraUIElement());
			
			app.appPanel.add(app.element_TogButLabel.getZebraUIElement());
			
			app.appPanel.add(app.element_Needle.getZebraUIElement());
			
			app.appPanel.add(app.element_Spinner.getZebraUIElement());
			
			app.appPanel.add(app.element_Page1.getZebraUIElement());
			
	},

}
