angular.module("qshop").factory('Contact', function($http) {

    var form = {};

    form.sendInfo = function(inputs) {
      console.log(inputs);
      $http.post('http://10.59.0.30:3000/posts',inputs);
    }

    return form;


});
