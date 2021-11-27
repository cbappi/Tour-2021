import React from 'react';
import logo from "../../images/f/surfing-2.jpg";

const Surf = () => {
    return (
        <div className="col-md-6 col-sm-12">
             <img className="img-fluid" src={logo} alt=""/>
             <h3 className="text-white">Best Surfing Experience</h3>
        </div>
    );
};

export default Surf;