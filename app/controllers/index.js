if (! Alloy.Globals.Data.isLoggedIn()) {
	Alloy.createController('login');
} else {
	$.drawer.open();
	$.menu.setData([profileItem(), contactsItem(), eventsItem(), logoutItem()]);
}

function profileItem() {
	var view = Alloy.createController('profile').getView();

	var row = Titanium.UI.createTableViewRow({
		title : L('profile'),
		hasChild : true,
		leftImage : '/image/icon/32/home.png',
	});

	row.addEventListener('click', function(e) {
		$.drawer.setCenterWindow(view);
		$.drawer.closeLeftWindow();
	});

	return row;
}

function contactsItem() {
	var view = Alloy.createController('contact/list').getView();

	var row = Titanium.UI.createTableViewRow({
		title : L('contacts'),
		hasChild : true,
		leftImage : '/image/icon/32/contact.png',
	});

	row.addEventListener('click', function(e) {
		$.drawer.setCenterWindow(view);
		$.drawer.closeLeftWindow();
	});

	return row;
}

function eventsItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('events'),
		hasChild : true,
		leftImage : '/image/icon/32/event.png',
	});

	row.addEventListener('click', function(e) {
		alert(L('eventList'));
		$.drawer.closeLeftWindow();
	});

	return row;
}

function logoutItem() {
	var row = Titanium.UI.createTableViewRow({
		title : L('logout'),
		hasChild : true,
		leftImage : '/image/icon/32/logout.png',
	});

	row.addEventListener('click', function(e) {
		Alloy.Globals.Data.logout(function() {
			Alloy.createController('login');
		});
	});

	return row;
}