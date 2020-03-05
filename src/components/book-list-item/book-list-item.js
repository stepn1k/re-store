import React from "react";
import "./book-list-item.scss"


const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, imageUrl, price} = book;
    return (
        <div className="book-list-item">
            <div className="book-list-item_image"><img src={imageUrl} alt={title}/></div>
            <div className="book-list-item_info">
                <ul>
                    <li className="book-list-item_info-title">{title}</li>
                    <li className="book-list-item_info-author">{author}</li>
                    <li className="book-list-item_info-cost">{price}$</li>
                </ul>
                <button className="btn btn-info" onClick={onAddedToCart}>Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem