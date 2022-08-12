import React, { useState, useContext } from "react";
import { EventsContext } from "../../../context/events.context";
import { UserContext } from "../../../context/user.context";
import axios from "axios";
import FormInput from "../../form-input/form-input.component";
import { axiosConfig } from "../../../utils/axios-config";

export default function EventForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const { events, setEvents } = useContext(EventsContext);
  const { currentUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(
        axiosConfig("post", `${props.name.toLowerCase()}-event`, {
          name,
          date,
          startTime,
          endTime,
          description,
          creator: currentUser,
          // for edit.
          id: props.id,
        })
      )
      .then((result) => {
        let eventList = [...events];
        if (props.name === "Add") {
          const newEvent = result.data.result;
          eventList.push(newEvent);
          props.handleAddEvent(false);
        } else {
          eventList = eventList.filter((event) => event._id !== props.id);
          eventList.push(result.data.event);
          props.handleCancelEdit();
        }
        setEvents(eventList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h2>{props.name} Event</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Event Name"
          type="name"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          label="Date"
          type="date"
          name="date"
          value={date}
          placeholder="Enter date"
          onChange={(e) => setDate(e.target.value)}
        />
        <FormInput
          label="Start Time"
          type="startTime"
          name="start time"
          value={startTime}
          placeholder="Enter start time"
          onChange={(e) => setStartTime(e.target.value)}
        />

        <FormInput
          label="End Time"
          type="endTime"
          name="end time"
          value={endTime}
          placeholder="Enter end time"
          onChange={(e) => setEndTime(e.target.value)}
        />

        <FormInput
          label="Description"
          type="description"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* submit button */}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>

        {props.name === "Add" && (
          <button type="button" onClick={() => props.handleAddEvent(false)}>
            Cancel
          </button>
        )}
        {props.name === "Edit" && (
          <button type="button" onClick={() => props.handleCancelEdit()}>
            Cancel
          </button>
        )}
      </form>
    </>
  );
}
