import React from 'react';

export default React.createContext({
    products: [
        { id: 'prod1', title: 'Mouse', price: '500' },
        { id: 'prod2', title: 'Keyboard', price: '1500' },
        { id: 'prod3', title: 'Joystick', price: '800' },
        { id: 'prod4', title: 'Tablet', price: '5000' },
        { id: 'prod5', title: 'Monitor', price: '5500' },
    ],
    cart: [],
    addProductToCart: (product) => { },
    removeProductFromCart: (productId) => { }
})