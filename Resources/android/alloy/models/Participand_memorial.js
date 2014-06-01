exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            meetingID: "INTEGER",
            type: "INTEGER",
            url: "TEXT",
            urlPath: "TEXT",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "participand_memorial"
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

model = Alloy.M("participand_memorial", exports.definition, []);

collection = Alloy.C("participand_memorial", exports.definition, model);

exports.Model = model;

exports.Collection = collection;