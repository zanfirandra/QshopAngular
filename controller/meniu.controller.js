angular.module("qshop").controller("MenuController", function($scope,Cart){

  $scope.totalProd = 0;
  $scope.$on('cart-updated',function(event,args){

    //var products = Cart.getProducts();

    $scope.totalProd = Cart.getTotalProducts();
  });

});
