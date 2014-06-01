exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            firstName: "TEXT",
            middelName: "TEXT",
            lastName: "TEXT",
            email: "TEXT",
            activityStatus: "INTEGER",
            profileStatus: "INTEGER",
            picture: "TEXT",
            picturePath: "TEXT",
            companyName: "TEXT",
            brandID: "INTEGER",
            companyLogo: "TEXT",
            companyLogoPath: "TEXT",
            jobTitle: "TEXT",
            landLinePhone: "TEXT",
            businessPhone: "TEXT",
            mobilePhone: "TEXT",
            type: "INTEGER",
            persistanceStatus: "INTEGER"
        },
        adapter: {
            type: "sql",
            idAttribute: "id",
            collection_name: "profile"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            getFullName: function() {
                return this.get("firstName") + " " + this.get("lastName");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("profile", exports.definition, []);

collection = Alloy.C("profile", exports.definition, model);

exports.Model = model;

exports.Collection = collection;