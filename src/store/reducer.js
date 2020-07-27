import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions'

const initialState = {
    products: [
        { id: 'prod1', title: 'Mouse', price: '500' },
        { id: 'prod2', title: 'Keyboard', price: '1500' },
        { id: 'prod3', title: 'Joystick', price: '800' },
        { id: 'prod4', title: 'Tablet', price: '5000' },
        { id: 'prod5', title: 'Monitor', price: '5500' },
    ],
    cart: []
}

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedCartIndex;
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedCartIndex = updatedCart.findIndex(item => item.id === action.payload.id);
            if (updatedCartIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 })
            } else {
                const updatedItem = {
                    ...updatedCart[updatedCartIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedCartIndex] = updatedItem
            }
            return { ...state, cart: updatedCart }
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedCartIndex = updatedCart.findIndex(item => item.id === action.payload);

            const updatedItem = {
                ...updatedCart[updatedCartIndex]
            };
            updatedItem.quantity--;
            if (updatedItem.quantity <= 0) {
                updatedCart.splice(updatedCartIndex, 1)
            } else {
                updatedCart[updatedCartIndex] = updatedItem
            }

            return { ...state, cart: updatedCart }
        default:
            return state;
    }
}

export default shopReducer;