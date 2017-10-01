App.controller('AddhouseController', function (Home, $http) {
  var self = this;
  console.log('ac controller');
  self.user = {
    city: '',
    size: '',
    cost: '',
    rent: '',
  };
  console.log(self.user);

  self.clearStuff = function () {
    self.rentIn = '';
    self.costIn = '';
    console.log('reset');
  };

  self.submitListing = function () {
    self.user = {
      city: self.city,
      size: self.size,
      cost: self.costIn,
      rent: self.rentIn,
      image: self.url
    };
    console.log('image is empty', self.user.image);
    
      if (self.user.image==undefined) {
        self.user.image='https://i.imgur.com/WkTGL7A.png';
      }
    console.log('posting this data',self.user);
    Home.postListing(self.user).then(function (resp) {
      console.log('response to POST:', resp);
      self.rentIn = '';
      self.costIn = '';
      self.city = '';
      self.size = '';
      self.url = '';
    });
    location.href = '/index';
  };
});