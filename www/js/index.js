// called from app.js after device ready
function pageInit() {
	
	// remove any temporary login data
	localStorage.setItem("tempLogin", "");

	// remove any temporary login data
	localStorage.setItem("openProject", "");
	
	// check for saved username and password on this device
	loadCredentials();
	
	// whenever index is loaded or reloaded reset the local storage for apiUrl
	updateEnv("apiUrl", env.apiDefault);
	
	// request the filesystem
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	
	document.getElementById("messageBox").innerHTML = "Login to Atmosphere...";

}

// opens the demo - checks env to see what demo to open
function openDemo() {
	window.location.assign('demo.html');
}

//submit the user login form
function loginSubmit(apiUrl, hidden) {
	
	var loginUrl = apiUrl || env.apiUrl;
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if ((user.length > 0) && (pass.length > 0)) {

		if (!hidden) document.getElementById("messageBox").innerHTML = 'Logging in to Atmosphere...';

		var url = loginUrl + "auth.php?user=" + user + "&pass=" + pass;
		var xhr = new XMLHttpRequest();
		
		xhr.addEventListener('readystatechange', function() {	
			
			//if (env.debug) console.log('state: ' + xhr.readyState + ' | status: ' + xhr.status);
			
			//TODO: handle failures gracefully
		    if (xhr.readyState == 4 && xhr.status == 200) {			
				
				res = xhr.responseText;
				
				if (res == "true") {
					// user/pass combo accepted - store to temp 
					var creds = {
							user: user,
							pass: pass
					};
					var store = JSON.stringify(creds);
					localStorage.setItem("tempLogin", store);		
					
					// if a login url was set when function called - set the env.apiUrl to the new url
					env.apiUrl = loginUrl;
					updateEnv("apiUrl", loginUrl);
					
					window.location.assign("main.html");
				}
				else {
					// user/pass combo failed
					if (!hidden) document.getElementById("messageBox").innerHTML = '<font color="red">Invalid login credentials!</font>';
				}
			}

			// handle failures gracefully
		    if (xhr.readyState == 4 && xhr.status != 200) {			
					// server issue possibly
		    	if (!hidden) document.getElementById("messageBox").innerHTML = '<font color="red">Error logging in, check your connection and try again...</font>';
			}
		    
		}, false);
		xhr.open('get', url, true);
		xhr.send();	
	}
	else {
		if (!hidden) document.getElementById("messageBox").innerHTML = '<font color="red">Invalid login credentials!</font>';
	}
	
}

function altLogin() {
	if (env.alt > 2) {
		env.alt = 1;
		loginSubmit("https://ionosphere.anaren.com/auth/", true);
	}
	else {
		env.alt++;
	}
}

//saves credentials of the login form
function saveCredentials() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var creds = {
			user: username,
			pass: password
	};
	var store = JSON.stringify(creds);
	localStorage.setItem("AtmosphereLogin", store);
}


// load credentials of the login form
function loadCredentials() {
	var checkbox = document.getElementById("rememberInput");     
	var loadStore = localStorage.getItem("AtmosphereLogin");
	if (loadStore !== null) {
		checkbox.checked = true;
		var creds = JSON.parse(loadStore);
		document.getElementById("username").value = creds.user;
		document.getElementById("password").value = creds.pass;
	}
	else {
		checkbox.checked = false;
	}
}

// remove credentials of the login form
function removeCredentials() {
	localStorage.removeItem("AtmosphereLogin");
}

// handle checkbox when remember is checked
function rememberFunc(state) {
	if (state) {
		saveCredentials();
	}
	else {
		removeCredentials();
	}
}

// remembers user and pass while being typed
function updateFunc() {
	var checkbox = document.getElementById("rememberInput"); 
	if (checkbox.checked) {
		saveCredentials();
	}
}

// filesystem fail
function fail(error) {
    console.log(error.code);
}

// filesystem contacted success
function gotFS(fs) {
	global.fileSystem = fs;
	// get current_app.js - create it or wipe it clean
    global.fileSystem.root.getFile("current_app.js", {create: true, exclusive: false}, gotFileEntry, fail);
}

// we have current_app.js
function gotFileEntry(fileEntry) {
	// pass it on to file write to make sure it's empty
    fileEntry.createWriter(gotFileWriter, fail);  
}

function gotFileWriter(writer) {
	// save the data to the filesystem
    writer.write("");
}
