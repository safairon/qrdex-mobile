exports.autoHideKeybord = function(view, textFields) {
	view.addEventListener('click', function(e) {
		if (!_.contains(textFields, e.source)) {
			if (Ti.Platform.osname == 'android') {
				Ti.UI.Android.hideSoftKeyboard();
			} else {
				_.each(textFields, function(textField) {
					textField.blur();
				});
			}
		}
	});
};
