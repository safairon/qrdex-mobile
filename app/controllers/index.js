var profileView = Alloy.createController('profile').getView();
var contactsView = Alloy.createController('contact/list').getView();

if (! Alloy.Globals.Data.isLoggedIn()) {
	Alloy.createController('login');
} else { 
	$.drawer.open();
	
	$.menu.setData([profileItem(), contactsItem(), eventsItem(), settingItem(), logoutItem()]);
	
	changeCenterView(profileView);
}

function toggle(e) {
    var fn = 'toggle' + e.source.title + 'Window';
    $.drawer[fn]();
}

function toggleMenu(e){
	$.drawer.toggleLeftWindow();
}

function changeCenterView(view){
	$.drawer.closeLeftWindow();	
	$.contentView.add(view);
}

function profileItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('profile'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		changeCenterView(profileView);
	});

	return row;
}

function contactsItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('contacts'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		changeCenterView(contactsView);
	});

	return row;
}

function eventsItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('events'),
		hasChild : true
	});

	row.addEventListener('click', function(e) {
		changeCenterView(contactsView);
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