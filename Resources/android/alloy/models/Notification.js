exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            meetingID: "INTEGER",
            context: "TEXT",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "notification"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("notification", exports.definition, []);

collection = Alloy.C("notification", exports.definition, model);

exports.Model = model;

exports.Collection = collection;