function Controller() {
    function __alloyId36(e) {
        if (e && e.fromAdapter) return;
        __alloyId36.opts || {};
        var models = whereFunction(__alloyId35);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId32 = models[i];
            __alloyId32.__transform = transformFunction(__alloyId32);
            var __alloyId34 = Alloy.createController("contact/row", {
                $model: __alloyId32,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId34.getViewEx({
                recurse: true
            }));
        }
        $.__views.contactTable.setData(rows);
    }
    function whereFunction(collection) {
        return query ? collection.search(query) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        return transform;
    }
    function tableClick(e) {
        var detailController = Alloy.createController("contact/detail", {
            $model: e.row.model
        });
        detailController.getView().open();
    }
    function tableLongPress(e) {
        if (e.row) {
            var model = e.row.model;
            var opts = {
                cancel: 3,
                options: [ L("view"), L("events"), L("delete"), L("cancel") ],
                selectedIndex: 0,
                destructive: 0,
                title: model.getFullName()
            };
            var dialog = Ti.UI.createOptionDialog(opts);
            dialog.addEventListener("click", function(e1) {
                var index = e1.index;
                switch (index) {
                  case 0:
                    tableClick(e);
                    break;

                  case 1:
                    alert("View Events");
                    break;

                  case 2:
                    Alloy.Globals.Data.deleteProfile(model.id);
                }
                dialog.hide();
                dialog = null;
            });
            dialog.show();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact/list";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contactList = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#ffffff",
        id: "contactList"
    });
    $.__views.contactList && $.addTopLevelView($.__views.contactList);
    $.__views.contactTable = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        top: 0,
        id: "contactTable"
    });
    $.__views.contactList.add($.__views.contactTable);
    var __alloyId35 = Alloy.Collections["Contacts"] || Contacts;
    __alloyId35.on("fetch destroy change add remove reset", __alloyId36);
    tableClick ? $.__views.contactTable.addEventListener("click", tableClick) : __defers["$.__views.contactTable!click!tableClick"] = true;
    tableLongPress ? $.__views.contactTable.addEventListener("longpress", tableLongPress) : __defers["$.__views.contactTable!longpress!tableLongPress"] = true;
    exports.destroy = function() {
        __alloyId35.off("fetch destroy change add remove reset", __alloyId36);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var contacts = Alloy.Collections.Contacts;
    var query;
    if (true && Ti.Platform.Android.API_LEVEL >= 11) {
        var search = Alloy.createController("util/searchview").getView();
        $.contactTable.searchAsChild = false;
        $.contactTable.search = search;
    } else $.contactTable.search = Alloy.createController("util/searchbar").getView();
    contacts.reset(contacts.models);
    __defers["$.__views.contactTable!click!tableClick"] && $.__views.contactTable.addEventListener("click", tableClick);
    __defers["$.__views.contactTable!longpress!tableLongPress"] && $.__views.contactTable.addEventListener("longpress", tableLongPress);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;