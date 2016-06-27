/*** Copyright 2015 Anaren Inc. All rights reserved ***/

/*
 * 
 * demo.js : 
 * 		- simplify loading the demo using the new client.js and bleclient.js from assets
 * 
 */

// called from app.js after device ready
function pageInit() {

	// the demo should not have a project list
	env.projectList = false;
	
	baseApp = new Client('PhoneGapBLEClient');	

	// load the demo app importer
	app = new MyApp(baseApp);
	
	// load the actual demo file contents from demo_app.js or current_app.js
	baseApp.setApp(app);
	
	// initialize it all
	baseApp.initialize(); 
	
}
