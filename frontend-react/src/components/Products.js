import React from 'react';
import Crops from "../assets/images/crops.jpg";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <div>
            <section className='container'>
                <div className='row my-5'>
                    <div className='col-6 col-md-3'>
                        <div className="card" >
                            <img className="card-img-top" src={ Crops } height="250" alt="Card image cap" />
                            <div className="card-body m-auto">
                                <h5 className="card-title text-center">Crops</h5>
                                <Link to="/products" className="btn btn-primary">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className="card" >
                            <img className="card-img-top" src={ Crops } height="250" alt="Card image cap" />
                            <div className="card-body m-auto">
                                <h5 className="card-title text-center">Crops</h5>
                                <Link to="/products" className="btn btn-primary">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className="card" >
                            <img className="card-img-top" src={ Crops } height="250" alt="Card image cap" />
                            <div className="card-body m-auto">
                                <h5 className="card-title text-center">Crops</h5>
                                <Link to="/products" className="btn btn-primary">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className="card" >
                            <img className="card-img-top" src={ Crops } height="250" alt="Card image cap" />
                            <div className="card-body m-auto">
                                <h5 className="card-title text-center">Crops</h5>
                                <a href="#" className="btn btn-primary">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;