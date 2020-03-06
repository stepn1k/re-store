import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux"
import {onAllBooksRemoved, onBookAdded, onBookRemoved} from "../../actions";


const ShoppingCartTable = ({items, total, onDecrease, onIncrease, onDelete}) => {
    const RenderRow = ({item, idx}) => {
        const {id, title, count, price} = item;
        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td className={"action-buttons"}>
                    <button className="btn btn-outline-danger btn-sm float-right" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success btn-sm float-right" onClick={() => onIncrease(id)}>
                        < i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning btn-sm float-right" onClick={() => onDecrease(id)}>
                        < i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )
    }


    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, idx) => {
                        return <RenderRow key={item.id} item={item} idx={idx}/>
                    })
                }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, cartTotalPrice}}) => {
    return {
        items: cartItems,
        total: cartTotalPrice
    }
};

const mapDispatchToProps = {
    onIncrease: onBookAdded,
    onDecrease: onBookRemoved,
    onDelete: onAllBooksRemoved
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);