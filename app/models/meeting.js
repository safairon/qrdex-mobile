exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "eventID": "INTEGER",
		    "context": "TEXT",
		    "hasReminder": "INTEGER",
			"persistanceStatus":"INTEGER"
		},
		adapter: {
			type: "sql",
			idAttribute : "id",
			collection_name: "meeting"
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