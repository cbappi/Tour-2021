import React from "react";
import "./Nav.css";
import logo from "../../images/logo/PMdc.png";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";


import useAuth from "../../hooks/useAuth";


const Nav = () => {
  const { logOut, user } = useAuth();

  return (

    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-1">

            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-11">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items" >
                  <li>About us</li>
                </Link>


                <Link to="blog" className="items">
                  <li>Blog</li>
                </Link>

                {user.email ? (

                  <li onClick={logOut} className="items" >Logout</li>

                ) : (
                  <div>

                    <Link to="/login" className="items">Login</Link>



                  </div>


                )} {user.email && <span style={{ color: 'white', marginBottom: '7px' }}>Logged as {user.displayName}</span>}



              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const handleDelete = id => {

  const url = `https://frightful-alien-95040.herokuapp.com/services/${id}`;
  fetch(url, {
      method: 'DELETE'
  })
      .then(res => res.json())
      .then(data => {
          if (data.deletedCount > 0) {
              alert('Data Deleted Successfully');
              const remainingUsers = services.filter(service => service._id !== id);
              setServices(remainingUsers);
          }

      });

}


<button className="btn btn-success ms-2" onClick={() => handleDelete(service._id)}>Delete</button>
