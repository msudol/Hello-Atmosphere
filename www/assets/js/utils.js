/*** 
 * Copyright 2014 Anaren Inc.
 * All rights reserved
 ***/

var iOSPlatform = "iOS";
var androidPlatform = "Android";

function clone(obj) {
	if(obj === null || typeof(obj) != 'object')	{
		return obj;
	}
	
	var temp = obj.constructor(); // changed

	for(var key in obj)	{
		temp[key] = clone(obj[key]);
	}
	
	return temp;
}

function isValidJSON(str) {
	try	{
		JSON.parse(str);
		return true;
	}
	
	catch(e) {
		return false;
	}
	
	return false;
}

function randomString(length) {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

	if (! length) {
	length = Math.floor(Math.random() * chars.length);
	}

	var str = '';
	for (var i = 0; i < length; i++) {
	str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}

function generateUuid(len, radix) {
	/*!
	Math.uuid.js (v1.4)
	http://www.broofa.com
	mailto:robert@broofa.com

	Copyright (c) 2010 Robert Kieffer
	Dual licensed under the MIT and GPL licenses.
	*/	
	var CHARS = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
	var chars = CHARS, uuid = [], i;
	radix = radix || chars.length;
	if (len) {
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
	} else {
		var r;
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
			r = 0 | Math.random()*16;
			uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return uuid.join('');
}

function POSTForm(url, data, callback, headers) {
	var xmlhttp;

	// build the data using FormData (requires browser support - this should get tested)
	/*var formData = new FormData();
	for (var key in data) {
		if(data.hasOwnProperty(key)) {
			formData.append(key, data[key]);
		}
	}*/
	//Formdata didn't seem to work in webkit quite properly - reverting
	var formData = "";
	for (var key in data) {
		if(data.hasOwnProperty(key)) {
			formData += key + "=" + data[key] + "&";
		}
	}
	formData = formData.substring(0, formData.length - 1);

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}  
	
	// setup a callback function if it is defined
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
	
	// open request to url async
	xmlhttp.open("POST", url, true);
	
	// headers is either sent headers or new object
	headers = headers || {};
		
	// default content-type 
	if (headers["Content-Type"] === undefined) {
		headers["Content-Type"] = "application/x-www-form-urlencoded";
	}
	
	// default connection header
	if (headers["Connection"] === undefined) {
		headers["Connection"] = "close";
	}
	
	// set the content length header from the formdata 
	headers["Content-Length"] = formData.length;

	// set up headers
	for(var k in headers) {
		if(headers.hasOwnProperty(k)) {
			xmlhttp.setRequestHeader(k.toString(), headers[k]);
		}
	}

	// send it
	xmlhttp.send(formData);  
}