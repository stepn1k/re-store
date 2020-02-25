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
}

const fetchBooks = (dispatch, bookStoreService) => () => {
    dispatch(booksRequested());
    bookStoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
}

export {fetchBooks}