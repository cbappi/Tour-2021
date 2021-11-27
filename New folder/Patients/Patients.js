import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import Patient from '../Patient/Patient';


const Patients = () => {
    // Declare State
    const [patients, setPatients] = useState([]);


    useEffect(() => {
        fetch("/patientData.json")
            .then((res) => res.json())
            .then((data) => setPatients(data));
    }, []);

    return (
        <div>
            <div className="container">
                <h1 className="py-5">Our Happy Patients </h1>
                <div className="row">
                    <div className="col-md-12">


                        <div className="row">


                            {
                                //Apply Map Function
                                patients.map(patient =>
                                    <Patient
                                        key={patient.id}
                                        patient={patient}

                                    >

                                    </Patient>)
                            }


                        </div>
                    </div>

                </div>

                <div className="container pb-5">
                    <h1 className="mt-5 mb-5 "> FREQUENTLY ASKED QUESTIONS</h1>



                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What about your service</Accordion.Header>
                            <Accordion.Body>
                                Our first question, what about your service and treatment system, actually this is very important to know from your higher authority.For your kind information it is really very good and we have expert team members who are dedicated to serve you, so any health issue you can directly call to our hot line
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Really your service charge too high? </Accordion.Header>
                            <Accordion.Body>
                                Our first question, what about your service and treatment system, actually this is very important to know from your higher authority.For your kind information it is really very good and we have expert team members who are dedicated to serve you, so any health issue you can directly call to our hot line
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What's your average rating from other patients?</Accordion.Header>
                            <Accordion.Body>
                                Our first question, what about your service and treatment system, actually this is very important to know from your higher authority.For your kind information it is really very good and we have expert team members who are dedicated to serve you, so any health issue you can directly call to our hot line

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What's is your per day ICU cost?</Accordion.Header>
                            <Accordion.Body>
                                Our first question, what about your service and treatment system, actually this is very important to know from your higher authority.For your kind information it is really very good and we have expert team members who are dedicated to serve you, so any health issue you can directly call to our hot line
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Do you hold any international certificte?</Accordion.Header>
                            <Accordion.Body>
                                Our first question, what about your service and treatment system, actually this is very important to know from your higher authority.For your kind information it is really very good and we have expert team members who are dedicated to serve you, so any health issue you can directly call to our hot line
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>



                </div>
            </div>
        </div>
    );
};

export default Patients;




