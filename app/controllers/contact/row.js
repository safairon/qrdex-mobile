if ($model) {
	$.row.id = $model.id;
	$.row.model = $model;
	$.row.title = $model.getFullName();

	var brand = Alloy.Globals.Data.getBrand($model);
	
	$.picture.image = $model.get('picturePath') || '/image/profile/no-avatar.png';
	
	$.name.text = $model.getFullName();
	$.job.text = $model.get('jobTitle');
	$.company.text = brand.get('name');
}