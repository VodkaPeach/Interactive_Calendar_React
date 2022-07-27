import React, { useState } from 'react';
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
        })
        .catch((error) => {
            error=new Error();
        })
    }

    return(
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicUsername">
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
                <Form.Group controlId="formBasicPassword">
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
                    Submit
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