import { faker } from '@faker-js/faker';

const mount = (el: HTMLElement) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products +=  `<div>${name}</div>`
    }
    el.innerHTML = products;
}

if(process.env['NODE_ENV'] === 'development' ) {
    const productsContainer = document.getElementById('ProductsRemoteApp');

    if(productsContainer) {
        mount(productsContainer);
    }
}

export { mount };