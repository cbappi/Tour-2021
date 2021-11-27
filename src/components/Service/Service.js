import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Service.css';


const Service = ({ service }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://frightful-alien-95040.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    //Apply Destructuring 

    const { img, service_name, description,facilities, price } = service || {}


    

    return (

        <div className="col-md-4">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-info"> {service_name}</h3>
                        <h5 class="card-title text-muted"> {description}</h5>
                        <h5 class="card-title text-danger"> {facilities}</h5>
                     
                        <h5 class="card-title text-danger">Price : ${price}</h5>

                      



                    </div>
                </div>
            </div >

        </div >

    );
};

export default Service;