import {mount} from 'products/ProductsIndex';
import 'cart/cartIndex';

const productsContainer = document.getElementById('Products');

if(productsContainer) {
    mount(productsContainer);
}