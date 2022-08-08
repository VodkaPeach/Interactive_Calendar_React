import React, { useState, useContext } from "react";
import { EventsContext } from "../../context/events.context";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EventAdd from "./EventAdd";

function Event(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { events, setEvents} =useContext(EventsContext);
  let navigate = useNavigate();

  function handleClick() {
    const configuration = {
      method: "post",
      url: "https://calendar-hongxu.herokuapp.com/delete-event",
      data: {
        id: props.id
      },
    };
    axios(configuration)
      .then(() => {
        const eventList = events;
        eventList=eventList.filter(event=>event._id!==props.id);
        setEvents(eventList);
        navigate("/", {replace:true})
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
      <EventAdd name="Edit" id={props.id}/>
    </>

  );
}

export default Event;