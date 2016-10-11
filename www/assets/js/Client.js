/*** 
 * Copyright 2014 Anaren Inc.
 * All rights reserved
 ***/

function Client(type, root) {

	var airMe = this;
	
	this.functionMapping = {};
	this.elements = {};
	this.deviceListMapping = {};
	this.app = {};
	this.clientType = type;
	
	if(root === undefined) {
		this.root = null;
	}
	else {
		this.root = root;
	}
	
	this.clientReady = function() {
	};
	
	this.sendTrigger = function(name, type, state) {
	};
	
	//If we are a BLE client call this.
	if(type === 'PhoneGapBLEClient') {
		PhoneGapBLEClient.call(this);
	}
	
	//If we are a WiFi Direct client call this.
	else if(type === 'WiFiDirectClient') {
		WiFiDirectClient.call(this);
	}
	
	//If we are a CloudView client call this.
	else if(type === 'CloudViewClient') {
		CloudViewClient.call(this);
	}
	
	//If we are a CloudView client call this.
	else if(type === 'CloudViewServer') {
		CloudViewServer.call(this);
	}
	
	//If we are a CloudView client call this.
	else if(type === 'PeakViewClient') {
		PeakViewClient.call(this);
	}
	
	else if(type === 'PreviewClient') {
		PreviewClient.call(this);
	}
	
	this.setApp = function(app) {
		// some shorthand for app or if undefined, new object
		this.app = app || {};
	};
	
	this.setAppVisible = function() {
		this.devWrapperPanel.setVisible(false);
		this.debugWrapperPanel.setVisible(false);
		this.projectListPanel.setVisible(false);
		
		this.appPanel.setVisible(true);
		this.appPanel.requestFocus();
		
		airMe.mainPanel.vrp();
	};
	
	this.setDevVisible = function() {
		airMe.appPanel.setVisible(false);
		this.debugWrapperPanel.setVisible(false);
		this.projectListPanel.setVisible(false);
		
		this.devWrapperPanel.setVisible(true);
		this.devWrapperPanel.requestFocus();
		
		airMe.mainPanel.vrp();
	};
	
	this.setDebugVisible = function(value) {
		this.appPanel.setVisible(false);
		this.devWrapperPanel.setVisible(false);
		this.projectListPanel.setVisible(false);
		
		this.debugWrapperPanel.setVisible(true);
		this.debugWrapperPanel.requestFocus();
		
		airMe.mainPanel.vrp();
	};

	this.showProjectList = function() {
		this.appPanel.setVisible(false);
		this.devWrapperPanel.setVisible(false);
		this.debugWrapperPanel.setVisible(false);
		
		this.projectListPanel.setVisible(true);
		this.projectListPanel.requestFocus();
		
		//TODO: check if online, if online - call ajax req to get the project list to load into the panel
		if (localStorage.getItem("projectList") === "") {
			airMe.getProjectList();
		}
		airMe.mainPanel.vrp();
	};
	
	// function to make an XHR call up to the web
	this.getProjectList = function() {
		// get the user creds out of temp storage
		var user, pass;
		var loadStore = localStorage.getItem("tempLogin");
		if ((loadStore === undefined) || (loadStore === null)) {
			if (env.debug) console.log("Atmosphere login credentials not found!");
			// if we're offline we'll just say like.. offline - cannot load project list
			//return window.location.assign("index.html");
			return;
		}
		else {
			var creds = JSON.parse(loadStore);
			user = creds.user;
			pass = creds.pass;			
			var session=btoa(btoa(user)+"|"+btoa(pass));
			var url = env.apiUrl + "fetch_projects.php?data=" + session;	
			var xhr = new XMLHttpRequest();
			xhr.addEventListener('readystatechange', function() {
			    if (xhr.readyState == 4 && xhr.status == 200) {
			    	if (xhr.responseText == "false") {
			    		// no need to do anything really if this happens
			    	}
			    	else {
						// global to store the text the project list - save to local storage perhaps?
			    		global.projectList = xhr.responseText;
			    		if (env.debug) console.log("Reading XHR response");
			    		//if (env.debug) console.log(global.projectList);
			    		localStorage.setItem("projectList", global.projectList); 
			    		// load the list into the page
			    		airMe.loadProjectList();
			    	}
				}
			    
			    if (xhr.readyState == 4 && xhr.status === 0) {
			    	if (env.debug) console.log("No connection found, cannot load project list");
			    }
			}, false);
			xhr.open('get', url, true);
			xhr.send();
		}
	};

	// function to load project list out of local storage into the project list panel
	this.loadProjectList = function() {
		var currentList = JSON.parse(localStorage.getItem("projectList"));
		// sort this thing by alphabet and ignore case
		function compare(a,b) {
			  if (a.name.toLowerCase() < b.name.toLowerCase())
			     return -1;
			  if (a.name.toLowerCase() > b.name.toLowerCase())
			    return 1;
			  return 0;
			}
		currentList.sort(compare);
						
		for (var i = 0; i < currentList.length; i++) {			
			if (currentList[i].type == "bcm20737") {
				var fulluuid = currentList[i].project_uuid;	
				var name = currentList[i].name;
				var modifiediso = currentList[i].modified.split("T");
				var modified = modifiediso[0] + " " + modifiediso[1].substring(0,8); 
				var plistDataPanel = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 4));
				plistDataPanel.setPreferredSize(this.root.width - 44 - 50, 60);
				plistDataPanel.add(new zebra.ui.Label("Name: " + name));	   	
				plistDataPanel.add(new zebra.ui.Label("UUID: " + fulluuid));	   	
				plistDataPanel.add(new zebra.ui.Label("Modified: " + modified));	  
				var projectButton = new zebra.ui.Button();
				projectButton.setCanHaveFocus(false);
				projectButton.setLayout(new zebra.layout.ListLayout(zebra.layout.STRETCH));
				projectButton.add(plistDataPanel);
				projectButton.UUID = fulluuid;
				this.plist.add(projectButton);
				projectButton.bind(function(e) {
					if (env.debug) console.log("Pressed " + e.UUID);
					airMe.plistOpenButton.setEnabled(true);
					airMe.plistOpenButton.UUID = e.UUID;
					for(var i = 0; i < airMe.plist.kids.length; i++) {
						airMe.plist.kids[i].setBackground(new zebra.ui.Gradient("rgb(250, 250, 250)", "rgb(234, 234, 234)"));
					}
					e.setBackground(new zebra.ui.Gradient("#DCEBF9", "#7BAEDB"));
				});
			}
		}
		airMe.projectListPanel.vrp();
	};

	// called by compiled apps to pick the best layout on this device
	this.layoutSelector = function(layoutObj) {
		
		// an array to hold greatest outcome possible throughout the whole loop
		var bestLayoutMatch = [];
		for(var layoutName in layoutObj) {
			if ((layoutObj[layoutName].width == window.innerWidth) && (layoutObj[layoutName].height == window.innerHeight) && (device.platform == layoutObj[layoutName].platform)) {
				if (env.debug) console.log("Exact layout match: " + layoutName);
				bestLayoutMatch[0] = layoutName;
			}
			
			else if ((layoutObj[layoutName].width == window.innerWidth) && (layoutObj[layoutName].height == window.innerHeight)) {
				if (env.debug) console.log("Good layout match: " + layoutName);
				bestLayoutMatch[1] = layoutName;
			}
			
			else if ((layoutObj[layoutName].width <= window.innerWidth) && (layoutObj[layoutName].height <= window.innerHeight)) {
				
				if ((bestLayoutMatch[2] !== undefined) && (bestLayoutMatch[2] !== null)) {
					
					if ((layoutObj[layoutName].width >= layoutObj[bestLayoutMatch[2]].width) && (layoutObj[layoutName].height >= layoutObj[bestLayoutMatch[2]].height)) {
						
						if (env.debug) console.log("Better layout match: " + layoutName + " than " + bestLayoutMatch[2]);
						bestLayoutMatch[2] = layoutName;
						
					}
					else {
						if (env.debug) console.log("Not as good layout match: " + layoutName + " than " + bestLayoutMatch[2]);
					}
					
				}
				else {
					if (env.debug) console.log("Fair layout match: " + layoutName);
					bestLayoutMatch[2] = layoutName;
				}
			}
			else {
				if (env.debug) console.log("Bad layout match: " + layoutName);
			}
		}
		
		var chosenLayout = bestLayoutMatch[0] || bestLayoutMatch[1] || bestLayoutMatch[2] || "Default";
		if (env.debug) console.log("Using layout: " + chosenLayout);
		if (env.baseApp) airMe.debugLog("Using layout: " + chosenLayout);
		return chosenLayout;
	};
	
	// debug logger
	this.debugLog = function(data) {
		if ((this.consoleTextArea !== undefined) && (this.consoleTextArea !== null)) {
			if ((this.consoleTextArea.getValue() !== undefined) && (this.consoleTextArea.getValue() !== null)) {
				var curConsole = this.consoleTextArea.getValue();
				if (curConsole.length > 50000) {
					this.consoleTextArea.setValue(curConsole(substring(40000)) + "\n" + data);
				}
				else {
					this.consoleTextArea.setValue(curConsole + "\n" + data);
				}
			}
			else {
				this.consoleTextArea.setValue(data);
			}
		}
		console.log(data);
	};
	
	
	// Ready UI
	this.readyUI = function() {
		
		//Something went wrong with loading the application
		try {
			if(this.app === undefined) {
			}
		} catch(err) {
			this.app = {};
			this.airError = true;
			this.app.initialize = function() {
				return;
			};
		}
		
		//Check to see if we were given a container, if not run in the main root canvas fullscreen.
		if(this.root === null) {
			this.canvas = new zebra.ui.zCanvas("main");
			this.canvas.fullScreen();
			this.root = this.canvas.root;
		}
		
		this.getScreenInfo();
		
		this.root.setLayout(new zebra.layout.BorderLayout(0,0));
		
		this.mainPanel = new zebra.ui.Panel();
		this.mainPanel.setLayout(new zebra.layout.RasterLayout());
		this.root.add(zebra.layout.CENTER, this.mainPanel);
		
		this.appPanel = new zebra.ui.Panel();
		this.appPanel.setLayout(new zebra.layout.RasterLayout());
		this.appPanel.setBounds(0, 0, this.root.width, this.root.height);
		this.mainPanel.add(this.appPanel);
		
		this.devWrapperPanel = new zebra.ui.Panel();
		this.devWrapperPanel.setLayout(new zebra.layout.RasterLayout());
		this.devWrapperPanel.setBounds(0, 0, this.root.width, this.root.height);
		this.mainPanel.add(this.devWrapperPanel);
		
		this.debugWrapperPanel = new zebra.ui.Panel();
		this.debugWrapperPanel.setLayout(new zebra.layout.RasterLayout());
		this.debugWrapperPanel.setBounds(0, 0, this.root.width, this.root.height);
		this.mainPanel.add(this.debugWrapperPanel);

		// project list Panel Wrapper
		this.projectListPanel = new zebra.ui.Panel();
		this.projectListPanel.setLayout(new zebra.layout.RasterLayout());
		this.projectListPanel.setBounds(0, 0, this.root.width, this.root.height);
		this.mainPanel.add(this.projectListPanel);		
		
		//The gears icon that brings up the devTool panel
		this.devToolButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/gears.png"));
		this.devToolButton.setBounds(this.root.width - 54, this.root.height - 54, 54, 54);
		this.devToolButton.mousePressed = function(e) {
			airMe.setDevVisible();
		};
		
		// the close button makes the app visible
		this.devToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/close.png"));
		this.devToolCloseButton.setBounds(this.root.width - 54, this.root.height - 54, 54, 54);
		this.devToolCloseButton.mousePressed = function(e) {
			airMe.setAppVisible();
		};
		
		this.logoutButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/logout.png"));
		this.logoutButton.setBounds(0, this.root.height - 54, 54, 54);
		this.logoutButton.mousePressed = function(e) {
			airMe.stopScanning();
			airMe.disconnectFromDevice();
			window.location = "index.html";
		};
		
		this.refreshButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/refresh.png"));
		this.refreshButton.setBounds(this.root.width - 112, this.root.height - 54, 54, 54);
		this.refreshButton.mousePressed = function(e) {
			airMe.stopScanning();
			airMe.disconnectFromDevice();
			location.reload();
		};
		
		this.debugButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/ladybug.png"));
		this.debugButton.setBounds(this.root.width - 170, this.root.height - 54, 54, 54);
		this.debugButton.mousePressed = function(e) {
			airMe.setDebugVisible();
		};
		
		// the list icon will bring up project list panel
		this.projectsButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/list.png"));
		this.projectsButton.setBounds(this.root.width - 228, this.root.height - 54, 54, 54);
		this.projectsButton.mousePressed = function(e) {
			airMe.showProjectList();
		};

		// this projectlist close button will appear on the project list page
		this.plistCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/close.png"));
		this.plistCloseButton.setBounds(this.root.width - 54, this.root.height - 54, 54, 54);
		this.plistCloseButton.mousePressed = function(e) {
			airMe.setDevVisible();
		};
		
		// DEVICE LIST PANEL
		this.devPanel = new zebra.ui.Panel({
			layout: new zebra.layout.BorderLayout(4,4),
			background: "white",
			padding: 2,
			border: new zebra.ui.Border("lightGray", 5, 5),	
		});	

		this.devTopPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 2));
		this.devTopPanel.add(new zebra.ui.Label("Connect To Device")).properties({
		canHaveFocus: false,
		font: "20px Arial Bold",
		});

		this.devBottomPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 8));

		this.connectButtonLabel = new zebra.ui.Label("Connect");
		this.connectButtonLabel.setFont(new zebra.ui.Font("Arial", "bold", 15));		
		
		this.connectButton = new zebra.ui.Button(airMe.connectButtonLabel).properties({
			height:44,
			width:112,
			psWidth:112,
			psHeight:44
		});
		
		//TODO: Should we connect based on the label value of the connect button or should we be more future proof and track state in a system variable?
		this.connectButton.bind(function(e) {
			if(airMe.connectButtonLabel.getValue() == "Connect") {
				airMe.connectToDevice(e.airAddress);
			}
			else {
				airMe.disconnectFromDevice();
			}
		});
		
		this.connectButton.setEnabled(false);
		
		this.devBottomPanel.add(this.connectButton);
		this.deviceList = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 4));
		this.pScroll = new zebra.ui.ScrollPan(this.deviceList, zebra.layout.VERTICAL);  	
		this.pScrollWrapper = new zebra.ui.BorderPan("Devices", this.pScroll);
		
		this.scanButtonLabel = new zebra.ui.Label("Scan");
		this.scanButtonLabel.setFont(new zebra.ui.Font("Arial", "bold", 15));		
		this.scanButton = new zebra.ui.Button(airMe.scanButtonLabel).properties({
			height:44,
			width:112,
			psWidth:112,
			psHeight:44
		});
		
		this.scanButton.setBounds(this.root.width - 110, 96, 108, 38);
		this.scanButton.mousePressed = function(e) {
			if(airMe.scanButton.find("//zebra.ui.Label").getValue() == "Scan") {
				airMe.startScanning();
			}
			else {
				airMe.stopScanning();
			}
		};
		
		this.devBottomPanel.add(this.scanButton);
		
		this.devPanel.add(zebra.layout.TOP, this.devTopPanel);	
		this.devPanel.add(zebra.layout.CENTER, this.pScrollWrapper);	 
		this.devPanel.add(zebra.layout.BOTTOM, this.devBottomPanel);	
		this.devPanel.setBounds(22, 22, this.root.width - 44, this.root.height - 88);
		//END DEVICE LIST PANEL
		
		//BEGIN BUILD DEBUG PANEL
		this.debugToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/close.png"));
		this.debugToolCloseButton.setBounds(this.root.width - 54, this.root.height - 54, 54, 54);
		this.debugToolCloseButton.mousePressed = function(e) {
			airMe.setDevVisible();
		};
		this.consoleClearButton = new zebra.ui.Button(new zebra.ui.ImagePan("assets/icons/clear.png")).properties(this.defaultButtonProps);
		this.consoleClearButton.setBounds(this.root.width - 112, this.root.height - 54, 54, 54);
		this.consoleClearButton.bind(function(e) {
			airMe.consoleTextArea.setValue("");
		});
		this.consoleTextArea = new zebra.ui.TextArea("");
		this.consoleTextArea.setEditable("false");
		this.consoleScrollPan = new zebra.ui.ScrollPan(this.consoleTextArea);
		this.consolePanelBorderPan = new zebra.ui.BorderPan("Debug Console", this.consoleScrollPan);
		this.consolePanelBorderPan.setBorder(new zebra.ui.Border("transparent"));
		this.consolePanelBorderPan.kids[0].setColor("#222222");
		this.consolePanelBorderPan.setBounds(22, 22, this.root.width - 44, this.root.height - 88);
		//END DEBUG PANEL
		
		//BEGIN BUILD PROJECT LIST PANEL
		this.plistPanel = new zebra.ui.Panel({
			layout: new zebra.layout.BorderLayout(4,4),
			background: "white",
			padding: 2,
			border: new zebra.ui.Border("lightGray", 5, 5),	
		});	

		this.plistTopPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 2));
		this.plistTopPanel.add(new zebra.ui.Label("Project List")).properties({
			canHaveFocus: false,
			font: "20px Arial Bold",
		});

		this.plistOpenButton = new zebra.ui.Button("Open Selected").properties({
			height:44,
			width:112,
			psWidth:112,
			psHeight:44
		});
		this.plistOpenButton.bind(function(e) {
			
			if(e.UUID === undefined || e.UUID === null) {
				return;
			}
			
			localStorage.setItem("openProject", e.UUID);
			location.reload();
		});
		
		airMe.plistOpenButton.setEnabled(false);
		
		this.plistOpenLast = new zebra.ui.Button("Last Build").properties({
			height:44,
			width:112,
			psWidth:112,
			psHeight:44
		});
		this.plistOpenLast.bind(function(e) {
			localStorage.setItem("openProject", "");
			location.reload();
		});
		
		this.plistBottomPanel = new zebra.ui.Panel(new zebra.layout.FlowLayout(zebra.layout.CENTER, zebra.layout.CENTER, zebra.layout.HORIZONTAL, 8));
		this.plistBottomPanel.add(this.plistOpenButton);
		this.plistBottomPanel.add(this.plistOpenLast);
		
		this.plist = new zebra.ui.Panel(new zebra.layout.ListLayout(zebra.layout.STRETCH, 10));
		this.plistScroll = new zebra.ui.ScrollPan(this.plist, zebra.layout.VERTICAL);  	
		this.plistScroll.setAutoHide(false);
		// force the scrollbars to visible always
		// lets just see what removing this does
		/*this.plistScroll.doScroll = function(dx, dy, source) {
	        var b = false;     
	        if (dy !== 0 && this.vBar !== null && this.vBar.isVisible === true) {
	            var v =  this.vBar.position.offset + dy;
	            if (v >= 0) this.vBar.position.setOffset(v);
	            else        this.vBar.position.setOffset(0);
	            b = true;
	        }
	        if (dx !== 0 && this.hBar !== null && this.hBar.isVisible === true) {
	            var h =  this.hBar.position.offset + dx;
	            if (h >= 0) this.hBar.position.setOffset(h);
	            else        this.hBar.position.setOffset(0);
	            b = true;
	        }
	        return b;
	    };*/
		
		this.plistScrollWrapper = new zebra.ui.BorderPan("Projects", this.plistScroll);
		
		this.plistPanel.add(zebra.layout.TOP, this.plistTopPanel);	
		this.plistPanel.add(zebra.layout.CENTER, this.plistScrollWrapper);	 
		this.plistPanel.add(zebra.layout.BOTTOM, this.plistBottomPanel);	
		this.plistPanel.setBounds(22, 22, this.root.width - 44, this.root.height - 88);	
		//END PROJECT LIST PANEL
		
		// Init user's this - send data to debug 
		this.debugLog("Your Screen is (width, height, pixel ratio) = (" + this.screenWidth + "," + this.screenHeight + "," + this.screenPixelRatio + ")");
		if(this.airError === true) {
			this.debugLog("There was a critical error when attempting to try and run your project please send an export of the current Atmosphere project to a developer for debugging at support@atmosphere.anaren.com");
		}
		//If this.app is not defined it most likely means this is executing as a dummy client for the CloudView
		if(this.app !== undefined && this.app.initialize !== undefined) {
			try {
				this.app.initialize();
// 				this.debugLog("Using layout \"" + this.app.currentLayout + "\"");
			} catch (err) {
				this.debugLog(err.stack);
				this.debugLog(err.toString());
			}
		}
		
		//Finishing up building the UI
		this.devWrapperPanel.setVisible(false);
		this.devWrapperPanel.add(this.devPanel);
		this.devWrapperPanel.add(this.devToolCloseButton);
		this.devWrapperPanel.add(this.logoutButton);
		this.devWrapperPanel.add(this.refreshButton);
		this.devWrapperPanel.add(this.debugButton);
		if (env.projectList) this.devWrapperPanel.add(this.projectsButton);
		
		// set the debug panel invis and add the items that belong to it
		this.debugWrapperPanel.setVisible(false);
		this.debugWrapperPanel.add(this.debugToolCloseButton);
		this.debugWrapperPanel.add(this.consoleClearButton);
		this.debugWrapperPanel.add(this.consolePanelBorderPan);
		
		// set the project list panel invis and add the items that belong to it
		this.projectListPanel.setVisible(false);
		this.projectListPanel.add(this.plistCloseButton);
		this.projectListPanel.add(this.plistPanel);		
		
		this.appPanel.add(this.devToolButton);
		
		this.appPanel.requestFocus();
	};
	
	this.onReady = function() {
		// what is the difference if this root is null or not? waiting on zebra or something else?
		if(this.root === null) {		
			zebra.ready(function(){
				airMe.readyUI();
				airMe.clientReady();
			});
		}
		else {
			this.readyUI();
			this.clientReady();
		}
	};
	
	// different clients report screen size differently...  some are based on the canvas root while for example the phonegap app
	// should use the actual viewport because the canvas root it being stupid
	this.getScreenInfo = function() {
		
		if (this.clientType == "PhoneGapBLEClient") {
			this.screenWidth = window.innerWidth;
			this.screenHeight = window.innerHeight;		
			this.screenPixelRatio = window.devicePixelRatio || 1;
			this.currentlyConnectedAddress = "";
		}
		else {
			this.screenWidth = this.root.width;
			this.screenHeight = this.root.height;		
			this.screenPixelRatio = window.devicePixelRatio || 1;
			this.currentlyConnectedAddress = "";			
		}
		
	};
	
	
}
