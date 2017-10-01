App.service('Home', function ($http) {
    var self = this;
    self.imageArray = [];

    // get Home db listing
    self.getHomes = function () {
        return $http({
            method: 'GET',
            url: '/all'
        });
    };

    self.getHomesRent = function () {
        return $http({
            method: 'GET',
            url: '/rentdb'
        });
    };

    self.getHomesBuy = function () {
        return $http({
            method: 'GET',
            url: '/saledb'
        });
    };

    self.postListing = function (input){
        return $http({
            method: 'POST',
            url: '/',
            data: input
        });//END $http post
     };//END postRiddle
});