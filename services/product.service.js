angular.module("qshop").factory("ProductsRepository", function($http) {

    var repo = {};
    repo.getProductList = function() {
        return $http.get('/data/products.json'); //returneaza promise
    };
    return repo;



});
