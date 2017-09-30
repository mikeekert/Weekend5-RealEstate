App.service('Home', function($http){
    var self = this;

    // get Home db listing
    self.getHomes = function () {
        return $http({
            method: 'GET',
            url: '/homes'
        });
    };

    self.getHomesRent = function () {

    };

    self.getHomesBuy = function() {

    };

});