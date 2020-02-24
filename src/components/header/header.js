import React from "react"
import {Link} from "react-router-dom";
import "./header.scss"

const Header = (props) => {
    const {numItems, total} = props;
    return (
        <div className="header">
            <div className="header-logo"><Link to="/">ReStore</Link></div>
            <div className="header-cart">
                <Link to="/cart">
                    <b>
                        <span><i className="fa fa-shopping-cart"></i></span>
                        <span>{numItems} items</span>
                        <span>(${total})</span>
                    </b>
                </Link>
            </div>
        </div>
    )
};

export default Header