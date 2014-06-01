function Controller() {
    function profileItem() {
        var row = Titanium.UI.createTableViewRow({
            title: L("profile"),
            hasChild: true,
            leftImage: "/image/icon/32/home.png"
        });
        row.addEventListener("click", function() {
            $.drawer.setCenterWindow(profileView);
            $.drawer.closeLeftWindow();
        });
        return row;
    }
    function contactsItem() {
        var row = Titanium.UI.createTableViewRow({
            title: L("contacts"),
            hasChild: true,
            leftImage: "/image/icon/32/contact.png"
        });
        row.addEventListener("click", function() {
            $.drawer.setCenterWindow(contactsView);
            $.drawer.closeLeftWindow();
        });
        return row;
    }
    function eventsItem() {
        var row = Titanium.UI.createTableViewRow({
            title: L("events"),
            hasChild: true,
            leftImage: "/image/icon/32/event.png"
        });
        row.addEventListener("click", function() {
            $.drawer.closeLeftWindow();
        });
        return row;
    }
    function logoutItem() {
        var row = Titanium.UI.createTableViewRow({
            title: L("logout"),
            hasChild: true,
            leftImage: "/image/icon/32/logout.png"
        });
        row.addEventListener("click", function() {
            Alloy.Globals.Data.logout(function() {
                Alloy.createController("login");
            });
        });
        return row;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = require("xp.ui").createWindow({
        backgroundColor: "#fff",
        role: "leftWindow",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.menu = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        top: 0,
        id: "menu"
    });
    $.__views.__alloyId0.add($.__views.menu);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am center",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        fullscreen: true,
        navBarHidden: true,
        leftDrawerWidth: "200",
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        id: "drawer",
        children: [ $.__views.__alloyId0, $.__views.__alloyId1, $.__views.__alloyId6 ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var profileView = Alloy.createController("profile").getView();
    var contactsView = Alloy.createController("contact/list").getView();
    if (Alloy.Globals.Data.isLoggedIn()) {
        $.drawer.open();
        $.menu.setData([ profileItem(), contactsItem(), eventsItem(), logoutItem() ]);
        $.drawer.setCenterWindow(profileView);
    } else Alloy.createController("login");
    Ti.App.addEventListener("openMenu", function() {
        $.drawer.toggleLeftWindow();
    });
    __defers["$.__views.__alloyId4!click!toggle"] && $.__views.__alloyId4.addEventListener("click", toggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;