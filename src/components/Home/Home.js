import React from "react";
import { Spinner } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import ServicesShort from "../ServicesShort/ServicesShort";
import SpecialPackage from "../SpecialPackage/SpecialPackage";


const Home = () => {
  const { isLoading } = useFirebase();
  if (isLoading) {
    return <Spinner animation="border" variant="success" />
  }
  return (
    <div>
      <Header></Header>
      <ServicesShort></ServicesShort>
      <SpecialPackage></SpecialPackage>
      <Facilities></Facilities>



      <Footer></Footer>
    </div>
  );
};

export default Home;
