import React from 'react';
import {Link} from "react-router-dom";

const ProductList = () => {
    return (
        <div>
            <div className="container my-5">
                <h3>Product List</h3>
                <Link to='/add-product' className='btn btn-primary float-right my-5'>Add Product</Link>
                <hr />
                <table className="table table-hover">
                    <thead>
                    <tr className='table-primary'>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;