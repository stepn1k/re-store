import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux"


const ShoppingCartTable = ({items, total, onDecrease, onIncrease, onDelete}) => {
    const RenderRow = ({item, idx}) => {
        const {id, name, count, price} = item;
        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td>
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

const mapStateToProps = ({cartItems, cartTotalPrice}) => {
    return {
        items: cartItems,
        total: cartTotalPrice
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => console.log(`increase ${id}`),
        onDecrease: (id) => console.log(`decrease ${id}`),
        onDelete: (id) => console.log(`delete ${id}`)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);