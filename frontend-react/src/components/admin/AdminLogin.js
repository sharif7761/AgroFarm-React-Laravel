import React from 'react';
import {Link} from "react-router-dom";

const AdminLogin = () => {
    return (
        <div>
            <div className='col-6 offset-3 mt-5'>
                <h3>Admin Login</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Link to='/product_list'  className="btn btn-primary">Submit</Link>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;