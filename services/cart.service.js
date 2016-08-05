angular.module("qshop").factory("Cart", function($rootScope) {

    var cart = {};
    cart.products = [];

    cart.add = function(product,quantity) {


        var productFound = false;

        for (var i = 0;i< this.products.length; i++) {
            if (this.products[i].id == product.id) {
                this.products[i].quantity += quantity;
                productFound = true;
                break;
            }
        }

        if (!productFound) {
            console.log("am adaugat produsul", product)
            product.quantity = quantity;
            cart.products.push(product)
        }

        $rootScope.$broadcast('cart-updated');



    };

    cart.getSubTotal = function() {
        var total = 0;
        for (var i = 0; i < cart.products.length; i++) {
            total += this.products[i].price * this.products[i].quantity;
        }

        return total;
    };


    cart.getShipping = function() {
        return 50;
    };

    cart.getTotal = function() {
        return this.getSubTotal() + this.getShipping();
    };

    cart.getProducts = function() {
        return this.products;
    }

    cart.getTotalProducts = function() {
        var totalProducts = 0;
        for (var i = 0; i < this.products.length; i++) {
            totalProducts += this.products[i].quantity;
        }
        return totalProducts;
    }

    cart.remove = function(product){
      var index = null;
      for( var i=0; i< this.products.length; i++){
        if(this.products[i].id == product.id) {
          index = i;
          break;
        }
      }
      if(index != null){
        this.products.splice(index,1);
      }
    }

    cart.sendOrder = function(order){
      console.log('Comanda',order);
      cart.products = [];
      $rootScope.$broadcast('cart-updated');
    };

    return cart;
});
