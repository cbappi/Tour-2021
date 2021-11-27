import React from 'react';
import logo from "../../images/f/LUXARY-HOTEL.jpg"

const Hotel = () => {
    return (
        <div className="col-md-6 col-sm-12 mb-3">
            <img className="img-fluid" src={logo} alt=""/>
            <h3 className="text-white">Arrange Luxary Hotel</h3>
        </div>
    );
};

export default Hotel;