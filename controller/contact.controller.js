angular.module("qshop").controller("ContactController", function($scope,Contact) {

    $scope.register = function() {
      var inputs = {
        email:"",
        subject:"",
        message:""
      }

      inputs.email = $scope.email;
      inputs.subject = $scope.subject;
      inputs.message = $scope.message;

      Contact.sendInfo(inputs);
    };  
  });
