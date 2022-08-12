import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { EventsContext } from "../../context/events.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import {axiosConfig} from "../../utils/axios-config";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
  const { setEvents } = useContext(EventsContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios(axiosConfig("post", "login", {username, password}))
      .then((result) => {
        setLogin(true);
        setCurrentUser(result.data.user);
        setEvents(result.data.events);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Username"
          type="username"
          name="Username"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </form>
    </>
  );
}
