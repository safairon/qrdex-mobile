exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            name: "TEXT",
            logo: "TEXT",
            logoPath: "TEXT",
            backgroudColor: "TEXT",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "brand"
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

model = Alloy.M("brand", exports.definition, []);

collection = Alloy.C("brand", exports.definition, model);

exports.Model = model;

exports.Collection = collection;