exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            eventID: "INTEGER",
            context: "TEXT",
            hasReminder: "INTEGER",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "meeting"
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

model = Alloy.M("meeting", exports.definition, []);

collection = Alloy.C("meeting", exports.definition, model);

exports.Model = model;

exports.Collection = collection;