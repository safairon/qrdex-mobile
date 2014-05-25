var id, brand, args = arguments[0] || {};
if ($model) {
	id = $model.id;
	brand = Alloy.Globals.Data.getBrand($model);

	$.picture.image = $model.get('picturePath') || '/image/profile/no-avatar.png';
	$.eventListLabel.text = String.format(L('viewEvents'), 0);

	$.companyLogo.image = brand.get('companyLogo') || '/image/brand/no-company.png';
	$.companyName.text = brand.get('name');
}

function actionDelete() {
	var dialogs = require('alloy/dialogs');
	dialogs.confirm({
		title : String.format(L('deleteDialogTitle'), L('profile')),
		message : String.format(L('deleteDialogMessage'), $model.getFullName()),
		callback : function(e) {
			Alloy.Globals.Data.deleteProfile(id);
			$.detail.close();
		}
	});
}

function actionEdit() {

}

function actionEventList() {

}
