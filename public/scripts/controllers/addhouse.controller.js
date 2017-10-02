App.controller('AddhouseController', function (Home, $http) {
  var self = this;
  self.user = {
    city: '',
    size: '',
    cost: '',
    rent: '',
  };

  self.clearStuff = function () {
    self.rentIn = '';
    self.costIn = '';
  };

  self.submitListing = function () {
    self.user = {
      city: self.city,
      size: self.size,
      cost: self.costIn,
      rent: self.rentIn,
      image: self.url
    };
    if (self.user.image == undefined) {
      self.user.image = 'https://i.imgur.com/WkTGL7A.png';
    }
    Home.postListing(self.user).then(function (resp) {
      self.rentIn = '';
      self.costIn = '';
      self.city = '';
      self.size = '';
      self.url = '';
    });
    location.href = '/index';
  };
});