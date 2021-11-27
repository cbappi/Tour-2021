import React from 'react';
import './Course.css';


const Course = (props) => {

    //Apply Destructuring 

    const { img, Instructor, progaming, coursefee, category } = props.course || {}

    return (

        <div className="col-md-4">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-info">Category : {category}</h3>
                        <h5 class="card-title text-muted">Course Name : {progaming}</h5>
                        <h5 class="card-title text-muted">Instructor : {Instructor}</h5>
                        <h5 class="card-title text-muted">Course Fee : $ {coursefee}</h5>

                    </div>
                </div>
            </div >

        </div >

    );
};

export default Course;