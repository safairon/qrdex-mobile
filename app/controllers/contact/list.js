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
	if (e.row) {
		var model = e.row.model;
		var opts = {
			cancel : 3,
			options : [L('view'), L('events'), L('delete'), L('cancel')],
			selectedIndex : 0,
			destructive : 0,
			title : model.getFullName()
		};
		var dialog = Ti.UI.createOptionDialog(opts);
		dialog.addEventListener('click', function(e1) {
			var index = e1.index;
			switch(index) {
				case 0:
					tableClick(e);
					break;
				case 1:
					alert('View Events');
					break;
				case 2:
					Alloy.Globals.Data.deleteProfile(model.id);
			}
			dialog.hide();
			dialog = null;
		});
		dialog.show();
	}
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

contacts.reset(contacts.models);
