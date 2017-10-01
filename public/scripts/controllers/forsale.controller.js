App.controller('SaleController', function (Home) {
    var self = this;
    console.log('in sales controller');

    self.getHomes = function () {
        Home.getHomes().then(function (response) {
            self.homes = response.data;
            for (var i = self.homes.length - 1; i >= 0; i--) {
                if (self.homes[i].rent) {
                    self.homes.splice(i,1);   
                } else if  
                (self.homes[i].image == undefined) {
                    self.homes[i].image = '../images/image' + i + '.jpg';
                } else if 
                (self.homes[i].rent == null ) {
                    self.homes.splice(i,1);
                }
            }
            Home.imageArray = self.homes;            
            console.log('homes array',Home.imageArray);
        });
    };
    this.getHomes();
});