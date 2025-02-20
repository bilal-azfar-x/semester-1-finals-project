import React from "react";
import './LandingPage.css';
import Navbar from "../Navbar/Navbar";

function LandingPage ({products}) {
    return ( 
        <div className="main-landing-div">
            <Navbar/>
            <div className="landing-content-div">
                <div className="product-div">
                    <img className="item-img" src={products[0].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[0].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[0].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>

                <div className="product-div">
                    <img className="item-img" src={products[1].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[1].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[1].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>

                <div className="product-div">
                    <img className="item-img" src={products[2].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[2].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[2].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>

                <div className="product-div">
                    <img className="item-img" src={products[3].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[3].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[3].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>

                <div className="product-div">
                    <img className="item-img" src={products[4].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[4].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[4].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>

                <div className="product-div">
                    <img className="item-img" src={products[5].image} />
                    <div style={{paddingInline: 10}}>
                        <p style={{fontFamily: "Poppins-SemiBold"}}>{products[5].name}</p>
                        <p style={{color: "gray", fontSize: 14}}>${products[5].price}</p>
                    </div>
                    <div className="button-icon">
                        <button className="item-button">Add to Cart</button>
                        <img style={{width: 18}} src="/heart-icon.svg" alt="My Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;