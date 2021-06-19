import React from 'react';
import Header from "./components/includes/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registration">
                <Register />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
