exports.isLoggedIn = function() {
	return loggedIn;
};

exports.login = function(username, password, callback) {
	Alloy.Globals.Server.login(username, password, function(res) {
		if (res.result === 'ok') {
			loggedIn = true;
			Ti.App.Properties.setString('username', username);
			Ti.App.Properties.setString('password', password);
			Alloy.Globals.Sync.update(function() {
				init();
				callback({
					result : 'ok'
				});
			});
		} else {
			callback(res);
		}
	});
};

exports.logout = function(callback) {
	loggedIn = false;
	
	Alloy.Globals.Server.logout();
	
	Alloy.Globals.Sync.stopSyncronization();
	Alloy.Globals.Sync.clearDatabase();
	
	Ti.App.Properties.removeProperty('username');
	Ti.App.Properties.removeProperty('password');
	Ti.App.Properties.removeProperty('lastUpdate');
	
	callback();
};

exports.getBrand = function(profile) {
	var brandID = profile.get('brandID');
	if (brandID && brands.get(brandID)) {
		return brands.get(brandID);
	} else {
		var brand = Alloy.createModel('brand', {
			name : profile.get('companyName'),
			logo : profile.get('companyLogo')
		});
		return brand;
	}
};

exports.deleteProfile = function(profileID) {
	var profile = contacts.get(profileID);
	var markAsDelete = profile.get('type') != Alloy.Constants.ProfileType.L1;
	deleteModel(profileID, contacts, markAsDelete);
	deleteModelsByParentId(profileID, 'profileID', links, markAsDelete);
	deleteModelsByParentId(profileID, 'profileID', addresses, markAsDelete);
};

var loggedIn = false;

var profile = Alloy.Models.Profile;
var links = Alloy.Collections.Links;
var events = Alloy.Collections.Events;
var addresses = Alloy.Collections.Addresses;
var contacts = Alloy.Collections.Contacts;
var brands = Alloy.Collections.Brands;
var meetings = Alloy.Collections.Meetings;
var notifications = Alloy.Collections.Notifications;
var participandMemorials = Alloy.Collections.ParticipandMemorials;

var event_table = events.config.adapter.collection_name;
var profile_table = profile.config.adapter.collection_name;
var link_table = links.config.adapter.collection_name;
var brand_table = brands.config.adapter.collection_name;
var address_table = addresses.config.adapter.collection_name;
var meeting_table = meetings.config.adapter.collection_name;
var notification_table = notifications.config.adapter.collection_name;
var participand_memorial_table = participandMemorials.config.adapter.collection_name;

function init() {
	if (Ti.App.Properties.getString('username')) {
		loggedIn = true;

		loadProfile();
		loadBrands();
		loadLinks();
		loadEvents();
		loadContacts();
		loadAddresses();
		loadnMeetings();
		
		Alloy.Globals.Sync.startSyncronization();
	}
}

function loadProfile() {
	var email = Ti.App.Properties.getString('username');

	profile.fetch({
		query : {
			statement : 'SELECT * from ' + profile_table + ' where email = ?',
			params : [email]
		}
	});
}

function loadBrands() {
	brands.fetch({
		query : 'SELECT * from ' + brand_table
	});
}

function loadContacts() {
	var email = Ti.App.Properties.getString('username');

	contacts.fetch({
		query : {
			statement : 'SELECT * from ' + profile_table + ' where email != ? and persistanceStatus != ?',
			params : [email, Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadLinks() {
	links.fetch({
		query : {
			statement : 'SELECT * from ' + link_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadEvents() {
	events.fetch({
		query : {
			statement : 'SELECT * from ' + event_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadAddresses() {
	addresses.fetch({
		query : {
			statement : 'SELECT * from ' + address_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadnMeetings() {
	meetings.fetch({
		query : {
			statement : 'SELECT * from ' + meeting_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadnNotifications() {
	notifications.fetch({
		query : {
			statement : 'SELECT * from ' + notification_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function loadnParticipandMemorials() {
	participandMemorials.fetch({
		query : {
			statement : 'SELECT * from ' + participand_memorial_table + ' where persistanceStatus != ?',
			params : [Alloy.Constants.PersistanceStatus.DELETED]
		}
	});
}

function deleteModel(id, collection, markAsDelete) {
	var model = collection.get(id);
	if (model) {
		collection.remove(model);
		if (markAsDelete) {
			model.set({
				persistanceStatus : Alloy.Constants.PersistanceStatus.DELETED
			});
			model.save();
		} else {
			model.destroy();
		}
	}
}

function deleteModelsByParentId(parentId, parentField, collection, markAsDelete) {
	var where = {};
	where[parentField, parentId];

	collection.chain().where(where).forEach(function(model) {
		deleteModel(model.id, collection);
	});
}

init();
