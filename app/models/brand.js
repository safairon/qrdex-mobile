exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "name": "TEXT",
		    "logo": "TEXT",
		    "logoPath": "TEXT",
		    "backgroudColor": "TEXT",
			"persistanceStatus":"INTEGER"
		},
		adapter: {
			type: "sql",
			idAttribute : "id",
			collection_name: "brand"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};