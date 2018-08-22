window.myapp = window.myapp || {};
(function(app){

    const contentAreaEl = jQuery('#content-area');
    const cart = new app.Cart();

    cart.render();

    const attachEventListeners = () => {
        jQuery('.add-to-cart-btn').on('click', (e) => {
            const productId = jQuery(e.target).parents('.product-list-item').data('product-id');
            cart.add();
        });
    }

    const getProducts = async () => {
        const res = await fetch('http://5b7b6b20f583510014298c90.mockapi.io/api/products');
        const products = await res.json();
        return products.reduce((acc, prod) => acc + new app.Product(prod).render(), '');
    };

    const getProductById = async (productId) => {
        return 'product page';
    };

    const renderProductListPage = async () => {
        const productItemsStr = await getProducts();
        const productListEl = jQuery(`<div class="product-list">${productItemsStr}</div>`);
        contentAreaEl.html(productListEl);
        attachEventListeners();
    };

    const renderProductDetailsPage = async () => {
        const productItemsStr = await getProductById();
        const productDetailsEl = jQuery(`<div class="product-details">${productItemsStr}</div>`);
        contentAreaEl.html(productDetailsEl);
    };

    renderProductListPage();


})(window.myapp)