App.controller('IndexController', function (Home, $location) {
    var self = this;
    self.currentNavItem = 'alllistings';
    var urlToggle = true;
    if ($location.path() == '/addhouse') {
        urlToggle = false;
    }
    self.toggleNew = function () {
        if (urlToggle) {
            $location.url('/addhouse');
            urlToggle = !urlToggle;
        } else {
            $location.url('/listings');
            urlToggle = !urlToggle;
        }
    };
});