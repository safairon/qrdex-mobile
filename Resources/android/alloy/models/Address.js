exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            profileID: "INTEGER",
            pobox: "TEXT",
            address: "TEXT",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "address"
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

model = Alloy.M("address", exports.definition, []);

collection = Alloy.C("address", exports.definition, model);

exports.Model = model;

exports.Collection = collection;