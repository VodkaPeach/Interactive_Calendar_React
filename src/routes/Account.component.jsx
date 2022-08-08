import React from "react";
import Login from "../components/course/account/Login";
import Register from "../components/course/account/Register";
import classes from "./Account.module.css";
import { useState } from "react";

export default function Account() {
  const [isPanelActive, setIsPanelActive] = useState(false);
  function handleGhostSignup() {
    setIsPanelActive(true);
  }
  function handleGhostSignIn() {
    setIsPanelActive(false);
  }

  return (
    <div className={classes.body}>
      <h1>Log-in/Sign-up</h1>
      <div
        className={`${classes.container}${
          isPanelActive ? " " + classes.rightPanelActive : ""
        }`}
      >
        <div className={`${classes.formContainer} ${classes.signUpContainer}`}>
          <Register />
        </div>
        <div className={`${classes.formContainer} ${classes.signInContainer}`}>
          <Login />
        </div>
        <div className={classes.overlayContainer}>
          <div className={classes.overlay}>
            <div className={`${classes.overlayPanel} ${classes.overlayLeft}`}>
              <button className={classes.ghost} onClick={handleGhostSignIn}>
                Login
              </button>
            </div>
            <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
              <button className={classes.ghost} onClick={handleGhostSignup}>
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <p>
          Created by
          <a href="https://github.com/DayDreamWake" target="_blank">
            {" "}
            DayDream
          </a>
        </p>
      </footer>
    </div>
  );
}
