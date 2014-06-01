function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.drawer/" + s : s.substring(0, index) + "/nl.fokkezb.drawer/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#ffffff"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "View",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "TableView",
    style: {
        height: Ti.UI.SIZE,
        top: 0
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "MenuItem",
    style: {
        color: "#000",
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
    }
}, {
    isApi: true,
    priority: 1000.0009,
    key: "TextField",
    style: {
        top: 10,
        width: "60%",
        color: "#ba932a",
        borderColor: "#ba932a",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isApi: true,
    priority: 1000.001,
    key: "Button",
    style: {
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: 15
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "container",
    style: {
        layout: "vertical",
        backgroundColor: "#ffffff"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "vertical",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "horizontal",
    style: {
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "emptyList",
    style: {
        text: L("emptyList")
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "primaryButton",
    style: {
        color: "#ffffff",
        width: Ti.UI.SIZE,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100%"
            },
            colors: [ {
                color: "#37c8ff",
                offset: 0
            }, {
                color: "#0093c9",
                offset: 1
            } ]
        }
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "verySmall",
    style: {
        font: {
            fontSize: "10dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "small",
    style: {
        font: {
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "medium",
    style: {
        font: {
            fontSize: "14dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "large",
    style: {
        font: {
            fontSize: "16dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "veryLarge",
    style: {
        font: {
            fontSize: "18dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "header",
    style: {
        height: 50,
        width: Ti.UI.FULL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: "/image/header-bg.png",
        backgroundRepeat: true
    }
}, {
    isClass: true,
    priority: 10000.0022,
    key: "headerTitle",
    style: {
        color: "#817647",
        font: {
            fontStyle: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "icon24",
    style: {
        width: 24,
        height: 24
    }
}, {
    isClass: true,
    priority: 10000.0024,
    key: "icon48",
    style: {
        width: 48,
        height: 48
    }
}, {
    isClass: true,
    priority: 10000.0025,
    key: "icon64",
    style: {
        width: 64,
        height: 64
    }
}, {
    isClass: true,
    priority: 10000.0026,
    key: "email",
    style: {
        image: "/image/icon/email.png"
    }
}, {
    isClass: true,
    priority: 10000.0027,
    key: "event",
    style: {
        image: "/image/icon/event.png"
    }
}, {
    isClass: true,
    priority: 10000.0028,
    key: "address",
    style: {
        image: "/image/icon/address.png"
    }
}, {
    isClass: true,
    priority: 10000.0029,
    key: "phone",
    style: {
        image: "/image/icon/phone.png"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "activityIndicator",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 20
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "labelNoRecords",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        visible: false,
        top: 20
    }
}, {
    isId: true,
    priority: 100101.0014,
    key: "activityIndicator",
    style: {
        style: Ti.UI.ActivityIndicatorStyle.PLAIN
    }
} ];