import React, { useEffect, useState } from "react";
import "./ServicesShort.css";

import ShortServiceDescription from "../New/ShortServiceDescription";

const ServicesShort = () => {
  // Declare State
  const [servicesshort, setServicesShort] = useState([]);


  useEffect(() => {
    fetch('https://frightful-alien-95040.herokuapp.com/addservice')
      .then((res) => res.json())
      .then((data) => setServicesShort(data));
  }, []);

  return (
    <div>
      <div className="container-fluid backgroundimg">
      <div className="container">
        <h1 className="py-5 text-white">Our Exclusive Service </h1>
        <div className="row">
          <div className="col-md-12">


            <div className="row">


              {
                //Apply Map Function
                servicesshort.map(service =>
                  <ShortServiceDescription
                    key={service.id}
                    service={service}
                    

                  >

                  </ShortServiceDescription>)
              }


            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesShort;
