import React from 'react';
import { Button } from 'react-bootstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


import emailjs from "emailjs-com";

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gmail', 'riz_template', e.target, 'user_bcnUYp976QR8voUR3tini')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

            .then(
                function (response) {
                    //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    alert("Email sent successfully!");
                },
                function (error) {
                    //console.log("FAILED", error);
                    alert("FAILED!" + error);
                }
            );

        e.target.reset()
    }

    return (

        <form onSubmit={sendEmail}>

            <FormGroup>
                <Label>Full Name</Label>
                <Input type="text" name="name" id="nameid" placeholder="Enter your full name" required />
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="emailid" placeholder="Enter email adddress" required />
            </FormGroup>

            <FormGroup>
                <Label>Subject</Label>
                <Input type="text" name="subject" id="subjectid" placeholder="Subject" required />
            </FormGroup>

            <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="message" id="messageid" rows="5" required />
            </FormGroup>

            <Button type="submit" variant="outline-warning" className="Button">
                Send message  <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </Button>
        </form>

    )
}

