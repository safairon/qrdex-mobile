function createRequest(method, url, params, callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        if (callback) {
            res = this.responseText ? JSON.pars(this.responseText) : {};
            callback(res);
        }
    };
    xhr.onerror = function() {
        if (401 == this.status) url != logintUrl ? reLogin(function() {
            sendRequest(xhr, method, url, params);
        }) : Ti.fireEvent("AuthenticationError"); else {
            Ti.API.error(this.responseText);
            callback({
                result: "error",
                message: callback
            });
        }
    };
    xhr.timeout = 5e3;
    sendRequest(xhr, method, url, params);
    return xhr;
}

function sendRequest(xhr, method, url, params) {
    xhr.open(method, params);
    xhr.send();
}

function reLogin() {
    var params = {
        username: Ti.App.Properties.getString("username"),
        password: Ti.App.Properties.getString("password")
    };
    createXHR("POST", logintUrl, params, callback);
}

var host = "http://178.162.207.160:8080/ws/";

var logintUrl = host + "login";

var logoutUrl = host + "logout";

var updateUrl = host + "app/update";

var commitUrl = host + "app/commit";

var uploadUrl = host + "app/upload";

exports.login = function(username, password, callback) {
    var params = {
        username: username,
        password: password
    };
    createRequest("POST", logintUrl, params, callback);
};

exports.logout = function() {
    var xhr = Ti.Network.createHTTPClient();
    sendRequest(xhr, "POST", logoutUrl);
};

exports.update = function(timestamp, callback) {
    var params = {
        timestamp: timestamp
    };
    createRequest("POST", updateUrl, params, callback);
};

exports.commit = function(changeList, callback) {
    createRequest("POST", commitUrl, changeList, callback);
};

exports.upload = function(path, model, field, id, callback) {
    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, imagePath);
    var data = file.read();
    var params = {
        id: id,
        model: model,
        field: field,
        data: data
    };
    createRequest("POST", uploadUrl, params, callback);
};