import React, { useState } from "react";
import axios from "axios";
import FormInput from "../form-input/form-input.component";
import { axiosConfig } from "../../utils/axios-config";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(axiosConfig("post", "register", {username, password}))
      .then(() => {
        setRegister(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <h2>Sign-up</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="User Name"
          name="Username"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Sign-up
        </button>
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </form>
    </>
  );
}
