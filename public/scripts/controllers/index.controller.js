App.controller = ('IndexController', function (Home) {
    var self = this;

    self.GetHomes = function () {
        $http({
            method: 'GET',
            url: '/homes'
        }).then(function (resp) {
            console.log(resp);
        });
    };
    GetHomes();
});