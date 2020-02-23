import React from "react"
import "./header.scss"

const Header = (props) => {
    const {numItems, total} = props;
    return (
        <div className="header">
            <div className="header-logo">ReStore</div>
            <div className="header-cart">
                <span><i className="fa fa-shopping-cart"></i></span>
                <span>{numItems} items</span>
                <span>(${total})</span>
            </div>
        </div>
    )
};

export default Header