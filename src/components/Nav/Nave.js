import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nave = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Excellent Tours and Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>

                        <Nav.Link as={Link} to="/about">About us</Nav.Link>


                        {user?.email ?
                            <div className="row align-items-center ">
                                <div className="col-2">
                                    <Button onClick={logOut} variant="light">Logout</Button>
                                </div>
                                <div className="col-3">
                                    <Nav.Link as={Link} to="/addservice">Add new service</Nav.Link>
                                </div>
                                <div className="col-4">
                                    <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
                                </div>
                                <div className="col-3">
                                    <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                                </div>
                               



                            </div> :


                            <Nav.Link as={Link} to="/login">Login</Nav.Link>


                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>




                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Nave;