/*** Copyright 2015 Anaren Inc. All rights reserved ***/

/*
 * 
 * BaseClient.js : 
 * 		- Master client base for Atmosphere Client creation
 * 
 */

function getLanguageTag(constructorFunction, tag) {
	
	if(constructorFunction.prototype.language === undefined) {
		return tag;
	}
	
	var value = constructorFunction.prototype.language["en-US"][tag];
	
	if(constructorFunction.prototype.language[navigator.language] !== undefined && constructorFunction.prototype.language[navigator.language][tag] !== undefined) {
		value = constructorFunction.prototype.language[navigator.language][tag];
	}
	
	if(value === undefined) {
		return tag;
	}
	
	return value;
}

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