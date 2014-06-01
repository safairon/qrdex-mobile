function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.contactDetail = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#ffffff",
        id: "contactDetail"
    });
    $.__views.contactDetail && $.addTopLevelView($.__views.contactDetail);
    $.__views.contactid = Ti.UI.createLabel({
        id: "contactid"
    });
    $.__views.contactDetail.add($.__views.contactid);
    $.__views.firstname = Ti.UI.createLabel({
        id: "firstname"
    });
    $.__views.contactDetail.add($.__views.firstname);
    $.__views.lastname = Ti.UI.createLabel({
        id: "lastname"
    });
    $.__views.contactDetail.add($.__views.lastname);
    $.__views.email = Ti.UI.createLabel({
        id: "email"
    });
    $.__views.contactDetail.add($.__views.email);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var profile = Alloy.Models.Profile;
    if (profile) {
        $.contactid.text = profile.id;
        $.email.text = profile.get("email");
        $.firstname.text = profile.get("firstname");
        $.lastname.text = profile.get("lastname");
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;