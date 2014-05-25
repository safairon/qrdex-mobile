var args = arguments[0] || {};
var profile = Alloy.Models.Profile;

if (profile) {
	$.contactid.text = profile.id;
	$.email.text = profile.get('email');
	$.firstname.text = profile.get('firstname');
	$.lastname.text = profile.get('lastname');
}