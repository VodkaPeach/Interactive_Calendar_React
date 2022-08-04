import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // set configurations
        const configuration = {
            method: "post",
            url: "https://calendar-hongxu.herokuapp.com/login",
            data: {
                username,
                password,
            },
        };
        axios(configuration)
        .then((result) => {
            setLogin(true);
            cookies.set("USER", result.data.user, {path: "/"});
            cookies.set("EVENTS", result.data.events, {path: "/"});
            //console.log(result.data.events);
            window.location.href = "/";
        })
        .catch((error) => {
            error=new Error();
        })
    }
    return (
        <>
            <h2>Login</h2>
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
                    Login
                </Button>
                {/* display success message */}
                {login ? (
                    <p className="text-success">You Are logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                )}
            </Form>
        </>
    )
}