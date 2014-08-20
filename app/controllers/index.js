var profileView = Alloy.createController('profile').getView();
var contactsView = Alloy.createController('contact/list').getView();

if (! Alloy.Globals.Data.isLoggedIn()) {
	Alloy.createController('login');
} else {
	$.drawer.open();
	
	$.menu.setData([profileItem(), contactsItem(), eventsItem(), logoutItem()]);
	
	$.drawer.setCenterWindow(profileView);
}

function toggle(e) {
    var fn = 'toggle' + e.source.title + 'Window';
    $.drawer[fn]();
}

Ti.App.addEventListener('openMenu', function(e) {
	$.drawer.toggleLeftWindow();
});

function profileItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('profile'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		$.drawer.setCenterWindow(profileView);
		$.drawer.closeLeftWindow();
	});

	return row;
}

function contactsItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('contacts'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		$.drawer.setCenterWindow(contactsView);
		$.drawer.closeLeftWindow();
	});

	return row;
}

function eventsItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('events'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		$.drawer.closeLeftWindow();
	});

	return row;
}

function settingItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('setting'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		$.drawer.closeLeftWindow();
	});

	return row;
}

function logoutItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('logout'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		Alloy.Globals.Data.logout(function() {
			Alloy.createController('login');
		});
	});

	return row;
}