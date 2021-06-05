import React from 'react';
import Header from "./components/includes/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Route path="/login">
                <Login />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
