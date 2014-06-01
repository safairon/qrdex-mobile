exports.openWindow = function(controller) {
    var win = controller.getView();
    usesNavGroup ? Alloy.Globals.navgroup.openWindow(win) : win.open();
};