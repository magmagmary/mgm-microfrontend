import {mount as mountProducts} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/cartIndex';

const productsContainer = document.getElementById('Products');

if(productsContainer) {
    mountProducts(productsContainer);
}

const cartContainer = document.getElementById('Cart');

if(cartContainer) {
    mountCart(cartContainer);
}