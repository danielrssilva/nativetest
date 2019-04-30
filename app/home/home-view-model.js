var frame = require("tns-core-modules/ui/frame");
var observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    mainContentText: "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.",
    onOpenDrawerTap: function () {
        var sideDrawer = frame.topmost().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    },
    onCloseDrawerTap: function () {
        var sideDrawer = frame.topmost().getViewById("sideDrawer");
        sideDrawer.closeDrawer();
    },


  });

  return viewModel;
}

module.exports = HomeViewModel;
