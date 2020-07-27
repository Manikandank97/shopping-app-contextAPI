import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShopContext from './context/shop-context';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

class App extends Component {

  state = {
    products: [
      { id: 'prod1', title: 'Mouse', price: '500' },
      { id: 'prod2', title: 'Keyboard', price: '1500' },
      { id: 'prod3', title: 'Joystick', price: '800' },
      { id: 'prod4', title: 'Tablet', price: '5000' },
      { id: 'prod5', title: 'Monitor', price: '5500' },
    ],
    cart: [],
  }

  addProductToCart = (product) => {
    const updatedCart = [...this.state.cart];
    const updatedCartIndex = updatedCart.findIndex(item => item.id === product.id);
    if (updatedCartIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 })
    } else {
      const updatedItem = {
        ...updatedCart[updatedCartIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedCartIndex] = updatedItem
    }
    this.setState({ cart: updatedCart })
  }

  removeProductFromCart = (productId) => {
    const updatedCart = [...this.state.cart];
    const updatedCartIndex = updatedCart.findIndex(item => item.id === productId);

    const updatedItem = {
      ...updatedCart[updatedCartIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedCartIndex, 1)
    } else {
      updatedCart[updatedCartIndex] = updatedItem
    }
    this.setState({ cart: updatedCart })
  }
  render() {
    return (
      <ShopContext.Provider value={{
        products: this.state.products,
        cart: this.state.cart,
        addProductToCart: this.addProductToCart,
        removeProductFromCart: this.removeProductFromCart,
      }}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ProductPage} exact />
            <Route path='/cart' component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </ShopContext.Provider >
    );
  }
}

export default App;
