App.controller('IndexController', function (Home) {
    var self = this;
    console.log('in index controller');

    self.getHomes = function () {
        Home.getHomes().then(function (response) {
            self.homes = response.data;
            console.log(self.homes);
            
        });
    };
    self.getHomes();
});