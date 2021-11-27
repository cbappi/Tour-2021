import React from 'react';





const Article = (props) => {

    //Apply Destructuring 

    const { img, title, description } = props.article || {}

    return (

        <div className="col-md-6">
            <div class="card mb-3" >

                <div>
                    <div className="card-body">

                        <div>
                            <img src={img} className="img-fluid" alt="..." />
                        </div>

                        <h3 class="card-title text-danger"> {title}</h3>
                        <h5 class="card-title text-muted">{description}</h5>


                        <button className="mt-3 btn btn-danger">Read more</button>

                    </div>
                </div>
            </div >

        </div >

    );
};

export default Article;