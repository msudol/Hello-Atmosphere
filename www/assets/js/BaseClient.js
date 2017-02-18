function BaseClient(root) {
	this.root = root;
	this.elements = {};
	this.functionMapping = {};
	this.debugData = '';
	this.app = {};
}

// BaseClient.prototype = Object.create(BaseClient.prototype);
// BaseClient.prototype.constructor = BaseClient;

BaseClient.prototype.setApp = function(app) {
	this.app = app || {};
	this.app.parent = this;
};

BaseClient.prototype.sendTrigger = function(name, type, state) {
};

BaseClient.prototype.clientReady = function() {
};

BaseClient.prototype.getScreenInfo = function() {
	this.screenWidth = this.root.width;
	this.screenHeight = this.root.height;		
	this.screenPixelRatio = window.devicePixelRatio || 1;			
};

BaseClient.prototype.setCanvasSize = function() {
};

BaseClient.prototype.debugLog = function(data) {
	var ts = getTimeStamp();
	var hour = ('0' + ts[3]).slice(-2);
	var min = ('0' + ts[4]).slice(-2);
	var sec = ('0' + ts[5]).slice(-2);
	var time = hour+":"+min+":"+sec;
	data = time + ": " + data;		
	console.log(data);
};