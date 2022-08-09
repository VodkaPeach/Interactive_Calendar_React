import React, { useState, useContext } from "react";
import { EventsContext } from "../../context/events.context";
import axios from "axios";
import EventAdd from "./EventAdd";

function Event(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { events, setEvents } = useContext(EventsContext);


  function handleClick() {
    const configuration = {
      method: "post",
      url: "https://calendar-hongxu.herokuapp.com/delete-event",
      data: {
        id: props.id,
      },
    };
    axios(configuration)
      .then(() => {
        let eventList = [...events];
        eventList = eventList.filter((event) => event._id !== props.id);
        setEvents(eventList);
        //setCurrentUser("abc");
      })
      .catch((error) => {
        error = new Error();
      });
  }

  function handleEdit() {
    setIsEditing(true);
  }
  function handleCancelEdit() {
    setIsEditing(false);
  }

  const deleteButton = (
    <button className="delBtn" onClick={handleClick}>
      delete
    </button>
  );
  const EditButton = (
    <button className="editBtn" onClick={handleEdit}>
      Edit
    </button>
  );

  return (
    <>
      <div>{props.name}</div>
      {deleteButton}
      {EditButton}
      {isEditing && (
        <EventAdd
          name="Edit"
          handleCancelEdit={handleCancelEdit}
          id={props.id}
        />
      )}
    </>
  );
}

export default Event;
