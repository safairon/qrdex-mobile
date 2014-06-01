exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            name: "TEXT",
            startDate: "TEXT",
            endDate: "TEXT",
            location: "TEXT",
            address: "TEXT",
            status: "INTEGER",
            description: "TEXT",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "event"
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

model = Alloy.M("event", exports.definition, []);

collection = Alloy.C("event", exports.definition, model);

exports.Model = model;

exports.Collection = collection;