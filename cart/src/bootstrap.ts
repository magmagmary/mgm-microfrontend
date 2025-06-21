import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.number.int({min: 1, max: 5})} items in your cart</div>`

const cartContainer = document.getElementById('Cart');

if (cartContainer) {
    cartContainer.innerHTML = cartText;
}