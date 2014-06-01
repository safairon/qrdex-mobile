function Controller() {
    function actionDelete() {
        var dialogs = require("alloy/dialogs");
        dialogs.confirm({
            title: deleteDialogTitle,
            message: deleteDialogMessage,
            callback: function() {
                Alloy.Globals.Data.deleteProfile(id);
                $.detail.close();
            }
        });
    }
    function actionEdit() {}
    function actionEventList() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact/detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        layout: "vertical",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: 50,
        width: Ti.UI.FULL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: "/image/header-bg.png",
        backgroundRepeat: true,
        id: "__alloyId8"
    });
    $.__views.detail.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontStyle: "bold"
        },
        color: "#817647",
        text: "undefined" != typeof $model.__transform["firstName"] ? $model.__transform["firstName"] : $model.get("firstName"),
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "5",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontStyle: "bold"
        },
        color: "#817647",
        text: "undefined" != typeof $model.__transform["lastName"] ? $model.__transform["lastName"] : $model.get("lastName"),
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId13"
    });
    $.__views.detail.add($.__views.__alloyId13);
    $.__views.buttonDelete = Ti.UI.createButton({
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
        title: L("deleteContact"),
        id: "buttonDelete"
    });
    $.__views.__alloyId13.add($.__views.buttonDelete);
    actionDelete ? $.__views.buttonDelete.addEventListener("click", actionDelete) : __defers["$.__views.buttonDelete!click!actionDelete"] = true;
    $.__views.__alloyId14 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "5",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.buttonEdit = Ti.UI.createButton({
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
        title: L("editContact"),
        id: "buttonEdit"
    });
    $.__views.__alloyId13.add($.__views.buttonEdit);
    actionEdit ? $.__views.buttonEdit.addEventListener("click", actionEdit) : __defers["$.__views.buttonEdit!click!actionEdit"] = true;
    $.__views.infoView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        color: "#bfbfbf",
        backgroundColor: "#eeeeee",
        id: "infoView",
        layout: "horizontal"
    });
    $.__views.detail.add($.__views.infoView);
    $.__views.picture = Ti.UI.createImageView({
        top: 20,
        left: 15,
        right: 15,
        bottom: 20,
        width: 70,
        id: "picture"
    });
    $.__views.infoView.add($.__views.picture);
    $.__views.infoBox = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "infoBox"
    });
    $.__views.infoView.add($.__views.infoBox);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId15"
    });
    $.__views.infoBox.add($.__views.__alloyId15);
    $.__views.mobile = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 10,
        right: 5,
        top: 15,
        bottom: 15,
        text: L("mobile"),
        id: "mobile"
    });
    $.__views.__alloyId15.add($.__views.mobile);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        text: ":",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 5,
        right: 10,
        top: 15,
        bottom: 15,
        text: "undefined" != typeof $model.__transform["mobilePhone"] ? $model.__transform["mobilePhone"] : $model.get("mobilePhone"),
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId18"
    });
    $.__views.infoBox.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        width: 24,
        height: 24,
        image: "/image/icon/email.png",
        left: 10,
        right: 5,
        top: 15,
        bottom: 15,
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 5,
        right: 10,
        top: 15,
        bottom: 15,
        text: "undefined" != typeof $model.__transform["email"] ? $model.__transform["email"] : $model.get("email"),
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.phoneView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        id: "phoneView",
        layout: "horizontal"
    });
    $.__views.detail.add($.__views.phoneView);
    $.__views.phoneImage = Ti.UI.createImageView({
        width: 64,
        height: 60,
        image: "/image/icon/phone.png",
        left: 20,
        right: 20,
        top: 40,
        bottom: 40,
        id: "phoneImage"
    });
    $.__views.phoneView.add($.__views.phoneImage);
    $.__views.phoneBox = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "phoneBox"
    });
    $.__views.phoneView.add($.__views.phoneBox);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        layout: "horizontal",
        top: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cdcdcd",
        color: "#cdcdcd",
        id: "__alloyId21"
    });
    $.__views.phoneBox.add($.__views.__alloyId21);
    $.__views.landLine = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 10,
        right: 5,
        top: 15,
        bottom: 15,
        text: L("landLine"),
        id: "landLine"
    });
    $.__views.__alloyId21.add($.__views.landLine);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        text: ":",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 5,
        right: 10,
        top: 15,
        bottom: 15,
        text: "undefined" != typeof $model.__transform["landLinePhone"] ? $model.__transform["landLinePhone"] : $model.get("landLinePhone"),
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        layout: "horizontal",
        top: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cdcdcd",
        color: "#cdcdcd",
        id: "__alloyId24"
    });
    $.__views.phoneBox.add($.__views.__alloyId24);
    $.__views.business = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 10,
        right: 5,
        top: 15,
        bottom: 15,
        text: L("business"),
        id: "business"
    });
    $.__views.__alloyId24.add($.__views.business);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        text: ":",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 5,
        right: 10,
        top: 15,
        bottom: 15,
        text: "undefined" != typeof $model.__transform["businessPhone"] ? $model.__transform["businessPhone"] : $model.get("businessPhone"),
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.eventListView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        left: 5,
        right: 5,
        borderRadius: 10,
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
                color: "#2ee9ff",
                offset: 0
            }, {
                color: "#00bbd1",
                offset: 1
            } ]
        },
        id: "eventListView",
        layout: "horizontal"
    });
    $.__views.detail.add($.__views.eventListView);
    actionEventList ? $.__views.eventListView.addEventListener("click", actionEventList) : __defers["$.__views.eventListView!click!actionEventList"] = true;
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        image: "/image/icon/event.png",
        id: "__alloyId27"
    });
    $.__views.eventListView.add($.__views.__alloyId27);
    $.__views.eventListLabel = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontStyle: "bold"
        },
        id: "eventListLabel"
    });
    $.__views.eventListView.add($.__views.eventListLabel);
    $.__views.companyView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        id: "companyView",
        layout: "horizontal"
    });
    $.__views.detail.add($.__views.companyView);
    $.__views.companyLogo = Ti.UI.createImageView({
        height: 60,
        top: 30,
        left: 20,
        right: 20,
        id: "companyLogo"
    });
    $.__views.companyView.add($.__views.companyLogo);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId28"
    });
    $.__views.companyView.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        layout: "vertical",
        top: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cdcdcd",
        color: "#cdcdcd",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.companyLabel = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
        text: L("workAt"),
        id: "companyLabel"
    });
    $.__views.__alloyId29.add($.__views.companyLabel);
    $.__views.companyName = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: 10,
        right: 10,
        top: 5,
        bottom: 10,
        color: "#6c6c6c",
        id: "companyName"
    });
    $.__views.__alloyId29.add($.__views.companyName);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FULL,
        layout: "vertical",
        top: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cdcdcd",
        color: "#cdcdcd",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.jobLabel = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: 10,
        right: 10,
        top: 5,
        bottom: 5,
        text: L("job"),
        id: "jobLabel"
    });
    $.__views.__alloyId30.add($.__views.jobLabel);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: 10,
        right: 10,
        top: 5,
        bottom: 10,
        color: "#6c6c6c",
        text: "undefined" != typeof $model.__transform["jobTitle"] ? $model.__transform["jobTitle"] : $model.get("jobTitle"),
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var id, brand, deleteDialogTitle, deleteDialogMessage;
    arguments[0] || {};
    if ($model) {
        deleteDialogTitle = String.format(L("deleteDialogTitle"), L("contact"));
        deleteDialogMessage = String.format(L("deleteDialogMessage"), $model.getFullName());
        id = $model.id;
        brand = Alloy.Globals.Data.getBrand($model);
        $.picture.image = $model.get("picturePath") || "/image/profile/no-avatar.png";
        $.eventListLabel.text = String.format(L("viewEvents"), 0);
        $.companyLogo.image = brand.get("companyLogo") || "/image/brand/no-company.png";
        $.companyName.text = brand.get("name");
    }
    __defers["$.__views.buttonDelete!click!actionDelete"] && $.__views.buttonDelete.addEventListener("click", actionDelete);
    __defers["$.__views.buttonEdit!click!actionEdit"] && $.__views.buttonEdit.addEventListener("click", actionEdit);
    __defers["$.__views.eventListView!click!actionEventList"] && $.__views.eventListView.addEventListener("click", actionEventList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;