App.controller('ListingsController', function (Home) {
    var self = this;
    self.getHomes = function () {
        Home.getHomes().then(function (response) {
            self.homes = response.data;
            for (var i = 0; i < self.homes.length; i++) {
                if (self.homes[i].image == undefined) {
                    self.homes[i].image = '../images/Image' + i + '.jpg';
                }
            }
            Home.imageArray = self.homes;
        });
    };
    this.getHomes();
});