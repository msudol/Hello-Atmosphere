
function Client(type, root) {

	var airMe = this;
	
	this.functionMapping = {};
	this.elements = {};
	this.deviceListMapping = {};
	this.app = {};
	
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
	
	else if(type === 'PreviewClient') {
		PreviewClient.call(this);
	}
	
	this.setApp = function(app) {
		// some shorthand for app or if undefined, new object
		this.app = app || {};
	};
	
	this.setAppVisible = function() {
		this.appPanel.setVisible(true);
		this.devWrapperPanel.setVisible(false);
		this.debugWrapperPanel.setVisible(false);
	};
	
	this.setDevVisible = function(value) {
		this.appPanel.setVisible(false);
		this.devWrapperPanel.setVisible(true);
		this.debugWrapperPanel.setVisible(false);
	};
	
	this.setDebugVisible = function(value) {
		this.appPanel.setVisible(false);
		this.devWrapperPanel.setVisible(false);
		this.debugWrapperPanel.setVisible(true);
	};
	
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
		
		//Build the this panel
		this.devToolButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/gears.png"));
		this.devToolButton.setBounds(this.root.width - 64, this.root.height - 64, 64, 64);
		
		this.devToolButton.mousePressed = function(e) {
			airMe.setDevVisible();
		};
		
		//Build the devtool panel
		this.devToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/close.png"));
		this.devToolCloseButton.setBounds(this.root.width - 64, this.root.height - 64, 64, 64);
		
		this.devToolCloseButton.mousePressed = function(e) {
			airMe.setAppVisible();
		};
		
		this.logoutButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/logout.png"));
		this.logoutButton.setBounds(0, this.root.height - 64, 64, 64);
		this.logoutButton.mousePressed = function(e) {
			airMe.stopScanning();
			airMe.disconnectFromDevice();
			window.location = "index.html";
		};
		
		this.refreshButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/refresh.png"));
		this.refreshButton.setBounds(this.root.width - 130, this.root.height - 64, 64, 64);
		
		this.refreshButton.mousePressed = function(e) {
			airMe.stopScanning();
			airMe.disconnectFromDevice();
			location.reload();
		};
		
		this.debugButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/ladybug.png"));
		this.debugButton.setBounds(this.root.width - 196, this.root.height - 64, 64, 64);
		
		this.debugButton.mousePressed = function(e) {
			airMe.setDebugVisible();
		};
		
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

		this.connectButton = new zebra.ui.Button("Connect").properties({
			height:44,
			width:112,
			psWidth:112,
			psHeight:44
		});
		this.connectButton.bind(function(e) {
			if(airMe.connectButton.find("//zebra.ui.Label").getValue() == "Connect") {
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

		this.scanButton = new zebra.ui.Button("Scan").properties({
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
		
		//Build debug panel
		this.debugToolCloseButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/close.png"));
		this.debugToolCloseButton.setBounds(this.root.width - 64, this.root.height - 64, 64, 64);
		
		this.debugToolCloseButton.mousePressed = function(e) {
			airMe.setDevVisible();
		};
		
		this.consoleClearButton = new zebra.ui.Button(new zebra.ui.ImagePan("img/icons/clear.png")).properties(this.defaultButtonProps);
		this.consoleClearButton.setBounds(this.root.width - 130, this.root.height - 64, 64, 64);
		
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
		
		//Init user's this
		this.debugLog("Your Screen is (width, height, pixel ratio) = (" + this.root.width + "," + this.root.height + "," + this.screenPixelRatio + ")");
		
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
		
		this.debugWrapperPanel.setVisible(false);
		this.debugWrapperPanel.add(this.debugToolCloseButton);
		this.debugWrapperPanel.add(this.consoleClearButton);
		this.debugWrapperPanel.add(this.consolePanelBorderPan);
		
		this.appPanel.add(this.devToolButton);
	};
	
	this.onReady = function() {
		if(this.root === null) {
			this.screenPixelRatio = window.devicePixelRatio || 1;
			this.currentlyConnectedAddress = "";
			
			zebra.ready(function(){
				airMe.readyUI();
				airMe.clientReady();
			});
		}
		
		else {
			this.screenPixelRatio = window.devicePixelRatio || 1;
			this.currentlyConnectedAddress = "";
			
			this.readyUI();
			this.clientReady();
		}
	};
}