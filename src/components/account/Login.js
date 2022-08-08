import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { EventsContext } from "../../context/events.context";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
  const { setEvents } = useContext(EventsContext);
  let navigate = useNavigate();

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
        setCurrentUser(result.data.user);
        setEvents(result.data.events);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="username"
            name="Username"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
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
  );
}
