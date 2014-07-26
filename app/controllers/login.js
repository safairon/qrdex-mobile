if (OS_IOS) {
	Alloy.Globals.navgroup = $.login;
	$.login.open();
} else if (OS_ANDROID) {
	$.loginForm.getView().open();
} else {
	alert(L('unsupportedPlatform'));
}