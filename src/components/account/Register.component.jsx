import React, { useState, useContext } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // set configurations
        const configuration = {
            method: "post",
            url: "https://calendar-hongxu.herokuapp.com/register",
            data: {
                username,
                password,
            },
        };
        axios(configuration)
        .then(() => {
            setRegister(true);
/*             setCurrentUser
            window.location.href = "/"; */
        })
        .catch((error) => {
            error=new Error();
        })
    }

    return(
        <>
            <h2>Sign-up</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group key={"formBasicUsername"} controlId="Username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="username"
                        name="Username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) =>
                            setUsername(e.target.value)
                        } />
                </Form.Group>

                {/* password */}
                <Form.Group key={"formBasicPassword"} controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit"
                    onClick={(e) => handleSubmit(e)}>
                    Sign-up
                </Button>
                {/* display success message */}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
            </Form>
        </>
    )
}