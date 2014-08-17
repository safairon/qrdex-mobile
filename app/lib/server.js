var host = 'http://37.220.11.236:8180/ws/';
var signupUrl = host + 'profile';
var logintUrl = host + 'authentication/login';
var logoutUrl = host + 'logout';
var updateUrl = host + 'app/update';
var commitUrl = host + 'app/commit';
var uploadUrl = host + 'app/upload';

exports.signup = function(params, callback) {
	createRequest('POST', signupUrl, params, callback);
};

exports.login = function(username, password, callback) {
	var params = {
		username : username,
		password : password
	};

	createRequest('POST', logintUrl, params, callback);
};

exports.logout = function() {
	var xhr = Ti.Network.createHTTPClient();
	sendRequest(xhr, 'POST', logoutUrl);
};

exports.update = function(timestamp, callback) {
	var params = {
		timestamp : timestamp
	};

	createRequest('POST', updateUrl, params, callback);
};

exports.commit = function(changeList, callback) {
	createRequest('POST', commitUrl, changeList, callback);
};

//Uploading images of profiles, events, meeting , ...
exports.upload = function(path, model, field, id, callback) {
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, imagePath);
	var data = file.read();
	var params = {
		id : id,
		model : model,
		field : field,
		data : data
	};

	createRequest('POST', uploadUrl, params, callback);
};

function createRequest(method, url, params, callback) {
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function(e) {
		if (callback) {
			var response = {
				result : 'ok'
			};
			callback(response);
		}
	};

	xhr.onerror = function(e) {
		if (this.status == 401) {
			if (url != logintUrl) {
				reLogin(function() {
					sendRequest(xhr, method, url, params);
				});
			} else {
				Ti.fireEvent('AuthenticationError');
				callback({
					result : "error"
				});
			}
		} else {
			Ti.API.error(this.responseText);
			var response;
			try {
				response = JSON.parse(this.responseText);
			} catch(e) {
				response = {
					code : this.status,
					description : 'Unknown Error'
				};
			}
			callback({
				result : "error",
				code : response.code,
				message : response.description
			});
		}
	};

	xhr.timeout = 20000;

	sendRequest(xhr, method, url, params);

	return xhr;
}

function reLogin(callbacl) {
	var params = {
		username : Ti.App.Properties.getString('username'),
		password : Ti.App.Properties.getString('password')
	};

	var xhr = createXHR('POST', logintUrl, params, callback);
};

function sendRequest(xhr, method, url, params) {
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Cache-Control", "no-cache");
	xhr.send(JSON.stringify(params));
};
