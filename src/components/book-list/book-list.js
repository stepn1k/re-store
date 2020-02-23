import React, {Component} from "react"
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookStoreService from "../hoc";
import {booksLoaded} from "../../actions"
import "./book-list.css"

class BookList extends Component {

    componentDidMount() {
        const {bookStoreService} = this.props;
        const data = bookStoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        return (
            <ul className="book-list">
                {this.props.books.map((book) => {
                    return <li key={book.id}><BookListItem book={book}/></li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books}
};

const mapDispatchToProps = {booksLoaded};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))