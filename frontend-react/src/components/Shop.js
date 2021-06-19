import React from 'react';
import Veg from '../assets/images/veg.jpg'
import Friuts from '../assets/images/fruits.jpg'
import Crops from '../assets/images/crops.jpg'
import {Link} from "react-router-dom";

const Shop = () => {
    return (
        <section className='container'>
            <div className='row my-5'>
                <div className='col-12 col-md-6'>
                    <div className="card" >
                        <img className="card-img-top" src={ Crops } height="250" alt="Card image cap" />
                        <div className="card-body m-auto">
                            <h5 className="card-title text-center">Crops</h5>
                            <Link to="/products" className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className="card" >
                        <img className="card-img-top" src={ Friuts } height="250" alt="Card image cap" />
                        <div className="card-body m-auto">
                            <h5 className="card-title text-center">Fruits</h5>
                            <Link to="/products" className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 offset-md-3 mt-5'>
                    <div className="card" >
                        <img className="card-img-top" src={ Veg } height="250" alt="Card image cap" />
                        <div className="card-body m-auto">
                            <h5 className="card-title text-center">Vegetables</h5>
                            <Link to="/products" className="btn btn-primary">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;