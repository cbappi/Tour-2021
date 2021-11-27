import React from 'react';
import Hotel from '../Hotel/Hotel';
import Surf from '../Surf/Surf';
import Resort from '../Resort/Resort';
import Travel from '../Travel/Travel';
import "./Facilities.css";

const Facilities = () => {
    return (
        <div>
            <div className="container-fluid backgroundpic py-5 ">
                <h1 className="text-center text-white mt-5 mb-5">Our Best Facilities</h1>
                <div className="container ">
                    <div className="row">
                        <Hotel></Hotel>
                        <Surf></Surf>
                        <Resort></Resort>
                        <Travel></Travel>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Facilities;