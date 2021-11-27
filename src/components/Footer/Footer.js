import React from "react";
import "./Footer.css";
import logo from "../../images/f/travel-1.jpg";

import { Link } from "react-router-dom";
import FooterImageOne from "../FooterImageOne/FooterImageOne";
import FooterImageTwo from "../FooterImageTwo/FooterImageTwo";

const Footer = () => {
  return (
    <div>


      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">

              <h1 className="text-success">EXCLENT TOURS AND
                AND TRAVEL SERVICE PROVIDER</h1>


              <p>Address:77-12 77th St 2nd floor, Suite 211, Jackson Heights, NY 11372, United States
              </p>
              <p>Email: info@excellenttour.com</p>
              <p>Phone: +1 918-290-1849 

              </p>


            </div>


            <div className="container">
              <div className="row">
                <div className="col-md-4 ">

                  <img  src={logo} alt="" height="250" width="360"/>


                </div>
                <div className="col-md-4 ">

                  <FooterImageOne></FooterImageOne>

                </div>
                <div className="col-md-4 ">
                  <FooterImageTwo></FooterImageTwo>



                </div>
                <div className="container text-white mt-3">
                  All the Right Reserved@ Excellent Tours and Travel Service Provider
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









  );
};

export default Footer;
