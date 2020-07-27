import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ShopContext from '../context/shop-context'
import MainNavigation from './MainNavigation';
// import { removeProductFromCart } from '../store/actions';

class Carts extends Component {
    render() {
        return (
            <ShopContext.Consumer>
                {context => (
                    <>
                        <MainNavigation cartItemNumber={context.cart.reduce((count, cartItem) => {
                            return count + cartItem.quantity;
                        }, 0)}>
                        </MainNavigation>
                        <div className="container">
                            <div className="col-sm-12 mt-3">
                                {context.cart.length <= 0 && <p className="text-center">No Item in the Cart!!!</p>}
                                <ul>
                                    {context.cart.map(cartItem => (
                                        <li className="breadcrumb d-flex justify-content-between" key={cartItem.id}>
                                            <div>
                                                <strong>{cartItem.title}</strong> - Rs. {cartItem.price} ({cartItem.quantity})
                                        </div>
                                            <div>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={context.removeProductFromCart.bind(this, cartItem.id)}>
                                                    Remove from Cart
                                            </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </ShopContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cartItem: state.cart,
//         cartItemCount: state.cart.reduce((count, cartItem) => {
//             return count + cartItem.quantity;
//         }, 0)
//     }
// }


// const mapDiapatchToProps = dispatch => {
//     return {
//         removeProductCart: productId => dispatch(removeProductFromCart(productId))
//     }
// }

export default Carts;