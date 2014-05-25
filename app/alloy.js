// Android api version
if (OS_ANDROID) {
	Alloy.Globals.Android = {
		'Api' : Ti.Platform.Android.API_LEVEL
	};
}

Alloy.Models.Profile = Alloy.Models.instance('profile');
Alloy.Collections.Links = Alloy.Collections.instance('link');
Alloy.Collections.Events = Alloy.Collections.instance('event');
Alloy.Collections.Addresses = Alloy.Collections.instance('address');
Alloy.Collections.Brands = Alloy.Collections.instance('brand');
Alloy.Collections.Contacts = Alloy.Collections.instance('profile');
Alloy.Collections.Meetings = Alloy.Collections.instance('meeting');
Alloy.Collections.Notifications = Alloy.Collections.instance('notification');
Alloy.Collections.ParticipandMemorials = Alloy.Collections.instance('participand_memorial');

require('constants');

Alloy.Globals.Sync = require('sync');
Alloy.Globals.Data = require('data');
Alloy.Globals.Server = require('mock');
//Alloy.Globals.Server = require('server');
