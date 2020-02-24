import React from "react";
import {Route, Switch} from "react-router-dom"
import {CartPage, HomePage} from "../pages"
import Header from "../header";
import "./app.scss"

const App = () => {
    return (
        <div className="container">
            <Header numItems={5} total={220}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
        </div>
    )
}

export default App;