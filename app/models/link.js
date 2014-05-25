exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "profileID": "INTEGER",
		    "type": "INTEGER",
		    "url": "TEXT",
			"persistanceStatus":"INTEGER"
		},
		adapter: {
			type: "sql",
			idAttribute : "id",
			collection_name: "link"
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