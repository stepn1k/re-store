const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_ERROR",
        payload: error
    }
};

const onBookAdded = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
};

const onBookRemoved = (bookId) => {
    return {
        type: "BOOK_REMOVED_FROM_CART",
        payload: bookId
    }
};

const onAllBooksRemoved = (bookId) => {
    return {
        type: "ALL_BOOKS_REMOVED_FROM_CART",
        payload: bookId
    }
};

const fetchBooks = (dispatch, bookStoreService) => () => {
    dispatch(booksRequested());
    bookStoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
}

export {fetchBooks, onBookAdded, onBookRemoved, onAllBooksRemoved}