import React from 'react';
import Header from "./components/includes/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Products from "./components/Products";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import AdminLogin from "./components/admin/AdminLogin";

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
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route path="/admin">
                <AdminLogin />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
