import React from "react";
import './Cart.css';
import Navbar from "../Navbar/Navbar";

function CartPage ({products}) {
    return (
        <div>
            <Navbar/>
            <div className="main-cart-div">
                <p style={{fontFamily: "Poppins-SemiBold", fontSize: 22}}>Your Cart</p>
                <div className="all-cart-divs">
                    <div className="cart-product-div">
                        <div className="product-div-left">
                            <img className="cart-item-img" src={products[0].image} />
                            <div className="cart-text">
                                <p style={{fontFamily: "Poppins-SemiBold"}}>{products[0].name}</p>
                                <p style={{color: "gray", fontSize: 14}}>${products[0].price}</p>
                            </div>
                        </div>
                        <button className="cart-remove-button">Remove</button>
                    </div>

                    <div className="cart-product-div">
                        <div className="product-div-left">
                            <img className="cart-item-img" src={products[1].image} />
                            <div className="cart-text">
                                <p style={{fontFamily: "Poppins-SemiBold"}}>{products[1].name}</p>
                                <p style={{color: "gray", fontSize: 14}}>${products[1].price}</p>
                            </div>
                        </div>
                        <button className="cart-remove-button">Remove</button>
                    </div>

                    <div className="cart-product-div">
                        <div className="product-div-left">
                            <img className="cart-item-img" src={products[2].image} />
                            <div className="cart-text">
                                <p style={{fontFamily: "Poppins-SemiBold"}}>{products[2].name}</p>
                                <p style={{color: "gray", fontSize: 14}}>${products[2].price}</p>
                            </div>
                        </div>
                        <button className="cart-remove-button">Remove</button>
                    </div>

                    <div className="cart-product-div">
                        <div className="product-div-left">
                            <img className="cart-item-img" src={products[3].image} />
                            <div className="cart-text">
                                <p style={{fontFamily: "Poppins-SemiBold"}}>{products[3].name}</p>
                                <p style={{color: "gray", fontSize: 14}}>${products[3].price}</p>
                            </div>
                        </div>
                        <button className="cart-remove-button">Remove</button>
                    </div>

                    <div className="cart-product-div">
                        <div className="product-div-left">
                            <img className="cart-item-img" src={products[4].image} />
                            <div className="cart-text">
                                <p style={{fontFamily: "Poppins-SemiBold"}}>{products[4].name}</p>
                                <p style={{color: "gray", fontSize: 14}}>${products[4].price}</p>
                            </div>
                        </div>
                        <button className="cart-remove-button">Remove</button>
                    </div>
                </div>
                <div className="cart-total-section">
                    <p>Total:</p>
                    <p style={{fontFamily: "Poppins-SemiBold"}}>$139.96</p>
                </div>
                <button className="cart-checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default CartPage;