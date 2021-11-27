import React from 'react';
import { Link } from 'react-router-dom';



const Patient = (props) => {

    //Apply Destructuring 

    const { img, name,testimonial, id } = props.patient || {}

    return (

        <div className="col-md-4">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-info"> {name}</h3>
                        <h5 class="card-title text-muted"> {testimonial}</h5>
                      



                    









                    </div>
                </div>
            </div >

        </div >

    );
};

export default Patient;