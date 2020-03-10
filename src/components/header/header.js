import React from "react"
import {Link} from "react-router-dom";
import "./header.scss"
import {connect} from "react-redux";

const Header = ({cartItems, cartTotalPrice}) => {
    const itemsCount = cartItems.length;
    return (
        <div className="header">
            <div className="header-logo"><Link to="/">ReStore</Link></div>
            <div className="header-cart">
                <Link to="/cart">
                    <b>
                        <span><i className="fa fa-shopping-cart"></i></span>
                        <span>{itemsCount} items</span>
                        <span>(${cartTotalPrice})</span>
                    </b>
                </Link>
            </div>
        </div>
    )
};

const mapStateToProps = ({shoppingCart: {cartItems, cartTotalPrice}}) => {
    return {cartItems, cartTotalPrice}
};

export default (connect(mapStateToProps)(Header))