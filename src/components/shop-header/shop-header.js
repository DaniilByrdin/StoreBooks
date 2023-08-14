import React from "react";
import { Link } from "react-router-dom";

import './shop-header.css'

const ShopHeader = ( { totalItems, orderTotal } ) => {
    return (
        <header className="shop-header row">
            <Link to="/" className="logo text-dark">ReStore</Link>
            <Link to='/card' className="shopping-cart"> 
                <i className="cart-icon fa fa-shopping-cart" />
                    { totalItems } items (${orderTotal})
            </Link>
        </header>
    )
}

export default ShopHeader