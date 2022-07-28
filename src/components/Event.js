import React, { useState } from "react";
import Cookies from "universal-cookie";

function Event(props) {

  return (
    <div>
      {props.name}
    </div>
  );
}

export default Event;