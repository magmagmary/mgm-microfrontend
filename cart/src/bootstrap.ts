import { faker } from "@faker-js/faker";


const mount = (el: HTMLElement) => {
    const cartText = `<div>You have ${faker.number.int({min: 1, max: 5})} items in your cart</div>`
    el.innerHTML = cartText;
}

if(process.env['NODE_ENV'] === 'development') {
    const cartContainer = document.getElementById('CartRemoteApp');

    if(cartContainer) {
        mount(cartContainer);
    }
}   

export { mount };

