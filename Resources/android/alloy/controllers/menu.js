function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#ffffff",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.contactList = Ti.UI.createButton({
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: 15,
        id: "contactList"
    });
    $.__views.menu.add($.__views.contactList);
    openContactList ? $.__views.contactList.addEventListener("click", openContactList) : __defers["$.__views.contactList!click!openContactList"] = true;
    $.__views.eventList = Ti.UI.createButton({
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: 15,
        id: "eventList"
    });
    $.__views.menu.add($.__views.eventList);
    openEventList ? $.__views.eventList.addEventListener("click", openEventList) : __defers["$.__views.eventList!click!openEventList"] = true;
    $.__views.logout = Ti.UI.createButton({
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: 15,
        id: "logout"
    });
    $.__views.menu.add($.__views.logout);
    actionLogout ? $.__views.logout.addEventListener("click", actionLogout) : __defers["$.__views.logout!click!actionLogout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.contactList!click!openContactList"] && $.__views.contactList.addEventListener("click", openContactList);
    __defers["$.__views.eventList!click!openEventList"] && $.__views.eventList.addEventListener("click", openEventList);
    __defers["$.__views.logout!click!actionLogout"] && $.__views.logout.addEventListener("click", actionLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;