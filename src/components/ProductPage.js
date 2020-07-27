import React, { Component } from 'react';
// import { connect } from 'react-redux'
import ShopContext from '../context/shop-context';
import MainNavigation from './MainNavigation';
// import { addProductToCart } from '../store/actions'

class Products extends Component {
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
                                <ul>
                                    {context.products.map(product => (
                                        <li className="breadcrumb d-flex justify-content-between" key={product.id}>
                                            <div>
                                                <strong>{product.title}</strong> - Rs. {product.price}
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={context.addProductToCart.bind(this, product)}>
                                                    Add to Cart
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
//         products: state.products,
//         cartItemCount: state.cart.reduce((count, cartItem) => {
//             return count + cartItem.quantity;
//         }, 0)
//     };
// };

// const mapDiapatchToProps = dispatch => {
//     return {
//         addProductToCart: product => dispatch(addProductToCart(product))
//     }
// }

export default Products;