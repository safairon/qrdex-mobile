var syncronizing = false;
var syncronizationId;

var collectionMap = {
	"profile" : Alloy.Collections.Contacts,
	"link" : Alloy.Collections.Links,
	"event" : Alloy.Collections.Events,
	"address" : Alloy.Collections.Addresses,
	"brand" : Alloy.Collections.Brands,
	"meeting" : Alloy.Collections.Meetings,
	"notification" : Alloy.Collections.Notifications,
	"participand_memorial" : Alloy.Collections.ParticipandMemorials
};

exports.startSyncronization = function() {
	syncronizationId = setInterval(syncronization, Ti.App.Properties.getInt('syncInterval', 10000));
};

exports.stopSyncronization = function() {
	if (syncronizationId) {
		clearInterval(syncronizationId);
	}
};

exports.clearDatabase = function() {
	_.each(collectionMap, function(collection) {
		collection.reset();
		var db = Ti.Database.open(collection.config.adapter.db_name);
		var sql = 'DELETE FROM ' + collection.config.adapter.collection_name;
		db.execute('BEGIN');
		db.execute(sql);
		Ti.API.info(sql);
		db.execute('COMMIT');
		db.close();
	});

};

exports.update = function(callback) {
	var lastUpdate = Ti.App.Properties.getInt('lastUpdate', 0);
	Alloy.Globals.Server.update(lastUpdate, function(res) {
		Ti.App.Properties.setInt('lastUpdate', res.timestamp);
		applyChangeList(res.changeList);
		if (callback) {
			callback();
		}
	});
};

function syncronization() {
	if (Alloy.Globals.Data.isLoggedIn() && Ti.Network.online && !syncronizing) {
		Ti.API.info("Syncronization started.");
		syncronizing = true;
		exports.update(function() {
			commit(function() {
				Ti.API.info("Syncronization finished.");
				syncronizing = false;
			});
		});
	}
};

function commit(callback) {
	Alloy.Globals.Server.commit(getChangeList(), function(res) {
		applyChangeList(res.changeList);
		if (callback) {
			callback();
		}
	});
}

function getChangeList() {
	var changeList = {
		"delete" : {},
		"update" : {},
		"new" : {}
	};

	_.each(collectionMap, function(collection, table) {
		var ids = [];
		var db = Ti.Database.open(collection.config.adapter.db_name);
		var rs = db.execute('SELECT id FROM ' + collection.config.adapter.collection_name + ' where persistanceStatus = ' + Alloy.Constants.PersistanceStatus.DELETED);
		while (rs.isValidRow()) {
			ids.push(rs.fieldByName('id'));
			rs.next();
		}
		rs.close();
		db.close();
		changeList["delete"][table] = ids;
	});

	_.each(collectionMap, function(collection, table) {
		changeList["update"][table] = _.map(collection.where({
			persistanceStatus : Alloy.Constants.PersistanceStatus.UPDATE
		}), function(model) {
			return model.attributes;
		});
	});

	_.each(collectionMap, function(collection, table) {
		changeList["new"][table] = _.map(collection.where({
			persistanceStatus : Alloy.Constants.PersistanceStatus.NEW
		}), function(model) {
			return model.attributes;
		});
	});

	return changeList;
}

function applyChangeList(changeList) {
	if (changeList["delete"]) {
		clearChangeList(changeList["delete"]);
	}

	if (changeList["update"]) {
		updateChangeList(changeList["update"]);
	}
}

function clearChangeList(changeList) {
	_.each(changeList, function(idList, table) {
		var collection = collectionMap[table];
		if (collection) {
			_.each(idList, function(id) {
				collection.remove(id);
			});

			var db = Ti.Database.open(collection.config.adapter.db_name);
			var sql = 'DELETE FROM ' + collection.config.adapter.collection_name + ' where id in (?)';
			db.execute('BEGIN');
			db.execute(sql, idList.join());
			db.execute('COMMIT');
			db.close();
		} else {
			Ti.API.error('there is no collection for ' + table);
		}
	});

}

function updateChangeList(changeList) {
	_.each(changeList, function(list, table) {
		var collection = collectionMap[table];
		if (collection) {
			collection.add(list, {
				merge : true
			});
			collection.each(function(model) {
				model.set('persistanceStatus', Alloy.Constants.PersistanceStatus.NORMAL);
				model.save();
			});
		} else {
			Ti.API.error('there is no collection for ' + table);
		}
	});
}