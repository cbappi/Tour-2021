import React, { useEffect, useState } from "react";
import Article from "../Article/Article";

const Articles = () => {
    // Declare State
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <div>
            <div className="container">
                <h1 className="text-danger py-4">WellCome to Our Blog Post</h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                articles.map(article =>
                                    <Article
                                        key={article.id}
                                        article={article}

                                    >

                                    </Article>)
                            }


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Articles;
