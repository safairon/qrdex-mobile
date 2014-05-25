//
// Check for expected controller args
//
var args = arguments[0] || {};

var contacts = Alloy.Collections.Contacts;

var query;

// Filter the fetched collection before rendering. Don't return the
// collection itself, but instead return an array of models
// that you would like to render.
function whereFunction(collection) {
	return !query ? collection.models : collection.search(query);
}

// Perform transformations on each model as it is processed. Since
// these are only transformations for UI representation, we don't
// actually want to change the model. Instead, return an object
// that contains the fields you want to use in your bindings. The
// easiest way to do that is to clone the model and return its
// attributes with the toJSON() function.
function transformFunction(model) {
	var transform = model.toJSON();
	return transform;
}

//
// Action Handlers
//

// Table Clicks
function tableClick(e) {
	var detailController = Alloy.createController('contact/detail', {
		$model : e.row.model
	});

	detailController.getView().open();
}

// Long clicks open the options menu, enabling us to view, delete, or cancel the row item
function tableLongPress(e) {
	var opts = {
		cancel : 3,
		options : [L('view'), L('delete'), L('event'), L('cencel')],
		selectedIndex : 3,
		destructive : 0,
		title : e.row.model.getFullName()
	};
	var dialog = Ti.UI.createOptionDialog(opts).show();
	dialog.addEventListener('click', function(e) {
		switch(e.index) {
			case 0:
				var detailController = Alloy.createController('contact/detail', {
					$model : e.row.model
				});
				detailController.getView().open();
				break;
			case 1:
				Alloy.Globals.Data.deleteProfile(e.row.id);
				break;
			case 2:
				alert(L('eventList'));
		}
		dialog.hide();
	});
}

if (OS_ANDROID && Ti.Platform.Android.API_LEVEL >= 11) {
	// use action bar search view
	var search = Alloy.createController("util/searchview").getView();
	$.contactTable.searchAsChild = false;
	$.contactTable.search = search;
} else {
	// use a search bar
	$.contactTable.search = Alloy.createController("util/searchbar").getView();
}

//create table toolbar
var toolbarView = Ti.UI.createView({
	width : Ti.UI.FULL,
	height : Ti.UI.SIZE,
});
var addButton = Ti.UI.createImageView({
	right : 0,
	width : 32,
	height : 32,
	image : '/image/icon/32/add.png',
	width : Ti.UI.SIZE
});
addButton.addEventListener('click', function() {
	alert(L('addContact'));
});
toolbarView.add(addButton);
$.contactTable.header = toolbarView;
