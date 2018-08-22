window.myapp = window.myapp || {};
(function(app){
    class Product {
        constructor(product){            
            this.product = product;
        }

        render(){
            return `<div data-product-id="${this.product.id}" class="product-list-item">
                <h3>${this.product.name}</h3>
                <p>${this.product.description}</p>
                <div class="image-container">
                    <img src="${this.product.imgUrl}" />
                </div>
                <h4>Price: ${this.product.price}</h4>
                <div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                    <button class="view-details-btn">View Details</button>
                </div>
            </div>`;
        }
    }

    app.Product = Product;
    
})(window.myapp)