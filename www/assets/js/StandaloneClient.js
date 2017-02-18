function StandaloneClient(root) {
	BaseClient.call(this, root);
	
	var currentStandaloneClient = this;
	
	this.root = root;
	this.elements = {};
	this.functionMapping = {};
	this.debugData = '';
	
	var cwrapper = document.getElementById("canvasWrapper");
	
	this.windowSize();
	window.addEventListener("resize", function(){currentStandaloneClient.windowSize()});
	
	cwrapper.innerHTML = '' +
	'<div id=canvasOverflow><canvas id=main></canvas></div><div id=appBar>' + 
	'<div id=appBarContent><table class=appBarTable><tr>' +
	'<td><div class=button id=scanButton></div></td>' +
	'<td><div class=button id=projectButton></div></td>' +
	'<td><div class=button id=debugButton></div></td>' +
	'<td><div class=button id=refreshButton></div></td>' +
	'<td><div class=button id=signoutButton></div></td></tr>' +
	'</table></div><div id=appModalTitle><h2 class=appModalHeader id=appModalHeader></h2></div></div>' +
	'<div id=appModal><div id=appModalContent></div></div>' +
	'<div id=appMenu><div id=appMenuContentWrapper><div id=appMenuContent></div></div>' +
	'<div id=appMenuRight><div id=settingsButton></div></div></div>' + 
	'<div id=scanner></div>';
	
	this.appMenu = document.getElementById('appMenu');
	this.appMenu.content = document.getElementById('appMenuContent');
	this.appMenu.left = document.getElementById('appMenuLeft');
	this.appMenu.right = document.getElementById('appMenuRight');
	
	this.appModalTitle = document.getElementById('appModalTitle');
	this.appModalHeader = document.getElementById('appModalHeader');
	
	this.appModal = document.getElementById('appModal');
	this.appModal.content = document.getElementById('appModalContent');
	
	this.appBar = document.getElementById('appBar');
	this.appBar.content = document.getElementById('appBarContent');
	this.scanner = document.getElementById('scanner');
	
	/* Predefined Content Items */
	
	var devicePageButtons = '<span id="devicePageButtons" class="hiddenSpan">';
	devicePageButtons += '<button id="deviceScanButton" class="button" value="start">Scan</button>';
	devicePageButtons += '<button id="deviceConnectButton" pid="" class="button" value="disconnected">Connect</button></span>';
	
	var projectPageButtons = '<span id="projectPageButtons" class="hiddenSpan">';
	projectPageButtons += '<button id="projectOpenButton" pid="" class="button">Open</button>';
	projectPageButtons += '<button id="projectBuiltButton" class="button">Last Build</button></span>';
	
	var debugPageButtons = '<span id="debugPageButtons" class="hiddenSpan"><button id="debugClearButton" class="button">Clear Log</button></span>';
	
	//var settingsbutton = '<img id="settingsButton" class="button toggleButton">';
	
	this.appMenu.content.innerHTML = devicePageButtons + projectPageButtons + debugPageButtons;
	
	this.appMenu.content.devicePageButtons = document.getElementById('devicePageButtons');
	this.appMenu.content.deviceScanButton = document.getElementById('deviceScanButton');
	this.appMenu.content.deviceConnectButton = document.getElementById('deviceConnectButton');
	
	this.appMenu.content.projectPageButtons = document.getElementById('projectPageButtons');
	this.appMenu.content.projectOpenButton = document.getElementById('projectOpenButton');
	this.appMenu.content.projectBuiltButton = document.getElementById('projectBuiltButton');
	
	this.appMenu.content.debugPageButtons = document.getElementById('debugPageButtons');
	this.appMenu.content.debugClearButton = document.getElementById('debugClearButton');
	
	// bottom menu float right item
	//this.appMenu.right.innerHTML = settingsbutton;
	this.appMenu.right.settingsButton = document.getElementById('settingsButton');
	
	/* Button Actions & States */
	this.appMenu.toggleState = false;
	
	// The top bar items
	this.appBar.content.scanButton = document.getElementById('scanButton');
	this.appBar.content.signoutButton = document.getElementById('signoutButton');
	this.appBar.content.projectButton = document.getElementById('projectButton');
	this.appBar.content.debugButton = document.getElementById('debugButton');
	this.appBar.content.refreshButton = document.getElementById('refreshButton');
}

StandaloneClient.prototype = Object.create(BaseClient.prototype);
StandaloneClient.prototype.constructor = StandaloneClient;

StandaloneClient.prototype.windowSize = function () {
	var cwrapper = document.getElementById("canvasWrapper");
	cwrapper.style.width = window.innerWidth + "px";
	cwrapper.style.height = window.innerHeight + "px";	
};

StandaloneClient.prototype.clearMenuClass = function() {
	this.appBar.content.scanButton.className = "";
	this.appBar.content.projectButton.className = "";
	this.appBar.content.debugButton.className = "";
	this.appBar.content.refreshButton.className = "";
	this.appBar.content.signoutButton.className = "";
};

// load debug log function
StandaloneClient.prototype.showDebugLog = function() {
	this.clearMenuClass();
	this.appBar.content.debugButton.className = "selected";
	this.currentPage = "debug";
	this.appModalHeader.innerHTML = 'Debug Log';
	this.appModal.content.innerHTML = this.debugData;
	this.appModal.scrollTop = this.appModal.scrollHeight;
	this.appMenu.content.devicePageButtons.style.display = "none";
	this.appMenu.content.projectPageButtons.style.display = "none";
	this.appMenu.content.debugPageButtons.style.display = "inline";
};

// called by compiled apps to pick the best layout on this device - needs work
StandaloneClient.prototype.layoutSelector = function(layoutObj) {
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
	if (env.baseApp) this.debugLog("Using layout: " + chosenLayout);
	return chosenLayout;
};

StandaloneClient.prototype.debugLog = function(data) {
	var ts = getTimeStamp();
	var hour = ('0' + ts[3]).slice(-2);
	var min = ('0' + ts[4]).slice(-2);
	var sec = ('0' + ts[5]).slice(-2);
	var time = hour+":"+min+":"+sec;
	data = time + ": " + data;		
	// just add the data to the global debug tracker
	this.debugData += data + "<br>";
	// if on the debug page we can do live update
	if (this.currentPage == "debug") {
		var t = document.createTextNode(data);
		var h = document.createElement("br");
		this.appModal.content.appendChild(t);
		this.appModal.content.appendChild(h);
	}
	//TODO: maybe do some checking for memory limit or we could use local storage instead of holding that var in memory
	if (data.length > 1000000) {
		
	}
};

StandaloneClient.prototype.toggleMenu = function(state) { 
	if (state == "off") {
		this.appMenu.toggleState = true;
	}
	if (this.appMenu.toggleState) {
		this.appModal.style.display = "none";
		this.appBar.style.display = "none";
		this.appMenu.style.left = 'initial';
		this.appMenu.right.settingsButton.className = "";
	}
	else {
		this.appModal.style.display = "inline";
		this.appBar.style.display = "inline";
		this.appMenu.style.left = '0px';
		this.appMenu.right.settingsButton.className = "selected";
	}
	this.appMenu.toggleState = !this.appMenu.toggleState;
};