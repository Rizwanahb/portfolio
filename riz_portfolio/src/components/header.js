import React from "react";
import Typed from "react-typed";
import {Button} from 'react-bootstrap';

const header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Rizwanan Mustafa</h1>
                <Typed className="typed-text"
                strings={["I'm a Programmer","I'm a Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                <Button variant="outline-warning">Comtact me</Button>
            </div>
            
        </div>
    )
}

export default header
