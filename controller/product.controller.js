angular.module("qshop").controller("ProductController", function($scope, $stateParams, ProductsRepository, Cart) {

    $scope.tabPanel = "description";

    $scope.showTab = function(tabName) {
        $scope.tabPanel = tabName;
    }

    $scope.quantity = 1;

    $scope.scade = function() {
        if ($scope.quantity > 1)
            $scope.quantity--;
    }

    $scope.creste = function() {
        $scope.quantity++;
    }

    $scope.loadProduct = function() {
        console.log("Load product called", $stateParams);
        ProductsRepository.getProductList().then(function(result) {
            var productId = $stateParams.id
            var product;
            for (var i = 0; i < result.data.length; i++) {
                if (result.data[i].id == productId) {
                    $scope.product = result.data[i];
                    break;
                }
            }

        }, function(err) {
            console.error(err)
        });
    };


    $scope.addToCart = function() {
        
        Cart.add($scope.product, $scope.quantity);
    }
});
