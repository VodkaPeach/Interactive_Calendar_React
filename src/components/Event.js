import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
let EVENTS = cookies.get("EVENTS")

function Event(props) {
  function handleClick() {
    const configuration = {
      method: "post",
      url: "https://calendar-hongxu.herokuapp.com/delete-event",
      data: {
        id: props.id
      },
    };
    axios(configuration)
      .then((result) => {
        EVENTS=EVENTS.filter(event=>event._id!==props.id);
        cookies.set("EVENTS", EVENTS, { path: "/" });
        window.location.href = "/";
      })
      .catch((error) => {
        error = new Error();
      })
  }

  const deleteButton = (
    <button className="delBtn"
      onClick={handleClick}>
      delete
    </button>
  );

  return (
    <>
      <div>
        {props.name}
      </div>
      {deleteButton}
    </>

  );
}

export default Event;