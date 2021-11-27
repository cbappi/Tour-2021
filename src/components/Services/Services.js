import React, { useEffect, useState } from "react";
import "./Services.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Service from "../Service/Service";

const Services = () => {
    // Declare State
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('https://frightful-alien-95040.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 className="text-info py-5">Our All On Demand Services - {services.length}</h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                services.map(service =>
                                    <Service
                                        key={service.id}

                                        service={service}


                                    >

                                    </Service>)
                            }


                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;
