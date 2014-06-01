function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact/row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        hasChild: true,
        borderRadius: 5,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.picture = Ti.UI.createImageView({
        top: 10,
        left: 10,
        bottom: 10,
        width: 100,
        id: "picture"
    });
    $.__views.row.add($.__views.picture);
    $.__views.info = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 120,
        top: 20,
        layout: "vertical",
        id: "info"
    });
    $.__views.row.add($.__views.info);
    $.__views.name = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: "16dp"
        },
        color: "#bfad3f",
        id: "name"
    });
    $.__views.info.add($.__views.name);
    $.__views.job = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: "12dp"
        },
        id: "job"
    });
    $.__views.info.add($.__views.job);
    $.__views.company = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: "12dp"
        },
        id: "company"
    });
    $.__views.info.add($.__views.company);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if ($model) {
        $.row.id = $model.id;
        $.row.model = $model;
        $.row.title = $model.getFullName();
        var brand = Alloy.Globals.Data.getBrand($model);
        $.picture.image = $model.get("picturePath") || "/image/profile/no-avatar.png";
        $.name.text = $model.getFullName();
        $.job.text = $model.get("jobTitle");
        $.company.text = brand.get("name");
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;