App.controller('RentalsController', function (Home) {
    var self = this;
    console.log('in rentals controller');

    // self.getHomesRent = function () {
    //     Home.getHomesRent().then(function (response) {
    //         self.homes = response.data;
    //         console.log(self.homes);
    //     });
    // };
    // this.getHomesRent();

    self.getHomes = function () {
        Home.getHomes().then(function (response) {
            self.homes = response.data;
            for (var i = self.homes.length - 1; i >= 0; i--) {
                if (self.homes[i].cost) {
                    self.homes.splice(i,1);   
                } else if  
                (self.homes[i].image == undefined) {
                    self.homes[i].image = '../images/image' + i + '.jpg';
                } else if 
                (self.homes[i].cost == null ) {
                    self.homes.splice(i,1);
                }
            }
            Home.imageArray = self.homes;            
            console.log('homes array',Home.imageArray);
        });
    };
    this.getHomes();
});