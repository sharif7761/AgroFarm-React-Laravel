import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import {Link} from "react-router-dom";
import  '../../assets/css/style.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>AgroFarm</Navbar.Brand>
                <Nav className="mr-auto nav_links">
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/registration'>Register</Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;