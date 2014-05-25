exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "meetingID": "INTEGER",
		    "type": "INTEGER",
		    "url": "TEXT",
			"urlPath": "TEXT",
			"persistanceStatus":"INTEGER"
		},
		adapter: {
			type: "sql",
			idAttribute : "id",
			collection_name: "participand_memorial"
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