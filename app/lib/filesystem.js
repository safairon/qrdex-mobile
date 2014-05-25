/**
 * gets a folder name, fileName and data and saves the given data into a file with given name in the given folder
 * INSIDE application directory
 * @param {Object} folder
 * @param {Object} filename
 * @param {Object} data
 */
exports.saveFile = function(folder, filename, data) {
	var address = Titanium.Filesystem.applicationDataDirectory;
	if (folder) {
		address += Titanium.Filesystem.separator + folder;

		var directory = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, folder);
		if (!directory.exists()) {
			directory.createDirectory();
		}
	}

	var f = Titanium.Filesystem.getFile(address, filename);
	f.write(data);
};

/*
 * returns absolute address of some file
 */
exports.getAbsolutePath = function(folder, fileName) {
	var address = Titanium.Filesystem.applicationDataDirectory;
	if (folder) {
		address += Titanium.Filesystem.separator + folder;
	}

	address = address + Titanium.Filesystem.separator + fileName;
	return address;
};

/**
 * checks for file existence in specified folder 
 * @param {Object} folder
 * @param {Object} filename
 */
exports.fileExists = function(folder, filename) {
		var address = Titanium.Filesystem.applicationDataDirectory;
	if (folder) {
		address += Titanium.Filesystem.separator + folder;

		var directory = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, folder);
		if (!directory.exists()) {
			directory.createDirectory();
		}
	}

	var f = Titanium.Filesystem.getFile(address, filename);
	//alert(f.size > 100);
	return (f.exists()== 1);
};