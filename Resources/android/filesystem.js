exports.saveFile = function(folder, filename, data) {
    var address = Titanium.Filesystem.applicationDataDirectory;
    if (folder) {
        address += Titanium.Filesystem.separator + folder;
        var directory = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, folder);
        directory.exists() || directory.createDirectory();
    }
    var f = Titanium.Filesystem.getFile(address, filename);
    f.write(data);
};

exports.getAbsolutePath = function(folder, fileName) {
    var address = Titanium.Filesystem.applicationDataDirectory;
    folder && (address += Titanium.Filesystem.separator + folder);
    address = address + Titanium.Filesystem.separator + fileName;
    return address;
};

exports.fileExists = function(folder, filename) {
    var address = Titanium.Filesystem.applicationDataDirectory;
    if (folder) {
        address += Titanium.Filesystem.separator + folder;
        var directory = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, folder);
        directory.exists() || directory.createDirectory();
    }
    var f = Titanium.Filesystem.getFile(address, filename);
    return 1 == f.exists();
};