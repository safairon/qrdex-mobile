//
// Action handlers
//
function actionSignup(e) {
	var errorMessage = validation();
	if (errorMessage != '') {
		var dialog = Ti.UI.createAlertDialog({
			message : errorMessage,
			ok : 'OK',
			title : L('actionRequired')
		}).show();
	} else {
		$.activityIndicator.show();
		$.buttonSignup.enabled = false;

		var AppServer = Alloy.Globals.Server;
		var params = {
			firstName : $.inputFirstName.value,
			lastName : $.inputLastName.value,
			email : $.inputEmail.value,
			password : $.inputPassword.value,
			confirmPassword : $.inputConfirmPassword.value
		};
		AppServer.signup(params, function(response) {
			$.activityIndicator.hide();
			$.buttonSignup.enabled = true;

			if (response.result === 'ok') {
				$.signupForm.remove($.signupFormView);
				$.activationView.setVisible(true);
			} else {
				$.inputPassword.value = '';
				$.inputConfirmPassword.value = '';
				alert(L('error', 'Error') + ':\n' + response.message);
			}
		});
	}
}

function actionClose(e) {
	$.signupForm.close();
}

function validation() {
	if (!$.inputFirstName.value || !$.inputLastName.value || !$.inputEmail.value || !$.inputPassword.value || !$.inputConfirmPassword.value) {
		return L('formMissingFields');
	} else {
		var emailFilter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (!emailFilter.test($.inputEmail.value)) {
			return L('invalidEmail');
		} else if ($.inputPassword.value != $.inputConfirmPassword.value) {
			return L('invalidConfirmPassword');
		}
	}
	return '';
}

var ui = require('ui');
ui.autoHideKeybord($.signupView, [$.inputFirstName, $.inputLastName, $.inputEmail, $.inputPassword, $.inputConfirmPassword]);

$.inputConfirmPassword.addEventListener('focus', function(e) {
	$.signupView.scrollTo(0,80);
}); 