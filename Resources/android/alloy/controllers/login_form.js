function Controller() {
    function actionLogin() {
        if ($.inputUsername.value && $.inputPassword.value) {
            $.activityIndicator.show();
            $.buttonLogin.enabled = false;
            var AppData = Alloy.Globals.Data;
            AppData.login($.inputUsername.value, $.inputPassword.value, function(response) {
                $.activityIndicator.hide();
                $.buttonLogin.enabled = true;
                if ("ok" === response.result) {
                    Alloy.createController("index");
                    $.loginForm.close();
                    $.loginForm = null;
                } else {
                    $.inputPassword.value = "";
                    alert(L("error", "Error") + ":\n" + response.msg);
                }
            });
        } else Ti.UI.createAlertDialog({
            message: L("formMissingFields"),
            ok: "OK",
            title: L("actionRequired")
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login_form";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginForm = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        title: L("login"),
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100%"
            },
            colors: [ {
                color: "#f29700",
                offset: 0
            }, {
                color: "#f1be01",
                offset: 1
            } ]
        },
        id: "loginForm"
    });
    $.__views.loginForm && $.addTopLevelView($.__views.loginForm);
    $.__views.loginView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "loginView"
    });
    $.__views.loginForm.add($.__views.loginView);
    $.__views.logoView = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FULL,
        top: 30,
        backgroundColor: "#FFFFFF",
        id: "logoView"
    });
    $.__views.loginView.add($.__views.logoView);
    $.__views.logoImage = Ti.UI.createImageView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 10,
        backgroundColor: "transparent",
        image: "/image/logo.png",
        id: "logoImage"
    });
    $.__views.logoView.add($.__views.logoImage);
    $.__views.inputUsername = Ti.UI.createTextField({
        top: 10,
        width: "60%",
        color: "#ba932a",
        borderColor: "#ba932a",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        hintText: L("username"),
        id: "inputUsername"
    });
    $.__views.loginView.add($.__views.inputUsername);
    $.__views.inputPassword = Ti.UI.createTextField({
        top: 10,
        width: "60%",
        color: "#ba932a",
        borderColor: "#ba932a",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        passwordMask: true,
        hintText: L("password"),
        id: "inputPassword"
    });
    $.__views.loginView.add($.__views.inputPassword);
    $.__views.buttonLogin = Ti.UI.createButton({
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: 15,
        color: "#ffffff",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100%"
            },
            colors: [ {
                color: "#37c8ff",
                offset: 0
            }, {
                color: "#0093c9",
                offset: 1
            } ]
        },
        title: L("login"),
        id: "buttonLogin"
    });
    $.__views.loginView.add($.__views.buttonLogin);
    actionLogin ? $.__views.buttonLogin.addEventListener("click", actionLogin) : __defers["$.__views.buttonLogin!click!actionLogin"] = true;
    $.__views.noAccount = Ti.UI.createLabel({
        font: {
            fontSize: "10dp"
        },
        text: L("noAccountTitle"),
        color: "#787876",
        id: "noAccount"
    });
    $.__views.loginView.add($.__views.noAccount);
    $.__views.signUp = Ti.UI.createLabel({
        font: {
            fontStyle: "bold"
        },
        text: L("signUpTitle"),
        color: "#5e5e5d",
        id: "signUp"
    });
    $.__views.loginView.add($.__views.signUp);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 20,
        style: Ti.UI.ActivityIndicatorStyle.PLAIN,
        id: "activityIndicator"
    });
    $.__views.loginView.add($.__views.activityIndicator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loginForm.addEventListener("open", function() {
        if ($.loginForm.activity) {
            var activity = $.loginForm.activity;
            Alloy.Globals.Android.Api >= 11 && activity.actionBar && (activity.actionBar.title = L("login"));
        }
    });
    $.loginForm.addEventListener("android:back", function() {
        var activity = Ti.Android.currentActivity;
        activity.finish();
    });
    __defers["$.__views.buttonLogin!click!actionLogin"] && $.__views.buttonLogin.addEventListener("click", actionLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;