import React, { useState, useContext } from "react";
import { EventsContext } from "../../../context/events.context";
import axios from "axios";
import EventForm from "./EventForm.component";
import { axiosConfig } from "../../../utils/axios-config";

function Event(props) {
  const [isEditing, setIsEditing] = useState(false);
  const { events, setEvents } = useContext(EventsContext);

  function handleClick() {
    axios(
      axiosConfig("post", "delete-event", {
        id: props.id,
      })
    )
      .then(() => {
        let eventList = [...events];
        eventList = eventList.filter((event) => event._id !== props.id);
        setEvents(eventList);
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
        <EventForm
          name="Edit"
          handleCancelEdit={handleCancelEdit}
          id={props.id}
        />
      )}
    </>
  );
}

export default Event;
