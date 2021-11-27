import "./App.css";

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import AboutUs from "./components/AboutUs/AboutUs";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";

import Register from "./components/Login/Register";

import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Services from "./components/Services/Services";

import AddService from "./components/AddService/AddService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import Order from "./components/Order/Order";

//Try to push again
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute path="/booking/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path="/addservice">
              <Header />
              <AddService />
              <Footer></Footer>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <PrivateRoute path="/manageallorders">
              <Header />
              <ManageAllOrders />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <Header />
              <MyOrders />
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>



            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
