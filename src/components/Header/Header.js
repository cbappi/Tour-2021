import React from "react";
import { Link } from "react-router-dom";
import Nave from "../Nav/Nave";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <Nave></Nave>
      <div className="container-fluid header-area ">

        <div className="">
          <div className="row d-flex header-area align-items-center justify-content-center">

            <div className="col-md-6">
              <h2 className="text-start ps-5 text-white">
                EXCLENT TOURS AND <br />AND TRAVEL SERVICE PROVIDER
              </h2>
              <p className="text-warning text-start ps-5 mt-3">
                We will try to provide excellent tours and travel package, currently we are provding excellent discount offer but packages are too attractive
              </p>

              <Link to="about" className="items">
                <button className="mt-3 btn btn-warning">About Us</button>
              </Link>



            </div>
            <div className="col-md-6">


            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Header;
