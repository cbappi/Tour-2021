import React from 'react';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Blog = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Articles></Articles>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;