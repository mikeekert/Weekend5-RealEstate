App.controller('ListingsController', function (Home) {
    var self = this;
    console.log('in listings controller');

    self.getHomes = function () {
        Home.getHomes().then(function (response) {
            self.homes = response.data;
            for (var i = 0; i < self.homes.length; i++) {
                if (self.homes[i].image == undefined) {
                    self.homes[i].image = '../images/image' + i + '.jpg';
                }
            }
            Home.imageArray = self.homes;            
            console.log('homes array',Home.imageArray);
        });
    };
    this.getHomes();
});