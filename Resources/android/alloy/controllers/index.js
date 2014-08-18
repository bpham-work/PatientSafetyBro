function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClick() {
        tasksArray.length - 1 > positionCounter ? positionCounter++ : positionCounter = 0;
        $.label.text = tasksArray[positionCounter];
    }
    function nextTask(e) {
        "left" == e.direction ? positionCounter++ : positionCounter--;
        try {
            $.label.text = tasksArray[positionCounter];
        } catch (error) {
            positionCounter = 0;
            $.label.text = tasksArray[positionCounter];
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    nextTask ? $.__views.index.addEventListener("swipe", nextTask) : __defers["$.__views.index!swipe!nextTask"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 50
        },
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.button = Ti.UI.createButton({
        bottom: "50",
        width: "100",
        height: "50",
        id: "button",
        title: "Yes"
    });
    $.__views.index.add($.__views.button);
    doClick ? $.__views.button.addEventListener("click", doClick) : __defers["$.__views.button!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tasksArray = [ "foo", "bar", "baz", "qux" ];
    positionCounter = 0;
    $.label.text = tasksArray[positionCounter];
    $.index.open();
    __defers["$.__views.index!swipe!nextTask"] && $.__views.index.addEventListener("swipe", nextTask);
    __defers["$.__views.button!click!doClick"] && $.__views.button.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;