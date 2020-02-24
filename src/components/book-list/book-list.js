import React, {Component} from "react"
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookStoreService from "../hoc";
import {booksError, booksLoaded, booksRequested} from "../../actions"
import "./book-list.css"
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

    componentDidMount() {
        const {bookStoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookStoreService
            .getBooks()
            .then(data => booksLoaded(data))
            .catch(err => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;

        if (loading) return <Spinner/>
        if (error) return <ErrorIndicator/>
        return (
            <ul className="book-list">
                {books.map((book) => {
                    return <li key={book.id}><BookListItem book={book}/></li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = {booksLoaded, booksRequested, booksError};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))