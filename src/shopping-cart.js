// Экспорт модуля

console.log('Экспорт модуля');

const cost = 67;

const cart = [];

// именованный экспорт

export const addProductToCart = (product, quantity) => {
    cart.push({product, quantity});
    console.log(`Вы добавили ${product} в количестве ${quantity} шт.`)
}

const totalPrice = 300;
const totalQuantity = 7;

// export {totalPrice, totalQuantity as total};
export {totalPrice, totalQuantity};

// дефолтный экспорт

export default (product, quantity) => {
    cart.push({product, quantity});
    console.log(`Вы добавили ${product} в количестве ${quantity} шт.`)
}

