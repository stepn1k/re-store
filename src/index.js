import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import ErrorBoundry from "./components/error-boundry";
import {BookStoreProvider} from "./components/book-store-service-context";
import {BrowserRouter as Router} from "react-router-dom"
import store from "./store";
import BookStoreService from "./services/book-store-services";

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreProvider value={bookStoreService}>
                <Router>
                    <App/>
                </Router>
            </BookStoreProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById("root"));
