//
// Action handlers
//
function actionLogin(e) {
	if (!$.inputUsername.value || !$.inputPassword.value) {
		var dialog = Ti.UI.createAlertDialog({
			message : L('formMissingFields'),
			ok : 'OK',
			title : L('actionRequired')
		}).show();
	} else {
		$.activityIndicator.show();
		$.buttonLogin.enabled = false;

		var AppData = Alloy.Globals.Data;
		AppData.login($.inputUsername.value, $.inputPassword.value, function(response) {
			$.activityIndicator.hide();
			$.buttonLogin.enabled = true;

			if (response.result === 'ok') {
				Alloy.createController('index');

				if (OS_IOS) {
					Alloy.Globals.navgroup.close();
					Alloy.Globals.navgroup = null;
				} else if (OS_ANDROID) {
					$.loginForm.close();
					$.loginForm = null;
				}
			} else {
				$.inputPassword.value = '';
				alert(L('error', 'Error') + ':\n' + response.msg);
			}
		});
	}
}

function showSignup() {
	var xpng = require('xpng');
	xpng.openWin(Alloy.Globals.navgroup, 'signup')
}

//
// Navigation
//

// Android
if (OS_ANDROID) {
	$.loginForm.addEventListener('open', function() {
		if ($.loginForm.activity) {
			var activity = $.loginForm.activity;

			// Action Bar
			if (Alloy.Globals.Android.Api >= 11 && activity.actionBar) {
				activity.actionBar.title = L('login');
			}
		}
	});

	// Back Button
	$.loginForm.addEventListener('android:back', function() {
		var activity = Ti.Android.currentActivity;
		activity.finish();
	});
}