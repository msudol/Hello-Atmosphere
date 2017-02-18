// called from app.js after device ready
function pageInit() {
	
	// remove any temporary login data
	localStorage.setItem("tempLogin", "");

	// remove any temporary project data
	localStorage.setItem("openProject", "");
	
	// check for saved username and password on this device
	loadCredentials();
	
	// whenever index is loaded or reloaded reset the local storage for apiUrl
	updateEnv("apiUrl", env.apiDefault);
	
	// request the filesystem
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	document.getElementById("messageBox").className = "";
	document.getElementById("messageBox").innerHTML = "Login to Atmosphere...";

}

// opens the demo - checks env to see what demo to open
function openDemo() {
	window.location.assign('demo.html');
}

//submit the user login form
function loginSubmit(apiUrl, hidden) {
	
	console.log(apiUrl);
	
	if(apiUrl !== undefined) {
		loginUrl = apiUrl;
	}
	else {
		loginUrl = env.apiUrl;
	}
	
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if ((user.length > 0) && (pass.length > 0)) {

		if (!hidden) {
			document.getElementById("messageBox").className = "";
			document.getElementById("messageBox").innerHTML = 'Logging in to Atmosphere...';
		}
		
		// use encoded login because of passwords with # in them potentially
		var session=btoa(btoa(user)+"|"+btoa(pass));
		var url = loginUrl + "auth.php?data=" + session;

		console.log(url);
		
		var xhr = new XMLHttpRequest();
		
		xhr.addEventListener('readystatechange', function() {	
			
			if (env.debugHigh) console.log('state: ' + xhr.readyState + ' | status: ' + xhr.status);
			
			//TODO: handle failures more gracefully
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
					if (!hidden) {
						document.getElementById("messageBox").className = "warning";
						document.getElementById("messageBox").innerHTML = 'Invalid login credentials!';
					}
				}
			}

			// handle failures gracefully
		    if (xhr.readyState == 4 && xhr.status != 200) {			
				// server issue possibly
		    	if (!hidden) {
					document.getElementById("messageBox").className = "warning";
					document.getElementById("messageBox").innerHTML = 'Error logging in, check your connection and try again...';
				}
				if (app.debug) console.log("Error logging in to: " + env.apiUrl);
			}
		    
		}, false);
		xhr.open('get', url, true);
		xhr.send();	
	}
	else {
		if (!hidden) {
			document.getElementById("messageBox").className = "warning";
			document.getElementById("messageBox").innerHTML = 'Invalid login credentials!';
		}
		
		console.log("'Invalid login credentials!");
	}
	
}

function altLogin() {
	if (env.alt > 2) {
		env.alt = 1;
		console.log("Attempting Alt Login...");
		loginSubmit(env.devLogin, true);
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
	var creds;
	var checkbox = document.getElementById("rememberInput");     	
	var loadStore = localStorage.getItem("AtmosphereLogin");
	if ((loadStore !== undefined) && (loadStore !== null)) {
		checkbox.checked = true;		
		try { 
			creds = JSON.parse(loadStore);
		}
		catch(e) {
			creds.user = "";
			creds.pass = "";
		}
		document.getElementById("username").value = creds.user;
		document.getElementById("password").value = creds.pass;
	}
	else {
		checkbox.checked = false;
		// if the checkbox is false - need to remove those creds
		removeCredentials();
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
