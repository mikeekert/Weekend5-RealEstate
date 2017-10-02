App.controller('IndexController', function (Home, $location) {
    var self = this;
    self.currentNavItem = 'alllistings';
    var urlToggle = true;
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