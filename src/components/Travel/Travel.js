import React from 'react';
import logo from "../../images/f/TRAVEL-GUIDE.jpg";

const Travel = () => {
    return (
        <div className="col-md-6 col-sm-12 ">
            <img className="img-fluid" src={logo} alt="" />
            <h3 className="text-white pb-5">Arrange Travel Guide</h3>
        </div>
    );
};

export default Travel;