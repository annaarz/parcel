// импорт модуля
// подключаем библиотеку lodash
import cloneDeep from 'lodash';

import {addProductToCart} from './shopping-cart.js';

import {
    totalPrice as price, 
    totalQuantity
} from './shopping-cart.js';



// импорт всех сразу
// создается объект - пространство имен

import * as ShoppingCart from './shopping-cart.js';
ShoppingCart.addProductToCart('рубашка', 2);

// дефолтный импорт

import addToCart from './shopping-cart.js';

console.log('импорт модуля');

// console.log(cost);

addProductToCart('пальто', 1);
addToCart('сумка', 3);

console.log(price,  totalQuantity);

const obj = {
    cart: [
        {prod: 'sdd', qua: 3},
        {prod: 'sddsds', qua: 5}
    ],
    user: {loggedIn: true}
};

const state = cloneDeep(obj);
obj.user.loggedIn = false;
console.log(obj);
console.log(state);




if(module.hot){
    module.hot.accept();
}