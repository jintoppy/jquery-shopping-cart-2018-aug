window.myapp = window.myapp || {};
(function(app){
    class Cart {
        constructor(){
            this.count = 0;
            this.cartEl = jQuery('#my-cart');
        }
        add(){
            this.count++;
            this.render();
        }

        render(){
            this.cartEl.html(`You have ${this.count} items in your cart`);
        }
    }

    app.Cart = Cart;

})(window.myapp)